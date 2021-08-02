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
  <style>
    .snippet {
      background-color: #DBEAF7
    }
    .snippet pre {
      margin-top: 0;
      margin-bottom: 0;
    }
    p code {
      background-color: #DBEAF7;
      padding: 3px;
    }
    .md-docs #classes {
      display: none;
    }
    .md-docs #classes + dl{
      display: none;
    }
    .md-docs #functions {
      display: none;
    }
    .md-docs #functions + dl{
      display: none;
    }
  </style>

  <select id="elementSelector" @change="${this._onSelectChange}">
    ${this.elements.map(item => html`<option value="${item}">${item}</option>`)}
  </select>

  <div class="l-container">
    <div class="l-content">
      <ucdlib-pages id="pages" selected="${this.selectedPage}" ></ucdlib-pages>
    </div>
  </div>
  

`;}