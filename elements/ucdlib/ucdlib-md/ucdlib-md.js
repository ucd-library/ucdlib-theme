import { LitElement, css } from 'lit';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { UcdlibMdContent } from './ucdlib-md-content.js';
import { MutationObserverController } from '../../utils/controllers/mutation-observer.js';

/**
 * @class UcdlibMd
 * @classdesc Component class for translating/displaying markdown into sanitized html
 * @property {String} data - text to hold markdown code
 * @property {Object} renderer - an object holding element functions to override the default markdown behavior 
 *  Format: reference the Marked Renderer documentation at https://marked.js.org/using_pro#renderer
 * @property {Object} use - marked use object
 * @property {Object} options - marked options object
*/
export default class UcdlibMd extends LitElement {

  static get properties() {
    return {
      // ignore: {type: String},
      // exclude: {type: String},
      // subset: {type: String},
      data: {type: String},
      renderer: {type: Object},
      use: {type: Object},
      options: {type: Object}
    };
  }

  mutationObserver = new MutationObserverController(this, { characterData: true, attributes: false, childList: true, subtree: true });
  
  constructor() {
    super();
    this.data = '';
    this.renderer = null;

    this.renderedElement = document.createElement('div');
    this.renderedElement.setAttribute('rendered', '');
  }

  createRenderRoot() {
    this.appendChild(this.renderedElement);
    return this;
  }

  _onChildListMutation() {
    if( this.contentElement ) return;

    // query children for ucdlib-md-content
    // wire up listener if it exists
    this.contentElement = this.querySelector('ucdlib-md-content');
    if( this.contentElement ) {
      this.contentElement.addEventListener('content-updated', this._updateFromContentElementMd.bind(this));
    }
  }

  disconnectedCallback() {
    if( this.contentElement ) {
      this.contentElement.removeEventListener('content-updated', this._updateFromContentElementMd.bind(this));
    }
  }

  /**
   * @method updated
   * @description Lit method called when element is updated.
   */
  updated(changedProperties) {
    // config markdown renderer so elements are correctly styled
    this._setRendererOverrides();
  
    // only process markdown if the data property actually changed
    if (changedProperties.has('data')) {
      const parsedData = DOMPurify.sanitize(marked.parse(this.data));
      this.renderedElement.innerHTML = parsedData;
    }
  }

  /**
   * @method _updateFromContentElementMd
   * @description Updates the local data property with the text from the ucdlib-md-content element (if it exists)
   * @private
   */
  _updateFromContentElementMd() {
    // remove whitespace between lines
    this.data = this.contentElement.innerText.split('\n').map(line => line.trim()).join('\n');
  }
  
  /**
   * @method _setRendererOverrides
   * @description Updates the marked package renderer overrides to customize how element types are rendered
   * @private
   */
  _setRendererOverrides() {
    if (!this.renderer) {
      this.renderer = {
        list(body, ordered, start) {
          let renderedContent = '';
          if (ordered) {
            renderedContent = `<ul class="list--multilevel">${body}</ul>`;
          } else {
            renderedContent = `<ul class="list--bordered">${body}</ul>`;
          }
          return renderedContent;
        }
      };
    }

    if (!this.options) {
      this.options = { breaks: true, gfm: true };
    }

    if (!this.use) {
      this.use = { renderer: this.renderer };
    }

    marked.use(this.use);
    marked.setOptions(this.options);
  }

}

customElements.define('ucdlib-md', UcdlibMd);
