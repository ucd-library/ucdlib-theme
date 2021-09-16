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
  ${this.pageTitle('Search Popup')}
  ${this.importPanel("brand/ucd-theme-search-popup/ucd-theme-search-popup.js")}

  <p>This element controls the visibility of a search form. 
    Either pass through <a href="#ucd-theme-search-form">ucd-theme-search-form</a> as a child:
  </p>
  ${this.examplePanel(html`
    <ucd-theme-search-popup>
      <ucd-theme-search-form
        @search="${e => console.log(e.detail.searchTerm)}">
      </ucd-theme-search-form>
    </ucd-theme-search-popup>
  `)}

  <p>Or something more customized:</p>
  ${this.examplePanel(html`
    <ucd-theme-search-popup>
      <div class="u-space-px u-clearfix u-align--center">
        <input placeholder="I'm custom!">
      </div>
    </ucd-theme-search-popup>
  `)}

`;}