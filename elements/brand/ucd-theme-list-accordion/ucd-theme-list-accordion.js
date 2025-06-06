import { LitElement } from 'lit';
import { render, styles } from './ucd-theme-list-accordion.tpl.js';
import { MutationObserverController, WaitController } from '../../utils/controllers';

/**
 * @class UcdThemeListAccordion
 * @classdesc Component class for displaying lists with accordion collapse/expand functionality.
 * Pattern Lab Url:
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-accordion
 *  - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-faq
 *
 * @property {String} list-style - 'accordion' or 'faq'
 *
 * @example
 * html`
 *  <ucd-theme-list-accordion>
 *    <li>Click me to expand div below</li>
 *    <li>I will be toggled when the above item is clicked.</li>
 *    <li>The direct children of this element must be divs</li>
 *    <li>But you can pass through <a href="#">rich text</a> within.</li >
 *  </ucd-theme-list-accordion>
 * `
 */
export default class UcdThemeListAccordion extends LitElement {
  static get properties() {
    return {
      listStyle: { type: String, attribute: 'list-style' },
      _listItems: { attribute: false, state: true },
      _availableStyles: { attribute: false, state: true },
      _expandedItems: { attribute: false, state: true },
      role: {type: String, reflect: true}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.mutationObserver = new MutationObserverController(this);
    this._listItems = [];
    this._availableStyles = ['accordion', 'faq'];
    this.listStyle = this._availableStyles[0];
    this._expandedItems = new Set();
  }

  static get styles() {
    return styles();
  }

  /**
   * @method willUpdate
   * @private
   * @description Lit lifecycle method called right before an element updates
   * @param {Map} props - properties that have changed
   */
  willUpdate(props) {
    if (props.has('listStyle')) {
      if (!this._availableStyles.includes(this.listStyle.toLowerCase())) {
        this.listStyle = this._availableStyles[0];
      }
    }
  }

  /**
   * @method toggleItemVisiblity
   * @description Expands/collapses an item
   * @param {Number} index - The index of the item to expand/collapse (zero indexed)
   * @param {Boolean} isPairIndex - The type of index
   *  If false, use the flattened index of the _listItems array:
   *    [q1, a1, q2, a2, q3, a3...]
   *  If true, treats the title and content (or question and answer) as a pair:
   *    0: first pair, 1: second pair, etc
   * @param {Boolean} dispatchEvent - Will dispatch custom 'item-toggle' event
   */
  async toggleItemVisiblity(index, isPairIndex = true, dispatchEvent = false) {
    let pairIndex = isPairIndex ? index : Math.floor(index / 2);
    if (this._expandedItems.has(pairIndex)) {
      this._expandedItems.delete(pairIndex);
    } else {
      this._expandedItems.add(pairIndex);
    }

    this.requestUpdate();
    await this.updateComplete;
    if (dispatchEvent) this._dispatchItemToggleEvent(index);
  }

  /**
   * @method itemIsExpanded
   * @description Returns true if item is expanded
   * @param {Nunber} index - The index of the item
   * @param {Boolean} isPairIndex - Does the index param refer to Q/A pair or the flattened index?
   * @returns {Boolean}
   */
  itemIsExpanded(index, isPairIndex = true) {
    let pairIndex = isPairIndex ? index : Math.floor(index / 2);
    return this._expandedItems.has(pairIndex);
  }

  /**
   * @method _onTitleClick
   * @description Attached to item title
   * @private
   * @param {Event} e
   */
  _onTitleClick(e) {
    let index = parseInt(e.target.getAttribute('item-index'));
    this.toggleItemVisiblity(index, false, true);
  }

  /**
   * @method _onTitleKeyUp
   * @description Attached to item title
   * @private
   * @param {Event} e
   */
  _onTitleKeyUp(e) {
    if (e.which !== 13) return;
    let index = parseInt(e.target.getAttribute('item-index'));
    this.toggleItemVisiblity(index, false, true);
  }

  /**
   * @method _onChildListMutation
   * @private
   * @description Attached to self, responds to changes in children
   */
  _onChildListMutation() {
    let listItems = [];
    Array.from(this.children).forEach((child, index) => {
      child.setAttribute('slot', 'list-item-' + index);
      if (this.listStyle === 'faq') {
        child.style.display = 'inline';
      }

      listItems.push({ child, slotName: 'list-item-' + index });
    });
    this._listItems = listItems;
  }

  /**
   * @method _dispatchItemToggleEvent
   * @description Fires 'item-toggle' custom event when user expands/collapses an item
   * @private
   * @param {Number} index - The index of the item in the _listItems array property
   */
  _dispatchItemToggleEvent(index) {
    let e = new CustomEvent('item-toggle', {
      detail: {
        message: 'A list item has been expanded or collapsed',
        isExpanded: this.itemIsExpanded(index, false),
        item: {
          title: this._listItems[index],
          content: this._listItems[index + 1],
        },
        listItemIndex: index,
        listItemPairIndex: Math.floor(index / 2),
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(e);
  }

  /**
   * @method _isTitle
   * @description Item is title or question.
   * @private
   * @param {Number} i - Array index.
   * @returns  {Boolean}
   */
  _isTitle(i) {
    return i % 2 ? false : true;
  }

  /**
   * @method _isContent
   * @description Item is content or answer.
   * @private
   * @param {Number} i - Array index.
   * @returns {Boolean}
   */
  _isContent(i) {
    return !this._isTitle(i);
  }
}

customElements.define('ucd-theme-list-accordion', UcdThemeListAccordion);
