import { LitElement } from 'lit';
import {render, styles} from "./ucdlib-sils-permalink.tpl.js";

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

    };
  }

  static get styles() {
    return styles();
  }

  constructor() {
    super();
    this.results = {};
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
    this.render=render.bind(this);


  }

  updated(props) {

    if( props.has('permalink') ) {
      this._request();
      
    }
  }

  loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText));
        }
        else {
          error(xhr);
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.responseType = 'text';
    return new Promise(function (resolve, reject) {

      xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
          if (xhr.status === 200) {
            resolve(xhr.response);
            // 
            // json = output;
          }
          else {
            reject(status);
          }

        }
      };
      xhr.send();
    });

  }
  
  
  myData(Data)
  { 
    // Output only the details on the first post
    console.log("Title:", Data.title);

  }

  async _request(){

    let url = this.permalink;



    let output = await this.loadJSON(url, this.myData,'jsonp');
    this.results = JSON.parse(output);
    this.teaserType = this.results["@type"];


    /* Note:
    ISBN has multiple options so later address which items to pick and whether
    to use default thumbnail
    */ 

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
    this.authorFull = this.results.creator["label"].split(',');    
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


    console.log(this.results);

  }
}

customElements.define('ucdlib-sils-permalink',UcdlibSilsPermalink);
