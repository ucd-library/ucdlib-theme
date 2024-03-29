### Classes

<dl>
<dt><a href="#UcdThemeHeader">UcdThemeHeader</a></dt>
<dd><p>Component class for displaying the site header</p>
<p> PatternLab Url:</p>
<ul>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=organisms-header">http://dev.webstyleguide.ucdavis.edu/redesign/?p=organisms-header</a></li>
</ul>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#_onLocationChange">_onLocationChange()</a></dt>
<dd><p>Called when url changes by popstate controller</p>
</dd>
<dt><a href="#open">open()</a> ⇒ <code>Promise</code></dt>
<dd><p>Opens header menu in mobile</p>
</dd>
<dt><a href="#close">close()</a> ⇒ <code>Promise</code></dt>
<dd><p>Closes heaader menu in mobile</p>
</dd>
</dl>

<a name="UcdThemeHeader"></a>

### UcdThemeHeader
Component class for displaying the site header

 PatternLab Url:
   - http://dev.webstyleguide.ucdavis.edu/redesign/?p=organisms-header

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| siteName | <code>String</code> | Name of website to display |
| slogan | <code>String</code> | Optional text to display below site name |
| figureSrc | <code>String</code> | Site logo/icon to display next to site name |
| siteUrl | <code>String</code> | Url to use for links around site name and figure |
| silenceWarnings | <code>Boolean</code> | Console warnings will be silences |
| opened | <code>Boolean</code> | Whether header is open in the mobile view |
| preventFixed | <code>Boolean</code> | Navbar will not be fixed to top of screen in desktop view |

<a name="_onLocationChange"></a>

### \_onLocationChange()
Called when url changes by popstate controller

**Kind**: global function  
<a name="open"></a>

### open() ⇒ <code>Promise</code>
Opens header menu in mobile

**Kind**: global function  
<a name="close"></a>

### close() ⇒ <code>Promise</code>
Closes heaader menu in mobile

**Kind**: global function  
