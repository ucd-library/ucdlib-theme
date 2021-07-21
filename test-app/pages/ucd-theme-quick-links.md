### Classes

<dl>
<dt><a href="#UcdThemeQuickLinks">UcdThemeQuickLinks</a></dt>
<dd><p>Component class for displaying a quick links nav
 Patternlab Url:</p>
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
<dt><a href="#open">open()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Opens the quick links menu if not already open or in a transition state.</p>
</dd>
<dt><a href="#close">close()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Closes the quick links menu if not already closed or in a transition state.</p>
</dd>
<dt><a href="#ingestChildren">ingestChildren()</a></dt>
<dd><p>Copies lightdom children into the shadowdom.</p>
</dd>
<dt><a href="#isDesktop">isDesktop()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Is the desktop view currently active?</p>
</dd>
<dt><a href="#isMobile">isMobile()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Is the mobile view currently active?</p>
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

### open() ⇒ <code>Boolean</code>
Opens the quick links menu if not already open or in a transition state.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if successful  
<a name="close"></a>

### close() ⇒ <code>Boolean</code>
Closes the quick links menu if not already closed or in a transition state.

**Kind**: global function  
**Returns**: <code>Boolean</code> - True if successful  
<a name="ingestChildren"></a>

### ingestChildren()
Copies lightdom children into the shadowdom.

**Kind**: global function  
<a name="isDesktop"></a>

### isDesktop() ⇒ <code>Boolean</code>
Is the desktop view currently active?

**Kind**: global function  
<a name="isMobile"></a>

### isMobile() ⇒ <code>Boolean</code>
Is the mobile view currently active?

**Kind**: global function  
