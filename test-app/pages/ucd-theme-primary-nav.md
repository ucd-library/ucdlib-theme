## Classes

<dl>
<dt><a href="#UcdThemePrimaryNav">UcdThemePrimaryNav</a></dt>
<dd><p>Component class for displaying a primary site nav
Pattern Lab Url:</p>
<ul>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav/molecules-navigation-00-primary-nav.rendered.html">http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav/molecules-navigation-00-primary-nav.rendered.html</a></li>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav-megamenu/molecules-navigation-00-primary-nav-megamenu.rendered.html">http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav-megamenu/molecules-navigation-00-primary-nav-megamenu.rendered.html</a></li>
</ul>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getNavClasses">getNavClasses()</a> ⇒ <code>String</code></dt>
<dd><p>Get classes to be applied to the top-level &#39;nav&#39; element</p>
</dd>
<dt><a href="#_onChildListMutation">_onChildListMutation()</a></dt>
<dd><p>Fires when light dom child list changes. Injected by MutationObserverElement mixin.
 Sets the &#39;navItems&#39; property.</p>
</dd>
<dt><a href="#_makeNavItemTree">_makeNavItemTree(ele)</a> ⇒ <code>Object</code></dt>
<dd><p>Extracts menu item data from DOM Element</p>
</dd>
<dt><a href="#_renderNavItem">_renderNavItem(navItem, location)</a> ⇒ <code>TemplateResult</code></dt>
<dd><p>Renders a menu item and all its children to the specified max depth</p>
</dd>
<dt><a href="#_toggleMobileMenu">_toggleMobileMenu(navLocation)</a></dt>
<dd><p>Expands/collapses mobile subnavs with animation on user click.</p>
</dd>
<dt><a href="#_onNavMouseenter">_onNavMouseenter()</a></dt>
<dd><p>Attached to top-level nav element. Opens mega menu in desktop view</p>
</dd>
<dt><a href="#_onNavMouseleave">_onNavMouseleave()</a></dt>
<dd><p>Attached to top-level nav element. Closes mega menu in desktop view</p>
</dd>
<dt><a href="#_onItemMouseenter">_onItemMouseenter(e)</a></dt>
<dd><p>Bound to nav li items with a subnav</p>
</dd>
<dt><a href="#_onItemFocus">_onItemFocus(e)</a></dt>
<dd><p>Bound to nav a elements</p>
</dd>
<dt><a href="#openSubNav">openSubNav(navLocation)</a></dt>
<dd><p>Opens the specified subnav</p>
</dd>
<dt><a href="#_completeMobileTransition">_completeMobileTransition(navItem)</a></dt>
<dd><p>Sets timeout to remove animation styles from mobile transition</p>
</dd>
<dt><a href="#isMegaMenu">isMegaMenu()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Does this element use the mega menu?</p>
</dd>
<dt><a href="#_onItemMouseleave">_onItemMouseleave(e)</a></dt>
<dd><p>Bound to nav li items with a subnav</p>
</dd>
<dt><a href="#_onNavFocusout">_onNavFocusout()</a></dt>
<dd><p>Attached to the top-level nav element. Closes subnav if it doesn&#39;t contain focused link.</p>
</dd>
<dt><a href="#closeSubNav">closeSubNav(navLocation)</a></dt>
<dd><p>Closes a subnav given its coordinates</p>
</dd>
<dt><a href="#closeAllSubNavs">closeAllSubNavs(navItems, requestUpdate)</a></dt>
<dd><p>Recursively closes all nav submenus within specified menu.</p>
</dd>
<dt><a href="#_hasSubNav">_hasSubNav(navItem)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Utility function for determining if a menu has subitems</p>
</dd>
<dt><a href="#getNavItem">getNavItem(location)</a> ⇒ <code>Object</code></dt>
<dd><p>Retrieves an item from the navItems array.</p>
</dd>
<dt><a href="#getItemMobileStyles">getItemMobileStyles(location)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns inline styles on a nav element (used for mobile transition animation)</p>
</dd>
<dt><a href="#clearMobileStyles">clearMobileStyles(navItem)</a></dt>
<dd><p>Removes inline styles on a nav element (used for mobile transition animation)</p>
</dd>
</dl>

<a name="UcdThemePrimaryNav"></a>

## UcdThemePrimaryNav
Component class for displaying a primary site nav
Pattern Lab Url:
 - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav/molecules-navigation-00-primary-nav.rendered.html
 - http://dev.webstyleguide.ucdavis.edu/redesign/patterns/molecules-navigation-00-primary-nav-megamenu/molecules-navigation-00-primary-nav-megamenu.rendered.html

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| styleModifier | <code>String</code> | Apply an alternate style with a keyword:  'superfish' - The default  'mega' - Hovering over any top-level link opens a single nav with all subnav links |
| hoverDelay | <code>Number</code> | How long (ms) after hover will menu open/close |
| animationDuration | <code>Number</code> | How long (ms) for a menu to fade in/out |
| maxDepth | <code>Number</code> | Maximum number of submenus to show |

<a name="getNavClasses"></a>

## getNavClasses() ⇒ <code>String</code>
Get classes to be applied to the top-level 'nav' element

**Kind**: global function  
<a name="_onChildListMutation"></a>

## \_onChildListMutation()
Fires when light dom child list changes. Injected by MutationObserverElement mixin.
 Sets the 'navItems' property.

**Kind**: global function  
<a name="_makeNavItemTree"></a>

## \_makeNavItemTree(ele) ⇒ <code>Object</code>
Extracts menu item data from DOM Element

**Kind**: global function  
**Returns**: <code>Object</code> - Formatted object describing the menu item and its children  

| Param | Type | Description |
| --- | --- | --- |
| ele | <code>Element</code> | Element |

<a name="_renderNavItem"></a>

## \_renderNavItem(navItem, location) ⇒ <code>TemplateResult</code>
Renders a menu item and all its children to the specified max depth

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navItem | <code>Object</code> | An item from the 'navItems' element property |
| location | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4] |

<a name="_toggleMobileMenu"></a>

## \_toggleMobileMenu(navLocation)
Expands/collapses mobile subnavs with animation on user click.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navLocation | <code>Array</code> | Array coordinates of corresponding nav item |

<a name="_onNavMouseenter"></a>

## \_onNavMouseenter()
Attached to top-level nav element. Opens mega menu in desktop view

**Kind**: global function  
<a name="_onNavMouseleave"></a>

## \_onNavMouseleave()
Attached to top-level nav element. Closes mega menu in desktop view

**Kind**: global function  
<a name="_onItemMouseenter"></a>

## \_onItemMouseenter(e)
Bound to nav li items with a subnav

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>Event</code> | 

<a name="_onItemFocus"></a>

## \_onItemFocus(e)
Bound to nav a elements

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>Event</code> | 

<a name="openSubNav"></a>

## openSubNav(navLocation)
Opens the specified subnav

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navLocation | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

<a name="_completeMobileTransition"></a>

## \_completeMobileTransition(navItem)
Sets timeout to remove animation styles from mobile transition

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navItem | <code>Object</code> | Member 'navItems' element property. |

<a name="isMegaMenu"></a>

## isMegaMenu() ⇒ <code>Boolean</code>
Does this element use the mega menu?

**Kind**: global function  
<a name="_onItemMouseleave"></a>

## \_onItemMouseleave(e)
Bound to nav li items with a subnav

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>Event</code> | 

<a name="_onNavFocusout"></a>

## \_onNavFocusout()
Attached to the top-level nav element. Closes subnav if it doesn't contain focused link.

**Kind**: global function  
<a name="closeSubNav"></a>

## closeSubNav(navLocation)
Closes a subnav given its coordinates

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navLocation | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

<a name="closeAllSubNavs"></a>

## closeAllSubNavs(navItems, requestUpdate)
Recursively closes all nav submenus within specified menu.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navItems | <code>Array</code> | The subItems property of any object within the 'navItems' element property. |
| requestUpdate | <code>Boolean</code> | Should an update be requested after each subnav closing? |

<a name="_hasSubNav"></a>

## \_hasSubNav(navItem) ⇒ <code>Boolean</code>
Utility function for determining if a menu has subitems

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navItem | <code>Object</code> | A member of the navItems array. |

<a name="getNavItem"></a>

## getNavItem(location) ⇒ <code>Object</code>
Retrieves an item from the navItems array.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

<a name="getItemMobileStyles"></a>

## getItemMobileStyles(location) ⇒ <code>Object</code>
Returns inline styles on a nav element (used for mobile transition animation)

**Kind**: global function  
**Returns**: <code>Object</code> - - Style map  

| Param | Type | Description |
| --- | --- | --- |
| location | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

<a name="clearMobileStyles"></a>

## clearMobileStyles(navItem)
Removes inline styles on a nav element (used for mobile transition animation)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navItem | <code>Object</code> | Member of the this.navItems array |

