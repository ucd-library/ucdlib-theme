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
  ${this.pageTitle("UC Davs Library Breadcrumbs")}
  ${this.importPanel("ucdlib/ucdlib-breadcrumbs/ucdlib-breadcrumbs.js")}

  <p>The <code>ucd-theme-breadcrumbs</code> component can be used in a page that has a trail of descriptive headers
    to quickly apply the Library's preferred styling to the breadcrumbs titles.
  </p>

  ${this.examplePanel(html`
    <ucd-theme-breadcrumbs links=${JSON.stringify(this.linksEx)}></ucd-theme-breadcrumbs>
  `)}


`;}