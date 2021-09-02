### Classes

<dl>
<dt><a href="#UcdlibIconset">UcdlibIconset</a></dt>
<dd><p>Component for creating svg iconsets to be consumed by the &#39;icon&#39; attribute of ucdlib-icon</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#applyIcon">applyIcon(element, iconName)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Adds icon to ucdlib-icon element from iconset</p>
</dd>
<dt><a href="#removeIcon">removeIcon(element)</a></dt>
<dd><p>Remove an icon from the given element by undoing the changes effected by <code>applyIcon</code>.</p>
</dd>
</dl>

<a name="UcdlibIconset"></a>

### UcdlibIconset
Component for creating svg iconsets to be consumed by the 'icon' attribute of ucdlib-icon

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name of the icon set. Usage: <ucdlib-icon icon="{thisProperty}:{icon}"></ucdlib-icon> |
| size | <code>Number</code> | The size of an individual icon. Note that icons must be square. |

<a name="applyIcon"></a>

### applyIcon(element, iconName) ⇒ <code>Boolean</code>
Adds icon to ucdlib-icon element from iconset

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | A ucdlib-icon element |
| iconName | <code>String</code> | The icon identifier |

<a name="removeIcon"></a>

### removeIcon(element)
Remove an icon from the given element by undoing the changes effected by `applyIcon`.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>Element</code> | The element from which the icon is removed. |
