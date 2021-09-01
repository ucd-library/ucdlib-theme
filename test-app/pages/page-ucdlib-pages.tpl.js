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
  ${this.pageTitle("Pages")}
  <p>The <code>ucdlib-pages</code> element is used to select one of its children to show. 
    In a typical library application, it is used by the "application element" to display defined routes/pages. 
  </p>

  ${this.examplePanel(html`
  <ucdlib-pages selected="${this.example1Selected}" id="example-pages">
    <div id="page1" class="category-brand--tahoe category-brand__background">Test 1</div>
    <div id="page2" class="category-brand--farmers-market category-brand__background">Test 2</div>
    <div id="page3" class="category-brand--redbud category-brand__background">Test 3</div>
  </ucdlib-pages>
  <div class="u-space-mt">
    <button @click="${this._example1Click}" class="btn">Change Page</button>
  </div>
  
  <style>
    #example-pages > div {
      width: 100%;
      height: 200px;
    }
    #example-pages~div{
      display: flex;
      justify-content: center;
    }
  </style>
  `)}

`;}