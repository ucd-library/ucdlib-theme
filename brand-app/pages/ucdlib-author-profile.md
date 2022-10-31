### Classes

<dl>
<dt><a href="#AuthorProfile">AuthorProfile</a></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#updated">updated(props)</a></dt>
<dd><p>request user data when email or host changes</p>
</dd>
<dt><a href="#validationLink">validationLink(email)</a> ⇒ <code>String</code></dt>
<dd><p>Validates the email to make sure it is an email</p>
</dd>
<dt><a href="#validationLink">validationLink(email)</a> ⇒ <code>String</code></dt>
<dd><p>Validates the email to make sure it is an email</p>
</dd>
<dt><a href="#_onError">_onError(e)</a></dt>
<dd><p>Sets error variable to true</p>
</dd>
<dt><a href="#_onComplete">_onComplete(results)</a></dt>
<dd><p>on complete defines the forms and updates</p>
</dd>
<dt><a href="#_requestUrl">_requestUrl()</a> ⇒ <code>String</code></dt>
<dd><p>configures the url and checks for email validation</p>
</dd>
<dt><a href="#_onLoading">_onLoading()</a></dt>
<dd><p>Sets loading variable to true</p>
</dd>
</dl>

<a name="AuthorProfile"></a>

### AuthorProfile
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | Email to reference person |
| host | <code>String</code> | Specify the host to choose from <ucdlib-theme-author-profile host="sandbox" email='sabaggett@ucdavis.edu></ucdlib-theme-author-profile> |

<a name="new_AuthorProfile_new"></a>

#### new AuthorProfile()
This author profile hydrates with the website wordpress api and goes into a profile block.

<a name="updated"></a>

### updated(props)
request user data when email or host changes

**Kind**: global function  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

<a name="validationLink"></a>

### validationLink(email) ⇒ <code>String</code>
Validates the email to make sure it is an email

**Kind**: global function  

| Param | Type |
| --- | --- |
| email | <code>String</code> | 

<a name="validationLink"></a>

### validationLink(email) ⇒ <code>String</code>
Validates the email to make sure it is an email

**Kind**: global function  

| Param | Type |
| --- | --- |
| email | <code>String</code> | 

<a name="_onError"></a>

### \_onError(e)
Sets error variable to true

**Kind**: global function  

| Param | Type |
| --- | --- |
| e | <code>String</code> | 

<a name="_onComplete"></a>

### \_onComplete(results)
on complete defines the forms and updates

**Kind**: global function  

| Param | Type |
| --- | --- |
| results | <code>Object</code> | 

<a name="_requestUrl"></a>

### \_requestUrl() ⇒ <code>String</code>
configures the url and checks for email validation

**Kind**: global function  
<a name="_onLoading"></a>

### \_onLoading()
Sets loading variable to true

**Kind**: global function  
