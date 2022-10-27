import { html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
// import { ifDefined } from 'lit/directives/if-defined.js';

import headingStyles from "@ucd-lib/theme-sass/1_base_html/_headings.css.js";
import headerStyles from "@ucd-lib/theme-sass/4_component/_header.css.js";
import headerLayoutStyles from "@ucd-lib/theme-sass/5_layout/_l-header.css.js"
import brandingStyles from "@ucd-lib/theme-sass/4_component/_site-branding.css.js"
import mobileBarStyles from "@ucd-lib/theme-sass/4_component/_mobile-bar.css.js";
import navToggleStyles from "@ucd-lib/theme-sass/4_component/_nav-toggle.css.js"
// import offCanvasStyles from "@ucd-lib/theme-sass/4_component/_nav-off-canvas.css.js"

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

    @media (min-width: 755px) {
      .l-header .mobile-bar {
        display: none;
      }
    }

    @media (max-width: 755px) {
      .fixed-mobile .mobile-bar {
        position: fixed;
        width: 100%;
        z-index: 1000;
        top: 0;
      }
      .fixed-mobile .off-canvas {
        position: fixed;
        overflow: auto;
        z-index: 1000;
        top: 55px;
      }
      .fixed-mobile .l-header__branding {
        margin-top: 55px;
      }
      .branding-bar-mobile-links {
        display: block;
      }
      .site-branding__site-name,
      .logo-container {
        display: none !important;
      }
    }

    @media (min-width: 755px) {
      .fixed-desktop .l-navbar {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
      }
      .branding-bar-mobile-links {
        1display: none;
      }
    }

    .l-header .l-navbar {
      position: relative;
      z-index: 830;
      height: 100%;
      min-height: 3.25rem;
    }
    @media (max-width: 755px) {
      .l-header .l-navbar {
        position: absolute;
        top: 3.25rem;
        left: 0;
      }
      .off-canvas--left {
        left: 0;
      }
      .off-canvas {
        position: absolute;
        z-index: 830;
        width: 70vw;
        min-width: 15rem;
        height: 100%;
        background: #fff;
        transition: all 0.3s;
      }
      .off-canvas__container {
        position: static;
      }
      .menu--hidden .off-canvas__container {
        display: none;
      }
      .off-canvas--fixed, .l-header--fixed .off-canvas {
        position: fixed;
        z-index: 1000;
        overflow: auto;
      }
      .off-canvas--fixed .off-canvas__container, .l-header--fixed .off-canvas .off-canvas__container {
        padding-bottom: 9rem;
      }
      .menu--closed .off-canvas--left {
        transform: translateX(-105%);
      }
      .l-header .mobile-bar {
        display: flex;
        align-items: center;
        overflow: hidden;
        min-height: 3.25rem;
        background-color: #022851;
      }
    }
    @media (min-width: 755px) {
      .l-header .l-navbar {
        width: 100%;
        height: auto;
      }
    }

    


    @media (min-width: 755px) {
      .l-header--fixed .l-navbar.is-fixed {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
      }
      .menu--hidden .off-canvas__container {
        display: grid;
      }
    }

    @media (min-width: 755px) {
      .l-nav-horizontal {
        display: grid;
        grid-template-areas: "nav search quick";
        grid-template-columns: 1fr max-content max-content;
      }
      .l-nav-horizontal__primary-nav {
        grid-area: nav;
      }
      .l-nav-horizontal__search-popup {
        z-index: 3;
        grid-area: search;
      }
      .l-nav-horizontal__search-popup .search-popup__open {
        position: relative;
      }
      .l-nav-horizontal__quick-links {
        z-index: 2;
        grid-area: quick;
      }
      .site-branding__site-name {
        font-size: 2rem;
      }
    }

    .branding-bar-mobile-links ul {
      1margin: 0px;
      1padding: 0px;
      1list-style: none;
    }
    .branding-bar-mobile-links li {
      1margin: 0px;
      1padding: 0px;
      1list-style: none;
    }
    .branding-bar-mobile-links a {
      1display: flex;
      1align-items: center;
      1padding: 0.75rem;
      1border-bottom: 0.15rem solid rgb(219, 234, 247);
      1background-color: #fff;
      1color: rgb(2, 40, 81);
      1font-weight: 700;
      1line-height: 1.5rem;
      1text-decoration: none;
    }
    .branding-bar-mobile-links a:hover {
      1background-color: rgb(255, 191, 0);
    }
    .branding-bar-mobile-links li:last-child a {
      1border-bottom: none;
    }

    #nav-bar .ucd-logo {
      height: 1.25rem;
      position: relative;
      top: .95rem;
      margin: 0 1rem;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="16.157"><path fill="white" d="M58.865 4.877c.101.661 1.101 5.405 1.101 5.405h-2.194l1.093-5.405zm-8.328 11.03h5.806l.438-1.947h4.144l.554 1.947h5.806L61.846.403h-6.087l-5.222 15.504zM36.284.402h5.624c5.107 0 9.007 2.277 9.007 7.974 0 4.591-3.18 7.529-7.645 7.529l-6.986-.009V.402zm5.524 11.052h.376c1.843 0 3.207-1.072 3.207-3.096 0-2.179-1.21-3.395-3.234-3.395h-.349v6.491zM32.941.888l.296 2.545c.071.604.426 2.052-.011 1.858-.276-.121-.502-.776-.726-1.36-.114-.295-.658-1.695-.801-1.799-.685-.501-2.401-1.064-3.561-1.069-3.521-.013-5.847 2.509-5.847 6.982 0 3.208 1.582 7.061 5.607 7.061 1.441 0 4.201-.443 4.952-2.436.339-.9.65-1.703.876-1.459.166.177-.05.899-.15 1.289-.474 1.847-.501 2.406-.65 2.479-1.818.885-4.15 1.178-6.191 1.178-6.485 0-8.726-3.678-8.726-7.354 0-6.379 4.032-9.021 10.286-8.791 1.58.058 3.163.334 4.646.876M13.784 1.171L12.745.819c-.35-.306.075-.391.075-.391s1.5.271 5.24-.036c0 0 .328.062.103.319l-1.228.511c-.798.338-.798.143-.798.994l-.007 7.902c0 6.178-6.47 6.039-7.73 6.039-.6 0-6.488 0-6.488-4.961V2.834c0-1.46.159-1.419-.338-1.591L.071.695S-.183.347.269.368c1.227.06 3.004.316 7.133.024 0 0 .362.085.125.342l-1.201.339c-.95.414-.825.098-.849 1.045l.028 8.248c0 2.021 1.07 4.524 4.395 4.524 4.585 0 4.627-3.854 4.627-4.71l.009-8.167c.049-.77-.052-.551-.752-.842M87.65 14.715l1.6-4.111.281.23c.982.781 2.316 1.443 3.574 1.471 1.127.023 1.676-.268 1.527-1.191-.113-.693-.916-.812-1.417-.91l-1.103-.213c-2.143-.39-3.941-1.673-3.941-4.104 0-3.677 3.262-5.737 6.544-5.737 1.726 0 3.306.424 4.786 1.36L98.11 5.156c-.762-.533-1.918-1.285-3.377-1.337-.482-.018-1.58.229-1.229 1.312.152.462.833.657 1.252.755l1.241.292c2.325.526 4.003 1.81 4.003 4.432 0 3.699-3.281 5.529-6.542 5.529-1.901 0-4.106-.527-5.808-1.424M80.979.403h5.492v15.504h-5.492zM74.684.402h5.72l-5.843 15.503h-4.644L64.09.402h5.704l2.442 9.354z"/></svg>') no-repeat;
      width: 7.7rem;
      background-size: 7.7rem;
    }

    #nav-bar .logo-container:hover .ucd-logo {
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="16.157"><path fill="%23022851" d="M58.865 4.877c.101.661 1.101 5.405 1.101 5.405h-2.194l1.093-5.405zm-8.328 11.03h5.806l.438-1.947h4.144l.554 1.947h5.806L61.846.403h-6.087l-5.222 15.504zM36.284.402h5.624c5.107 0 9.007 2.277 9.007 7.974 0 4.591-3.18 7.529-7.645 7.529l-6.986-.009V.402zm5.524 11.052h.376c1.843 0 3.207-1.072 3.207-3.096 0-2.179-1.21-3.395-3.234-3.395h-.349v6.491zM32.941.888l.296 2.545c.071.604.426 2.052-.011 1.858-.276-.121-.502-.776-.726-1.36-.114-.295-.658-1.695-.801-1.799-.685-.501-2.401-1.064-3.561-1.069-3.521-.013-5.847 2.509-5.847 6.982 0 3.208 1.582 7.061 5.607 7.061 1.441 0 4.201-.443 4.952-2.436.339-.9.65-1.703.876-1.459.166.177-.05.899-.15 1.289-.474 1.847-.501 2.406-.65 2.479-1.818.885-4.15 1.178-6.191 1.178-6.485 0-8.726-3.678-8.726-7.354 0-6.379 4.032-9.021 10.286-8.791 1.58.058 3.163.334 4.646.876M13.784 1.171L12.745.819c-.35-.306.075-.391.075-.391s1.5.271 5.24-.036c0 0 .328.062.103.319l-1.228.511c-.798.338-.798.143-.798.994l-.007 7.902c0 6.178-6.47 6.039-7.73 6.039-.6 0-6.488 0-6.488-4.961V2.834c0-1.46.159-1.419-.338-1.591L.071.695S-.183.347.269.368c1.227.06 3.004.316 7.133.024 0 0 .362.085.125.342l-1.201.339c-.95.414-.825.098-.849 1.045l.028 8.248c0 2.021 1.07 4.524 4.395 4.524 4.585 0 4.627-3.854 4.627-4.71l.009-8.167c.049-.77-.052-.551-.752-.842M87.65 14.715l1.6-4.111.281.23c.982.781 2.316 1.443 3.574 1.471 1.127.023 1.676-.268 1.527-1.191-.113-.693-.916-.812-1.417-.91l-1.103-.213c-2.143-.39-3.941-1.673-3.941-4.104 0-3.677 3.262-5.737 6.544-5.737 1.726 0 3.306.424 4.786 1.36L98.11 5.156c-.762-.533-1.918-1.285-3.377-1.337-.482-.018-1.58.229-1.229 1.312.152.462.833.657 1.252.755l1.241.292c2.325.526 4.003 1.81 4.003 4.432 0 3.699-3.281 5.529-6.542 5.529-1.901 0-4.106-.527-5.808-1.424M80.979.403h5.492v15.504h-5.492zM74.684.402h5.72l-5.843 15.503h-4.644L64.09.402h5.704l2.442 9.354z"/></svg>') no-repeat;
      width: 7.7rem;
      background-size: 7.7rem;
    }

    .logo-container {
      display: flex;
      background-color: #13639E;
      clip-path: polygon(1rem 0px, 110% 0px, 110% 102%, 0% 102%);
    }

    .logo-container::before {
      width: 1rem;
      margin-left: 0.5rem;
      background-color: #14447A;
      content: "";
      transform: skewX(-16deg);
    }

    .logo-link::before {
      width: 1rem;
      color: white;
    }

    .logo-container:hover {
      background-color: #FFBF00;

    }
    .logo-link img {
      fill: #FFFFFF;
    }
    .logo-container:hover img {
      fill: #022851;
    }

    .site-name-container {
      margin: auto 0;
    }

    .site-branding__site-name a,
    .site-branding__site-name a:hover {
      color: #FFBF00;
      text-decoration: none;
    }

    .site-branding__site-name a {
      font-size: 1.5rem;
      padding: 1rem;
    }

  `;

  return [
    headingStyles,
    headerStyles,
    headerLayoutStyles,
    brandingStyles,
    mobileBarStyles,
    navToggleStyles,
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
<header class=${classMap(this._getHeaderClasses())}>
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
    <div class="mobile-bar__fixed-site-name"><a href="/">${this.siteName}</a></div>
    <div class="mobile-bar__university">
      <a href="https://www.ucdavis.edu/" aria-label="UC Davis main website link">
        <img class="ucd-logo" src='data:image/svg+xml;utf8,${this._ucdLogo('gold')}' alt="UC Davis main website link">
      </a>
    </div>
  </div>

  <div class="${classMap(this._getNavbarClasses())}" id="nav-bar">
    <div class="l-container--navigation off-canvas off-canvas--left">
      <div class="off-canvas__container l-nav-horizontal">
        <div class="site-name-container">
          <h1 class="site-branding__site-name" ?hidden=${!this.siteName}>
            <a href="/">${this.siteName}</a>
          </h1>
        </div>
        <div>
          <slot name="primary-nav"></slot>
        </div>
        <div class="logo-container">
          <a class="logo-link" href="https://www.ucdavis.edu/" aria-label="UC Davis main website link">
            <div class="ucd-logo"></div>
          </a>
        </div>

      </div>
    </div>
  </div>
</header>
  

`;}