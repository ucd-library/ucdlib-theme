import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-image-gallery.tpl.js";

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';

/**
 * @class UcdThemeImageGallery
 * @classdesc Component class for displaying an image gallery.
 * Any direct img children will be displayed in the gallery.
 *  PatternLab Url:
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-image-gallery
 *    - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-image-gallery-poster
 * 
 * @property {String} modifier - any class modifier(s) ... e.g. 'poster'
 * 
 * @example
 * // multiple images. If no 'big-src' is passed, the lightbox will display the src image
 * // width and height are required
 * html`
 *  <ucd-theme-image-gallery>
 *    <img 
 *      src="http://placehold.it/352x198" 
 *      alt="16x9 Image" 
 *      width="352" 
 *      height="198" 
 *      big-src="http://placehold.it/2000x1125" 
 *      big-width="2000" 
 *      big-height="1125" />
 *    <img 
 *      src="http://placehold.it/352x198" 
 *      width="352"
 *      height="198" />
 *  </ucd-theme-image-gallery>
 * `
 * // A single 'poster' image
 * html`
 * <ucd-theme-image-gallery modifier="poster">
 *    <img 
 *      src="http://placehold.it/352x198" 
 *      alt="16x9 Image" 
 *      width="352" 
 *      height="198" 
 *      big-src="http://placehold.it/2000x1125" 
 *      big-width="2000" 
 *      big-height="1125" />
 *    <img 
 * </ucd-theme-image-gallery>
 * `
 */
export default class UcdThemeImageGallery extends LitElement {

  static get properties() {
    return {
      modifier: {type: String},
      _images: {attribute: false, state: true},
      
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.modifier = "";
    this._images = [];
  }

  /**
   * @method connectedCallback
   * @description Native lifecycle method called when element is connected
   */
  connectedCallback(){
    super.connectedCallback();
    this._childListObserver = new MutationObserver(
      (mutationsList, observer) => this._onChildListMutation(mutationsList, observer));
    this._childListObserver.observe(this, {childList: true});
  }
  
  /**
   * @method disconnectedCallback
   * @description Native lifecycle method called when element is disconnected
   */
  disconnectedCallback(){
    this._childListObserver.disconnect();
    super.disconnectedCallback();
  }

  /**
   * @method _onChildListMutation
   * @description Attached to self, responds to changes in children
   */
  _onChildListMutation() {
    let images = [];
    Array.from(this.children).forEach((child, index) => {
      if (child.tagName !== "IMG")  return;
      child.setAttribute('slot', 'image-index-'+index);

      const msrc = child.getAttribute('src');
      const title = child.getAttribute('title');
      const bigImage = {
        src: this._getImgAttr(child, 'src'),
        width: this._getImgAttr(child, 'width'),
        height: this._getImgAttr(child, 'height'),
      };

      for (const attr of ['width', 'height']) {
        if ( !bigImage[attr] ) {
          console.warn(`Skipping image. Missing '${attr}' attribute`);
          return;
        }
      }

      images.push({
        child,
        title,
        bigImage,
        msrc,
        imageIndex: index,
        slotName:'image-index-'+index});
    });

    this._images = images;
  }

  /**
   * @method _onClick
   * @description Bound to  each <a> tag surrounding image slots
   * @param {Event} e Click event
   */
  _onClick(e){
    e.preventDefault();
    this.openLightBox(e.target.getAttribute('image-index'));
  }

  /**
   * @method _dispatchOpenEvent
   * @description Fires 'open-lightbox' custom event.
   * @param {Number} index - Index of focused image.
   */
  _dispatchOpenEvent(index){
    let e = new CustomEvent('open-lightbox', {
      detail: { 
        message: 'Lightbox has been opened for a gallery image', 
        imageIndex: index,
        image: this._images[index]
      },
      bubbles: true,
      composed: true });
    this.dispatchEvent(e);
  }

  /**
   * @method _getImgAttr
   * @description Utility class for extracting an attribute from child image
   * @param {Object} ele - DOM reference to an img child
   * @param {*} attr - An element attribute
   * @returns {String}
   */
  _getImgAttr(ele, attr){
    return ele.getAttribute(`big-${attr}`) ? ele.getAttribute(`big-${attr}`) : ele.getAttribute(attr);
  }

  /**
   * @method openLightBox
   * @description Opens a lightbox for the specified gallery image.
   * @param {Number} index - Image index
   * @param {Boolean} dispatchEvent - Whether to fire 'open-lightbox' event
   */
  openLightBox(index=0, dispatchEvent=false){
    const dialog = this.shadowRoot.getElementById('light-box');
    const items = this._images.map(image => {
      return {
        src: image.bigImage.src,
        w: image.bigImage.width,
        h: image.bigImage.height,
        title: image.title,
        msrc: image.msrc
      };
    });

    const thumbnail = this._images[index].child;
    const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
    const rect = thumbnail.getBoundingClientRect();
    const options = {
      index,
      bgOpacity: 0.95,
      showHideOpacity: true,
      shareEl: false,
      getThumbBoundsFn() {
        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
      }
    };

    const lightBox = new PhotoSwipe(dialog, PhotoSwipeUI, items, options);
    lightBox.init();
    if ( dispatchEvent ) this._dispatchOpenEvent(index);
  }

  /**
   * @method _styleModifer
   * @description Converts modifier property into a class string
   * @returns {String} Class modifiers for gallery component
   */
  _styleModifer(){
    if ( !this.modifier ) return "";

    let classes = this.modifier.split(" ").map(m => `gallery--${m}`);
    classes = classes.join(" ");
    return classes;
  }

}

customElements.define('ucd-theme-image-gallery', UcdThemeImageGallery);