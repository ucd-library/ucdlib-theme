import { html, css } from 'lit';

import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";
import breadcrumbsStyles from "@ucd-lib/theme-sass/";


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