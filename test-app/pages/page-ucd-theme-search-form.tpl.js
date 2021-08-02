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

  ${this.pageTitle('Search Form')}

  <p>Search will post to a url in the <code>form-action</code> attribute:</p>
  ${this.examplePanel(html`
    <ucd-theme-search-form
      form-action="/">
    </ucd-theme-search-form>
  `)}

  <p>Otherwise it will trigger a <code>search</code> custom event:</p>
  ${this.examplePanel(html`
    <ucd-theme-search-form
      @search="${e => console.log(e.detail.searchTerm)}">
    </ucd-theme-search-form>
  `)}


`;}