import { html, css } from 'lit';

import headingStyles from "@ucd-lib/theme-sass/1_base_html/_headings.css.js";
import headerStyles from "@ucd-lib/theme-sass/4_component/_header.css.js";
import headerLayoutStyles from "@ucd-lib/theme-sass/5_layout/_l-header.css.js"
import brandingStyles from "@ucd-lib/theme-sass/4_component/_site-branding.css.js"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
  `;

  return [
    headingStyles,
    headerStyles,
    headerLayoutStyles,
    brandingStyles,
    elementStyles
  ];
}

export function render() { 
return html`
<header class="l-header header">
  <div class="header__bar">
      <div class="header__university">
        <a href="https://www.ucdavis.edu/">
          <img class="ucd-logo" src='data:image/svg+xml;utf8,${encodeURIComponent(this._ucdLogo)}'>
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

  <div class="l-navbar header__navbar menu--closed" data-cy="navbar">
    <div class="l-container--navigation off-canvas off-canvas--left">
      <div class="off-canvas__container l-nav-horizontal">
        <div class="l-nav-horizontal__search-popup">
        </div>
        <div class="l-nav-horizontal__quick-links">
        </div>
        <div class="l-nav-horizontal__primary-nav">
          <slot name="primary-nav"></slot>
        </div>
      </div>
    </div>
  </div>
</header>
  

`;}