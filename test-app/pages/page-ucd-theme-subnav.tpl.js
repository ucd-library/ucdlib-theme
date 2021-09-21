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
  ${this.pageTitle("Subnav")}
  ${this.importPanel("brand/ucd-theme-subnav/ucd-theme-subnav.js")}

  <p>The <code>ucd-theme-subnav</code> element displays a stylized list of nested links typically used in a page sidebar.</p>

  <h2>Basic Use</h2>

  <p>Pass through <code>a</code> tags to construct the nav:</p>
  ${this.examplePanel(html`
    <ucd-theme-subnav>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </ucd-theme-subnav>
  `)}

  <p>Pass through a list to nest links up to 2 levels deep:</p>
  ${this.examplePanel(html`
    <ucd-theme-subnav>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <ul href="#" link-text="Parent with Children">
        <li><a href="#">Child 1</a></li>
        <li><a href="#">Child 2</a></li>
        <li><a href="#">Child 3</a></li>
        <ul href="#" link-text="Child with Grandchildren">
          <li><a href="#">Grandchild 1</a></li>
          <li><a href="#">Grandchild 2</a></li>
          <li><a href="#">Grandchild 3</a></li>
          <li><a href="#">Grandchild 4</a></li>
        </ul>
      </ul>
    </ucd-theme-subnav>
  `)}

  <p>Give it a title with the <code>nav-title</code> attribute:</p>
  ${this.examplePanel(html`
    <ucd-theme-subnav nav-title="My Links">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </ucd-theme-subnav>
  `)}

  <p>The <code>title-href</code> attribute will make the title a link:</p>
  ${this.examplePanel(html`
    <ucd-theme-subnav nav-title="My Links" title-href="#">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </ucd-theme-subnav>
  `)}

`;}