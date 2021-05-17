import { LitElement } from 'lit';
import {render, styles} from "./ucd-theme-image-gallery.tpl.js";

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';

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
      const bigImage = {
        src: child.getAttribute('big-src'),
        width: child.getAttribute('big-width'),
        height: child.getAttribute('big-height')
      };

      images.push({
        child,
        bigImage,
        msrc,
        slotName:'image-index-'+index});
    });

    this._images = images;
    console.log(images);
  }

  _onClick(e){
    e.preventDefault();

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