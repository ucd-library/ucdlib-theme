import { html, css } from 'lit';

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
    ${this.pageTitle('Collapse')}

    <h2>Basic Use</h2>

    ${this.examplePanel(html`
      <ucd-theme-collapse title="I am the panel title">
        I am the content.
      </ucd-theme-collapse>
    `)}
  `;
}
