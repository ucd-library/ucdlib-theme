import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`

  <select id="elementSelector" @change="${this._onSelectChange}">
    ${this.elements.map(item => html`<option value="${item}">${item}</option>`)}
  </select>

  <ucdlib-pages id="pages" selected="${this.selectedPage}" ></ucdlib-pages>

`;}