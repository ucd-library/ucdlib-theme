### Classes

<dl>
<dt><a href="#UcdThemePagination">UcdThemePagination</a></dt>
<dd><p>Component class for pagination</p>
<p>Pattern Lab Url: </p>
<ul>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-pagination">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-pagination</a></li>
</ul>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#updated_new">updated()()</a></dt>
<dd><p>Changes occur on update</p>
</dd>
<dt><a href="#_constructClasses">_constructClasses()</a> ⇒ <code>Object</code></dt>
<dd><p>Makes a class map object based on element properties/attributes. 
Classes are applied to the element.</p>
</dd>
<dt><a href="#_renderLink">_renderLink()</a> ⇒ <code>HTML</code></dt>
<dd><p>render the links on the pagination</p>
</dd>
<dt><a href="#_renderOriginal">_renderOriginal()</a> ⇒ <code>Array</code></dt>
<dd><p>render the ellipses pattern in pagination</p>
</dd>
<dt><a href="#_renderEllipse">_renderEllipse()</a> ⇒ <code>Array</code></dt>
<dd><p>render the ellipses pattern in pagination</p>
</dd>
<dt><a href="#_onPageClicked">_onPageClicked()</a></dt>
<dd><p>event fires on page click</p>
</dd>
</dl>

<a name="UcdThemePagination"></a>

### UcdThemePagination
Component class for pagination

Pattern Lab Url: 
 - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-pagination

**Kind**: global class  
**Examples**: change!!!
<ucd-theme-pagination
 current-page="50"
 max-pages="100"
 use-hash>
</ucd-theme-pagination>
<ucd-theme-pagination
 current-page="1"
 max-pages="10">
</ucd-theme-pagination>
<ucd-theme-pagination
 current-page="2"
 max-pages="33"
 base-path="/foo/bar/">
</ucd-theme-pagination>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| base-path | <code>String</code> | for anchor tag href |
| queryParams | <code>String</code> | Append query parameters if constructing an anchor tag |
| current-page | <code>String</code> | Page to show and highlight |
| max-pages | <code>String</code> | Max number of total pages |
| visible-link-count | <code>String</code> | How many page links to show |

<a name="updated_new"></a>

### updated()()
Changes occur on update

**Kind**: global function  
<a name="_constructClasses"></a>

### \_constructClasses() ⇒ <code>Object</code>
Makes a class map object based on element properties/attributes. 
Classes are applied to the element.

**Kind**: global function  
**Returns**: <code>Object</code> - - {class1: true, class2: false}  
<a name="_renderLink"></a>

### \_renderLink() ⇒ <code>HTML</code>
render the links on the pagination

**Kind**: global function  
<a name="_renderOriginal"></a>

### \_renderOriginal() ⇒ <code>Array</code>
render the ellipses pattern in pagination

**Kind**: global function  
**Returns**: <code>Array</code> - pages  
<a name="_renderEllipse"></a>

### \_renderEllipse() ⇒ <code>Array</code>
render the ellipses pattern in pagination

**Kind**: global function  
**Returns**: <code>Array</code> - pages  
<a name="_onPageClicked"></a>

### \_onPageClicked()
event fires on page click

**Kind**: global function  
