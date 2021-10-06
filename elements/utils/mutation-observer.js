/**
 * @function MutationObserverElement
 * @param {Class} superClass - LitElement or child class.
 * @description add default functionality for mutation observer
 * 
 * @returns {Class} LitElement with mutation observer attached.
 */
const MutationObserverElement = (superClass) => class extends superClass {

  constructor() {
    super();
    this._childListObserver = null;
  }

  /**
   * @method firstUpdated
   * @description called on first DOM render.  Call the _onChildListMutation method
   * 
   * @param {Set} props 
   */
  firstUpdated(props) {
    super.firstUpdated(props);
    this._onChildListMutation();
  }

  /**
   * @method connectedCallback
   * @description Native lifecycle method called when element is connected
   */
  connectedCallback(){
    super.connectedCallback();
    this._childListObserver = new MutationObserver(
      (mutationsList, observer) => this._onChildListMutation(mutationsList, observer));
    this._childListObserver.observe(this, {childList: true});
  }

  /**
   * @method disconnectedCallback
   * @description Native lifecycle method called when element is disconnected
   */
  disconnectedCallback(){
    this._childListObserver.disconnect();
    super.disconnectedCallback();
  }

  _onChildListMutation(){
    console.warn("You must create a '_onChildListMutation' method in your element to use the MutationObserverElement mixin");
  }
};

export {MutationObserverElement};