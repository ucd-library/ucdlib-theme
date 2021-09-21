/**
 * @function NavElement
 * @param {Class} superClass - LitElement or child class.
 * @description Adds utilities for navigation to a LitElement
 * 
 * @returns {Class} LitElement with Nav utilities attached
 */
const NavElement = (superClass) => class extends superClass {

  constructor() {
    super();
    this.navItems = [];
    this.maxDepth = 2;
  }

  /**
   * @method parseChildren
   * @description Creates a tree-like nav Array structure from element children
   * @param {HTMLCollection} children - Element children (non-shadow)
   * @returns {Array}
   */
  parseNavChildren( children=this.children ){
    if ( !children ) return [];
    children = Array.from(this.children);
    let navItems = children.map((child) => this._makeNavItemTree(child)).filter(navItem => navItem.linkText);
    return navItems;
  }

  /**
   * @method _makeNavItemTree
   * @private
   * @description Extracts menu item data from DOM Element
   * @param {Element} ele - Element
   * @returns {Object} Formatted object describing the menu item and its children
   */
  _makeNavItemTree(ele){
    let linkText, href, subItems = [], isOpen=false, inlineStyles={};
    if ( ele.tagName === 'LI' && ele.children.length > 0) ele = ele.children[0];

    if ( ele.tagName === 'A' ) {
      linkText = ele.innerText;
      href = ele.href;
    } else if ( ele.tagName === 'LI' ) {
      linkText = ele.innerText;
    } else if ( ele.tagName === 'OL' || ele.tagName === 'UL' ) {
      linkText = ele.getAttribute('link-text');
      href = ele.getAttribute('href');

      for (const child of Array.from(ele.children)) {
        let childItem = this._makeNavItemTree(child);
        if ( childItem.linkText ) subItems.push(childItem);
      }
    }

    if ( linkText ) linkText = linkText.trim();
    return {linkText, href, subItems, isOpen, inlineStyles};
  }

  /**
   * @method getNavItem
   * @description Retrieves an item from the navItems array.
   * @param {Array} location - Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4].
   * @returns {Object}
   */
  getNavItem(location){
    let accessor = "this.navItems";
    if ( location && location.length > 0) {
      accessor += "[" + location.join("].subItems[") + "]";
    }
    return eval(accessor);
  }

  /**
   * @method itemHasSubNav
   * @description Utility function for determining if a menu has subitems
   * @param {Object} navItem - A member of the navItems array.
   * @returns {Boolean}
   */
  itemHasSubNav(navItem){
    if ( navItem && navItem.subItems && navItem.subItems.length) return true;
    return false;
  }

  /**
   * @method clearMobileAnimationStyles
   * @description Removes inline styles on a nav element (used for mobile transition animation)
   * @param {Object} navItem - Member of the this.navItems array
   */
  clearItemInlineStyles(navItem){
    if (
      navItem &&
      navItem.inlineStyles && 
      Object.keys(navItem.inlineStyles).length > 0 
    ) {
      navItem.inlineStyles = {};
      this.requestUpdate();
    }
  }
};

export {NavElement};