import { html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import buttonStyles from "@ucd-lib/theme-sass/2_base_class/_buttons.css.js";

export function styles(){
  let customStyles = css`
    :host {
      display: block;
    }
  `;
  return [
    customStyles,
    buttonStyles
  ]
}

export function render() { 
  return html`
  ${this.input ? html`    
    <p>
      <input type="submit" class="btn ${classMap(this.constructClasses())}" value="<input> Button">
    </p>`
    : html`
    <p>
      <a href="${this.href}" class="btn ${classMap(this.constructClasses())}">
        <slot></slot>
      </a>
    </p>`
  }

  `;
}