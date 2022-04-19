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
    ${this.pageTitle('Accordion')}

    <h2>Basic Use</h2>

    ${this.examplePanel(html`
      <ucd-theme-list-accordion>
        <li>Click me to expand div below</li>
        <li>I will be toggled when the above item is clicked.</li>
        <li>Even children are the "questions"</li>
        <li>Odd children are "answers", and you can pass through <a href="#">rich text</a>.</li>
      </ucd-theme-list-accordion>
    `)}
  `;
}
