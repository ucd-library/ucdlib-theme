import { html } from 'lit-element';
import alertStyles from '@ucd-lib/theme-sass/4_component/_messaging-alert.scss'
import headings from '@ucd-lib/theme-sass/1_base_html/_headings.scss'

export default function render() { 
return html`

<style>
  ${headings}
  ${alertStyles}
  :host {
    display: block;
  }
</style>  

<div class="alert ${this.styleModifier}">
  <slot></slot>
</div>

`;}