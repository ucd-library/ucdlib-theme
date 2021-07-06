import { html, css } from 'lit';

import primaryNavStyles from "@ucd-lib/theme-sass/4_component/_nav-primary.css";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [
    primaryNavStyles,
    elementStyles
  ];
}

export function render() { 
return html`
`;}