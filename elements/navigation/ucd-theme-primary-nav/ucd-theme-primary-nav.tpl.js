import { html, css } from 'lit';

import menuStyles from "@ucd-lib/theme-sass/2_base_class/_misc.css.js"
import primaryNavStyles from "@ucd-lib/theme-sass/4_component/_nav-primary.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [
    menuStyles,
    primaryNavStyles,
    elementStyles
  ];
}

export function render() { 
return html`
<nav 
  id=${this._classPrefix}
  class="${this._classPrefix} ${this._classPrefix}--superfish ${this.styleModifier ? `${this._classPrefix}--${this.styleModifier}` : ""}" 
  aria-label="Main Menu">
  <ul class="menu">
    ${this.navItems.map(navItem => this._renderNavItem(navItem))}
  </ul>
</nav>
`;}