import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import teaserStyles from "@ucd-lib/theme-sass/4_component/_index.css.js";
import baseStyles from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles,baseStyles,teaserStyles,normalizeCss];
}

export function render() {
  return html`
  <article class="vm-teaser   ">
  <div class="vm-teaser__figure category">
    <a href="${this.image}"><img src="${this.image}" alt="Thumbnail" class="" width="135" loading="lazy" />
    </a>
  </div>
  <div class="vm-teaser__body">
    <h3 class="vm-teaser__title"><a href="${this.authorID["id"]}">${this.title}</a></h3>
    <ul class="vm-teaser__byline">
      <li><span class="byline">by ${this.authorLast},${this.authorFirst}.</span>
      </li>
      <li>${this.year}</li>
    </ul>
    <ul class="vm-teaser__categories">
      ${this.tags.map(tag => html`<li class="vm-teaser__cat-marker ${this.elemClass[Math.floor(Math.random() * this.elemClass.length)]}"><a href="${tag['id']}">${tag['subject']}</a></li><br/>`)}
    </ul>
    <div class="vm-teaser__summary">${this.summary}</div>
  </div>
</article>
`;
}
