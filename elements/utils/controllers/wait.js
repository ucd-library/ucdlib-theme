export class WaitController{
  host;

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


}