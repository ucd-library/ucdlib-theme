import { html, css, unsafeCSS } from 'lit';

import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import listCss from "@ucd-lib/theme-sass/2_base_class/_lists.css.js";

//how do we determine what other styles to include in this element?
import linkCss from "@ucd-lib/theme-sass/1_base_html/_links.css.js";

export function styles() {
  window.steve = listCss;
  let customStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
  `;
  return [
    unsafeCSS(listCss.cssText.replaceAll(":root", ":host")), 
    linkCss, 
    customStyles
  ]
}

export function render() { 
return html`
<ul class="list--${this.listStyle}">
${this.listItems.map((item, index) => html`
  ${this._isTitle(index) ? html`
    <li @click=${e => this.toggleItemVisiblity(index, false)}>${item}</li>
  ` : html`
    <li ?hidden="${!this.itemIsVisible(index, false)}">${unsafeHTML(item)}</li>
  `}
  
`) }
</ul>
`;}