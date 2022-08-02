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
    .author_profile{

    }
    .container {
      display: inline-grid;
      grid-template-columns: 15% 85%;
      width:100%;
    }
    .container-no-image {
      display: inline-grid;
      width:100%;
    }
    article {
      margin-bottom: 50px;
    }

    .photo {
      position: relative;
      width:90%;
      height:90%;
    }

    .photo:after {
      content: "";
      display:inline-block;
    }

    .content {
      position: absolute;
      width: 70%;
      height: 70%;
    }

    .text_container {
      vertical-align:top;
      display:inline-block;
    }
    .name {
      color: #13639e;
      margin-bottom:0;
    }
    .title {
      margin-bottom:0;
    }
    .info {
      color: #13639e;
      margin-bottom:0;
    }
    .svg-icon {
      width: 20px;
      height: 20px;
      fill: #73ABDD;
      margin-right: 5px;
    }
    .contact-list{
      display:inline-block;
      margin-top:5px;
    }
    .pipe {
        font-size:30px;
        vertical-align: middle;
        font-weight: lighter;
        line-height: 25px;
        color:#36454F;
    }
    .noApp-pipe {
      display:none;
    }
    @media (min-width: 992px) {
      .container {
        grid-template-columns: 25% 75%;
      }
    }
    @media (max-width: 800px) {

      .contact-list {
        display:block;
        margin-bottom:5px;
      }

      .contact-list .pipe {
        display:none;
      }
      .photo {
        width:90%;
        height:90%;
      }

    }

    @media (max-width: 550px) {
      .container {
        grid-template-columns: 35% 65%;
      }
      .photo {
        width:80%;
        height:80%;
      }

    }
  </style>
  <!-- 
    Starts the Permalink Fetch
  -->
${this.eController ? html`
    ${this.eController.render({
      complete: (result) => this._onComplete(result),
      initial: () => this._onLoading(),
      pending: () => this._onPending(),
      error: (e) => this._onError(e)
      })
    }`:html``
}

<article>
  ${!this.LOADING ? html`
      ${this.photo != "Empty"  && this.photo != undefined ? 
      html`   
      <div class="container">
        <div class="photo"><img src="${this.photo.link}" alt="${this.photoAlt}"></div>
        <div class="text_container"> 
          <h3 class="name"><a class="name" href="">${this.nameFirst} ${this.nameLast}</a></h3>
          <p class="title">${this.positionTitle} <span class="pipe">&#124;</span> ${this.department}</p>
          <p class="contact-list">${this.contactPhone ? html`${this.svgIcon.phone} <a class="info" href="tel:${this.contactPhone}">${this.contactPhone}</a>  <span class="pipe">&#124;</span>`: html``}</p>
          <p class="contact-list">${this.contactEmail ? html`${this.svgIcon.email} <a class="info" href="mailto:${this.contactEmail}">${this.contactEmail}</a> ${this.contactAppointmentUrl ? html`<span class="pipe">&#124;</span>`:html`<span class="noApp-pipe">&#124;</span>`}`: html``}</p>
          <p class="contact-list">${this.contactAppointmentUrl ? html`${this.svgIcon.calendar} <a class="info" href="${this.contactAppointmentUrl ? this.contactAppointmentUrl:"#"}">Book an Appointment</a>`: html``}</p>
        </div>
      </div>
      `
      :html`
      <div class="container-no-image">
        <div class="text_container"> 
          <h3 class="name"><a class="name" href="">${this.nameFirst} ${this.nameLast}</a></h3>
          <p class="title">${this.positionTitle} <span class="pipe">&#124;</span> ${this.department}</p>
          <p class="contact-list">${this.contactPhone ? html`${this.svgIcon.phone} <a class="info" href="tel:${this.contactPhone}">${this.contactPhone}</a>  <span class="pipe">&#124;</span> `: html``}</p>
          <p class="contact-list">${this.contactEmail ? html`${this.svgIcon.email} <a class="info" href="mailto:${this.contactEmail}">${this.contactEmail}</a> ${this.contactAppointmentUrl ? html`<span class="pipe">&#124;</span>`:html`<span class="noApp-pipe">&#124;</span>`}`: html``}</p>
          <p class="contact-list">${this.contactAppointmentUrl ? html`${this.svgIcon.calendar} <a class="info" href="${this.contactAppointmentUrl ? this.contactAppointmentUrl:"#"}">Book an Appointment</a>`: html``}</p>
        </div>
      </div>
      `}

    `:html`
      ${this.ERROR ? html`
        <p>Person does not exist!</p>
      `: html`
        <!-- 
          If it is in the loading stage of the permalink fetch
          it will render this
          look.
        -->
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

    `}
</article>
`;
}