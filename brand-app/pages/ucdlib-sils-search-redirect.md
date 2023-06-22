### Classes

<dl>
<dt><a href="#UcdlibSilsSearchRedirect">UcdlibSilsSearchRedirect</a></dt>
<dd><p>Search widget that redirects a user&#39;s query to SILS Primo</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#doSearch">doSearch(searchType)</a></dt>
<dd><p>Either redirects to Primo or fires event listener</p>
</dd>
</dl>

<a name="UcdlibSilsSearchRedirect"></a>

### UcdlibSilsSearchRedirect
Search widget that redirects a user's query to SILS Primo

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | The search query |
| ucdOnly | <code>Boolean</code> | Limits search to UC Davis libraries only |
| darkBackground | <code>Boolean</code> | Adjusts colors for display on a dark background |
| preventRedirect | <code>Boolean</code> | Will not send user to Primo on form submission |
| headingText | <code>String</code> | Text to display above main text input |
| inputPlaceholder | <code>String</code> | Placeholder for main text input |
| host | <code>String</code> | Primo host |

<a name="doSearch"></a>

### doSearch(searchType)
Either redirects to Primo or fires event listener

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| searchType | <code>\*</code> | advanced or basic |

