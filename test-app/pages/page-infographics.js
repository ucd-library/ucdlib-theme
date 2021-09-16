import { html, LitElement } from 'lit';
import {render, styles} from "./page-infographics.tpl.js";

import {Mixin, MainDomElement} from '../../elements/utils/index.js';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-iconset/ucdlib-iconset";
import "../../elements/ucdlib/ucdlib-icon/ucdlib-icon";


export default class PageInfographics extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement, MdElement) {

  static get properties() {
    return {

    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('page-infographics', PageInfographics);


import factoidCss from "@ucd-lib/theme-sass/main_site/factoid/_factoid.css.js"

export class MyFactoid extends LitElement {
   static styles = [factoidCss];

  static get properties() {
    return {
      href: {type: String},
      statistic: {type: String},
      title: {type:String}
    }
  }

  constructor() {
    super();
    this.href='';
    this.statistic='xxxx';
    this.title = 'Statistic';
    
  }

  firstUpdated(){
    const iconsets = this.renderRoot.querySelectorAll('ucdlib-iconset');
    Array.from(iconsets).forEach(iconset => {
      document.head.appendChild(iconset);
    });
  }

  render() {
    return html`
    <div class="factoid">
 		  <a href="${this.href}">
        <div class="factoid-bracket left">
          <div class="factoid-bracket__thing"></div>
        </div>
 			  <div class="factoid-content">
 		      <div class="factoid-content__icon">
            <slot></slot>
 			    </div>
 			    <div class="factoid-content__text">
            <p class="factoid-content__text--statistic">${this.statistic}</p>
            <p class="factoid-content__text--title">${this.title}</p>
 			    </div>
			  </div>
        <div class="factoid-bracket right">
          <div class="factoid-bracket__thing"></div>
        </div>
 		  </a>
	  </div>
        `;
  }
}

customElements.define('my-factoid', MyFactoid);