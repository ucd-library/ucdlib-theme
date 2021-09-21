### Classes

<dl>
<dt><a href="#UcdThemeCollapse">UcdThemeCollapse</a></dt>
<dd><p>UI component class for a collapsable panel box
Pattern Lab Url: <a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-collapse">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-collapse</a></p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#open">open()</a></dt>
<dd><p>Expands the panel content</p>
</dd>
<dt><a href="#close">close()</a></dt>
<dd><p>Collapses the panel content</p>
</dd>
<dt><a href="#toggle">toggle()</a></dt>
<dd><p>Toggles the visibility of the panel content</p>
</dd>
<dt><a href="#_onTitleClick">_onTitleClick()</a></dt>
<dd><p>Attached to the panel title</p>
</dd>
<dt><a href="#_onTitleKeyUp">_onTitleKeyUp(e)</a></dt>
<dd><p>Attached to the panel title</p>
</dd>
<dt><a href="#_dispatchToggleEvent">_dispatchToggleEvent()</a></dt>
<dd><p>Emits custom &#39;accordion-toggle&#39; event when user toggles content visibilty.</p>
</dd>
</dl>

<a name="UcdThemeCollapse"></a>

### UcdThemeCollapse
UI component class for a collapsable panel box
Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-collapse

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | The panel title |
| opened | <code>Boolean</code> | Whether the panel content is expanded |
| brandClass | <code>String</code> | Any additional class modifers |

<a name="open"></a>

### open()
Expands the panel content

**Kind**: global function  
<a name="close"></a>

### close()
Collapses the panel content

**Kind**: global function  
<a name="toggle"></a>

### toggle()
Toggles the visibility of the panel content

**Kind**: global function  
<a name="_onTitleClick"></a>

### \_onTitleClick()
Attached to the panel title

**Kind**: global function  
<a name="_onTitleKeyUp"></a>

### \_onTitleKeyUp(e)
Attached to the panel title

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | keyup event |

<a name="_dispatchToggleEvent"></a>

### \_dispatchToggleEvent()
Emits custom 'accordion-toggle' event when user toggles content visibilty.

**Kind**: global function  
