/**
 * @class PageWidthController
 * @description Sets the page width as a CSS variable (--page-width), which is needed for some layout classes.
 *
 * @example
 *   const pageWidthController = new PageWidthController();
 *   pageWidthController.init();
 */
export class PageWidthController {

  constructor(){
    this.documentRoot = document.documentElement;
    this.propertyName = '--page-width';
    this.fullWidthPropertyName = '--full-width';
  }

  /**
   * @description Initialize the controller.
   * @returns
   */
  init(){
    if ( this.isInitialized() ) {
      return;
    }

    // set initial state
    this.setPageWidthProperty();
    this.setFullWidthProperty();

    // set up resize listener
    this.resizeListener = window.addEventListener('resize', () => {
      this.setPageWidthProperty();
    });

  }

  /**
   * @description Check if the controller has been initialized.
   * @returns {Boolean}
   */
  isInitialized(){
    return this.resizeListener !== undefined;
  }

  /**
   * @description Destroy the controller.
   */
  destroy(){
    window.removeEventListener('resize', this.resizeListener);
    this.documentRoot.style.removeProperty(this.propertyName);
    this.documentRoot.style.removeProperty(this.fullWidthPropertyName);
    this.resizeListener = undefined;
  }

  /**
   * @description Get the '--page-width' CSS variable from document root.
   * @returns {String}
   */
  getPageWidthProperty(){
    return this.documentRoot.style.getPropertyValue(this.propertyName);
  }

  /**
   * @description Set the '--page-width' CSS variable on document root.
   */
  setPageWidthProperty(){
    this.documentRoot.style.setProperty(this.propertyName, `${this.documentRoot.clientWidth}px`);
  }

  /**
   * @description Set the '--full-width' CSS variable on document root.
   */
  setFullWidthProperty(){
    const value = 'min(var(--page-width, 100vw), 100vw)';
    this.documentRoot.style.setProperty(this.fullWidthPropertyName, value);
  }

}
