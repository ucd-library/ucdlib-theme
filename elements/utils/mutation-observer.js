/**
 * @class MutationObserverElement
 * @description add default functionality for mutation observer
 */
class MutationObserverElement {

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
    this._onChildListMutation(this.children);
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
}

export {MutationObserverElement};