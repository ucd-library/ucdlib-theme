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

`;}