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
    elementStyles,
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


  @media (max-width: ${this.mobileWidth - 1}px) {
    .primary-nav li.alt-size li a, li.alt-size li .primary-nav__nolink {
      display: flex;
      align-items: center;
    }
    .primary-nav li.alt-size li a:before, li.alt-size li .primary-nav__nolink:before {
      margin-right: 0.5rem;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
    }
    .primary-nav li.alt-size li a:before, li.alt-size li .primary-nav__nolink:before {
      color: #ffbf00;
      content: "";
      font-size: 1.25em;
    }
    .primary-nav li.alt-size li a:focus:before, .primary-nav li.alt-size li a:hover:before, li.alt-size li .primary-nav__nolink:focus:before, li.alt-size li .primary-nav__nolink:hover:before {
      color: #022851;
    }
  }
  
  @media (min-width: ${this.mobileWidth}px) {
    .primary-nav {
      background-color: transparent !important;
      font-size: 0.85rem !important;
    }
    .primary-nav ul ul {
      display: none !important;
    }
    .primary-nav li {
      float: left !important;
    }
    .primary-nav li:hover ul {
      background-color: #fffbed !important;
    }
    .primary-nav li li {
      float: none !important;
    }
    .primary-nav li:hover > .primary-nav__top-link a, .primary-nav li:focus-within > .primary-nav__top-link a, .primary-nav li:hover > .primary-nav__top-link .primary-nav__nolink {
      color: #022851 !important;
    }
    .primary-nav .submenu-toggle {
      display: none !important;
    }

    .primary-nav a, .primary-nav__nolink {
      margin-left: 1rem !important;
      padding: 0 !important;
      border-bottom: 0 !important;
      background-color: transparent !important;
      font-weight: 700 !important;
      line-height: 3.25rem !important;
    }
    .primary-nav a:before, .primary-nav__nolink:before {
      width: 1rem !important;
      height: 3.25rem !important;
      margin-right: 0.5rem !important;
      margin-left: -1rem !important;
      background-color: transparent !important;
      clip-path: polygon(93% 0, 110% 0, 110% 102%, 0% 102%) !important;
      content: "" !important;
    }
    .primary-nav a:focus:before, .primary-nav a:hover:before, .primary-nav__nolink:focus:before, .primary-nav__nolink:hover:before {
      background-color: #ffbf00 !important;
    }
    .primary-nav a:after, .primary-nav__nolink:after {
      z-index: 1 !important;
      width: 1rem !important;
      height: 3.25rem !important;
      margin-right: -1rem !important;
      margin-left: 0.5rem !important;
      background-color: transparent !important;
      clip-path: polygon(-2px -2px, 100% -2px, 7% 102%, -2px 100%) !important;
      content: "" !important;
    }
    .primary-nav a:focus {
      background-color: #ffbf00 !important;
      color: rgb(2, 40, 81) !important;
    }
    .primary-nav a:focus:after, .primary-nav a:hover:after, .primary-nav__nolink:focus:after, .primary-nav__nolink:hover:after {
      background-color: #ffbf00 !important;
    }

    .primary-nav__top-link a, .primary-nav__top-link .primary-nav__nolink {
      color: #fff !important;
      white-space: nowrap !important;
    }
    .primary-nav__top-link a:hover, .primary-nav__top-link .primary-nav__nolink:hover {
      color: #022851 !important;
    }

    .primary-nav li li a, li li .primary-nav__nolink {
      margin-left: 0 !important;
      padding: 0.5rem 1rem !important;
      font-size: 0.9375em !important;
      line-height: 1.35 !important;
    }
    .primary-nav li li a:focus, li li .primary-nav__nolink:focus {
      background-color: #ffbf00 !important;
    }
    .primary-nav li li a:before, .primary-nav li li a:after, li li .primary-nav__nolink:before, li li .primary-nav__nolink:after {
      display: none !important;
    }

    .primary-nav--justify > .menu {
      display: flex !important;
      flex-wrap: wrap !important;
      justify-content: flex-start !important;
    }
    .primary-nav--justify li {
      float: none !important;
      flex-basis: 0 !important;
      flex-grow: 1 !important;
      width: auto !important;
    }
    .primary-nav--justify li:last-child .primary-nav__top-link a, .primary-nav--justify li:last-child .primary-nav__top-link .primary-nav__nolink {
      margin-right: 1rem !important;
    }
    .primary-nav--justify a:after,
    .primary-nav--justify .primary-nav__nolink:after {
      margin-left: auto !important;
    }

    .primary-nav--mega {
      overflow: hidden !important;
      max-height: 3.25rem !important;
      margin-right: -1rem !important;
      transition: max-height 0.3s !important;
    }
    .primary-nav--mega.is-hover {
      max-height: 600px !important;
    }
    .primary-nav--mega a:after,
    .primary-nav--mega .primary-nav__nolink:after {
      margin-left: auto !important;
    }
    .primary-nav--mega > .menu {
      display: flex !important;
      flex-wrap: wrap !important;
    }
    .primary-nav--mega li {
      float: none !important;
      width: auto !important;
      min-width: 9em !important;
    }
    .primary-nav--mega li li a,
    .primary-nav--mega li li .primary-nav__nolink {
      background: none !important;
    }
    .primary-nav--mega li:hover .primary-nav__top-link a,
    .primary-nav--mega li:hover .primary-nav__top-link .primary-nav__nolink {
      background-color: #ffdf80 !important;
    }
    .primary-nav--mega li:hover .primary-nav__top-link a:before, .primary-nav--mega li:hover .primary-nav__top-link a:after,
    .primary-nav--mega li:hover .primary-nav__top-link .primary-nav__nolink:before,
    .primary-nav--mega li:hover .primary-nav__top-link .primary-nav__nolink:after {
      background-color: #ffdf80 !important;
    }
    .primary-nav--mega li .primary-nav__top-link a:hover {
      background-color: #ffbf00 !important;
    }
    .primary-nav--mega li .primary-nav__top-link a:hover:before, .primary-nav--mega li .primary-nav__top-link a:hover:after {
      background-color: #ffbf00 !important;
    }
    .primary-nav--mega .primary-nav__top-link {
      background-color: #022851 !important;
    }

    .primary-nav--superfish {
      box-shadow: inset 0 -1px 0 #14447a !important;
    }
    .primary-nav--superfish li {
      position: relative !important;
    }
    .primary-nav--superfish ul ul {
      position: absolute !important;
      z-index: 840 !important;
      top: 100% !important;
      left: 0 !important;
      display: none !important;
      min-width: 12em !important;
      background-color: #fff !important;
    }
    .primary-nav--superfish ul ul ul {
      top: 0 !important;
      left: 100% !important;
    }
    .primary-nav--superfish li li a,
    .primary-nav--superfish li li .primary-nav__nolink {
      background-color: #fffbed !important;
    }
    .primary-nav--superfish li li li a,
    .primary-nav--superfish li li li .primary-nav__nolink {
      background-color: #fffbed !important;
    }
    .primary-nav--superfish li li li li a,
    .primary-nav--superfish li li li li .primary-nav__nolink {
      background-color: #fff9e6 !important;
    }
    .primary-nav--superfish .primary-nav__submenu-indicator {
      display: flex !important;
      align-items: center !important;
      width: 1rem !important;
      height: auto !important;
      margin-right: -0.5rem !important;
      margin-left: auto !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
      background-color: transparent !important;
    }
    .primary-nav--superfish .primary-nav__submenu-indicator:after {
      margin-left: 0.5rem !important;
      font-family: "Font Awesome 5 Free" !important;
      font-weight: 900 !important;
    }
    .primary-nav--superfish .primary-nav__submenu-indicator:focus {
      box-shadow: none !important;
    }
    .primary-nav--superfish .primary-nav__submenu-indicator:after {
      color: #ffbf00 !important;
      content: "" !important;
      font-size: 0.75em !important;
    }
    .primary-nav--superfish li li .primary-nav__submenu-indicator:after {
      color: #022851 !important;
    }
    .primary-nav--superfish li li li .primary-nav__submenu-indicator {
      display: none !important;
    }
    .primary-nav--superfish li:hover > ul,
    .primary-nav--superfish .sf--hover > ul {
      display: block !important;
    }
    .primary-nav--superfish li:hover > .primary-nav__top-link a,
    .primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link a,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink {
      background-color: #ffbf00 !important;
    }
    .primary-nav--superfish li:hover > .primary-nav__top-link a:before, .primary-nav--superfish li:hover > .primary-nav__top-link a:after,
    .primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink:before,
    .primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink:after,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link a:before,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link a:after,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink:before,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink:after {
      background-color: #ffbf00 !important;
    }
    .primary-nav--superfish li:hover > .primary-nav__top-link a .primary-nav__submenu-indicator:after,
    .primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink .primary-nav__submenu-indicator:after,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link a .primary-nav__submenu-indicator:after,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link .primary-nav__nolink .primary-nav__submenu-indicator:after {
      color: #022851 !important;
    }
    .primary-nav--superfish li:hover > .primary-nav__top-link a,
    .primary-nav--superfish .sf--hover > .primary-nav__top-link a,
    .primary-nav--superfish li:hover > .primary-nav__top-link .primary-nav__nolink {
      color: #022851 !important;
    }
  }

  @media (max-width: ${this.mobileWidth - 1}px) {
    .desktop-only {
      display: none !important;
    }
  }
  @media (min-width: ${this.mobileWidth}px) {
    .mobile-only {
      display: none !important;
    }
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