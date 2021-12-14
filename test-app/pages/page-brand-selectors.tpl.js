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
  <style>
    .colored-backgrounds .quick-summary__body > div {
      height: 30px;
    }
  </style>
  ${this.pageTitle("Using Brand Selectors")}
  <p>There are several ways to use the UCD Theme Selector options.
    Depending on your site architecture, at least one of the following options will work.</p>

  <h3>Selector Buttons:</h3>

  <p>Text Field Option:</p>
  ${this.examplePanel(html`
    <fieldset>
        <div class="field-container">
            <label for="text">Text Input <abbr title="Required">*</abbr></label>
            <input type="text" placeholder="Text Input">
        </div>
        <div class="field-container">
            <label for="password">Password</label>
            <input type="password" placeholder="Type your Password">
        </div>
        <div class="field-container">
            <label for="webaddress">Web Address</label>
            <input type="url" placeholder="http://yoursite.com">
        </div>
        <div class="field-container">
            <label for="emailaddress">Email Address</label>
            <input type="email" placeholder="name@email.com">
        </div>
        <div class="field-container">
            <label for="search">Search</label>
            <input type="search" placeholder="Enter Search Term">
        </div>
        <div class="field-container">
            <label for="number">Number Input <abbr title="Required">*</abbr></label>
            <input type="number" placeholder="Enter a Number" pattern="[0-9]*">
        </div>
        <div class="field-container">
            <label for="textarea">Textarea</label>
            <textarea rows="8" cols="48" placeholder="Enter your message here"></textarea>
        </div>
        <input type="submit" class="form-submit btn--primary btn--block" placeholder="Text Input">
    </fieldset>
  `)}

  <p>Select Menu Option for both regular and having subgroups:</p>
  ${this.examplePanel(html`
  <fieldset>
    <div class="field-container">
        <label for="selectpicker">Select</label>
        <select id="selectpicker">
                <option>Option One</option>
                <option>Option Two</option>
                <option>Option Three</option>
        </select>
    </div>
</fieldset>
  <fieldset>
    <div class="field-container">
        <label for="selectpicker">Select</label>
        <select id="selectpicker">
            <optgroup label="Option Group">
                <option>Option Four</option>
                <option>Option Five</option>
                <option>Option Six</option>
            </optgroup>
            <optgroup label="Option Group">
                <option>Option Seven</option>
                <option>Option Eight</option>
                <option>Option Nine</option>
            </optgroup>
        </select>
    </div>
</fieldset>
  `)}

  <p>CheckBox Option:</p>
  ${this.examplePanel(html`
    <form action="#">
    <fieldset class="checkbox">
        <legend>Styled Checkbox <abbr title="Required">*</abbr></legend>
        <ul class="list--reset">
        <li><input id="styled-checkbox1" name="checkbox" type="checkbox" checked="checked"><label for="styled-checkbox1">Choice A</label></li>
        <li><input id="styled-checkbox2" name="checkbox" type="checkbox"><label for="styled-checkbox2">Choice B</label></li>
        <li><input id="styled-checkbox3" name="checkbox" type="checkbox"><label for="styled-checkbox3">Choice C</label></li>
        </ul>
    </fieldset>
    </form>
  `)}

  <p>Radio Option:</p>
  ${this.examplePanel(html`
    <form action="#">
    <fieldset class="radio">
        <legend>Styled Radio</legend>
        <ul class="list--reset">
        <li><input id="styled-radio1" name="radio" type="radio" class="radio" checked="checked"><label for="styled-radio1">Option 1</label></li>
        <li><input id="styled-radio2" name="radio" type="radio" class="radio"><label for="styled-radio2">Option 2</label></li>
        <li><input id="styled-radio3" name="radio" type="radio" class="radio"><label for="styled-radio3">Option 3</label></li>
        </ul>
    </fieldset>
    </form>
  `)}


`;}
