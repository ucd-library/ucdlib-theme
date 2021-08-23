import { html, css } from 'lit';
import { blueTints, goldTints, categoryBrands } from "@ucd-lib/theme-sass/colors";

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
  <style>
    .colored-backgrounds .quick-summary__body > div {
      height: 30px;
    } 
  </style>
  ${this.pageTitle("Using Brand Colors")}
  <h2>Site Classes</h2>
  <p>If your element does not use the shadowroot, and you loaded the styles into the site's renderRoot, 
    you can use css classes to apply colors:</p>
  
  <p>to text:</p>
  ${this.examplePanel(html`
    <p class="double-decker">double-decker</p>
    <p class="gunrock">gunrock</p>
    <p class="sage">sage</p>
    <p class="pinot">pinot</p>
  `)}

  <p>To backgrounds:</p>
  
  <div class="colored-backgrounds">
  ${this.examplePanel(html`
      <div class="category-brand--tahoe category-brand__background"></div>
      <div class="category-brand--farmers-market category-brand__background"></div>
      <div class="category-brand--redbud category-brand__background"></div>
  `)}
  </div>

  <div class="alert">
  The <code>category-brand--</code> prefix can be used to style many components. 
  <a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=viewall-organisms-branding">See Patternlab for more details</a>
  </div>

  <h2>CSS Custom Properties</h2>
  <p>If loaded, you can use CSS custom properties from the <code>@ucd-lib/theme-sass</code> package:</p>
  <div class="colored-backgrounds">
  ${this.examplePanel(html`
      <div style="background-color:var(--tahoe)"></div>
      <div style="background-color:var(--farmers-market)"></div>
      <div style="background-color:var(--redbud)"></div>
  `)}
  </div>
  <h2>Inside a ShadowRoot</h2>
  <p>To use colors inside an element that uses ShadowRoot, you can use CSS properties since they pierce through.</p>
  <p>You can also use the classes listed above by importing the scss partial:</p>
  ${this.jsPanel('import brandStyles from "@ucd-lib/theme-sass/4_component/_category-brand.css.js"')}

  <h2>Color Objects</h2>
  <p>If you need access to a list of brand colors and associated hex values, you can import them as objects:</p>
  ${this.jsPanel(`
  import { 
    baseColors, 
    blueTints, 
    goldTints, 
    blackTints, 
    categoryBrands } 
  from "@ucd-lib/theme-sass/colors";`)}

  <h2>Color Reference</h2>
  <h3>Alt Colors</h3>
  <table class="u-space-mb--large">
    <thead>
      <tr >
        <th colspan="2"></th>
        <th>Hex</th>
      </tr>
    </thead>
    <tbody>
    ${Object.values(categoryBrands).map(color => html`
      <tr>
        <td style="width:40px;background-color:${color.hex}"></td>
        <td>${color.id}</td>
        <td>${color.hex}</td>
      </tr>
    `)}
    </tbody>
  </table>

  <h3>Blue Tints</h3>
  <table class="u-space-mb--large">
    <thead>
      <tr >
        <th colspan="2"></th>
        <th>Hex</th>
      </tr>
    </thead>
    <tbody>
    ${Object.values(blueTints).map(color => html`
      <tr>
        <td style="width:40px;background-color:${color.hex}"></td>
        <td>${color.id}</td>
        <td>${color.hex}</td>
      </tr>
    `)}
    </tbody>
  </table>

  <h3>Gold Tints</h3>
  <table class="u-space-mb--large">
    <thead>
      <tr >
        <th colspan="2"></th>
        <th>Hex</th>
      </tr>
    </thead>
    <tbody>
    ${Object.values(goldTints).map(color => html`
      <tr>
        <td style="width:40px;background-color:${color.hex}"></td>
        <td>${color.id}</td>
        <td>${color.hex}</td>
      </tr>
    `)}
    </tbody>
  </table>


`;}