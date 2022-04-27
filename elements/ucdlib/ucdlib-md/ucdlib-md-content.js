import { LitElement } from 'lit';
import { MutationObserverController } from '../../utils/controllers/mutation-observer.js';

/**
 * @class UcdlibMdContent
 * @classdesc Component class for declaritively wrapping markdown and translating into sanitized html
*/
export default class UcdlibMdContent extends LitElement {

  static get properties() {
    return {};
  }
  
  mutationObserver = new MutationObserverController(this, { characterData: true, attributes: false, childList: true, subtree: true });

  constructor() {
    super();
  }

  createRenderRoot() {
    this.style.display = 'none';
    return this;
  }

  _onChildListMutation() {
    // send event to ucdlib-md
    this.dispatchEvent(new CustomEvent('content-updated', { bubbles: true }));
  }
}

customElements.define('ucdlib-md-content', UcdlibMdContent);