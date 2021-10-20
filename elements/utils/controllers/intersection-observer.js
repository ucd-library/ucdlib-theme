/**
 * @class IntersectionObserverController
 * @classdesc Lit controller that attaches an IntersectionObserver to an element
 * 
 * @property {LitElement} host - 'this' from a Lit element
 * @property {Object} options - IntersectionObserver options. Default: {}
 * @property {String} callback - Name of element method called on intersection. Default: '_onIntersection'
 * @property {Boolean} observeSelf - Automatically observes host element on connected. Default: true
 * 
 * @examples
 * // To watch for element's intersection with viewport, instantiate class in element constructor:
 * new IntersectionObserverController(this)
 * 
 * // Or watch for a specific element within your Lit element:
 * // In constructor:
 * this.intersectionObserver = new IntersectionObserverController(this, {}, "_onMyDivIntersection", false);
 * // In firstUpdated:
 * let myDiv = this.renderRoot.getElementById('my-div');
 * this.intersectionObserver.observer.observe(my-div);
 * 
 */
export class IntersectionObserverController{
  host;
  options;
  callback;
  observer;
  observeSelf;

  constructor(host, options = {}, callback = "_onIntersection", observeSelf = true){
    (this.host = host).addController(this);
    this.options = options;
    this.callback = callback;
    this.observeSelf = observeSelf;
  }

  hostConnected(){
    this.observer = new IntersectionObserver(this._callback.bind(this), this.options);
    if ( this.observeSelf ) {
      this.observer.observe(this.host);
    }
  }

  hostDisconnected(){
    this.observer.disconnect();
  }

  _callback(entries, observer){
    if ( !this.host[this.callback]){
      console.warn(
        `Element has no '${this.callback}' method. 
        Either add this method, or change the 'callback' argument on controller instantiation.`
      );
      return;
    }
    this.host[this.callback](entries, observer);

  }
}