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

${this.pageTitle("Inserting an Icon")}
<p>The <code>ucdlib-icon</code> element display brand icons.</p>

<h2>Using the default icon set</h2>
TODO!


<h2>Using src</h2>
<p>
You can also use the <code>src</code> attribute and make a network request instead of using an icon set:
</p>
${this.examplePanel(html`
  <div style="display:flex">
    <ucdlib-icon src="/img/dog.svg"></ucdlib-icon>
    <p>woof</p>
  </div>
`)}
`;}

