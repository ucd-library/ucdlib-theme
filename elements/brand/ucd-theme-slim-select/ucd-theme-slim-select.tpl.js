import { html, css } from 'lit';

import formStyles from "@ucd-lib/theme-sass/2_base_class/_forms.css.js";
import slimSelectStyles from "@ucd-lib/theme-sass/slim-select.css.js"
import selectStyles from "@ucd-lib/theme-sass/4_component/_slim-select.css.js";



export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [
    formStyles,
    slimSelectStyles,
    selectStyles,
    elementStyles];
}

export function render() { 
return html`

`;}