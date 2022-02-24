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
<dt><a href="#toggleItemVisiblity">toggleItemVisiblity(index, isPairIndex, dispatchEvent)</a></dt>
<dd><p>Expands/collapses an item</p>
</dd>
<dt><a href="#itemIsExpanded">itemIsExpanded(index, isPairIndex)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns true if item is expanded</p>
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

