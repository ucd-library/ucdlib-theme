### Classes

<dl>
<dt><a href="#UcdlibMd">UcdlibMd</a></dt>
<dd><p>Component class for translating/displaying markdown into sanitized html</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#updated">updated()</a></dt>
<dd><p>Lit method called when element is updated.</p>
</dd>
</dl>

<a name="UcdlibMd"></a>

### UcdlibMd
Component class for translating/displaying markdown into sanitized html

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | text to hold markdown code |
| renderer | <code>Object</code> | an object holding element functions to override the default markdown behavior   Format: reference the Marked Renderer documentation at https://marked.js.org/using_pro#renderer |
| use | <code>Object</code> | marked use object |
| options | <code>Object</code> | marked options object |

<a name="updated"></a>

### updated()
Lit method called when element is updated.

**Kind**: global function  
