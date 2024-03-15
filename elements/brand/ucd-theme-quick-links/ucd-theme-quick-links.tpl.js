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
    [hidden] {
      display: none !important;
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
    .submenu-toggle__icon {
      min-width: 40%;
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

      .quick-links__title.show-icon:after {
        content: "";
      }

      .quick-links__title.show-icon .custom-icon {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;
        width: 2.4375rem;
        height: 2.4375rem;
        padding: 0px;
        border: 0px;
        border-radius: 50%;
        background-color: #ffbf00;
        background-size: 50%;
        color: rgb(255, 255, 255);
        text-indent: inherit;
        margin-left: .75rem;
      }

      .quick-links__title.show-icon .custom-icon ::slotted(svg) {
        fill: white;
        height: 65%;
        width: 65%;
        margin: 0 auto;
      }

      .quick-links__title.show-icon:hover .custom-icon, .quick-links__title.show-icon:focus .custom-icon {
        background-color: #13639e;
      }

      .quick-links__title.show-icon {
        padding-right: 0;
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
      class="quick-links__title ${this.useIcon ? 'show-icon' : ''}"
      @click=${this._onBtnClick}
      aria-controls="quick-links"
      aria-expanded="${this.opened}"
      aria-label="Toggle ${this.title} Menu">
      ${this.title}<span class="submenu-toggle ${this.opened ? 'submenu-toggle--open' : ''}"><span class="submenu-toggle__icon">+</span></span>
      <div class="custom-icon" ?hidden="${!this.useIcon}">
        <slot name="custom-icon"></slot>
      </div>
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
