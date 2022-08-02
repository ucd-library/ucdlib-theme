import {html, LitElement} from 'lit';
import {render, styles} from "./ucd-theme-author-profile.tpl.js";
import {TaskController} from '../../utils/controllers/task.js';

/**
 * @class AuthorProfile
 * @description This author profile hydrates with the website wordpress api and goes into a profile block.
 * @property {String} email - Email to reference person
 * @property {String} domain - Specify the domain to choose from
 *
 * <ucdlib-theme-author-profile domain="sandbox" email='sabaggett@ucdavis.edu></ucdlib-theme-author-profile>
 */
export default class UcdlibAuthorProfile extends LitElement {
  static get properties() {
    return {
      results : {type: Object, attribute:false},
      email : {type: String},
      id: {type: Number},
      nameLast: {type: String},
      nameFirst: {type: String},
      link: {type: String},
      contactWebsite: {type: String},
      contactEmail: {type: String},
      contactPhone: {type: String},
      contactWebsiteLabel: {type: String},
      contactEmailLabel: {type: String},
      contactPhoneLabel: {type: String},
      contactAppointmentUrl: {type: String},
      positionTitle: {type: String},
      photo: {type: Object},
      department: {type: String},
      domain: {type: String},
      sidebar: {type: Boolean}
    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.PENDING = false;
    this.LOADING = false;
    this.COMPLETE = false;
    this.ERROR = false;
    this.results = {};
    this.email = '';
    this.domain = '';

    this.errorMessage = 'This is not an email.';
    
    this.svgIcon = {
      'url': html`
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M640,328V312a16,16,0,0,0-16-16H344V256h72a32,32,0,0,0,32-32V96a32,32,0,0,0-32-32H224a32,32,0,0,0-32,32V224a32,32,0,0,0,32,32h72v40H16A16,16,0,0,0,0,312v16a16,16,0,0,0,16,16H120v40H64a32,32,0,0,0-32,32V544a32,32,0,0,0,32,32H224a32,32,0,0,0,32-32V416a32,32,0,0,0-32-32H168V344H472v40H416a32,32,0,0,0-32,32V544a32,32,0,0,0,32,32H576a32,32,0,0,0,32-32V416a32,32,0,0,0-32-32H520V344H624A16,16,0,0,0,640,328ZM256,192V128H384v64ZM192,512H96V448h96Zm352,0H448V448h96Z"/>
              </svg> `,
      'email': html`
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M502.3,190.8a6,6,0,0,1,9.7,4.7V400a48,48,0,0,1-48,48H48A48,48,0,0,1,0,400V195.6a6,6,0,0,1,9.7-4.7c22.4,17.4,52.1,39.5,154.1,113.6,21.1,15.4,56.7,47.8,92.2,47.6,35.7.3,72-32.8,92.3-47.6C450.3,230.4,479.9,208.2,502.3,190.8ZM256,320c23.2.4,56.6-29.2,73.4-41.4,132.7-96.3,142.8-104.7,173.4-128.7A23.93,23.93,0,0,0,512,131V112a48,48,0,0,0-48-48H48A48,48,0,0,0,0,112v19a24.08,24.08,0,0,0,9.2,18.9c30.6,23.9,40.7,32.4,173.4,128.7,16.8,12.2,50.2,41.8,73.4,41.4Z"/>
              </svg>`,
      'calendar': html `
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512">
              <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"/>
              </svg>`,
      'phone': html `
              <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
              </svg>
        `
    };
    this.render=render.bind(this);

  }


  /**
   * @method updated
   * 
   * @description request user data when email or domain changes
   * 
   * @param {Object} props 
   * 
   */  
  updated(props){
    if( props.has('email') || props.has('domain') ){
      if( !this.email ) return;
      this.eController = new TaskController(this, this._requestUrl());
    }
  }
  
  /**
   * @method validationLink
   * 
   * @description Validates the email to make sure it is an email
   * 
   * @param {String} email 
   * 
   * @returns {String}
   * 
   */ 
  validationLink(email){
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;  
    return regexExp.test(email);
  }

  /**
   * @method validationLink
   * 
   * @description Validates the email to make sure it is an email
   * 
   * @param {String} email 
   * 
   * @returns {String}
   * 
   */ 
  _onPending(){
    this.PENDING = true;
  }
 
  /**
   * @method _onError
   * 
   * @description Sets error variable to true
   * 
   * @param {String} e 
   * 
   */ 
  _onError(e){
    this.ERROR = true;
    console.log(this.ERROR);
    console.error(e);
  }

  /**
   * @method _onComplete
   * 
   * @description on complete defines the forms and updates
   * 
   * @param {Object} results 
   * 
   * 
   */ 
  _onComplete(results){
    this.results = results;
    if(this.results.data != undefined) {
      this.ERROR = true;
    }
    else {
      this.COMPLETE = true;
      this.PENDING = false;
      this.LOADING = false;


      this.id = this.results.id;

      this.nameLast = this.results.nameLast;

      this.nameFirst = this.results.nameFirst;

      this.link = this.results.link;

      this.contactWebsite = this.results.contactWebsite.length !== 0 ? this.results.contactWebsite[0].value :null;

      this.contactEmail = this.results.contactEmail.length !== 0 ? this.results.contactEmail[0].value : null;

      this.contactPhone = this.results.contactPhone.length !== 0 ? this.results.contactPhone[0].value : null;

      this.contactAppointmentUrl = this.results.contactAppointmentUrl != "" ? this.results.contactAppointmentUrl : undefined;
  
      this.positionTitle = this.results.positionTitle;

      this.photo = Object.keys(this.results.photo).length !== 0 ? this.results.photo : "Empty";

      this.department = this.results.department.title;
      
      this.photoAlt = this.nameFirst + "_" + this.nameLast + "_Img";

      this.requestUpdate();
    }

    

  }

  /**
   * @method _requestUrl
   * 
   * @description configures the url and checks for email validation
   * 
   * @returns {String}
   * 
   */ 
  _requestUrl(){
    let email =this.email;
    let validate = this.validationLink(email);
    if(!validate)  console.error(email);
    let url;

    url = "https://library.ucdavis.edu/wp-json/ucdlib-directory/person/" + String(email);
    if (this.domain != "")
      url = "https://" + this.domain + ".library.ucdavis.edu/wp-json/ucdlib-directory/person/" + String(email);
    this.requestUpdate();
    
    return url;
  }

  /**
   * @method _onLoading
   * 
   * @description Sets loading variable to true
   * 
   * 
   */ 
  _onLoading(){
    this.LOADING = true;
  }


}

customElements.define('ucdlib-theme-author-profile', UcdlibAuthorProfile);
