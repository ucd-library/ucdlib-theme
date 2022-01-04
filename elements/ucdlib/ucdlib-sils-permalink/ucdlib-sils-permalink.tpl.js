import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import teaserStyles from "@ucd-lib/theme-sass/4_component/_index.css.js";
import baseStyles from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
import buttons from "@ucd-lib/theme-sass/2_base_class/_index.css.js";
export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    form {
      width:100%;
    }
    #tag {
      width:75%;
      display: inline-block;
    }
    #tag-color {
      width:24%;
      display: inline-block;    
    }
    #delete {
      width:24%;
      display: inline-block;    
    }
    #permalink-author {
      width:75%;
      display: inline-block;
    }
    #permalink-tags {
      width:75%;
      display: inline-block;  
    }
    #permalink-tags-url {
      width:75%;
      display: inline-block;  
    }


  `;

  return [elementStyles,baseStyles,teaserStyles,normalizeCss, buttons];
}

export function render() {
  return html`
  <style>
    .vm-teaser__figure.category_loading{
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
    ${this.perma ? html`
      ${this.perma.render({
        complete: (result) => this._onComplete(result),
        initial: () => this._onLoading(),
        pending: () => this._onPending(),
        error: (e) => this._onError(e)
        })
      }`:html``}

  <article class="vm-teaser   ">
  ${!this.LOADING ? html`
    <div class="vm-teaser__figure category">
        <a href="${this.image}"><img src="${this.image}" alt="" class="" width="135" loading="eager" />
        </a>
    </div> 
    <div class="vm-teaser__body">
    <h3 class="vm-teaser__title"><a href="${this.permalink}">${this.title}</a></h3>

      <ul class="vm-teaser__byline">
        <li>
        by
        ${this.authorFull ? html`${this.authorFull.map(author => 
           html`<span class="byline"> ${author['label'].split(",")[1] ? html`${author['label'].split(",")[1]},`: html``}${author['label'].split(",")[0]}.</span>--`)}
          `:html``
        }
        </li>
        <li>${this.year}</li>
      </ul>
      <ul class="vm-teaser__categories">
        ${this.tags.map(tag => html`<li class="vm-teaser__cat-marker ${this.elemClass[Math.floor(Math.random() * this.elemClass.length)]}"><a href="${tag['id']}">${tag['subject']}</a></li><br/>`)}
      </ul>
      <div class="vm-teaser__summary">${this.summary}</div>
    </div>
  `:html`
    <div class="vm-teaser__figure category_loading"></div>
    <div class="vm-teaser__body">
      <div class="load_teaser_a"></div>
      <br/>
      <div class="load_teaser_b"></div>
      <br/>
      <div class="load_teaser_c"></div>
      <br/>
      <div class="load_teaser_c"></div>
    </div>
  `}
  <button class="btn--primary" @click="${this.handleEdit}">Edit Permalink</button>
</article>





`;
}