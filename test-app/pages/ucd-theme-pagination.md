<a name="UcdThemePagination"></a>

### UcdThemePagination
Component class for pagination
Pattern Lab Url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-pagination

**Kind**: global class  
**Examples**: <ucd-theme-pagination
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
<ucd-theme-pagination
 current-page="2"
 max-pages="33"
 ellipses=${true}
 base-path="/foo/bar/">
</ucd-theme-pagination>  
<ucd-theme-pagination
 current-page="2"
 max-pages="33"
 is-mobile=${true}
 base-path="/foo/bar/">
</ucd-theme-pagination>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| base-path | <code>String</code> | for anchor tag href |
| current-page | <code>String</code> | Page to show and highlight |
| max-pages | <code>String</code> | Max number of total pages |
| visible-link-count | <code>String</code> | How many page links to show |
| is-mobile | <code>Boolean</code> | Whether the pagination is mobile view |
| ellipses | <code>Boolean</code> | Whether it is default or ellipses view|

