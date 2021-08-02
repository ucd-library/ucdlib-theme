import { html, css } from 'lit';

import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";
import popupStyles from "@ucd-lib/theme-sass/4_component/_search-popup.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [
    formStyles,
    popupStyles,
    elementStyles];
}

export function render() { 
return html`
<button 
  class="search-popup__open ${this.opened ? 'search-popup__open--close' : ''}" 
  @click=${this._onBtnClick}>
  <span class="search-popup__open-icon">${this.buttonText}</span>
</button>
<div class="search-popup ${this.opened ? 'is-open' : ''}">
  ${this._defaultForm ? html`
    <div class="search-form">
      <slot></slot>
    </div>
  ` : html`
    <slot></slot>
  `}

</div>

`;}