/**
 * @class PopStateObserverController
 * @classdesc Controller for attaching a popstate event listener to a Lit element.
 * 
 * @property {LitElement} host - 'this' from a Lit element
 * @property {String} callback - Name of element method called on popstate. Default: '_onPopstate'
 * 
 * @examples
 * // Instantiate this controller in the constructor of your element
 * new PopStateObserverController(this, "_onLocationChange");
 */
export class PopStateObserverController{

  constructor(host, callback="_onPopstate"){
    (this.host = host).addController(this);
    this.callback = callback;
    this._onPopstate = this._onPopstate.bind(this);
  }

  hostConnected(){
    window.addEventListener('popstate', this._onPopstate);
  }

  hostDisconnected(){
    window.removeEventListener('popstate', this._onPopstate);
  }

  _onPopstate(e){
    if ( !this.host[this.callback]){
      console.warn(
        `Element has no '${this.callback}' method. 
        Either add this method, or change the 'callback' argument on instantiation.`
      );
      return;
    }
    let locationObject = this._getLocationObject();
    this.host[this.callback](locationObject, e);

  }

  _getLocationObject(){
    let location = {
      fullpath : window.location.href.replace(window.location.origin, '').replace(/^\/+/, '/'),
      pathname : window.location.pathname.replace(/^\/+/, '/'),
      path : window.location.pathname.replace(/(^\/+|\/+$)/g, '').split('/'),
      query : new URLSearchParams(window.location.search),
      hash : window.location.hash.replace(/^#/, '')
    };
    return location;
  }
}