### Classes

<dl>
<dt><a href="#UcdlibHeader">UcdlibHeader</a></dt>
<dd><p>Component class for displaying the site header</p>
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

<a name="UcdlibHeader"></a>

### UcdlibHeader
Component class for displaying the site header

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| siteName | <code>String</code> | Name of website to display |
| silenceWarnings | <code>Boolean</code> | Console warnings will be silences |
| opened | <code>Boolean</code> | Whether header is open in the mobile view |
| preventFixed | <code>Boolean</code> | Navbar will not be fixed to top of screen in desktop view |
| mobileWidth | <code>Number</code> | Screen width for mobile header display, defaults to 755 |

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
