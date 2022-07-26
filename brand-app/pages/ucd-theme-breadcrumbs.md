### Classes

<dl>
<dt><a href="#UcdlibBreadcrumbs">UcdlibBreadcrumbs</a></dt>
<dd><p>UI component class for a breadcrumb list</p>
Pattern Lab Url: <a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-breadcrumbs">http://dev.webstyleguide.ucdavis.edu/redesign/?p=molecules-breadcrumbs</a></p>
</dd>
</dl>

<a name="UcdlibBreadcrumbs"></a>

### IN ORDER TO USE
Add links by adding an array with <code> JSON.stringify</code> to an array of objects with the set parameters.
An example:
<code>JSON.stringify([
    { linkTitle: "title1", url: "#1" },
    { linkTitle: "title2", url: "#2" },
    { linkTitle: "title3", url: "#3" }
    ])
</code>

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| links | <code>Object</code> | An list of objects with both the link name and the link url included.  Format: <code>{linkTitle: "title", url: "#"}</code>|
