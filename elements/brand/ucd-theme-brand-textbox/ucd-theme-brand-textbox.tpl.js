import { html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import brandStyles from "@ucd-lib/theme-sass/4_component/_category-brand.css.js"
import textBoxStyles from "@ucd-lib/theme-sass/4_component/_brand-textbox.css.js"

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    *, ::before, ::after {
      box-sizing: inherit;
    }
    .brand-textbox__button{
      display: none;
    }
    .brand-textbox--collapsible .brand-textbox__button {
      display: block;
    }
    ::slotted(*) {
      margin-bottom: 0 !important;
    }
    ::slotted(blockquote) {
      --category-brand-contrast-color: #fff !important;
    }
  `;

  return [
    brandStyles,
    textBoxStyles,
    elementStyles];
}

export function render() { 
return html`
  <section class=${classMap(this._getBaseClasses())}>
    <div class="brand-textbox__content">
      <slot></slot>
    </div>
    <button 
      class="brand-textbox__button" 
      @click=${() => this.collapsed = !this.collapsed}
      title="Open/Close Message">Toggle this message area open and closed.</button>
  </section>

`;}