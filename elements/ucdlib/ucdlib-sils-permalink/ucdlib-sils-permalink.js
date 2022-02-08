import { LitElement} from 'lit';
import {render, styles} from "./ucdlib-sils-permalink.tpl.js";
import {PermalinkController} from './ucdlib-sils-permalink-controller.js';

/**
 * @class UcdlibSilsPermalink
 * @description This component allows you to easily add individual objects from
 * the UC SILS catalog into your webpage.
 * @property {String} href - Pointer to the permalink
 * @property {String} cite - Specify the citation style
 *
 * <ucdlib-sils-permalink href="https://search.library.ucdavis.edu/permalink/01UCD_INST/1uov27j/alma9981249369903126"/>
 */

export default class UcdlibSilsPermalink extends LitElement {
  static get properties() {
    return {
      results : {type: Object, attribute:false},
      permalink : {type: String},
      image : {type: String},
      title : {type: String},
      authorFull : {type: String},
      authorLast : {type: String, attribute:false},
      authorFirst: {type: String, attribute:false},
      authorID: {type: Array, attribute:false},
      year : { type: String},
      summary : {type: String},
      tags : {type: Array},
      host_url : {type: String},
      teaserType : {type: String, attribute:false},
      publisher : {type: String, attribute:false},
      placePublication : {type: String, attribute:false},
      notes : {type: Array, attribute:false},
      language: {type: String, attribute:false},
      randomClass: {type: String, attribute:false},
      elemClass: {type: Array, attribute:false},
      url: {type: String, attribute:false},
      form: {type: Boolean, attribute:false},
      isCustom: {type:Boolean},
      index: {type:Number},
      newPermalink: {type: Array, hasChanged(newVal, oldVal) {
        return newVal !== oldVal;
      }, attribute:false},

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
    this.loading = false;
    this.resultsPerPage = 9999;
    this.page = 1;
    this.permalink = ''; 
    this.authorLast = '';
    this.authorFirst = '';
    this.authorFull = '';
    this.title = '';
    this.year = '';
    this.summary= '';
    this.host_url= '';
    this.tags = [];
    this.authorID = [];
    this.teaserType = '';
    this.publisher = '';
    this.placePublication = '';
    this.notes = [];
    this.language = '';
    this.randomClass = '';
    this.elemClass = ['tahoe', 'california', 'quad'];
    this.image = '';
    this.url = '';
    this.isCustom = false;
    this.newPermalink = [];
    this.form = false;
    this.index = 0;
    this.tagEntryField = [{url: '', label: '', default: true}];
    this.authorEntryField = [{value: '', default: true}];
    this.errorMessage = 'Href is not a permalink.';
    this.render=render.bind(this);

  }
  
    /**
   * @method firstUpdated
   * 
   * @description updated when the page first renders
   * 
   * @param {Object} changedProperties 
   * 
   */  
  firstUpdated(changedProperties){
    if(this.permalink != ''){
       this.perma = new PermalinkController(this, this._requestUrl());
       this.requestUpdate();
    }
  }



  

  validationLink(url){
    // let match = url.match(/([^\/]+)([a-z0-9]+)$/g);

    // let id = url.includes("/9fle3i/") ? 'L' : url.includes("/1hjlc2p/") ? 'PC' : 'Error';
    // if(url.match(/https:\/\/search.library.ucdavis.edu\/permalink\/01UCD_INST\/([^\/]+)\/([a-zA-Z0-9_]*)/g)){
    //   url = 'https://search.library.ucdavis.edu/primaws/rest/pub/pnxs/' + id + '/' + match[0] +'?vid=01UCD_INST:UCD&lang=en&search_scope=DN_and_CI';
    //   return url;
    // }
    let id;
    if(url != "") id = url.split("/alma")[1];

    url = "https://open-na.hosted.exlibrisgroup.com/alma/01UCD_INST/bibs/" + id;

    
    return url;
  }

  _onPending(){
    this.PENDING = true;
  }
 

  _onError(e){
    this.ERROR = true;
    console.log("Error:", e);
  }

  handleEdit() {
    this.form = true;

    this.requestUpdate();

  }
  handleDelete(){
    let tempDelete = JSON.parse(sessionStorage.getItem("newPermalink"));

    delete tempDelete[this.index];
    tempDelete = Object.fromEntries(Object.entries(tempDelete).filter(([_, v]) => v != null));

    console.log(tempDelete);
    this.requestUpdate;
    sessionStorage.setItem("newPermalink", JSON.stringify(tempDelete));
    location.reload();
  }


    /**
   * @method _addTag
   * 
   * @description Bound to click event on website add button.  adds another 
   * iteration of the element to the DOM and List
   * 
   * @param {Object} element 
   * 
   */  
     _addTag(){
      this.tagEntryField.push({url: '', label: '', default: false});
      this.requestUpdate();
    }

  /**
     * @method _addAuthor
     * 
     * @description Bound to click event of add email button.
     * adds another iteration of the element to the DOM and List
     * 
     * @param {Object} element 
     * 
     */  
  _addAuthor(){
    this.authorEntryField.push({value: '', default: false});
    this.requestUpdate();
  }

  /**
     * @method _sendValues
     * 
     * @description Get the values from the form that is given.
     * 
     * @param {Object} element 
     * 
     */  
   _sendValues(){
    let formData = {};
    let authorList = [];
    let tagtitle = [];
    let url = [];
    let image = [];
    let tags = [];

    formData.title = this.shadowRoot.getElementById("permalink-title").value;
    formData.year = this.shadowRoot.getElementById("permalink-date").value;
    formData.summary = this.shadowRoot.getElementById("permalink-summary").value;
    formData.image = this.shadowRoot.getElementById("permalink-image").value;
    formData.permalink = this.shadowRoot.getElementById("permalink-permalink").value;


    for(let i of this.shadowRoot.querySelectorAll("[id^='permalink-author']").values()){
      authorList.push({"label" : i.value});
    }
    formData.author = authorList;
    

    for(let i of this.shadowRoot.querySelectorAll("[id^='permalink-image']").values())
      image.push(i.value);
    formData.image = image[0];

    for(let i of this.shadowRoot.querySelectorAll("[id^='permalink-tags ']").values())
      tagtitle.push(i.value);

    for(let i of this.shadowRoot.querySelectorAll("[id^='permalink-tags-url']").values())
      url.push(i.value);

    for(let i in tagtitle)
      tags[i] = {"@id": url[i], "label": tagtitle[i]};
    formData.tags = tags;

    if(sessionStorage.getItem("newPermalink")){
      this.newPermalink = JSON.parse(sessionStorage.getItem("newPermalink"));
      this.newPermalink = Object.values(this.newPermalink);

      console.log(this.newPermalink);
    }

    console.log(this.newPermalink);
    this.newPermalink.push(formData);
    
    this.form = false;

    this.requestUpdate;
    sessionStorage.setItem("newPermalink", JSON.stringify(this.newPermalink));
    location.reload();


  }

  getCreatedPermalink(){
    super.requestUpdate();

    return this.newPermalink;
  }


  _onComplete(results){

    /* Note:
    ISBN has multiple options so later address which items to pick and whether
    to use default thumbnail
    */ 

    this.COMPLETE = true;
    this.PENDING = false;
    this.LOADING = false;
    this.results = results;
    this.teaserType = this.results["@type"];
    let img = []; 
    for(let i = 0; i < this.results.identifier.length; i++){
      if(this.results.identifier[i]['@type']){
        if(this.results.identifier[i]['@type'].includes('bibo:isbn'))
          img = img.concat(this.results.identifier[i].label);
        if(this.results.identifier[i]['@type'].includes('bibo:ean'))
          img = img.concat(this.results.identifier[i].label);
        
      }
        
    }
    let identifer = img[0];

    if(this.teaserType == 'Video' || this.teaserType == 'Music'){
      this.image = 'https://syndetics.com/index.php?client=primo&isbn='+ identifer + '/sc.gif';
    }
    else{
      this.image = 'https://syndetics.com/index.php?client=primo&isbn='+ identifer + '/sc.jpg';
    }

    this.year = this.results.date;
    this.title = this.results.title.substring(0, this.results.title.lastIndexOf("/"));
    this.authorFull = !Array.isArray(this.results.creator) ? [this.results.creator] : this.results.creator;

    this.authorLast = this.authorFull[0];
    this.authorFirst = this.authorFull[1];
    this.summary = this.results.description;
    this.publisher = this.results.publisher;
    this.placePublication = this.results.place_of_publication.split(' ')[0];
    this.language = this.results.language;

    for (let i = 0; i < Object.keys(this.results.subject).length; i++){
      this.tags = this.tags.concat({"id": this.results.subject[i]["@id"], "subject": this.results.subject[i]["label"]});
    }
    this.tags = this.results.subject;

    this.notes = this.results.note;

  }


  _requestUrl(){
    let url =this.permalink;
    let validate = this.validationLink(url);
    if(validate == this.errorMessage)  console.error(url);
    this.requestUpdate();

    
    url = validate; 
    return url;
  }

  _onLoading(){
    this.LOADING = true;
  }


}

customElements.define('ucdlib-sils-permalink',UcdlibSilsPermalink);
