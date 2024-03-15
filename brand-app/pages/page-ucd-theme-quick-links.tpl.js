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
  ${this.pageTitle('Quick Links')}
  ${this.importPanel("brand/ucd-theme-quick-links/ucd-theme-quick-links.js")}

  <h2>Basic Usage</h2>
  <p>Pass through <code>a</code> tags as children to add items to a quick links element.</p>

  ${this.examplePanel(html`
    <ucd-theme-quick-links>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </ucd-theme-quick-links>
  `)}

  <p>Use the <code>title</code> attribute to change the primary button text</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links 
      title="Favorite Things">
      <a href="#">Raindrops on roses</a>
      <a href="#">Whiskers on kittens</a>
      <a href="#">Bright copper kettles</a>
      <a href="#">Warm woolen mittens</a>
    </ucd-theme-quick-links>
  `)}

  <p>Use the <code>show-profile-icon</code> attribute to show a profile icon</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links 
      title="My Account"
      show-profile-icon>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </ucd-theme-quick-links>
  `)}

  <h2>Style Modifiers</h2>

  <p>Use space-delimited keywords in the <code>style-modifers</code> attribute to alter the appearance of the element.
  Refer to patternlab for a complete list of style modifiers.
  </p>
  <p>Two columns:</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links style-modifiers="two-columns">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </ucd-theme-quick-links>
  `)}

  <p><code>highlight</code> will style the first three links in the list:</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links style-modifiers="highlight">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
      <a href="#">Link 6</a>
      <a href="#">Link 7</a>
      <a href="#">Link 8</a>
    </ucd-theme-quick-links>
  `)}

  <p>Certain style modifiers can be combined:</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links style-modifiers="two-columns highlight">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
      <a href="#">Link 6</a>
      <a href="#">Link 7</a>
      <a href="#">Link 8</a>
    </ucd-theme-quick-links>
  `)}

  <p>The <code>home-site</code> modifier will display the icons for the top three highlighted items used by <a href="https://ucdavis.edu">ucdavis.edu</a>:</p>

  ${this.examplePanel(html`
    <ucd-theme-quick-links style-modifiers="two-columns home-site">
      <a href="#">MyUcdavis</a>
      <a href="#">MyAdmissions</a>
      <a href="#">Make a Gift to UC Davis</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
      <a href="#">Link 6</a>
      <a href="#">Link 7</a>
      <a href="#">Link 8</a>
    </ucd-theme-quick-links>
  `)}

  <p>However, this is of limited utility. You can use your own icons instead by nesting them within the first three <code>a</code> tags:</p>

  ${this.examplePanel(html`
    <ucd-theme-quick-links 
      style-modifiers="two-columns home-site" 
      title="Animals">
      <a href="#"><i class="fas fa-dragon"></i>Dragons</a>
      <a href="#"><i class="fas fa-dove"></i>Doves</a>
      <a href="#"><i class="fas fa-hippo"></i>Hippos</a>
      <a href="#">Dogs</a>
      <a href="#">Cats</a>
      <a href="#">Chickens</a>
      <a href="#">Goats</a>
      <a href="#">Cows</a>
    </ucd-theme-quick-links>
  `)}


  <h2>Events</h2>
  <p>A <code>toggle</code> event is dispatched when the menu is opened or closed.</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links 
      @toggle="${e => console.log('is open:', e.detail.open)}">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </ucd-theme-quick-links>
  `)}

  <p>If an <code>a</code> tag is missing an href, an <code>item-click</code> event is dispatched when it is clicked.</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links 
      @item-click="${e => console.log('item clicked:', e.detail.item)}">
      <a>Link 1</a>
      <a>Link 2</a>
      <a>Link 3</a>
    </ucd-theme-quick-links>
  `)}


`;}