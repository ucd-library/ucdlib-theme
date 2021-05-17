import {nothing} from 'lit/html.js';
import {AsyncDirective} from 'lit/async-directive.js';
import {directive, PartType} from 'lit/directive.js';

const animationOptions = [
  'delay',
  'duration',
  'easing',
];

/**
 * @class MotionCollapse
 * @classdesc Lit directive controler for adding collapse/expand accordion-like animation to an element.
 * 
 * @example
 * html`
 *  <div ${motionCollapse({duration: 300})}>I am animated</div>
 * `
 */
export class MotionCollapse extends AsyncDirective {

  /**
   * @method constructor
   * @description sets animation defaults
   * @param {AttributePart} part 
   */
  constructor(part) {
    super(part);
    if (part.type === PartType.CHILD) {
      throw new Error(
        'The `motionCollapse` directive must be used in attribute position.'
      );
    }
    
    this.status = "";

    // animation defaults
    this.duration = 400;
    this.delay = 0;
    this.easing = "linear";
  }

  /**
   * @method getStyles
   * @description Returns select computed styles for element
   * @returns {Object} styles
   */
  getStyles(){
    const computedStyles = window.getComputedStyle(this.element);
    return {
      paddingTop: computedStyles.paddingTop,
      paddingBottom: computedStyles.paddingBottom,
      marginTop: computedStyles.marginTop,
      marginBottom: computedStyles.marginBottom,
      height: computedStyles.height,
      display: computedStyles.display,
      visibility: computedStyles.visibility,
      offsetHeight: this.element.offsetHeight
    };
  }

  /**
   * @method render
   * @description Required method for a Lit directive
   * @returns {nothing} Doesn't render anything
   */
  render(){
    return nothing;
  }

  /**
   * @method update
   * @description Lit directive method. Attaches controller when element is first updated.
   * @param {Part} part 
   * @param {Array} options - argument list passed to directive
   * @returns render
   */
  update(part, options){
    this.isFirstUpdate = this._host === undefined;
    if ( this.isFirstUpdate && part.options ) {
      this._host = part.options.host;
      this._host.addController(this);
      this.element = part.element;
    }

    this._setOptions(options);
    return this.render();
  }

  /**
   * @method _setOptions
   * @description Converts directive arguments to class properties
   * First argument is animation settings
   * @param {Array} options - list of directive arguments
   * @returns 
   */
  _setOptions(options){
    if ( 
      !options ||
      !options.length || 
      typeof options[0] !== 'object' ||
      Array.isArray( options[0] )
    ) return;
    
    const aniKeys = Object.keys(options[0]);
    animationOptions.forEach(opt => {
      if ( aniKeys.includes(opt) ) {
        this[opt] = options[0][opt];
      }
    });

  }

  /**
   * @method hostUpdate
   * @description Lit controller method called when host element update cycle is started
   */
  hostUpdate(){
    if ( this.animation && this.animation.playState === 'running' ) {
      this.animation.cancel();
    }
    this._updateStyles = this.getStyles();
  }

  /**
   * @method hostUpdate
   * @description Lit controller method called when host element update cycle is completed
   */
  hostUpdated(){
    this._updatedStyles = this.getStyles();
    this.main();
  }

  /**
   * @method _makeFrame
   * @description Constructs an animation frame to be passed to ele.animate
   * @param {String} frameType - expanded or collapsed
   * @returns {Object} Styles to animate
   */
  _makeFrame(frameType){
    const styles = this.status === 'expanding' ? this._updatedStyles : this._updateStyles;
    let frame = {};
    if (frameType === 'collapsed') {
      frame =  {
        height: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginTop: "0px",
        marginBottom: "0px"
      };
    } else {
      frame =  {
        height: styles.height,
        paddingTop: styles.paddingTop,
        paddingBottom: styles.paddingBottom,
        marginTop: styles.marginTop,
        marginBottom: styles.marginBottom
      };
    }
    return frame;
  }

  /**
   * @method _onAnimationEnd
   * @description Fires when animation ends - either success or cancel
   */
  _onAnimationEnd(){
    this.element.style.display = "";
    this.element.style.overflow = "";
    this.element.style.visibility = "";
    if (this.status === 'expanding'){
      this.status = "expanded";
    } else if (this.status === 'collapsing') {
      this.status = "collapsed";
    }
  }

  /**
   * @method _elementHasChanged
   * @description Detects whether the element that this directive is attached to has been clicked
   * @returns {Boolean}
   */
  _elementHasChanged(){
    if ( this._updateStyles.offsetHeight != this._updatedStyles.offsetHeight ) {
      return true;
    }
    if ( this._updateStyles.visibility != this._updatedStyles.visibility ) {
      return true;
    }
    return false;
  }

  /**
   * @method main
   * @description Adds collapse/expand animation to element.
   * @returns 
   */
  async main(){
    if ( 
      !this.element.isConnected ||
      this.isFirstUpdate ||
      !this._elementHasChanged()
    ) {
      return;
    }

    if ( this._updatedStyles.visibility === 'hidden' || !this._updatedStyles.offsetHeight) {
      this.status = "collapsing";
    } else {
      this.status = "expanding";
    }

    let frames = [];
    const collapsedFrame = this._makeFrame('collapsed');
    const expandedFrame = this._makeFrame('expanded');

    if ( this.status === 'expanding') { 
      frames.push(collapsedFrame, expandedFrame);
      this.element.style.display = this._updatedStyles.display;
    } else {
      frames.push(expandedFrame, collapsedFrame);
      this.element.style.display = this._updateStyles.display;
    }

    
    this.element.style.overflow = "hidden";
    this.element.style.visibility = "visible";
    this.animation = this.element.animate(
      frames, 
      {
        duration: this.duration, 
        delay: this.delay,
        easing: this.easing
      }
    );
    if ( !this.animation.onfinish ) {
      this.animation.onfinish = () => this._onAnimationEnd('finish');
      this.animation.oncancel = () => this._onAnimationEnd('cancel');
    }
    
  }
}

export const motionCollapse = directive(MotionCollapse);