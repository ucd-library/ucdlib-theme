import { html } from 'lit';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
</style>  

<div class="alert ${this.styleModifier}">
  <slot></slot>
</div>

`;}