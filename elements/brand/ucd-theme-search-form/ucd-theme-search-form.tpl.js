import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import utilityCss from "@ucd-lib/theme-sass/6_utility/_u-visibility.css.js";
import searchCss from "@ucd-lib/theme-sass/4_component/_search-form.css.js";
import formCss from "@ucd-lib/theme-sass/1_base_html/_forms.css.js";


export function styles() {
  let customCss = css`
    :host {
      display: block;
    }
    [hidden] {
      display: none !important;
    }
    .search-form__submit {
      line-height: 1.9;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: normal;
      text-indent: inherit;
    }
  `;
  return [
    normalizeCss,
    utilityCss,
    formCss,
    searchCss,
    customCss
  ]
}

export function render() { 
return html` 
<form 
  @submit="${this._onSubmit}"
  action="${this.formAction}" 
  method=${this.formMethod} 
  class="search-form ${this.formClass}">

  <label for="search" class="u-hidden--visually">${this.labelText}</label>
  <input 
    type="text" 
    placeholder="${this.placeholder}" 
    id="search" 
    class="search-form__input ${this.inputClass}" 
    name=${this.queryParam} 
    @input="${this._onInput}"
    .value="${this.value}">
  <button type="submit" class="search-form__submit">&#xf002;</button>

</form>
`;}