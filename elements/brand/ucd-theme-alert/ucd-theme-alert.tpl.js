import { html, css } from 'lit';
import alertStyles from '@ucd-lib/theme-sass/4_component/_messaging-alert.css.js';

export function styles() {
  let customCss = css`
    :host {
      display: block;
    }
  `;
  return [
    alertStyles,
    customCss
  ]
}

export function render() { 
return html` 
<div class="alert ${this._styleModifier}">
  <slot></slot>
</div>

`;}