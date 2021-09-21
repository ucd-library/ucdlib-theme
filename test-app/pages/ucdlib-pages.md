### Classes

<dl>
<dt><a href="#UcdlibPages">UcdlibPages</a></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#createRenderRoot">createRenderRoot()</a> ⇒ <code>Element</code></dt>
<dd><p>override createRenderRoot, no need for shadowdom</p>
</dd>
<dt><a href="#_onChildListMutation">_onChildListMutation()</a></dt>
<dd><p>called when children change via MutationObserverElement</p>
</dd>
<dt><a href="#_onChange">_onChange()</a></dt>
<dd><p>update visibility</p>
</dd>
<dt><a href="#_updateVisibility">_updateVisibility(selected, attr)</a> ⇒ <code>Boolean</code></dt>
<dd><p>run update loop based on selected value and attribute to use if
selected is not a number.</p>
</dd>
<dt><a href="#_select">_select(value, child, attribute)</a></dt>
<dd><p>select attributes</p>
</dd>
</dl>

<a name="UcdlibPages"></a>

### UcdlibPages
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| selected | <code>String</code> | Denotes which child is currently displayed.  If numeric, refers to index of child. Else, refers to child id.  If attrForSelected is used, refers to the value of that attribute instead of id. |
| attrForSelected | <code>String</code> | Use a custom attribute instead of id for matching 'selected' |
| selectedAttribute | <code>String</code> | Will assign attribute to selected child. <ucdlib-pages selected="page2" attr-for-selected="id">   <div id="page1">Test 1</div>   <div id="page2">Test 2</div> </ucdlib-pages> |

<a name="new_UcdlibPages_new"></a>

#### new UcdlibPages()
similar to the old iron-pages element, allows you to control which element is visible
based on child index or tag attribute

<a name="createRenderRoot"></a>

### createRenderRoot() ⇒ <code>Element</code>
override createRenderRoot, no need for shadowdom

**Kind**: global function  
<a name="_onChildListMutation"></a>

### \_onChildListMutation()
called when children change via MutationObserverElement

**Kind**: global function  
<a name="_onChange"></a>

### \_onChange()
update visibility

**Kind**: global function  
<a name="_updateVisibility"></a>

### \_updateVisibility(selected, attr) ⇒ <code>Boolean</code>
run update loop based on selected value and attribute to use if
selected is not a number.

**Kind**: global function  

| Param | Type |
| --- | --- |
| selected | <code>String</code> \| <code>Number</code> | 
| attr | <code>String</code> | 

<a name="_select"></a>

### \_select(value, child, attribute)
select attributes

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>Boolean</code> | 
| child | <code>Element</code> | 
| attribute | <code>String</code> | 

