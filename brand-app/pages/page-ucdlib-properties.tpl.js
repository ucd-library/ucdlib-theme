import { html, css } from 'lit';
// import '@ucd-lib/theme-elements/ucdlib/ucdlib-md/ucdlib-md';

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
    ${this.pageTitle("Hydrate Complex Properties of a Web Component")}
    <p>The <code>ucdlib-properties</code> element along with the <code>SSRPropertiesController</code> can be used to inject data into properties of a web component</p>

    <h2>Using the component</h2>
    
    ${this.examplePanel(html`
    <ucdlib-my-cool-component>
      <ucdlib-properties type="json">
        {"testing":"ok", "complex" : {"values": 1, "can-be": "nested"}}
      </ucdlib-properties>
    </ucdlib-my-cool-component>
    `)}

    <p>
      In this case, <code>ucdlib-my-cool-component</code> is your custom component. In your custom components <code>connectedCallback</code>, connect the <code>SSRPropertiesController</code>
    </p>
    
    ${this.examplePanel(html`
        connectedCallback() {
          super.connectedCallback();
          this.propertiesController = new SSRPropertiesController(this);
        }
    `)}

    <p>
      The json data inside <code>ucdlib-properties</code> contains the properties that will be injected into your custom component. You can also use the <code>request-update</code> attribute
      force a rerender, useful if you're adding properties that didn't exist in the custom component and you want to ensure it rerenders.
    </p>

    ${this.examplePanel(html`
      <ucdlib-my-cool-component>
        <ucdlib-properties type="json" request-update>
          {"testing":"ok", "complex" : {"values": 1, "can-be": "nested"}}
        </ucdlib-properties>
      </ucdlib-my-cool-component>
    `)}
    
  `;
}
