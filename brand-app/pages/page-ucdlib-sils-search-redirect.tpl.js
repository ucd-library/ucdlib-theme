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
  ${this.pageTitle("SILS Search Redirect Widget")}
  <p>Display a simple search interface that will 
    redirect the user's search to the SILS discovery application (Ex Libris Primo)</p>

  ${this.examplePanel(html`
    <ucdlib-sils-search-redirect>
    </ucdlib-sils-search-redirect>
  `)}

  <p>You can use attributes to prepopulate the form:</p>
  ${this.examplePanel(html`
    <ucdlib-sils-search-redirect 
      query="good dogs"
      ucd-only
    >
    </ucdlib-sils-search-redirect>
  `)}

  <p>By default, this component will send the user to Primo. 
    However, the <code>prevent-redirect</code> attribute will override this behavior 
    and emit a <code>submit</code> event instead:</p>
  ${this.examplePanel(html`
    <ucdlib-sils-search-redirect
      prevent-redirect
      @search="${e => console.log(e.detail)}"
    >
    </ucdlib-sils-search-redirect>
  `)}

  <p> To adjust colors for use on a dark background use the <code>dark-background</code> attribute:</p>
  ${this.examplePanel(html`
    <div class="o-box category-brand--primary category-brand__background">
      <ucdlib-sils-search-redirect dark-background>
      </ucdlib-sils-search-redirect>
    </div>
  `)}


`;}