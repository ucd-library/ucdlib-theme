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
    .submenu-toggle__icon {
      min-width: 40%;
    }
    @media (min-width: 755px) {
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
      .mega-focus > ul {
        background-color: rgb(255, 251, 237);
      }

    }

    @media (max-width: 754px) {
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

   

    @media (min-width: 755px) {
      .primary-nav {
        background-color: transparent;
        font-size: 0.85rem;
      }
      .primary-nav ul ul {
        display: none;
      }
      .primary-nav li.alt-size {
        float: left;
      }
      .primary-nav li.alt-size:hover ul {
        background-color: #fffbed;
      }
      .primary-nav li.alt-size li {
        float: none;
      }
      .primary-nav li.alt-size:hover > .primary-nav__top-link a, 
      .primary-nav li.alt-size:focus-within > .primary-nav__top-link a.alt-size, 
      .primary-nav li.alt-size:hover > .primary-nav__top-link .primary-nav__nolink {
        color: #022851;
      }
      .primary-nav li.alt-size .submenu-toggle {
        display: none;
      }
    }
    
    @media (min-width: 755px) {
      .primary-nav li.alt-size li a, li.alt-size li .primary-nav__nolink {
        margin-left: 0;
        padding: 0.5rem 1rem;
        font-size: 0.9375em;
        line-height: 1.35;
      }
      .primary-nav li.alt-size li a:focus, li.alt-size li .primary-nav__nolink:focus {
        background-color: #ffbf00;
      }
      .primary-nav li.alt-size li a:before, 
      .primary-nav li.alt-size li a:after, 
      li.alt-size li .primary-nav__nolink:before, 
      li.alt-size li .primary-nav__nolink:after {
        display: none;
      }

      .primary-nav li.alt-size a {
        color: white;
        background-color: transparent;
      }

      .primary-nav li.alt-size a::before {
        width: 1rem;
        1height: 3.25rem;
        margin-right: 0.5rem;
        margin-left: -1rem;
        background-color: transparent;
        clip-path: polygon(93% 0px, 110% 0px, 110% 102%, 0% 102%);
        content: "";
      }


      .primary-nav a, .primary-nav__nolink {
        margin-left: 1rem;
        padding: 0;
        border-bottom: 0;
        background-color: transparent;
        font-weight: 700;
        line-height: 3.25rem;
      }
      .primary-nav a:before, .primary-nav__nolink:before {
        width: 1rem;
        height: 3.25rem;
        margin-right: 0.5rem;
        margin-left: -1rem;
        background-color: transparent;
        clip-path: polygon(93% 0, 110% 0, 110% 102%, 0% 102%);
        content: "";
      }
      .primary-nav a:focus:before, .primary-nav a:hover:before, .primary-nav__nolink:focus:before, .primary-nav__nolink:hover:before {
        background-color: #ffbf00;
      }
      .primary-nav a:after, .primary-nav__nolink:after {
        z-index: 1;
        width: 1rem;
        height: 3.25rem;
        margin-right: -1rem;
        margin-left: 0.5rem;
        background-color: transparent;
        clip-path: polygon(-2px -2px, 100% -2px, 7% 102%, -2px 100%);
        content: "";
      }
      .primary-nav a:focus:after, .primary-nav a:hover:after, .primary-nav__nolink:focus:after, .primary-nav__nolink:hover:after {
        background-color: #ffbf00;
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