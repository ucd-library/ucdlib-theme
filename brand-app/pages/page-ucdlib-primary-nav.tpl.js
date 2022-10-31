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


${this.pageTitle('Primary Nav')}
${this.importPanel("ucdlib/ucdlib-primary-nav/ucdlib-primary-nav.js")}

<h2>Simple Nav</h2>
<p>Pass through <code>a</code> tags as children to make a simple nav. By default, the element does not have a background color, so make sure it is within a blue parent</p>
${this.examplePanel(this.exSimple)}


<h2>Nav with Dropdowns</h2>
<p>Pass through a UL element with a <code>link-text</code> attribute to make a nav with dropdowns.
By default, the element only goes two menus deep.
</p>
${this.examplePanel(this.exAdvanced)}

<h2>Mega Menu</h2>
<p>Specify <code>nav-type="mega"</code> to make all the menus open at once. Submenus can only be one level deep.</p>
${this.examplePanel(this.exMega)}

<h3>Customizing the Mobile Width Threshold</h3>
<p>As with <a href="#ucdlib-header">ucdlib-header</a> (and in conjunction with it), you can change the screen width for mobile vs desktop (default is 755px):</p>
${this.examplePanel(html`
  <ucdlib-header is-demo prevent-fixed mobile-width="500">
    <ucdlib-primary-nav mobile-width="500">
      <a href="#">Books</a>
      <a href=#>Magazines</a>
      <a href="#">Journals</a>
    </ucdlib-primary-nav>
  </ucdlib-header>
`)}

`;}