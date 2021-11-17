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
  <style>
    .vm-teaser__figure.category_a{
      background-color:#dcdcdc;
      height:165px;
      width:135px;
    }
    .load_teaser_a{
      background-color:#dcdcdc;
      width: 85%;
      height:25px;
    }
    .load_teaser_b{
      background-color:#dcdcdc;
      width: 67%;
      height:20px;
    }
    .load_teaser_c{
      background-color:#dcdcdc;
      width: 33.3%;
      height:18px;
    }
  </style>
  ${this.perma.render({
      complete: (result) => this.format(result),
      initial: () => this._onLoading(),
      pending: () => console.log("Loading..."),
      error: (e) => console.log("Error:", e)
    })}

  <article class="vm-teaser   ">
  ${!this.loading ? html`

  <div class="vm-teaser__figure category">
      <a href="${this.image}"><img src="${this.image}" alt="" class="" width="135" loading="eager" />
      </a>
  </div>
    `:html`
    <div class="vm-teaser__figure category_a"></div>
    `}
  <div class="vm-teaser__body">
  ${this.loading ? html`
    <div class="load_teaser_a"></div>
    <br/>
    <div class="load_teaser_b"></div>
    <br/>
    <div class="load_teaser_c"></div>
    <br/>
    <div class="load_teaser_c"></div>
  `: html`
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
    `}
  </div>
</article>





`;
}