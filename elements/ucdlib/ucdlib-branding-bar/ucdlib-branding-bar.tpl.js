import { html, css } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import headingStyles from "@ucd-lib/theme-sass/1_base_html/_headings.css.js";
import linkStyles from "@ucd-lib/theme-sass/1_base_html/_links.css.js";
import brandingStyles from "@ucd-lib/theme-sass/4_component/_site-branding.css.js"


export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
    }
    .site-branding__figure svg {
      max-height: 6.25rem;
      max-width: 100%;
      height: auto;
    }
    .figure--book svg {
      width: 70px;
      min-width: 70px;
    }
    .figure--logo svg {
      width: 375px;
      min-width: 375px;
    }
    [hidden] {
      display: none !important;
    }
    .figure--logo .site-branding__body {
      display: none;
    }
    .menu {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }
    .menu a {
      text-decoration: none;
      font-weight: 700;
      margin-right: 1rem;
    }
    .menu a:last-child {
      margin-right: 0;
    }

    @media (max-width: 992px) {
      .figure--logo svg {
        width: 200px;
        min-width: 200px;
      }

      .menu {
        display: none;
      }
    }

  `;

  return [
    headingStyles,
    brandingStyles,
    linkStyles,
    elementStyles];
}

export function render() {
return html`
  <style>
    .figure--custom img {
      width: ${this.figureCustomWidth};
      min-width: ${this.figureCustomWidth};
    }
  </style>
  <div class="container figure--${this.figure}">
    <div class="site-branding">
      <div class="site-branding__figure">
        <a href="${this.siteUrl}" aria-label="site-branding-figure" class="">${this._renderFigure()}</a>
      </div>
      <div class="site-branding__body">
        <h1 class="site-branding__site-name" ?hidden=${!this.siteName}>
          <a href=${this.siteUrl}>${this.siteName}</a>
        </h1>
        <div class="site-branding__slogan" ?hidden=${!this.slogan}>${this.slogan}</div>
      </div>
    </div>
    ${this.navItems.length ? html`
      <nav class="menu">
        ${this.navItems.map(link => html`
          <a
            href=${ifDefined(link.href ? link.href : null)}
            target=${ifDefined(link.newTab ? "_blank": null)}
            >${link.linkText}</a>
        `)}
      </nav>
    ` : html``}

  </div>

`;}
