export class BreakPointsController{

  mobileBreakPoint = 992;
  
  constructor(host){
    (this.host = host).addController(this);
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