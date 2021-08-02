const BreakPoints = (superClass) => class extends superClass {

  constructor() {
    super();
    this._mobileBreakPoint = 992;
  }

  /**
  * @method isDesktop
  * @description Is the desktop view currently active?
  * @returns {Boolean}
  */
  isDesktop(){
    return window.innerWidth >= this._mobileBreakPoint;
  }

  /**
   * @method isMobile
   * @description Is the mobile view currently active?
   * @returns {Boolean}
   */
  isMobile(){
    return !this.isDesktop();
  }  
};

export {BreakPoints};