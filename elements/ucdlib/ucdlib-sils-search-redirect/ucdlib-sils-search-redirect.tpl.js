import { html, css, unsafeCSS } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import headingCss from "@ucd-lib/theme-sass/1_base_html/_headings.css";
import headingClassesCss from "@ucd-lib/theme-sass/2_base_class/_headings.css";
import formsCss from "@ucd-lib/theme-sass/1_base_html/_forms.css";
import formsClassesCss from "@ucd-lib/theme-sass/2_base_class/_forms.css";
import buttonCss from "@ucd-lib/theme-sass/2_base_class/_buttons.css";
import spacingUtilityCss from "@ucd-lib/theme-sass/6_utility/_u-space.css";
import { categoryBrands } from "@ucd-lib/theme-sass/colors";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
      max-width: 500px;
      margin: auto;
    }
    h2 {
      text-align: center;
    }
    .search-bar {
      display: flex;
      flex-flow: row nowrap;
    }
    .search-bar button {
      font-family: "Font Awesome 5 Free";
      min-width: unset;
      font-size: 1.2rem;
      padding: 0 .75rem;
      min-height: 0;
    }
    .search-bar button:hover {
      padding-right: .75rem;
      padding-left: .75rem;
    }
    .search-bar input {
      flex-grow: 1;
    }
    .search-options {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-between;
    }
    .search-options label {
      color: ${unsafeCSS(categoryBrands.primary.hex)};
      padding-bottom: 0;
    }
    input[type=checkbox] {
      margin-right: 0;
    }
    .search-options button {
      border: none;
      background-color: inherit;
      color: ${unsafeCSS(categoryBrands.primary.hex)};
      text-decoration: underline;
      padding: 0;
      font-family: inherit;
    }
    .checkbox label::before {
      background-color: white;
    }
    .dark h2 {
      color: ${unsafeCSS(categoryBrands.secondary.hex)}
    }
    .dark .search-options label {
      color: #fff;
    }
    .dark .search-options button {
      color: #fff;
    }

  `;

  return [
    normalizeCss,
    headingCss,
    headingClassesCss,
    formsCss,
    formsClassesCss,
    buttonCss,
    spacingUtilityCss,
    elementStyles];
}

export function render() { 
return html`
  <form 
    @submit=${this._onSubmit}
    aria-label=${this.ariaLabel}
    class="${this.darkBackground ? 'dark' : 'light'}">

    ${this.headingText ? html`
      <h2 class="heading--highlight u-space-mb">${this.headingText}</h2>
    ` : html``}

    <div class="search-bar">
      <input type="text" .value=${this.query} @input=${this._onQueryChange} placeholder=${this.inputPlaceholder}>
      <button id="simple-search" type="submit" class="btn btn--primary-input"> &#xf002</button>
    </div>

    <div class="search-options">
      <div class="checkbox u-space-mr--small u-space-mt--small">
        <input id="corpus" type="checkbox" ?checked=${this.ucdOnly} @input=${this._onCorpusChange}><label for="corpus">UC Davis libraries only</label>
      </div>
      <button id="advanced-search" class="u-space-mt--small" type="submit">Advanced Search</button>
    </div>
</form>

`;}