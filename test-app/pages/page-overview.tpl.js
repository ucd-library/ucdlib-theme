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

  ${this.pageTitle("Brand Overview")}
  <p>UC Davis uses a common set of styles across many websites, which can be viewed in <a href="http://dev.webstyleguide.ucdavis.edu/redesign/">this Patternlab site.</a>
  At the UC Davis Library, we try to stay within this box where possible.
  </p>


  <p>By using a combination of the following packages, you can quickly build a branded website:
    <ul class="list--arrow">
      <li>
        <a href="https://github.com/ucd-library/ucdlib-theme">ucdlib-theme</a>
        <br>Prepackaged webcomponents that simplify introducing branded elements that require JS into your site.
      </li>
      <li>
        <a href="https://github.com/ucd-library/ucdlib-theme-sass">ucdlib-theme-sass</a>
        <br>UC Davis styles that can be imported as global CSS or directly into Lit-based webcomponents.
      </li>
      <li>
        <a href="https://github.com/UCDavisLibrary/cork-app-build">cork-app-build</a>
        <br>Webpack + Babel configurations to simplify the JS/CSS build process.
      </li>
    </ul>
  </p>

  <h2>How to use this site</h2>
  <p>TODO</p>

  <h2>Cookbook</h2>
  <p>TODO</p>

`;}