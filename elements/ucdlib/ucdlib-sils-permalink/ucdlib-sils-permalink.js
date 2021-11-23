import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-sils-permalink.tpl.js";
import {Task} from '@lit-labs/task';
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
      image : {type: String, attribute:false},
      title : {type: String, attribute:false},
      authorFull : {type: String, attribute:false},
      authorLast : {type: String, attribute:false},
      authorFirst: {type: String, attribute:false},
      authorID: {type: Array, attribute:false},
      year : { type: String, attribute:false},
      summary : {type: String, attribute:false},
      tags : {type: Array, attribute:false},
      teaserType : {type: String, attribute:false},
      publisher : {type: String, attribute:false},
      placePublication : {type: String, attribute:false},
      notes : {type: Array, attribute:false},
      language: {type: String, attribute:false},
      randomClass: {type: String, attribute:false},
      elemClass: {type: Array, attribute:false},
      url: {type: String, attribute:false}

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
    this.tags = [];
    this.authorID = [];
    this.teaserType = '';
    this.publisher = '';
    this.placePublication = '';
    this.notes = [];
    this.language = '';
    this.randomClass = '';
    this.elemClass = [];
    this.image = '';
    this.url = '';
    this.errorMessage = 'Href is not a permalink.';
    this.render=render.bind(this);



  }

  firstUpdated(changedProperties){
    if(this.permalink != ''){
       this.perma = new PermalinkController(this, this._requestUrl());
       this.requestUpdate();
    }
  }

  // async updated(props) {
  //   if( props.has('permalink') ) {
  //     this._requestUrl();
  //   }
  // }


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


    this.authorID = this.authorID.concat({"id": this.results.creator["@id"], "sameAs": this.results.creator["sameAs"]}[0]);
    this.authorLast = this.authorFull[0];
    this.authorFirst = this.authorFull[1];
    this.summary = this.results.description;
    this.publisher = this.results.publisher;
    this.placePublication = this.results.place_of_publication.split(' ')[0];
    this.language = this.results.language;

    for (let i = 0; i < Object.keys(this.results.subject).length; i++){
      this.tags = this.tags.concat({"id": this.results.subject[i]["@id"], "subject": this.results.subject[i]["label"]});
    }
    this.notes = this.results.note;

    this.elemClass = ['tahoe', 'california', 'quad'];

    console.log("Complete");

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
    console.log("Loading...");
  }


}

customElements.define('ucdlib-sils-permalink',UcdlibSilsPermalink);
