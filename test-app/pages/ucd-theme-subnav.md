### Classes

<dl>
<dt><a href="#UcdThemeSubnav">UcdThemeSubnav</a></dt>
<dd><p>Component class for displaying a subnav</p>
<p>Patternlab url:</p>
<ul>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav</a></li>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav-linked-title">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav-linked-title</a></li>
</ul>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#openNavItem">openNavItem(navLocation)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Shows children of a nav item (if applicable)</p>
</dd>
<dt><a href="#closeNavItem">closeNavItem(navLocation)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Hides children of a nav item (if applicable)</p>
</dd>
</dl>

<a name="UcdThemeSubnav"></a>

### UcdThemeSubnav
Component class for displaying a subnav

Patternlab url:
 - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav
 - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-sub-nav-linked-title

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| navTitle | <code>String</code> | Subnav header text |
| titleHref | <code>String</code> | Link for subnav header (optional) |

<a name="openNavItem"></a>

### openNavItem(navLocation) ⇒ <code>Boolean</code>
Shows children of a nav item (if applicable)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navLocation | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

<a name="closeNavItem"></a>

### closeNavItem(navLocation) ⇒ <code>Boolean</code>
Hides children of a nav item (if applicable)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| navLocation | <code>Array</code> | Coordinates of the item in the 'navItems' array. i.e. [0, 1, 4]. |

