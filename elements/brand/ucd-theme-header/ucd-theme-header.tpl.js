import { html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import headingStyles from "@ucd-lib/theme-sass/1_base_html/_headings.css.js";
import headerStyles from "@ucd-lib/theme-sass/4_component/_header.css.js";
import headerLayoutStyles from "@ucd-lib/theme-sass/5_layout/_l-header.css.js"
import brandingStyles from "@ucd-lib/theme-sass/4_component/_site-branding.css.js"
import mobileBarStyles from "@ucd-lib/theme-sass/4_component/_mobile-bar.css.js";
import navToggleStyles from "@ucd-lib/theme-sass/4_component/_nav-toggle.css.js"
import offCanvasStyles from "@ucd-lib/theme-sass/4_component/_nav-off-canvas.css.js"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
    button {
      cursor: pointer;
    }
  `;

  return [
    headingStyles,
    headerStyles,
    headerLayoutStyles,
    brandingStyles,
    mobileBarStyles,
    navToggleStyles,
    offCanvasStyles,
    elementStyles
  ];
}

export function render() { 
return html`
${this.isDemo ? html`
  <style>
    .l-navbar { top: auto !important}
  </style>
` : html``}
<header class="l-header header">
  <div class="mobile-bar">
    <div class="mobile-bar__nav-toggle">
      <button 
        @click=${this._onBtnClick}
        class="nav-toggle ${this.opened ? 'nav-toggle--active' : ''}" 
        aria-controls="primary-nav" 
        aria-expanded="${this.opened ? 'true' : 'false'}" 
        aria-label="Toggle Main Menu">
        <span class="nav-toggle__icon nav-toggle__icon--menu">Menu</span>
      </button>
    </div>
    <div class="mobile-bar__fixed-site-name"><a href=${this.siteUrl}>${this.siteName}</a></div>
    <div class="mobile-bar__university">
      <a href="https://www.ucdavis.edu/">
        <img class="ucd-logo" src='data:image/svg+xml;utf8,${this._ucdLogo('gold')}'>
      </a>
    </div>
  </div>

  <div class="header__bar">
      <div class="header__university">
        <a href="https://www.ucdavis.edu/">
          <img class="ucd-logo" src='data:image/svg+xml;utf8,${this._ucdLogo()}'>
        </a>
      </div>
  </div>
  <div class="l-header__branding">
    ${this._hasSlottedBranding ? html`
      <slot name="branding-bar"></slot>
    ` : html`
      <div class="site-branding">
        <div class="site-branding__figure" ?hidden=${!this.figureSrc}>
          <a href="${this.siteUrl}" class=""><img src=${this.figureSrc} class="site-logo" alt="Site Logo" /></a>
        </div>
        <div class="site-branding__body">
        <h1 class="site-branding__site-name" ?hidden=${!this.siteName}>
          <a href=${this.siteUrl}>${this.siteName}</a>
        </h1>
        <div class="site-branding__slogan" ?hidden=${!this.slogan}>${this.slogan}</div>
        </div>
      </div>
    `}
  </div>

  <div class="${classMap(this._getNavbarClasses())}">
    <div class="l-container--navigation off-canvas off-canvas--left">
      <div class="off-canvas__container l-nav-horizontal">
        ${this._hasSearch ? html`
          <div class="l-nav-horizontal__search-popup">
            <slot name="search"></slot>
          </div>
        ` : html``}
        ${this._hasQuickLinks ? html`
          <div class="l-nav-horizontal__quick-links">
            <slot name="quick-links"></slot>
          </div>
        ` : html``}
        <div class="l-nav-horizontal__primary-nav">
          <slot name="primary-nav"></slot>
        </div>
      </div>
    </div>
  </div>
</header>
  

`;}