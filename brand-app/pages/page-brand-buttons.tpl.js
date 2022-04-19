import { html, css } from 'lit';
import buttonStyles from "@ucd-lib/theme-sass/2_base_class/_buttons.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles, buttonStyles];
}

export function render() {
return html`
  <style>

  </style>
  ${this.pageTitle("Using Brand Buttons")}
  <p>There are multiple button combinations in the new brand.</p>

  <p>Standard Button Selections.</p>
  ${this.examplePanel(html`
    <p><button class="btn">Classic Button</button></p>
  `)}

  <p>Classic Button Shape Options.</p>
  ${this.examplePanel(html`
    <p><button class="btn btn--lg">Large Text Button</button></p>
    <p><button class="btn btn--sm">Small Text Button</button></p>
    <p><button class="btn btn--block">Block Button</button></p>
    <p><button class="btn btn--round">Round Button</button></p>
    <p><button class="btn btn--input">Input Button</button></p>
    <p><button class="btn btn--input" disabled>Disabled Button</button></p>
  `)}

  <p>Button Brand Colors.</p>
  ${this.examplePanel(html`
    <p><button class="btn btn--primary">Primary Button</button></p>
    <p><button class="btn btn--alt">Alternative Button</button></p>
    <p><button class="btn btn--alt2">Alternative2 Button</button></p>
    <p><button class="btn btn--alt3">Alternative3 Button</button></p>
    <p><button class="btn btn--invert">Invert Button</button></p>
  `)}

  <p>Button Brand Combinations.</p>
  ${this.examplePanel(html`
    <p><button class="btn btn--primary btn--round">Primary Button</button></p>
    <p><button class="btn btn--alt btn--round">Alternative Button</button></p>
    <p><button class="btn btn--alt2 btn--round">Alternative2 Button</button></p>
    <p><button class="btn btn--alt3 btn--round">Alternative3 Button</button></p>
    <p><button class="btn btn--invert btn--round">Invert Button</button></p>
    <p><button class="btn btn--primary btn--lg">Primary Button</button></p>
    <p><button class="btn btn--alt btn--lg">Alternative Button</button></p>
    <p><button class="btn btn--alt2 btn--lg">Alternative2 Button</button></p>
    <p><button class="btn btn--alt3 btn--lg">Alternative3 Button</button></p>
    <p><button class="btn btn--invert btn--lg">Invert Button</button></p>
    <p><button class="btn btn--primary btn--block">Primary Button</button></p>
    <p><button class="btn btn--alt btn--block">Alternative Button</button></p>
    <p><button class="btn btn--alt2 btn--block">Alternative2 Button</button></p>
    <p><button class="btn btn--alt3 btn--block">Alternative3 Button</button></p>
    <p><button class="btn btn--invert btn--block">Invert Button</button></p>
  `)}
  <p>This works for all shape and color combinations.</p>




`;}
