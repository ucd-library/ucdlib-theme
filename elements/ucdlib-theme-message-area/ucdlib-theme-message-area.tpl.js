import { html } from 'lit';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
</style>  


<div class="message-area">
  <div class="message-area__content" data-cy="content">
    <h2 class="message-area__title">${this.title}</h2>
    <div class="message-area__body">
      <slot></slot>
    </div>
  </div>
  <button class="message-area__button" data-cy="button" title="${this.buttonText}" @click="${this._onBtnClicked}">${this.buttonText}</button>
</div>


`;}