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
  ${this.importPanel("ucdlib/ucdlib-header/ucdlib-header.js")}

  <p>
    This element controls the desktop/mobile display of the <a href="#ucdlib-primary-nav">ucdlib-primary-nav</a> header component. 
    It was forked from <a href="#ucd-theme-header">ucd-theme-header</a> and its' related <a href="#ucd-theme-primary-nav">ucd-theme-primary-nav</a> brand web component. 
  </p>
  <p>
    Pass through this element as a child to construct the site header. 
    <code>ucdlib-primary-nav</code> is required.
  </p>

  ${this.examplePanel(html`
    <ucdlib-header 
      site-name="UC Davis Library"
      prevent-fixed
      is-demo>

      <ucdlib-primary-nav>
        <a href="#" mobile-only>Home</a>
        <ul link-text="Books" href="#">
          <li><a href="#">Biographies</a></li>
          <li><a href="#" mobile-only>Fantasy</a></li>
          <li><a href="#">Mystery</a></li>
        </ul>
        <a href=#>Magazines</a>
        <a href="#">Journals</a>
      </ucdlib-primary-nav>

    </ucdlib-header>
  `)}


  <div class="alert alert--warning">
  Note, the <code>is-demo</code> attribute adjusts the position of the mobile menu so it doesn't cover the "close" button in this demo application.
    It should not be used otherwise.
    <br>
    <br>
    Also of note, the <code>mobile-only</code> and <code>desktop-only</code> attributes can be added to a link to control if it is displayed in the mobile or desktop view.
    This can be useful for links back to the Home page, for example, which is not necessary in desktop mode.
  </div>

  <h3>Customizing the Mobile Width Threshold</h3>
  <p>You can also change the screen width for mobile vs desktop (default is 755px):</p>
  ${this.examplePanel(html`
    <ucdlib-header is-demo prevent-fixed mobile-width="500">
      <ucdlib-primary-nav mobile-width="500">
        <a href="#">Books</a>
        <a href=#>Magazines</a>
        <a href="#">Journals</a>
      </ucdlib-primary-nav>
    </ucdlib-header>
  `)}

`;}