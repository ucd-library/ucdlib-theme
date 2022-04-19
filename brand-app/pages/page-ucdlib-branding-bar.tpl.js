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
  ${this.pageTitle("UC Davs Library Branding Bar")}
  ${this.importPanel("ucdlib/ucdlib-branding-bar/ucdlib-branding-bar.js")}

  <p>The <code>ucdlib-branding-bar</code> component can be used in the <a href="#ucd-theme-header">header controller component</a>
    to quickly apply the Library's preferred styling to the masthead portion of the header.
  </p>

  ${this.examplePanel(html`
    <ucdlib-branding-bar>
      <a href="#">My Account</a>
      <a href="#">Access VPN</a>
      <a href="#">Give</a>
    </ucdlib-branding-bar>
  `)}


`;}