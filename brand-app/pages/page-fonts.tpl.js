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

  ${this.pageTitle("Web Fonts")}
  <h2>Proxima Nova</h2>
  <p>The UC Davis Theme uses Proxima Nova as its main font. 
    Campus hosts the font files at <code>https://campusfont.ucdavis.edu</code>, and
    the <a href="https://github.com/ucd-library/ucdlib-theme-sass/blob/main/source/sass/style.scss">default SASS build</a> will
    load from there. 
    </p>
  <p>If you want to host the Proxima Nova font files on the same server as your application: </p>
  <ul class="list--arrow">
    <li>Download the fonts
      <br><a href="https://github.com/ucd-library/ucdlib-theme/blob/main/brand-app/fonts/proximanova/download.sh">This script</a> will do the work for you.
    </li>
    <li>Load the <a href="https://github.com/ucd-library/ucdlib-theme-sass/blob/main/source/sass/style-ucdlib.scss">ucdlib SASS build</a>
      <br> Load this SASS file instead of the main style.scss because this one does not load the proxima nova css rules that point to the campus server.
    </li>
    <li> Make new font CSS rules pointing to your locally-hosted font files.
      <br> You can use the <a href="https://github.com/UCDavisLibrary/ucdlib-theme-wp/blob/sandbox/src/public/scss/fonts.scss#L21">font-face SASS mixin</a>
      to make things a little easier.
    </li>
  </ul>
`;}