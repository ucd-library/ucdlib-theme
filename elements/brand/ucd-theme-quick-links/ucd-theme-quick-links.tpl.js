import { html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

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
    .slot-parent {
      display: none;
    }
    nav {
      display: none;
      overflow-y: hidden;
    }
    nav.open {
      display: block;
    }
    nav.transitioning {
      display: block;
    }
    .click-attached {
      cursor: pointer;
    }
    @media (min-width: 992px) {
      .slot-parent {
        display: block;
      }
      ::slotted(*) {
        min-width: 1.1rem !important;
        max-width: 1.1rem !important;
        width: 1.1rem !important;
        margin-right: .75rem;
        color: #13639e;
        font-size: .875em;
    }
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
  ${this._hasCustomIcons ? html`
    <style>
      .quick-links--home-site li:first-child a:before {
        content: "";
        display: none;
      }
      .quick-links--home-site li:nth-child(2) a:before {
        content: "";
        display: none;
      }
      .quick-links--home-site li:nth-child(3) a:before {
        content: "";
        display: none;
      }
    </style>
  ` : html``}
  <style>
    nav {
      transition: height ${this.animationDuration + "ms"}
    }
  </style>
  <div class="quick-links">
    <button 
      class="quick-links__title"
      @click=${this._onBtnClick}
      aria-controls="quick-links" 
      aria-expanded="${this.opened}" 
      aria-label="Toggle ${this.title} Menu">
      ${this.title}<span class="submenu-toggle"><span class="submenu-toggle__icon">+</span></span>
    </button>
    <nav 
      id="quick-links" 
      class=${classMap(this._getNavClasses())} 
      style=${styleMap(this._getNavStyles())}
      aria-label="Quick Links Menu">
    <ul class="menu" id="menu">
      ${this._links.map((link, i) => html`
        <li>
          ${link.href ? html`
            <a href="${link.href}">${this._renderSlot(link)}${link.text}</a>
          ` : html`
            <a 
              class="click-attached" 
              tabindex="0"
              @click=${this._onItemClick}
              @keyup=${this._onItemKeyup}
              .index=${i}>${this._renderSlot(link)}${link.text}</a>
          `}
        </li>
      `)}
    </ul>
    </nav>
    
  </div>

`;}