import {html, LitElement} from 'lit';
import {render, styles} from "./ucd-theme-author-profile.tpl.js";
import {TaskController} from '../../utils/controllers/task.js';

/**
 * @class AuthorProfile
 * @description This author profile hydrates with the website wordpress api and goes into a profile block.
 * @property {String} href - Pointer to the permalink
 * @property {String} cite - Specify the citation style
 *
 * <ucdlib-sils-permalink email="https://search.library.ucdavis.edu/permalink/01UCD_INST/1uov27j/alma9981249369903126"/>
 */

export default class BrandAuthorProfile extends LitElement {
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
      department: {type: String}
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
    this.size;
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
    this._handleResize = this._handleResize.bind(this);


  }

    /**
   * @method connectedCallback
   * @description lit method called when element is connected to dom
   */
     connectedCallback() {
      super.connectedCallback();
      window.addEventListener('resize', this._handleResize);
    }
  
    /**
     * @method disconnectedCallback
     * @description lit method called when element is disconnected to dom
     */  
    disconnectedCallback() {
      window.removeEventListener('resize', this._handleResize);
      super.disconnectedCallback();
    }
  
  /**
     * @method updated
     * @description lit method called when props update
     * 
     * @param {Object} props 
     */
  updated(props) {
    requestAnimationFrame( () => this._handleResize());
    // if (props.has('visible') && this.visible ) {
      
    // }
  }

  /**
   * @method _handleResize
   * @description bound to main window resize event
   */
  _handleResize() {
    this.size = window.innerWidth;
    this.requestUpdate();
  }
  /**

  /**
   * @method firstUpdated
   * 
   * @description updated when the page first renders
   * 
   * @param {Object} changedProperties 
   * 
   */  
  firstUpdated(changedProperties){
    console.log(changedProperties);
    if(this.email != ''){
      this.eController = new TaskController(this, this._requestUrl());

      this.requestUpdate();
    }
  }



  

  validationLink(email){
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;  
    return regexExp.test(email);
  }

  _onPending(){
    this.PENDING = true;
  }
 

  _onError(e){
    this.ERROR = true;
    console.log("Error:", e);
  }


  _onComplete(results){
    this.COMPLETE = true;
    this.PENDING = false;
    this.LOADING = false;
    this.results = results;

    this.id = this.results.id;

    this.nameLast = this.results.nameLast;

    this.nameFirst = this.results.nameFirst;

    this.link = this.results.link;

    this.contactWebsite = this.results.contactWebsite.length !== 0 ? this.results.contactWebsite[0].value :null;

    this.contactEmail = this.results.contactEmail.length !== 0 ? this.results.contactEmail[0].value : null;

    this.contactPhone = this.results.contactPhone.length !== 0 ? this.results.contactPhone[0].value : null;

    this.contactAppointmentUrl = this.results.contactAppointmentUrl;
 
    this.positionTitle = this.results.positionTitle;

    this.photo = this.results.photo;

    this.department = this.results.department.title;

    this.requestUpdate();


  }


  _requestUrl(){
    let email =this.email;
    let validate = this.validationLink(email);
    if(!validate)  console.error(email);

    let url = "https://sandbox.library.ucdavis.edu/wp-json/ucdlib-directory/person/" + String(email);
    this.requestUpdate();
    
    return url;
  }

  _onLoading(){
    this.LOADING = true;
  }


}

customElements.define('brand-author-profile', BrandAuthorProfile);
