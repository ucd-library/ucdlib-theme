/**
 * @function Wait
 * @param {Class} superClass - LitElement or child class.
 * @description Adds wait methods to Lit element
 * 
 * @returns {Class} LitElement with Wait methods
 */
const Wait = (superClass) => class extends superClass {

  /**
   * @method wait
   * @description Wait for the specified amount of time
   * @param {Number} time - Time to wait (ms)
   * @returns 
   */
  async wait(time){
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  /**
   * @method waitForUpdate
   * @description Requests and waits for Lit update.
   */
  async waitForUpdate(){
    this.requestUpdate();
    await this.updateComplete;
  }

  /**
   * @method waitForFrames
   * @description Wait for specified number of animation frames
   * @param {Number} ct Number of frames
   */
  async waitForFrames(ct=1) {
    for (let i = 0; i < ct; i++) {
      await new Promise(resolve => {
        requestAnimationFrame(resolve);
      });
    }
  }

  /**
   * @method waitForAnimation
   * @description Wait for animation time designated by element
   * @returns {Promise}
   */
  async waitForAnimation() {

    let animationDuration = 0;
    if ( this.animationDuration ) {
      animationDuration = this.animationDuration;
    } else if (this._animationDuration) {
      animationDuration = this._animationDuration;
    } else {
      console.warn("animationDuration property not set!");
    }

    return new Promise(resolve => {
      setTimeout(resolve, animationDuration);
    });
  }
};
export {Wait};