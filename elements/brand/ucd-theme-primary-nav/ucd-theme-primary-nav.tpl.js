import { html, css } from 'lit';

import normalizeStyles from "@ucd-lib/theme-sass/normalize.css.js";
import formStyles from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";
import menuStyles from "@ucd-lib/theme-sass/2_base_class/_misc.css.js";
import primaryNavStyles from "@ucd-lib/theme-sass/4_component/_nav-primary.css.js";
import subNavToggleStyles from "@ucd-lib/theme-sass/4_component/_submenu-toggle.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .submenu-toggle * {
      pointer-events: none;
    }
    button[disabled] {
      pointer-events: none;
    }
    @media (min-width: 992px) {
      nav.primary-nav--mega li.depth-0 > ul.menu {
        opacity: 1;
        display: block;
      }

      ul.menu ul.menu {
        opacity: 0;
        display: none;
      }
      ul.menu li.sf--hover > ul.menu {
        display: block;
        opacity: 1;
      }
      ul.menu li.closing > ul.menu {
        display: block;
        opacity: 0;
      }
      .mega-focus .primary-nav__top-link a, 
      .mega-focus .primary-nav__top-link a::before, .mega-focus 
      .primary-nav__top-link a::after {
        background-color: rgb(255, 223, 128);
      }
      .mega-focus .primary-nav__top-link a:focus, 
      .mega-focus .primary-nav__top-link a:focus::before, 
      .mega-focus .primary-nav__top-link a:focus::after {
        background-color: rgb(255, 191, 0);
      }

      .primary-nav li:focus > .primary-nav__top-link a::before, 
      .primary-nav li:focus-within > .primary-nav__top-link a::before,
      .primary-nav li:focus > .primary-nav__top-link a::after, 
      .primary-nav li:focus-within > .primary-nav__top-link a::after {
        background-color: rgb(255, 191, 0);
      }

      .mega-focus > ul {
        background-color: rgb(255, 251, 237);
      }

    }

    @media (max-width: 991px) {
      ul.menu ul.menu {
        display: none;
        overflow-y: hidden;
        visibility: visible;
        height: auto;
        border-top-width: 0px;
        border-bottom-width: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
      }

      ul.menu ul.menu.menu--open {
        display: block;
      }

    }
  `;

  return [
    normalizeStyles,
    formStyles,
    menuStyles,
    primaryNavStyles,
    subNavToggleStyles,
    elementStyles
  ];
}

export function render() { 
return html`
<style>
  ul.menu ul.menu {
    transition: opacity ${this.animationDuration + "ms"}, height ${this.animationDuration + "ms"};
  }
  ul.menu li.sf--hover > ul.menu {
    transition: opacity ${this.animationDuration + "ms"} ${this.hoverDelay + "ms"}, height ${this.animationDuration + "ms"};
  }

</style>
<nav 
  id=${this._classPrefix}
  class="${this._getNavClasses()}" 
  @mouseenter=${this._onNavMouseenter}
  @mouseleave=${this._onNavMouseleave}
  @focusout=${this._onNavFocusout}
  @focusin=${this._onNavFocusin}
  aria-label="Main Menu">
  <ul class="menu">
    ${this.navItems.map((navItem, i) => this._renderNavItem(navItem, [i]))}
  </ul>
</nav>
`;}