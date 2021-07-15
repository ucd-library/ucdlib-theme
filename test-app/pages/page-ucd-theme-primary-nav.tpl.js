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


<h1>Primary Nav</h1>

<slot></slot>

<p>Simple nav. No dropdowns.</p>
<div class="category-brand__background category-brand--primary">
  <ucd-theme-primary-nav>
    <a>ITEM 1</a>
    <a href=#>ITEM 2</a>
    <a href="#">ITEM 3</a>
  </ucd-theme-primary-nav>
</div>

<p class="u-space-mt--large">Nav with dropdowns</p>
<div class="category-brand__background category-brand--primary">
  <ucd-theme-primary-nav>
    <a>ITEM 1</a>
    <ul href="#" link-text="Wheel of Time">
      <li><a href="#">Aes Sedai</a></li>
      <ul href="#" link-text="Ta'veren">
        <li><a href="#">Rand al'Thor</a></li>
        <li><a href="#">Matrim Cauthon</a></li>
        <li><a href="#">Perrin Aybara</a></li>
      </ul>
      <li><a href="#">Warders</a></li>
    </ul>

    <a href="#">ITEM 3</a>
  </ucd-theme-primary-nav>
</div>

<p class="u-space-mt--large">Mega nav</p>
  <div>
    <ucd-theme-primary-nav nav-type="mega" style-modifiers="justify">
      <ul link-text="Lord of the Rings">
        <li><a href="">Wizards</a></li>
        <li><a href="">Ents</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Orcs</a></li>
        <li><a href="">Elves</a></li>
        <li><a href="">Dwarves</a></li>
      </ul>
        
      <ul href="#" link-text="Wheel of Time">
        <li><a href="#">Aes Sedai</a></li>
        <ul href="#" link-text="Ta'veren">
          <li><a href="#">Rand al'Thor</a></li>
          <li><a href="#">Matrim Cauthon</a></li>
          <li><a href="#">Perrin Aybara</a></li>
        </ul>
        <li><a href="#">Warders</a></li>
        <li><a href="">Ogiers</a></li>
      </ul>

      <ul link-text="Kingkiller Chronicle">
        <li><a href="">Humans</a></li>
        <li><a href="">Fae</a></li>
      </ul>
    </ucd-theme-primary-nav>
  </div>

`;}