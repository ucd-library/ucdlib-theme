import { html, css } from 'lit';

import mediaStyles from "@ucd-lib/theme-sass/1_base_html/_media.css.js";
import galleryStyles from "@ucd-lib/theme-sass/4_component/_gallery.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .gallery a:after {
      background: url("data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='32px' height='32px' viewBox='0 0 32 32' enable-background='new 0 0 32 32' xml:space='preserve'><path fill='%23FFFFFF' d='M0,0h32v32H0V0z M18.446,15.876l6.164-6.164l2.942,2.94V4.447h-8.205l2.942,2.943l-6.164,6.164 L18.446,15.876z M13.554,16.124L7.39,22.288l-2.942-2.94v8.205h8.205L9.71,24.609l6.164-6.164L13.554,16.124z'/></svg>");
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
  <div class="gallery ${this._styleModifer()}">
    ${this._images.map((img, i) => html`
      <div class="gallery__item">
        <a @click="${this._onClick}">
          <slot name="${img.slotName}"></slot>
        </a>
      </div>
    `)}
  </div>
`;}