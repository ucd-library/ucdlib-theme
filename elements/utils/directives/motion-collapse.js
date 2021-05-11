import {nothing, AttributePart} from 'lit/html.js';
import {AsyncDirective} from 'lit/async-directive.js';
import {directive, PartInfo, PartType} from 'lit/directive.js';

const animationFrame = () =>
  new Promise((resolve) => requestAnimationFrame(resolve));

export class MotionCollapse extends AsyncDirective {

  constructor(part) {
    super(part);
    if (part.type === PartType.CHILD) {
      throw new Error(
        'The `motionCollapse` directive must be used in attribute position.'
      );
    }
    this.duration = 3000;
    this.status = "";
  }

  getStyles(){
    return window.getComputedStyle(this.element);
  }

  render(){
    return nothing;
  }

  update(part, options){
    const firstUpdate = this._host === undefined;
    if ( firstUpdate && part.options ) {
      this._host = part.options.host;
      this._host.addController(this);
      this.element = part.element;

      if ( this.element.offsetHeight ) {
        this.status = "expanded";
      } else {
        this.status = "collapsed";
      }
    }

    return this.render();
  }

  hostUpdate(){
    this._styles = this.getStyles();
  }

  hostUpdated(){
    this.main();
  }

  async main(){
    
    const styles = window.getComputedStyle(this.element);
    if ( 
      !this.element.isConnected,
      this._styles === undefined
    ) {
      return;
    }

    await animationFrame;

    if ( this.element.offsetHeight ) {
      this.status = "expanding";
    } else {
      this.status = "collapsing";
    }
    console.log(this.element, this.status);
    let frames = [];
    let collapsedFrame = {
      height: "0px",
      paddingTop: "0px",
      paddingBottom: "0px",
      marginTop: "0px",
      marginBottom: "0px"
    };
    let expandedFrame = {};

    if ( this.status === 'expanding') { 
      expandedFrame = {
        height: styles.height,
        paddingTop: styles.paddingTop,
        paddingBottom: styles.paddingBottom,
        marginTop: styles.marginTop,
        marginBottom: styles.marginBottom
      }
      frames.push(collapsedFrame, expandedFrame);
      this.element.style.display = styles.display;
    } else {
      expandedFrame = {
        height: this._styles.height,
        paddingTop: this._styles.paddingTop,
        paddingBottom: this._styles.paddingBottom,
        marginTop: this._styles.marginTop,
        marginBottom: this._styles.marginBottom
      };
      frames.push(expandedFrame, collapsedFrame);
      this.element.style.display = this._styles.display;
    }

    console.log('display', this.element.style.display);

    
    this.element.style.overflow = "hidden";
    console.log("frames", frames);
    this.animation = this.element.animate(frames, {duration:this.duration, easing: "linear"});
    await this.animation.finished;
    this.element.style.display = "";
    this.element.style.overflow = "";
    if (this.status === 'expanding'){
      this.status = "expanded";
    } else {
      this.status = "collapsed";
    }
    console.log("animation done");
    
    
  }
}

export const motionCollapse = directive(MotionCollapse);