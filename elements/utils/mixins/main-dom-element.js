/**
 * @function MainDomElement
 * @param {Class} superClass - LitElement or child class.
 * @description set render context for lit element to main DOM instead of the
 * default shadow root
 * 
 * @returns {Class} LitElement updated createRenderRoot function.
 */
const MainDomElement = (superClass) => class extends superClass {

  /**
   * @method createRenderRoot
   * @description set the root element to render into
   * 
   * @returns {LitElement}
   */
  createRenderRoot() {
    return this;
  }

};

export {MainDomElement};