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
  method="POST" 
  class="search-form ${this.formClass}">

  <label for="search" class="u-hidden--visually">${this.labelText}</label>
  <input 
    type="text" 
    placeholder="${this.placeholder}" 
    id="search" 
    class="search-form__input ${this.inputClass}" 
    name="searchterm" 
    @input="${this._onInput}"
    value="${this.value}">
  <input type="submit" class="search-form__submit" name="search" alt="Search" value="&#xf002; Submit">

</form>
`;}