### Classes

<dl>
<dt><a href="#UcdThemeListAccordion">UcdThemeListAccordion</a></dt>
<dd><p>Component class for displaying lists with accordion collapse/expand functionality.
Pattern Lab Url:</p>
<ul>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-accordion">http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-accordion</a></li>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-faq">http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-faq</a></li>
</ul>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#updated">updated(props)</a></dt>
<dd><p>Lit lifecycle method called after element has updated.</p>
</dd>
<dt><a href="#connectedCallback">connectedCallback()</a></dt>
<dd><p>Native lifecycle method called when element is connected</p>
</dd>
<dt><a href="#disconnectedCallback">disconnectedCallback()</a></dt>
<dd><p>Native lifecycle method called when element is disconnected</p>
</dd>
<dt><a href="#toggleItemVisiblity">toggleItemVisiblity(index, isPairIndex, dispatchEvent)</a></dt>
<dd><p>Expands/collapses an item</p>
</dd>
<dt><a href="#itemIsExpanded">itemIsExpanded(index, isPairIndex)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if item is expanded</p>
</dd>
<dt><a href="#_onTitleClick">_onTitleClick(e)</a></dt>
<dd><p>Attached to item title</p>
</dd>
<dt><a href="#_onTitleKeyUp">_onTitleKeyUp(e)</a></dt>
<dd><p>Attached to item title</p>
</dd>
<dt><a href="#_onChildListMutation">_onChildListMutation()</a></dt>
<dd><p>Attached to self, responds to changes in children</p>
</dd>
<dt><a href="#_dispatchItemToggleEvent">_dispatchItemToggleEvent(index)</a></dt>
<dd><p>Fires &#39;item-toggle&#39; custom event when user expands/collapses an item</p>
</dd>
<dt><a href="#_isTitle">_isTitle(i)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Item is title or question.</p>
</dd>
<dt><a href="#_isContent">_isContent(i)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Item is content or answer.</p>
</dd>
</dl>

<a name="UcdThemeListAccordion"></a>

### UcdThemeListAccordion
Component class for displaying lists with accordion collapse/expand functionality.
Pattern Lab Url:
 - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-accordion
 - http://dev.webstyleguide.ucdavis.edu/redesign/?p=atoms-list-faq

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| list-style | <code>String</code> | 'accordion' or 'faq' |

<a name="updated"></a>

### updated(props)
Lit lifecycle method called after element has updated.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Map</code> | properties that have changed |

<a name="connectedCallback"></a>

### connectedCallback()
Native lifecycle method called when element is connected

**Kind**: global function  
<a name="disconnectedCallback"></a>

### disconnectedCallback()
Native lifecycle method called when element is disconnected

**Kind**: global function  
<a name="toggleItemVisiblity"></a>

### toggleItemVisiblity(index, isPairIndex, dispatchEvent)
Expands/collapses an item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | The index of the item to expand/collapse (zero indexed) |
| isPairIndex | <code>Boolean</code> | The type of index  If false, use the flattened index of the _listItems array:    [q1, a1, q2, a2, q3, a3...]  If true, treats the title and content (or question and answer) as a pair:    0: first pair, 1: second pair, etc |
| dispatchEvent | <code>Boolean</code> | Will dispatch custom 'item-toggle' event |

<a name="itemIsExpanded"></a>

### itemIsExpanded(index, isPairIndex) ⇒ <code>Boolean</code>
Returns true if item is expanded

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Nunber</code> | The index of the item |
| isPairIndex | <code>Boolean</code> | Does the index param refer to Q/A pair or the flattened index? |

<a name="_onTitleClick"></a>

### \_onTitleClick(e)
Attached to item title

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>Event</code> | 

<a name="_onTitleKeyUp"></a>

### \_onTitleKeyUp(e)
Attached to item title

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>Event</code> | 

<a name="_onChildListMutation"></a>

### \_onChildListMutation()
Attached to self, responds to changes in children

**Kind**: global function  
<a name="_dispatchItemToggleEvent"></a>

### \_dispatchItemToggleEvent(index)
Fires 'item-toggle' custom event when user expands/collapses an item

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | The index of the item in the _listItems array property |

<a name="_isTitle"></a>

### \_isTitle(i) ⇒ <code>Boolean</code>
Item is title or question.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>Number</code> | Array index. |

<a name="_isContent"></a>

### \_isContent(i) ⇒ <code>Boolean</code>
Item is content or answer.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>Number</code> | Array index. |

