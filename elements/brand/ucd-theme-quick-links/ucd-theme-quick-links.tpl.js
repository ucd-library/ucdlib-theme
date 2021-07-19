import { html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import normalizeStyles from "@ucd-lib/theme-sass/normalize.css.js";
import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";
import menuStyles from "@ucd-lib/theme-sass/2_base_class/_misc.css.js";
import subNavToggleStyles from "@ucd-lib/theme-sass/4_component/_submenu-toggle.css";
import quickLinkStyles from "@ucd-lib/theme-sass/4_component/_nav-quick.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [
    //normalizeStyles,
    //formStyles,
    menuStyles,
    subNavToggleStyles,
    quickLinkStyles,
    elementStyles
  ];
}

export function render() { 
return html`
  <div class="quick-links">
    <button 
      class="quick-links__title" 
      aria-controls="quick-links" 
      aria-expanded="false" 
      aria-label="Toggle ${this.title} Menu">
      ${this.title}<span class="submenu-toggle"><span class="submenu-toggle__icon">+</span></span>
    </button>
    <nav id="quick-links" class=${classMap(this._getNavClasses())} aria-label="Quick Links Menu">
    <ul class="menu">
      ${this._links.map(link => html`
        <li>
          ${link.href ? html`
            <a href="${link.href}">${link.iconSlot ? html`<slot name=${link.iconSlot}></slot>`:html``}${link.text}</a>
          ` : html`
            <a>${link.iconSlot ? html`<slot name=${link.iconSlot}></slot>`:html``}${link.text}</a>
          `}
        </li>
      `)}
    </ul>
    </nav>
    
  </div>

`;}