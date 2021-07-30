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

  <p>This element controls the desktop/mobile display of the header components:
    <ul class="list--arrow">
      <li><a href="#ucd-theme-primary-nav">primary-nav</a></li>
      <li><a href="#ucd-theme-quick-links">quick-links</a></li>
      <li><a href="#ucd-theme-search-popup">search-popup</a></li>
    </ul>

    Pass through these elements as children to construct the site header.
  </p>

  ${this.examplePanel(html`
    <ucd-theme-header 
      site-name="UC Davis Library"
      slogan="Books!"
      figure-src="/img/book-logo.png" 
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
  Note the <code>is-demo</code> attribute adjusts the position of the mobile menu so it doesn't cover the "close" button in this demo application.
    It should not be used otherwise.
  </div>

  <p>The branding bar can be completely overwritten with your own styles by using the <code>branding-bar</code> slot:</p>
  
  ${this.examplePanel(html`
    <ucd-theme-header is-demo>
      <div slot="branding-bar" class="custom-branding">
        <img src="/img/logo.svg" class="site-logo">
        <ol class="breadcrumbs">
          <li><a href="#">VPN</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Give</a></li>
        </ol>
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
        justify-content: space-between;
      }
      .custom-branding img {
        max-width: 15rem;
      }
    </style>
  `)}


`;}