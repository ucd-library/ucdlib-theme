import { LitElement } from 'lit';
import {Mixin, MutationObserverElement} from '../../utils/index.js';

/**
 * @class UcdlibPages
 * @description similar to the old iron-pages element, allows you to control which element is visible
 * based on child index or tag attribute
 * @property {String} selected - Denotes which child is currently displayed.
 *  If numeric, refers to index of child. Else, refers to child id.
 *  If attrForSelected is used, refers to the value of that attribute instead of id.
 * @property {String} attrForSelected - Use a custom attribute instead of id for matching 'selected'
 * @property {String} selectedAttribute - Will assign attribute to selected child.
 * 
 * <ucdlib-pages selected="page2" attr-for-selected="id">
 *   <div id="page1">Test 1</div>
 *   <div id="page2">Test 2</div>
 * </ucdlib-pages>
 */
export default class UcdlibPages extends Mixin(LitElement)
  .with(MutationObserverElement) {

  static get properties() {
    return {
      selected : {type: String},
      attrForSelected : {
        attribute: 'attr-for-selected',
        type: String
      },
      selectedAttribute : {
        attribute: 'selected-attribute',
        type: String
      }
    };
  }

  constructor() {
    super();
  }

  /**
   * @method createRenderRoot
   * @description override createRenderRoot, no need for shadowdom
   * 
   * @returns {Element}
   */
  createRenderRoot() {
    return this;
  }

  updated(props) {
    if( props.has('attrForSelected') || props.has('selectedAttribute') || props.has('selected') ) {
      this._onChange();
    }
  }
  
  /**
   * @method _onChildListMutation
   * @description called when children change via MutationObserverElement
   */
  _onChildListMutation() {
    this._onChange();
  }

  /**
   * @method _onChange
   * @description update visibility 
   */
  _onChange() {
    let attr = this.attrForSelected || 'id';
    let selected = 0;

    // find what the selected attribute is
    if( this.selected !== undefined || this.selected !== null ) {
      if( typeof this.selected === 'string' && /^\d+$/.test(this.selected) ) {
        selected = parseInt(this.selected);
      } else {
        selected = this.selected;
      }
    }

    // loop through and hide/show children
    let found = this._updateVisibility(selected, attr);

    // if nothing found, check fallback selection
    if( !found && this.fallbackSelection ) {
      if( typeof this.selected === 'string' && this.selected.match(/\d+/) ) {
        selected = parseInt(this.fallbackSelection);
      } else {
        selected = this.fallbackSelection;
      }

      found = this._updateVisibility(selected, attr);
    } 

    if( !found ) {
      console.warn('ucdlib-pages was unable match: ', selected);
    }
  }

  /**
   * @method _updateVisibility
   * @description run update loop based on selected value and attribute to use if
   * selected is not a number.
   * 
   * @param {String|Number} selected 
   * @param {String} attr 
   * @returns {Boolean}
   */
  _updateVisibility(selected, attr) {
    let children = [... this.children];
    let found = false;
    let useIndex = (typeof selected === 'number');
    let val;

    for( let i = 0; i < children.length; i++ ) {
      if( useIndex ) {
        this._select((i === selected), children[i], this.selectedAttribute);
        if( !found ) found = (i === selected);
        continue;
      }

      val = children[i].getAttribute(attr);
      this._select((val === selected), children[i], this.selectedAttribute);
      if( !found ) found = (val === selected);
    }

    return found;
  }

  /**
   * @method _select
   * @description select attributes
   * 
   * @param {Boolean} value 
   * @param {Element} child 
   * @param {String} attribute 
   */
  _select(value, child, attribute) {
    if( value ) {
      if( attribute ) child.setAttribute(attribute, attribute);
      else child.style.display = 'block';
    } else {
      if( attribute ) child.removeAttribute(attribute, attribute);
      else child.style.display = 'none';
    }
  }

}

customElements.define('ucdlib-pages', UcdlibPages);