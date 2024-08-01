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

    <h2>Using CSS Custom Properties</h2>

    ${this.examplePanel(html`
      <style>
        .custom-collapse {
          --collapse-background-color: #FFFBED;
          --collapse-border-color: #FFBF00;
        }
      </style>
      <div class="custom-collapse">
        <ucd-theme-collapse brand-class="category-brand--secondary" title="I am the panel title">
          I am the content.
        </ucd-theme-collapse>
      </div>
    `)}
  `;
}
