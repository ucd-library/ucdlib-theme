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
  ${this.pageTitle("Custom Iconsets")} 
  <p>The <code>ucdlib-iconset</code> element allows you to create a custom iconset, 
  which can then be used by <a href="#ucdlib-icon">the ucdlib-icon element</a>.
  This is how the <a href="#ucdlib-icons">standard library iconsets</a> are created.
</p> 

  <h2>Defining a custom set</h2>
  <p>
  You can create a custom set by placing your icons inside svg <code>g</code> tags within <code>ucdlib-iconset</code>.
  Each group should have an id that corresponds to the name of the icon.
  </p>
  ${this.examplePanel(html`
    <ucdlib-iconset name="arrows" size= 24>
      <svg>
        <defs>
          <g id="back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></g>
          <g id="downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
          <g id="drop-down"><path d="M7 10l5 5 5-5z"></path></g>
          <g id="drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
          <g id="drop-up"><path d="M7 14l5-5 5 5z"></path></g>
          <g id="forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
          <g id="upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
          <g id="scopus"><path style="fill:red;" d="M128 384V128h64V64H64v384h192v-64ZM384 64H256v64h128v256h-64v64h128V64Z"/></g>
        </defs>
      </svg>
    </ucdlib-iconset>
  `, true)}
  <p>Move it to the document head: </p>
  ${this.jsPanel(`
  const iconset = document.querySelector('ucdlib-iconset');
  document.head.appendChild(iconset);
  `)}
  <p>Now pass a colon-delimited value into the <code>icon</code> attribute of the <code>ucdlib-icon</code> element as follows:</p>
  ${this.examplePanel(html`
    <div style="display:flex;">
      <ucdlib-icon icon="arrows:back"></ucdlib-icon>
      <ucdlib-icon icon="arrows:forward"></ucdlib-icon>
      <ucdlib-icon icon="arrows:upward" class="category-brand--secondary category-brand__text"></ucdlib-icon>
    </div>
  `)}

  <h2>Using cork-icon-set-generator</h2>
  <p>Todo</p> 


`;}