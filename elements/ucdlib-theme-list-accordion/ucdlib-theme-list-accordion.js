import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-theme-list-accordion.tpl.js";

export default class UcdlibThemeListAccordion extends LitElement {

  static get properties() {
    return {
      listStyle: {type: String, attribute: "list-style"},
      listItems: {type: Array, attribute: "list-items"},
      _availableStyles: {type: Array, state: true},
      _visibleItems: {type: Set, state: true}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.listItems = [];
    this._availableStyles = ['accordion', 'faq'];
    this.listStyle = this._availableStyles[0];
    this._visibleItems = new Set();
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
        message: 'Visiblity of a list item has changed', 
        isVisible: this.itemIsVisible(index, false),
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
    if ( this._visibleItems.has(pairIndex) ){
      this._visibleItems.delete(pairIndex)
    } else {
      this._visibleItems.add(pairIndex);
    }
    this.requestUpdate();
  }

  itemIsVisible(index, isPairIndex=True) {
    let pairIndex = isPairIndex ? index : Math.floor(index / 2);
    return this._visibleItems.has(pairIndex);
  }

  _onChildListMutation() {
    let listItems = [];
    for (const child of this.children) {
      if (child.tagName === "LI") {
        listItems.push(child.innerHTML)
      }
    }
    if (listItems.length > 0) this.listItems = listItems;
  }

  _isTitle(i) {
    return i % 2 ? false : true;
  }

  _isContent(i){
    return !this._isTitle(i);
  }

}

customElements.define('ucdlib-theme-list-accordion', UcdlibThemeListAccordion);