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

<h1>Pagination</h1>

<ucd-theme-pagination
  current-page="50"
  max-pages="100"
  use-hash>
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="1"
  max-pages="10">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="2"
  max-pages="33"
  base-path="/foo/bar/">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="32"
  max-pages="33"
  use-hash
  base-path="/foo/bar/">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="33"
  max-pages="33"
  base-path="/foo/bar/">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="50"
  max-pages="100"
  visible-link-count="14">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="99"
  max-pages="100"
  visible-link-count="14">
</ucd-theme-pagination>
<ucd-theme-pagination
  current-page="50"
  max-pages="100"
  visible-link-count="5">
</ucd-theme-pagination>


`;}