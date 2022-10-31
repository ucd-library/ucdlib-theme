export class BreakPointsController{
  
  constructor(host, mobileBreakPoint=992){
    (this.host = host).addController(this);

    this.mobileBreakPoint = mobileBreakPoint;
  }

  /**
  * @method isDesktop
  * @description Is the desktop view currently active?
  * @returns {Boolean}
  */
   isDesktop(){
    return window.innerWidth >= this.mobileBreakPoint;
  }

  /**
   * @method isMobile
   * @description Is the mobile view currently active?
   * @returns {Boolean}
   */
  isMobile(){
    return !this.isDesktop();
  }  
}