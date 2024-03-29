### Classes

<dl>
<dt><a href="#UcdlibPrimaryNav">UcdlibPrimaryNav</a></dt>
<dd><p>Component class for displaying a primary site nav</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#openMegaNav">openMegaNav()</a></dt>
<dd><p>Opens the meganav menu</p>
</dd>
<dt><a href="#closeMegaNav">closeMegaNav()</a></dt>
<dd><p>Closes the meganav menu</p>
</dd>
<dt><a href="#openSubNav">openSubNav(navLocation)</a></dt>
<dd><p>Opens the specified subnav</p>
</dd>
<dt><a href="#closeSubNav">closeSubNav(navLocation)</a></dt>
<dd><p>Closes a subnav given its coordinates</p>
</dd>
<dt><a href="#closeAllSubNavs">closeAllSubNavs(navItems, requestUpdate)</a></dt>
<dd><p>Recursively closes all nav submenus within specified menu.</p>
</dd>
<dt><a href="#isMegaMenu">isMegaMenu()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Does this element use the mega menu?</p>
</dd>
</dl>

<a name="UcdlibPrimaryNav"></a>

### UcdlibPrimaryNav
Component class for displaying a primary site nav

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| navType | <code>String</code> | The primary style type of the nav:  'superfish' - The default  'mega' - Hovering over any top-level link opens a single nav with all subnav links |
| styleModifiers | <code>String</code> | Apply alternate styles with a space-separated list.  e.g. 'justify' for 'primary-nav--justify' |
| hoverDelay | <code>Number</code> | How long (ms) after hover will menu open/close |
| animationDuration | <code>Number</code> | How long (ms) for a menu to fade in/out |
| maxDepth | <code>Number</code> | Maximum number of submenus to show |
| mobileWidth | <code>Number</code> | Screen width for mobile header display, defaults to 755 |

<a name="openMegaNav"></a>

### openMegaNav()
Opens the meganav menu

**Kind**: global function  
<a name="closeMegaNav"></a>

### closeMegaNav()
Closes the meganav menu

**Kind**: global function  
<a name="openSubNav"></a>

### openSubNav(navLocation)
Opens the specified subnav

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navLocation | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

<a name="closeSubNav"></a>

### closeSubNav(navLocation)
Closes a subnav given its coordinates

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navLocation | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

<a name="closeAllSubNavs"></a>

### closeAllSubNavs(navItems, requestUpdate)
Recursively closes all nav submenus within specified menu.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navItems | <code>Array</code> | The subItems property of any object within the 'navItems' element property. |
| requestUpdate | <code>Boolean</code> | Should an update be requested after each subnav closing? |

<a name="isMegaMenu"></a>

### isMegaMenu() ⇒ <code>Boolean</code>
Does this element use the mega menu?

**Kind**: global function  
