import { html, css } from 'lit';

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
      vertical-align: middle;
      fill: var(--ucdlib-icon-fill-color, currentcolor);
      stroke: var(--ucdlib-icon-stroke-color, none);
      width: var(--ucdlib-icon-width, 24px);
      height: var(--ucdlib-icon-height, 24px);
    }
  `;

  return [elementStyles];
}

export function render() { 
return html`


`;}