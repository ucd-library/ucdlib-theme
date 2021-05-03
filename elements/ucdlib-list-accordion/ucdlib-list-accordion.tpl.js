import { html } from 'lit-element';
import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';
import listCss from "@ucd-lib/theme-sass/2_base_class/_lists.scss";

export default function render() { 
return html`

<style>
  ${listCss}
  :host {
    display: block;
  }
</style>  
<ul class="list--${this.listStyle}">
${this.listItems.map((item, index) => html`
  <li>${unsafeHTML(item)}</li>
`) }
</ul>
`;}