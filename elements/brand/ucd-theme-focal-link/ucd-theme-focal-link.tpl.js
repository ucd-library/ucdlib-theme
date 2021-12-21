import { html, css } from 'lit';

import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";
import focalLinkStyles from "@ucd-lib/theme-sass/4_component/_focal-link.css.js";
import vertLinkStyles from "@ucd-lib/theme-sass/4_component/_vertical-link.css.js";


export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [
    formStyles,
    focalLinkStyles,
    vertLinkStyles,
    elementStyles];
}

export function render() { 
return html`

`;}