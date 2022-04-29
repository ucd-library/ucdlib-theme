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
 *
 ** NOTE: THE FOLLOWING PROPERTIES ARE NOT IMPLEMENTED **
 * @property {String} ignore - comma-separated list of html tags to ignore special rendering, just render as text
 *  Format: ${tag wildcard},${tag name}, ie "h*,p"
 * @property {String} exclude -  comma-separated list of html tags to excise from output
 *  Format: ${tag name},${tag name}, ie "img,p"
 * @property {String} subset - Specifies some common sets of ignores/excludes, that we use
 *  Format: "core|full|parsimonious"
*/
export default class UcdlibMd extends LitElement {

  static get properties() {
    return {
      // ignore: {type: String},
      // exclude: {type: String},
      // subset: {type: String},
      data: {type: String},
      renderer: {type: Object}
    };
  }

  mutationObserver = new MutationObserverController(this, { characterData: true, attributes: false, childList: true, subtree: true });
  
  constructor() {
    super();
    this.data = '';
    this.renderer = null;
    // this.ignore = '';
    // this.exclude = '';
    // this.subset = '';

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
  updated() {
    // config markdown renderer so elements are correctly styled
    this._setRendererOverrides();
  
    // update markdown data with the latest, either when the content changes or data property is updated
    this.data = DOMPurify.sanitize(marked.parse(this.data));
    this.renderedElement.innerHTML = this.data;
  }

  /**
   * @method _updateFromContentElementMd
   * @description Updates the local data property with the text from the ucdlib-md-content element (if it exists)
   * @private
   */
  _updateFromContentElementMd() {
    this.data = this.contentElement.innerText.trim(); // innerHTML pulls in the <!----> lit appends
  }
  
  /**
   * @method _setRendererOverrides
   * @description Updates the marked package renderer overrides to customize how element types are rendered
   * @private
   */
  _setRendererOverrides() {
    // TODO determine what subset should include/exclude
    // const self = this;
    if (!this.renderer) {
      this.renderer = {

        // example of using the ignore/exclude properties
        // heading(text, level) {
        //   let renderedContent = '';
        //   if (self.ignore && self.ignore.includes('h*') || self.ignore.includes(`h${level}`)) {
        //     // ignore formatting
        //     renderedContent = text;
        //   } else if (!self.exclude || (self.exclude && !self.exclude.includes('h*') && !self.exclude.includes(`h${level}`))) {
        //     // exclude should excise from output, so make sure it's not set for all headings or this heading level
        //     renderedContent = `<h${level}>${text}</h${level}>`
        //   }
        //   return renderedContent;
        // },
  
        list(body, ordered, start) {
          // TODO what does start control?
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
    
    marked.use({ renderer: this.renderer });
  }

}

customElements.define('ucdlib-md', UcdlibMd);
