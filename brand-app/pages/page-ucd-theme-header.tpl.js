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

  ${this.pageTitle('Site Header')}
  ${this.importPanel("brand/ucd-theme-header/ucd-theme-header.js")}

  <p>This element controls the desktop/mobile display of the header components:</p>
    <ul class="list--arrow">
      <li><a href="#ucd-theme-primary-nav">primary-nav</a></li>
      <li><a href="#ucd-theme-quick-links">quick-links</a></li>
      <li><a href="#ucd-theme-search-popup">search-popup</a></li>
    </ul>
  <p>
    Pass through these elements as children to construct the site header.
    Only <code>ucd-theme-primary-nav</code> is required.
  </p>

  ${this.examplePanel(html`
    <ucd-theme-header
      site-name="UC Davis Library"
      slogan="Books!"
      figure-src="/img/book-logo.png"
      prevent-fixed
      is-demo>

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


  <div class="alert alert--warning">
  Note, the <code>is-demo</code> attribute adjusts the position of the mobile menu so it doesn't cover the "close" button in this demo application.
    It should not be used otherwise.
  </div>

  <h3>Customizing the Branding Bar</h3>
  <p>You can quickly apply Library styles by using the <a href="#ucdlib-branding-bar">ucdlib-branding-bar component</a>:</p>
  ${this.examplePanel(html`
    <ucd-theme-header is-demo prevent-fixed>
      <ucdlib-branding-bar>
        <a href="#">My Account</a>
        <a href="#">Access VPN</a>
        <a href="#">Give</a>
      </ucdlib-branding-bar>

      <ucd-theme-primary-nav>
        <a href="#">Books</a>
        <a href=#>Magazines</a>
        <a href="#">Journals</a>
      </ucd-theme-primary-nav>

      <ucd-theme-search-popup>
        <ucd-theme-search-form
          @search="${e => console.log(e.detail.searchTerm)}">
        </ucd-theme-search-form>
      </ucd-theme-search-popup>

    </ucd-theme-header>
  `)}

  <p>The branding bar can also be completely overwritten with your own styles by using the <code>branding-bar</code> slot:</p>

  ${this.examplePanel(html`
    <ucd-theme-header is-demo prevent-fixed>
      <div slot="branding-bar" class="custom-branding">
        <p>No power in the 'verse can stop me</p>
      </div>
      <ucd-theme-primary-nav>
        <a href="#">Books</a>
        <a href=#>Magazines</a>
        <a href="#">Journals</a>
      </ucd-theme-primary-nav>
    </ucd-theme-header>

    <style>
      .custom-branding {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
      }
      .custom-branding p {
        color: yellow;
      }
    </style>
  `)}


`;}
