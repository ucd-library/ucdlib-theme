import { LitElement, html } from 'lit';
import {render, styles} from "./page-ucdlib-primary-nav.tpl";
import {Mixin, MainDomElement} from '../../elements/utils/mixins';
import {BrandedPageElement, MdElement} from "../utils/index.js";

import "../../elements/ucdlib/ucdlib-primary-nav/ucdlib-primary-nav.js";

export default class PageUcdlibPrimaryNav extends Mixin(LitElement)
  .with(MainDomElement, BrandedPageElement, MdElement) {
  
  exSimple = html`
  <div class="category-brand__background category-brand--primary">
    <ucd-theme-primary-nav>
      <a href="#">ITEM 1</a>
      <a href=#>ITEM 2</a>
      <a href="#">ITEM 3</a>
    </ucd-theme-primary-nav>
  </div>
  `;

  exAdvanced = html`
  <div class="category-brand__background category-brand--primary">
    <ucd-theme-primary-nav>
      <ul link-text="Lord of the Rings">
        <li><a href="">Ents</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Orcs</a></li>
        <ul link-text="Wizards">
          <li><a href="">Gandalf</a></li>
          <li><a href="">Saruman</a></li>
        </ul>
        <li><a href="">Elves</a></li>
        <li><a href="">Dwarves</a></li>
      </ul>
        
      <ul href="#" link-text="Wheel of Time">
        <li><a href="#">Aes Sedai</a></li>
        <ul href="#" link-text="Ta'veren">
          <li><a href="#">Rand al'Thor</a></li>
          <li><a href="#">Matrim Cauthon</a></li>
          <li><a href="#">Perrin Aybara</a></li>
        </ul>
        <li><a href="#">Warders</a></li>
        <li><a href="">Ogiers</a></li>
      </ul>

      <ul link-text="Kingkiller Chronicle">
        <li><a href="">Humans</a></li>
        <li><a href="">Fae</a></li>
      </ul>
      <a href=''>No submenu here!</a>
    </ucd-theme-primary-nav>
  </div>
  `;

  exMega = html`
    <ucd-theme-primary-nav nav-type="mega" style-modifiers="justify">
      <ul link-text="Lord of the Rings">
        <li><a href="">Wizards</a></li>
        <li><a href="">Ents</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Orcs</a></li>
        <li><a href="">Elves</a></li>
        <li><a href="">Dwarves</a></li>
      </ul>
        
      <ul href="#" link-text="Wheel of Time">
        <li><a href="#">Aes Sedai</a></li>
        <li><a href="#">Ta'veren</a></li>
        <li><a href="#">Warders</a></li>
        <li><a href="">Ogiers</a></li>
      </ul>

      <ul link-text="Kingkiller Chronicle">
        <li><a href="">Humans</a></li>
        <li><a href="">Fae</a></li>
      </ul>
    </ucd-theme-primary-nav>
  `;

  static get properties() {
    return {

    }
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('page-ucdlib-primary-nav', PageUcdlibPrimaryNav);