import { html, css } from 'lit';

import mediaStyles from "@ucd-lib/theme-sass/1_base_html/_media.css.js";
import galleryStyles from "@ucd-lib/theme-sass/4_component/_gallery.css.js";

import photoSwipeCss from "photoswipe/dist/photoswipe.css";
import photoSwipeSkinCss from "photoswipe/dist/default-skin/default-skin.css";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .gallery a:after {
      background: url("data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 32 32' enable-background='new 0 0 32 32' xml:space='preserve'><path fill='%23FFFFFF' d='M0,0h32v32H0V0z M18.446,15.876l6.164-6.164l2.942,2.94V4.447h-8.205l2.942,2.943l-6.164,6.164 L18.446,15.876z M13.554,16.124L7.39,22.288l-2.942-2.94v8.205h8.205L9.71,24.609l6.164-6.164L13.554,16.124z'/></svg>");
    }
    ::slotted(img){
      pointer-events: none;
    }
  `;
  mediaStyles.cssText = mediaStyles.cssText.replaceAll('img', '::slotted(img)');

  return [
    mediaStyles,
    galleryStyles,
    elementStyles
  ];
}

export function render() { 
return html`
  <style>
    ${photoSwipeCss}
    ${photoSwipeSkinCss}
  </style>
  <div class="gallery ${this._styleModifer()}">
    ${this._images.map((img, i) => html`
      <div class="gallery__item">
        <a @click="${this._onClick}" image-index="${img.imageIndex}" href="#">
          <slot name="${img.slotName}"></slot>
        </a>
      </div>
    `)}
  </div>

<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div id="light-box" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="pswp__bg"></div>
  <div class="pswp__scroll-wrap">
    <div class="pswp__container">
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
      <div class="pswp__item"></div>
    </div>
    <div class="pswp__ui pswp__ui--hidden">
      <div class="pswp__top-bar">
        <div class="pswp__counter"></div>
        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
        <button class="pswp__button pswp__button--share" title="Share"></button>
        <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
        <div class="pswp__preloader">
          <div class="pswp__preloader__icn">
            <div class="pswp__preloader__cut">
              <div class="pswp__preloader__donut"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
        <div class="pswp__share-tooltip"></div>
      </div>
      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
      </button>
      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
      </button>
      <div class="pswp__caption">
        <div class="pswp__caption__center"></div>
      </div>
    </div>
  </div>
</div>
`;}