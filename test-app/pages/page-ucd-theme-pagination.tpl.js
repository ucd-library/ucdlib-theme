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

${this.pageTitle("Pagination")}
${this.importPanel("brand/ucd-theme-pagination/ucd-theme-pagination.js")}

<h2>Basic Use </h2>
<p>Use <code>current-page</code> and <code>max-pages</code> to set the page state.</p>
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="1"
    max-pages="10">
  </ucd-theme-pagination>
`)}

<p><code>visible-link-count</code> will change how many pages to display</p>
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="50"
    max-pages="100"
    visible-link-count="14">
  </ucd-theme-pagination>
`)}
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="50"
    max-pages="100"
    visible-link-count="5">
  </ucd-theme-pagination>
`)}
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="99"
    max-pages="100"
    visible-link-count="14">
  </ucd-theme-pagination>
`)}

<p>Adding the <code>ellipses</code>attribute will always show the min and max pages, and display ellipses if <code>max-pages</code> exceeds <code>visible-link-count</code> </p>
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="8"
    max-pages="20"
    ellipses>
  </ucd-theme-pagination>
`)}
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="1"
    max-pages="20"
    ellipses>
  </ucd-theme-pagination>
`)}

<p><code>xs-screen</code> is an alternative way of displaying the mobile view that only shows the current and max page.
This is the preferred behavior for most Library applications.
</p>
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="1"
    max-pages="20"
    xs-screen>
  </ucd-theme-pagination>
`)}
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="16"
    max-pages="20"
    xs-screen>
  </ucd-theme-pagination>
`)}


<h2>Wiring It Up</h2>
<p>If <code>use-hash</code> or <code>base-path</code> attributes are used, an href will be constructed based on those parameters</p>

${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="50"
    max-pages="100"
    use-hash>
  </ucd-theme-pagination>
`)}

${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="2"
    max-pages="33"
    base-path="/foo/bar/">
  </ucd-theme-pagination>
`)}

${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="32"
    max-pages="33"
    use-hash
    base-path="/foo/bar/">
  </ucd-theme-pagination>
`)}


${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="33"
    max-pages="33"
    base-path="/foo/bar/">
  </ucd-theme-pagination>
`)}



<p>Otherwise a <code>page-change</code> custom event will be fired</p>
${this.examplePanel(html`
  <ucd-theme-pagination
    current-page="33"
    max-pages="33"
    @page-change="${e => console.log(e.detail.page)}">
  </ucd-theme-pagination>
`)}

`;}