import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import normalizeStyles from "@ucd-lib/theme-sass/normalize.css.js";
import headerStyles from "@ucd-lib/theme-sass/1_base_html/_headings.css.js";
import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";
import menuStyles from "@ucd-lib/theme-sass/2_base_class/_misc.css.js";
import subNavStyles from "@ucd-lib/theme-sass/4_component/_nav-sub.css.js";
import subNavToggleStyles from "@ucd-lib/theme-sass/4_component/_submenu-toggle.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    ul.sub-nav__menu ul {
      display: none;
      overflow-y: hidden;
      visibility: visible;
      height: auto;
      border-top-width: 0px;
      border-bottom-width: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
    }
    ul.sub-nav__menu ul.is-open {
      display: block;
    }
    a {
      cursor: pointer;
    }
  `;

  return [
    normalizeStyles,
    headerStyles,
    formStyles,
    menuStyles,
    subNavStyles,
    subNavToggleStyles,
    elementStyles
  ];
}

export function render() {
  return html`
  <style>
    ul.sub-nav__menu ul {
      transition: height ${this.animationDuration + "ms"};
    }

  </style>
  <nav class="sub-nav">
    ${this.navTitle ? html`
      <h2 class="sub-nav__title${this.titleHref || this.titleClickEvent ? "-linked" : ""}">
        ${this.titleHref || this.titleClickEvent ? html`<a href=${ifDefined(this.titleHref ? this.titleHref : undefined)} @click=${() => this._dispatchTitleClick()}>${this.navTitle}</a>` : this.navTitle}
      </h2>
    ` : html``}
    <ul class="sub-nav__menu">
      ${this.navItems.map((item, i) => this._renderNavItem(item, [i]))}
    </ul>
  </nav>

`;}