/**
 * @class SSRPropertiesController
 * @classdesc Lit controller that can hydrate complex properties of a webcomponent
 * 
 * @property {LitElement} host - 'this' from a Lit element
 * @property {String} type - Sets the format, ie type="json"
 * @property {Empty Attribute} request-update - Set to send a requestUpdate to the host, if there are no properties defined in the host for a parsed key/value, ie empty attribute request-update
 * 
 * @examples
 * // Instantiate this class in your element:
 *  propertiesController = new SSRPropertiesController(this);
 * 
 * // Then when declaring your component:
 * <ucdlib-my-cool-component>
 *   <ucdlib-properties type="json">
 *     {"testing":"ok", "complex" : {"values": 1, "can-be": "nested"}}
 *   </ucdlib-properties>
 * </ucdlib-my-cool-component>
 */
export class SSRPropertiesController {

  constructor(host) {
    (this.host = host).addController(this);

    // supported parser formats
    this.parsers = {
      json : content => JSON.parse(content)
    };

    // attach observer
    this._observer = new MutationObserver(
      (mutationsList, observer) => this._onMutation(mutationsList, observer)
    );
    this._observer.observe(this.host, { characterData: true, attributes: false, childList: true, subtree: true });
  }

  _onMutation() {
    let propEls = this.host.querySelectorAll(':scope > ucdlib-properties');
    if( !propEls ) return;

    requestAnimationFrame(() => {
      this.propsList = []; // to store props that have been parsed, if duplicates we'll use the first defined
      // parse properties and set in into host
      for( let propEl of propEls ) {        
        this.requestUpdate = propEl.attributes['request-update'];

        // get type
        try {
          this.type = propEl.attributes['type'].value;
        } catch (e) {
          // just ignore and default to json
          this.type = 'json'
        }

        if( !this.parsers[this.type] ) {
          this._observer.disconnect();
          throw new Error('Unknown parser type: '+this.type);
        }

        const props = this.parsers[this.type](propEl.innerHTML.trim());
        for( const [key, value] of Object.entries(props) ) {
          // update property if exists in parent
          // or if requestUpdate attribute is set, we'll request it on the host for new properties
          // and isn't a duplicate property
          if( (this.host[key] !== undefined || this.requestUpdate) && !this.propsList.includes(key) ) {
            this.host[key] = value;
            this.propsList.push(key);
          }
        }

        if( this.requestUpdate ) {
          this.host.requestUpdate();
        }
      }

      this._observer.disconnect();
    });
  }

}
  