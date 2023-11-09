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

  <p>The <code>ucdlib-branding-bar</code> has some library-specific customizations to the masthead portion of the UC Davis header:</p>
  ${this.examplePanel(html`
    <ucdlib-branding-bar>
      <a href="#">My Account</a>
      <a href="#">Access VPN</a>
      <a href="#">Give</a>
    </ucdlib-branding-bar>
  `)}

  <p>It can be placed inside the <a href="#ucd-theme-header">header controller component</a>:</p>

  ${this.examplePanel(html`
    <ucd-theme-header
      prevent-fixed
      is-demo>

      <ucdlib-branding-bar>
        <a href="#">My Account</a>
        <a href="#">Access VPN</a>
        <a href="#">Give</a>
      </ucdlib-branding-bar>

      <ucd-theme-primary-nav>
        <ul link-text="Books" href="#">
          <li><a href="#">Biographies</a></li>
          <li><a href="#">Fantasy</a></li>
          <li><a href="#">Mystery</a></li>
        </ul>
        <a href=#>Magazines</a>
        <a href="#">Journals</a>
      </ucd-theme-primary-nav>

      <ucd-theme-search-popup>
        <ucd-theme-search-form
          @search="${e => console.log(e.detail.searchTerm)}">
        </ucd-theme-search-form>
      </ucd-theme-search-popup>

      <ucd-theme-quick-links title="Locations" style-modifiers="highlight">
        <a href="#">Shields</a>
        <a href="#">Blaisdell</a>
        <a href="#">Carlson</a>
        <a href="#">Special Collections</a>
      </ucd-theme-quick-links>

    </ucd-theme-header>
  `)}

  <p>The logo can be updated with the <code>figure</code> or <code>figure-src</code> attributes:</p>
  ${this.examplePanel(html`
    <ucdlib-branding-bar figure='custom' figure-src='/img/datalab_logo_square-square.png' figure-custom-width='100px' site-name='Datalab'>
      <a href="#">My Account</a>
      <a href="#">Access VPN</a>
      <a href="#">Give</a>
    </ucdlib-branding-bar>
  `)}



`;}
