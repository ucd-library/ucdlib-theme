### Classes

<dl>
<dt><a href="#UcdThemeQuickLinks">UcdThemeQuickLinks</a></dt>
<dd><p>Component class for displaying a quick links nav</p>
<p> Patternlab Url:</p>
<ul>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links</a></li>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-2-columns">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-2-columns</a></li>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-highlight">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-highlight</a></li>
<li><a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-home-site">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-home-site</a></li>
</ul>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#open">open()</a> ⇒ <code>Promise</code></dt>
<dd><p>Opens the quick links menu if not already open or in a transition state.</p>
</dd>
<dt><a href="#close">close()</a> ⇒ <code>Promise</code></dt>
<dd><p>Closes the quick links menu if not already closed or in a transition state.</p>
</dd>
<dt><a href="#ingestChildren">ingestChildren()</a></dt>
<dd><p>Copies lightdom children into the shadowdom.</p>
</dd>
</dl>

<a name="UcdThemeQuickLinks"></a>

### UcdThemeQuickLinks
Component class for displaying a quick links nav

 Patternlab Url:
   - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links
   - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-2-columns
   - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-highlight
   - http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-quick-links-home-site

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | Text to be displayed instead of "Quick Links" |
| styleModifiers | <code>String</code> | Apply alternate styles with a space-separated list. |
| opened | <code>Boolean</code> | Menu is open |
| animationDuration | <code>Number</code> | Length of animation when opening/closing menu |

<a name="open"></a>

### open() ⇒ <code>Promise</code>
Opens the quick links menu if not already open or in a transition state.

**Kind**: global function  
**Returns**: <code>Promise</code> - Returns true if successful  
<a name="close"></a>

### close() ⇒ <code>Promise</code>
Closes the quick links menu if not already closed or in a transition state.

**Kind**: global function  
**Returns**: <code>Promise</code> - Returns true if successful  
<a name="ingestChildren"></a>

### ingestChildren()
Copies lightdom children into the shadowdom.

**Kind**: global function  
