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
    .container {
      display: grid;
      grid-template-columns: 20% 80%;
    }
    article {
      width:75%;
      margin-bottom: 50px;
    }
    .photo {
      margin: 0 auto;
      width: 135px;    
      height: 135px;    
      background-color:darkgrey;
    }
    .photo_container {
      text-align: center;
      display:table-cell;
      vertical-align:top;
      display: flex;
      height:135px;
    }
    .text_container {
      height:135px;
    }
    .name {
      color:var(--ucd-blue-80); 
      margin-bottom:0;
    }
    .title {
      margin-bottom:0;
    }
    .info {
      color:var(--ucd-blue-70); 
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

    @media (max-width: 1365px) {
      .photo {
          width: 100px;  
          height: 100px;  
        }
      }
    @media (max-width: 1100px) {
      .photo {
        width: 90px;  
        height: 90px;  
      }
    }
    @media (max-width: 1000px) {
      .photo {
        width: 80px;  
        height: 80px;  
      }
    }
    @media (max-width: 875px) {
      .photo {
        width: 70px;  
        height: 70px;  
      }
    }
    @media (max-width: 800px) {
      .container {
        display: block;

      }
      .contact-list {
        display:block;
        margin-bottom:5px;
      }
      .photo {
        width: 135px;    
        height: 135px;    
      }
      .text_container {
        text-align:left;
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


      <div class="text_container">
        <h3 class="name"><a class="name" href="">${this.nameFirst} ${this.nameLast}</a></h3>
        <p  class="title">${this.positionTitle} &#124; ${this.department}</p>
            <p class="contact-list">${this.contactPhone ? html`${this.svgIcon.phone} <a class="info" href="tel:${this.contactPhone}">${this.contactPhone}</a> ${this.size >= 800 ? html` &#124;`: html``} `: html``}</p>
            <p class="contact-list">${this.contactEmail ? html`${this.svgIcon.email} <a class="info" href="mailto:${this.contactEmail}">${this.contactEmail}</a> ${this.size >= 800 ? html` &#124;`: html``}`: html``}</p>
            <p class="contact-list">${this.svgIcon.calendar} <a class="info" href="${this.contactAppointmentUrl}">Book an Appointment</a></p>
      </div>
    <!-- this.id
    this.nameLast
    this.nameFirst
    this.link
    this.contactWebsite
    this.contactEmail
    this.contactPhone
    this.contactAppointmentUrl
    this.positionTitle
    this.photo
    this.department -->

    `:html`
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
</article>
`;
}