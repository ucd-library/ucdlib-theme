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

  ${this.pageTitle("Slim Select")}
  ${this.importPanel("brand/ucd-theme-slim-select/ucd-theme-slim-select.js")}

  <p>The <code>ucd-theme-slim-select</code> component renders a stylized, searcheable select-like element.
  It uses the <a href="https://slimselectjs.com/">Slim Select package</a>, which parses the select element you pass through:

  </p>

  ${this.examplePanel(html`
  <ucd-theme-slim-select>
    <select multiple>
      <optgroup label="Fruits">
        <option>Apples</option>
        <option>Bananas</option>
        <option>Plums</option>
        <option>Figs</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option>Peppers</option>
        <option>Eggplant</option>
        <option>Squash</option>
      </optgroup>
    </select>
  </ucd-theme-slim-select>
  `)}

  <p>Here we rely on global styles for the label:</p>
  ${this.examplePanel(html`
    <fieldset>
      <div class="field-container">
        <label for="selectpicker">Select</label>
        <ucd-theme-slim-select>
          <select multiple id="selectpicker">
            <optgroup label="Fruits">
              <option>Apples</option>
              <option>Bananas</option>
              <option>Plums</option>
              <option>Figs</option>
            </optgroup>
            <optgroup label="Vegetables">
              <option>Peppers</option>
              <option>Eggplant</option>
              <option>Squash</option>
            </optgroup>
          </select>
        </ucd-theme-slim-select>
      </div>
    </fieldset>
  `)}

  <h2>Events</h2>
  <p>A <code>change</code> event will fire when there is a change:</p>

  ${this.examplePanel(html`
  <ucd-theme-slim-select  @change="${(e) => console.log(e.detail)}">
    <select multiple>
      <optgroup label="Fruits">
        <option>Apples</option>
        <option>Bananas</option>
        <option>Plums</option>
        <option>Figs</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option>Peppers</option>
        <option>Eggplant</option>
        <option>Squash</option>
      </optgroup>
    </select>
  </ucd-theme-slim-select>
  `)}

`;}