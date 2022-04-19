/**
 * @class SilsPrimoController
 * @classdesc Utility for interacting with UC Libraries' discovery tool
 * 
 * @property {LitElement} host - 'this' from a Lit element
 * @property {Object} config - Basic Primo configuration values (host, uris, etc)
 */
export class SilsPrimoController{

  /**
   * @method constructor
   * @description Called on instantiation
   * @param {LitElement} host - Element
   * @param {Object} config - Config values
   */
  constructor(host, config={}){
    (this.host = host).addController(this);
    this.updateConfig(config);
  }

  /**
   * @method updateConfig
   * @description Updates the config property.
   * @param {Object} config - Values to overide the default.
   */
  updateConfig(config){
    const UCD_TAB = "LibraryCatalog";
    let _config = {
      host: "https://search.library.ucdavis.edu",
      paths: {
        search: "discovery/search",
        browse: "discovery/browse"
      },
      defaultParams: {
        vid: "01UCD_INST:UCD"
      },
      corpora: {
        everything: {
          tab: "UCSILSDefaultSearch",
          scope: "DN_and_CI"
        },
        uc: {
          tab: "UCSDiscoveryNetwork",
          scope: "UCSDiscoveryNetwork"
        },
        ucd: {
          tab: UCD_TAB,
          scope: "MyInstitution",
        },
        specialCollections: {
          tab: UCD_TAB,
          scope: "SSPEC"
        },
        medical: {
          tab: UCD_TAB,
          scope: "BLAISDELL"
        },
        healthSciences: {
          tab: UCD_TAB,
          scope: "CARLSON"
        },
        law: {
          tab: UCD_TAB,
          scope: "Mabie"
        }
      }
    };

    this.config = Object.assign(_config, config);
  }

  /**
   * @method makeSearchUrl
   * @description Makes a Primo Search URL
   * @param {String} query - A search term or phrase
   * @param {String} corpus - The bib corpus to search against. 
   *   Sets 'tab' and 'search_scope' params. Must be a recognized keyword in the corpora config object:
   *  everything, uc, ucd, specialCollections, medical, healthSciences, law
   * @param {Boolean} advanced - Expands the advanced search interface
   * @param {Object} additionalParams - Any additional url params. Has the final say.
   * @returns 
   */
  makeSearchUrl( query, corpus="everything", advanced=false, additionalParams={} ){
    let url = `${this._trailingSlashIt(this.config.host)}${this.config.paths.search}`;

    let params = Object.assign({}, this.config.defaultParams);

    if ( advanced ) {
      params['mode'] = 'advanced';
    }

    if ( query ) {
      params['query'] = 'any,contains,' + query.replace(/,/g, ' ');
    }

    if ( this.config.corpora[corpus] ) {
      params['tab'] = this.config.corpora[corpus].tab;
      params['search_scope'] = this.config.corpora[corpus].scope;
    } else {
      console.warn(`${corpus} is not a recognized corpus`);
    }

    if ( additionalParams ){
      Object.assign(params, additionalParams);
    } 

    params = new URLSearchParams(params);
    return `${url}?${params.toString()}`;
  }

  /**
   * @method _trailingSlashIt
   * @description Adds trailing slash to string if not already present
   * @private 
   * @param {String} str 
   * @returns 
   */
  _trailingSlashIt(str){
    if ( str.endsWith('/') ){
      return str;
    }
    return str + "/";
  }
}