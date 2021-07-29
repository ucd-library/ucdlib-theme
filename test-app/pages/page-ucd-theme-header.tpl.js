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
      <li>basic-search</li>
    </ul>

    Pass through these elements as children to construct the site header
  </p>

  ${this.examplePanel(html`
    <ucd-theme-header 
      site-name="UC Davis Library"
      slogan="Books!"
      figure-src="/img/book-logo.png">
      <ucd-theme-primary-nav>
        <a href="#">Books</a>
        <a href=#>Magazines</a>
        <a href="#">Journals</a>
      </ucd-theme-primary-nav>
    </ucd-theme-header>
  `)}

  <p>The branding bar can be completely overwritten with your own styles by using the <code>branding-bar</code> slot:</p>
  
  ${this.examplePanel(html`
    <ucd-theme-header>
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