import { html, css } from 'lit';

import headingStyles from '@ucd-lib/theme-sass/1_base_html/_headings.css.js';
import messageStyles from '@ucd-lib/theme-sass/4_component/_message-area.css.js';
import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";

export function styles(){
  let customStyles = css`
    :host {
      display: block;
    }
    .message-area--closed {
      height: s0;
    }
  `;
  return [
    headingStyles,
    formStyles,
    messageStyles,
    customStyles
  ]
}

export function render() { 
  return html`
    <div class="message-area ${this.collapsed ? 'message-area--closed': ''}">
      <div class="message-area__content" data-cy="content" id="content" aria-labelledby="button">
        <h2 class="message-area__title">${this.title}</h2>
        <div class="message-area__body">
          <slot></slot>
        </div>
      </div>
      <button 
        id="button"
        class="message-area__button" 
        data-cy="button"
        aria-controls="content"
        aria-expanded="${!this.collapsed}"
        title="${this.buttonText}" 
        @click="${this._onBtnClicked}">${this.buttonText}</button>
    </div>
  `;
}