export class WaitController{

  constructor(host){
    (this.host = host).addController(this);
  }

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
    this.host.requestUpdate();
    await this.host.updateComplete;
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
   * @description Wait for the host to have a property with a specific value
   * @param {String} prop - Host property to wait for
   * @param {*} value - Host property value to wait for
   * @param {Number} timeout - Timeout in ms
   * @returns {Object} - Object with the following properties:
   * - prop: Property name
   * - targetValue: Value to wait for
   * - timeoutValue: Timeout value
   * - propValue: Current value of the property
   * - wasTimeout: Was the wait timed out
   */
  async waitForHostPropertyValue(prop, value, timeout=5000){
    const out = {
      prop,
      targetValue: value,
      timeoutValue: timeout,
      propValue: this.host[prop],
      wasTimeout: false
    };
    let start = Date.now();
    while (this.host[prop] !== value) {
      if (Date.now() - start > timeout) {
        out.wasTimeout = true;
        return out;
      }
      await this.wait(10);
    }
    return out;
  }


}
