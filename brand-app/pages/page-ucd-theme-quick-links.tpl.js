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

  <p>Use the <code>use-icon</code> attribute to show an icon next to the title in desktop view, passing an svg slot</p>
  ${this.examplePanel(html`
    <ucd-theme-quick-links
      title="My Account"
      use-icon>
      <svg slot="custom-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </ucd-theme-quick-links>
  `)}

  ${this.examplePanel(html`
    <ucd-theme-quick-links
      title="Settings"
      use-icon>
      <svg slot="custom-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
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
