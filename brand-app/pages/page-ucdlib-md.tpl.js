import { html, css } from 'lit';
import '@ucd-lib/theme-elements/ucdlib/ucdlib-md/ucdlib-md';

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
    ${this.pageTitle("Parse Markdown to HTML")}
    <p>The <code>ucdlib-md</code> element parses Markdown text and renders HTML.</p>

    <h2>Using the component</h2>

    <p>There are a couple ways:</p>
    
    ${this.examplePanel(html`
      <ucdlib-md id="md">
        <ucdlib-md-content>
          Enter your markdown here
          ## h2
          > blockquote
          **bold** text or *italicized*

          - list
          - etc
          Hello

          World
        </ucdlib-md-content>
      </ucdlib-md>
    `)}
    
    <p>
      You can also omit the <code>ucdlib-md-content</code> element and instead use 
      the <code>data</code> property to set the markdown text. For instance:
    </p>

    ${this.examplePanel(html`
      document.querySelector('ucdlib-md').data = '## header content \\n a paragraph with **bold** text.'
    `, true)}

    <h2>Overriding the default renderer</h2>
    <p>
      It's also possible to override how some elements are rendered. Similar to the <code>data</code> property, set the
      <code>renderer</code> property to an object holding the specific elements you'd like to override.
    </p>

    ${this.examplePanel(html`
      document.querySelector('ucdlib-md').renderer = '{ 
        header(text, level) {
          let renderedContent = '';
          if (level === 'h1') {
            // something custom (ie custom class)
          } else {
            // combine h+level around text
          }       
          return renderedContent;
        }
        // optionally other element types (comma-separated)
      }'
    `, true)}

    <p>The list of available element functions can be found on the <a href="https://marked.js.org/using_pro#renderer" target="_blank">Marked documentation page</a>.</p>

    <h2>Try it out</h2>
    <div class="l-2col">
      <div class="l-first panel o-box">
        <div class="field-container">
          <label for="textarea">Markdown Renderer</label>
          <textarea id="entered-md" rows="16" cols="48" placeholder="Enter markdown here"></textarea>
        </div>
      </div>
      <div class="l-second panel o-box">
        <div class="field-container">
          <ucdlib-md id="md-renderer" ignore="p" exclude="h1" subset="full">
          </ucdlib-md>
        </div>
      </div>
    </div>
    
  `;
}
