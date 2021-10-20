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
    <style>
    .button-container {
        max-width: 250px;
    }
    </style>

    ${this.pageTitle('Buttons')}

    <h2>Basic Button Attributes</h2>

    <p>This is a standard button with no additions. Default is <code>size="lg"</code> font with <code>attribute="block"</code> shape.  Outer button-container establishes shape.  Originally 100% width.</p>
    ${this.examplePanel(html`
            <ucd-theme-button>
                Sample Button
            </ucd-theme-button>
    `)} 
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button>
                Sample Button
            </ucd-theme-button>
        </div>
    `)}
    <p>Font <code>size="sm"</code>.</p>
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button size="sm">
                Sample Button
            </ucd-theme-button>
        </div>
    `)}

    <p>Button shape <code>attribute="round"</code>.</p>
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button attribute="round">
                Sample Button
            </ucd-theme-button>
        </div>
    `)}

    <p>This button is made for form submissions with same customizable ability with <code>input</code> tag.</p>
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button input>
                Sample Button
            </ucd-theme-button>
        </div>
    `)}

    <p>This will disable button use with <code>disable</code> tag.</p>
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button disabled>
                Sample Button
            </ucd-theme-button>
        </div>
    `)}

    <p>This will apply href to button <code>href="[inserted link]"</code> entry.</p>
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button href="https://www.library.ucdavis.edu/"  attribute="round">
                Look at the Books!
            </ucd-theme-button>
        </div>
    `)}


    <h2>Button Types</h2>
    <p>Button types are defined with <code>type= "primary" | "alt" | "alt2" | "alt3" | "invert"</code> tags.</p>
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button type="primary">
                Sample Button
            </ucd-theme-button>
        </div>
    `)}
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button type="alt">
                Sample Button
            </ucd-theme-button>
        </div>
    `)}
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button type="alt2">
                Sample Button
            </ucd-theme-button>
        </div>
    `)}
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button type="alt3">
                Sample Button
            </ucd-theme-button>
        </div>
    `)}
    ${this.examplePanel(html`
        <div class="button-container">
            <ucd-theme-button type="invert">
                Sample Button
            </ucd-theme-button>
        </div>
    `)}




  `;
}
