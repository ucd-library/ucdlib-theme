import { LitElement } from 'lit-element';
import render from "./ucdlib-list-accordion.tpl.js";

export default class UcdlibListAccordion extends LitElement {

  static get properties() {
    return {
      listStyle: {type: String, attribute: "list-style"},
      listItems: {type: Array, attribute: "list-items"},
      _availableStyles: {type: Array, state: true}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.listItems = [];
    this._availableStyles = ['accordion', 'faq'];
    this.listStyle = this._availableStyles[0];
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
    this._childListObserver = new MutationObserver((mutationsList, observer) => this._onChildListMutation(mutationsList, observer));
    this._childListObserver.observe(this, {childList: true});
  }

  disconnectedCallback(){
    this._childListObserver.disconnect();
    super.disconnectedCallback();
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

}

customElements.define('ucdlib-list-accordion', UcdlibListAccordion);