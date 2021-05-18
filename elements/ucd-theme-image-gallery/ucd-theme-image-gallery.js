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
      const title = child.getAttribute('title');
      const bigImage = {
        src: this._getImgAttr(child, 'src'),
        width: this._getImgAttr(child, 'width'),
        height: this._getImgAttr(child, 'height'),
      };

      images.push({
        child,
        title,
        bigImage,
        msrc,
        imageIndex: index,
        slotName:'image-index-'+index});
    });

    this._images = images;
    console.log(images);
  }

  _onClick(e){
    e.preventDefault();
    console.log(e);
    this.openLightBox(e.target.getAttribute('image-index'));


  }

  _getImgAttr(ele, attr){
    return ele.getAttribute(`big-${attr}`) ? ele.getAttribute(`big-${attr}`) : ele.getAttribute(attr);
  }

  openLightBox(index=0){
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

    console.log(dialog, items, options);
    const lightBox = new PhotoSwipe(dialog, PhotoSwipeUI, items, options);
    lightBox.init();
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