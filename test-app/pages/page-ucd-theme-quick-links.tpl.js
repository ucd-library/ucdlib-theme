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
  ${this.pageTitle('Quick Links')}

  <h2>Basic Usage</h2>
  <p>Put in links</p>

  ${this.examplePanel(html`
    <ucd-theme-quick-links>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </ucd-theme-quick-links>
  `)}

  <p>Use the <code>title</code> attribute to change the primary button text</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links 
      title="Nifty Gifteys">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </ucd-theme-quick-links>
  `)}

  <h2>Style Modifiers</h2>

  <p>Enter accepted keywords found in the  Patternlab spec into the <code>style-modifers</code> attribute (space delimited) to alter the appearance of the list:</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links style-modifiers="two-columns">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </ucd-theme-quick-links>
  `)}

  ${this.examplePanel(html`
    <ucd-theme-quick-links style-modifiers="two-columns highlight">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </ucd-theme-quick-links>
  `)}

`;}