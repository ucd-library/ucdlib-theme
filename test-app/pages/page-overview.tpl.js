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
  <p>UC Davis uses a common set of styles across many websites, which can be viewed on <a href="http://dev.webstyleguide.ucdavis.edu/redesign/">this Patternlab site.</a>
  At the UC Davis Library, we try to stay within this box where possible.
  </p>


  <p>By using a combination of the following npm packages, you can quickly build a branded website:</p>
  <ul class="list--arrow">
    <li>
      <a href="https://github.com/ucd-library/ucdlib-theme/tree/main/elements">@ucd-lib/theme-elements</a>
      <br>Prepackaged <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">webcomponents</a> that simplify introducing branded elements that require JS into your site.
    </li>
    <li>
      <a href="https://github.com/ucd-library/ucdlib-theme-sass/tree/main/source/sass">@ucd-lib/theme-sass</a>
      <br>UC Davis styles that can be imported as global CSS or directly into Lit-based webcomponents.
    </li>
    <li>
      <a href="https://github.com/UCDavisLibrary/cork-app-build">@ucd-lib/cork-app-build</a>
      <br>Webpack + Babel configurations to simplify the JS/CSS build process.
    </li>
  </ul>

  <h2>About this site</h2>
  <p>This site is divided into three sections:</p>
  <ul class="list--arrow">
    <li>
      <strong>Brand Web Components</strong>
      <br>Web component implementations of <a href="http://dev.webstyleguide.ucdavis.edu/redesign/">UC Davis elements</a> that require javascript.
      <br>Components can be imported into your application using the <code>@ucd-lib/theme-elements</code> npm package.
    </li>
    <li>
      <strong>Library Web Components</strong>
      <br>Web components that are not official UC Davis elements, but are either branded or helpful utilities.
      <br>Components can be imported into your application using the <code>@ucd-lib/theme-elements</code> npm package.
    </li>
    <li>
      <strong>Brand Guides</strong>
      <br>Documentation and recipes for using UC Davis brand HTML and CSS classes.
      <br>Classes can be imported into your application using the <code>@ucd-lib/theme-sass</code> npm package.
    </li>
  </ul>   

  <h2>Use in Web Application</h2>
  <p>TODO. Basically a rehash of this <a href="https://docs.google.com/document/d/1u288xsd539qGXWzOQITg6sig-FIAIJR695nNjC4TfBI/edit#bookmark=id.fodypvmcwssy">Google Doc section</a>,
   but with more example code for setting up the imports.
  </p>

`;}