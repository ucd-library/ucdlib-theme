import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-theme-list-accordion.tpl.js";

export default class UcdlibThemeListAccordion extends LitElement {

  static get properties() {
    return {
      listStyle: {type: String, attribute: "list-style"},
      listItems: {type: Array, attribute: "list-items"},
      _availableStyles: {type: Array, state: true},
      _expandedItems: {type: Set, state: true}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.listItems = [];
    this._availableStyles = ['accordion', 'faq'];
    this.listStyle = this._availableStyles[0];
    this._expandedItems = new Set();
  }

  static get styles() {
    return styles();
  }

  updated(props){
    if ( props.has("listStyle") ) {
      if ( !this._availableStyles.includes(this.listStyle.toLowerCase()) ) {
        this.listStyle = this._availableStyles[0];
      }
    }
  }

  connectedCallback(){
    super.connectedCallback();
    this._childListObserver = new MutationObserver(
      (mutationsList, observer) => this._onChildListMutation(mutationsList, observer));
    this._childListObserver.observe(this, {childList: true});
  }

  _onItemClick(e){
    let index = parseInt(e.target.getAttribute("item-index"));
    this.toggleItemVisiblity(index, false);
    this._dispatchItemToggleEvent(index);
  }

  _dispatchItemToggleEvent(index) {
    let e = new CustomEvent('item-toggle', {
      detail: { 
        message: 'A list item has been expanded or collapsed', 
        isExpanded: this.itemIsExpanded(index, false),
        listItemIndex: index,
        listItemPairIndex: Math.floor(index / 2)
       },
      bubbles: true,
      composed: true });
  
    this.dispatchEvent(e);
  }

  disconnectedCallback(){
    this._childListObserver.disconnect();
    super.disconnectedCallback();
  }

  toggleItemVisiblity(index, isPairIndex=True){
    let pairIndex = isPairIndex ? index : Math.floor(index / 2);
    if ( this._expandedItems.has(pairIndex) ){
      this._expandedItems.delete(pairIndex)
    } else {
      this._expandedItems.add(pairIndex);
    }
    this.requestUpdate();
  }

  itemIsExpanded(index, isPairIndex=True) {
    let pairIndex = isPairIndex ? index : Math.floor(index / 2);
    return this._expandedItems.has(pairIndex);
  }

  _onChildListMutation() {
    let listItems = [];
    Array.from(this.children).forEach((child, index) => {
      if (child.tagName !== "LI")  return;
      // child.setAttribute('slot', 'list-item-'+index);
      
      if( !this._isContent(index) ) {
        let div = document.createElement('div');
        div.setAttribute('slot', 'list-item-'+index);

        Array.from(child.children).forEach((subchild, index) => {
          child.remove(subchild);
          div.appendChild(subchild);
        });

        child.appendChild(div);

      }
      listItems.push({child, text: child.innerHTML, slotName:'list-item-'+index});
    });
    this.listItems = listItems;
  }

  _isTitle(i) {
    return i % 2 ? false : true;
  }

  _isContent(i){
    return !this._isTitle(i);
  }

}

customElements.define('ucdlib-theme-list-accordion', UcdlibThemeListAccordion);