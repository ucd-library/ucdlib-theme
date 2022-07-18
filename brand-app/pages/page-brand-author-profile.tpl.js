import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import baseStyles from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
import buttons from "@ucd-lib/theme-sass/2_base_class/_index.css.js";
export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }

  `;

  return [elementStyles,baseStyles,normalizeCss, buttons];
}

export function render() {
return html`

  ${this.pageTitle('Brand Author Profile')}

<H1>Author Profile</H1>

<p>The notion of the email is to be able to add links complete
website records, for example this <a
href="https://sandbox.library.ucdavis.edu/wp-json/ucdlib-directory/person/qjhart@ucdavis.edu">Person</a>.
The <code> &lt;brand-author-profile domain="sandbox" email="qjhart@ucdavis.edu"&gt;&lt;/brand-author-profile&gt; </code> 
could be used to add links. Formatting for these links could be created by
accessing the appropriate JSON for the entry, and dynamically formatting the link.</p>

<p>Using the <a
href="https://sandbox.library.ucdavis.edu/wp-json/ucdlib-directory/people">JSON</a>
representation, we can fill a profile based on a directory email address given.</p>

<p>Includes <code>email</code> for choosing person for author profile and <code>domain</code> for which domain you want to search in.</p>
  ${this.sampleList.map(id =>
    html`
      ${this.examplePanel(html`
      <brand-author-profile domain="stage" email='${id}'></brand-author-profile>
    `)}
  `)}

`;}
