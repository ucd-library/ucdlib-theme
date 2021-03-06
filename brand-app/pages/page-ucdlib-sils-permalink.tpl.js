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

  ${this.pageTitle('ucdlib-sils-permalink')}

<H1>SILS permalinks</H1>

<p>The notion of the permalink is to be able to add link pointers to complete
sils records, for example this <a
href="https://search.library.ucdavis.edu/permalink/01UCD_INST/1uov27j/alma9981249369903126">Book</a>.
The &lt;ucdlib-sils-permalink
href="https://search.library.ucdavis.edu/permalink/01UCD_INST/1uov27j/alma9981249369903126"&gt;&lt;/ucdlib-sils-permalink&gt;
could be used to add links. Formatting for these links could be created by
accessing the appropriate JSON for the entry, and dynamically formatting the link.</p>

<H2>Article Teaser</H2>

<p>Permalinks can also be rendered in a more complete mode.  These are intended
to be used as more complete callouts to a particular link.  The <a href="http://dev.webstyleguide.ucdavis.edu/redesign/?p=all">article-teaser</a> is a good example for that.</p>

<p>Using the <a
href="https://search.library.ucdavis.edu/primaws/rest/pub/pnxs/undefined/alma9916924606106531?vid=01UCD_INST:UCD&lang=en">JSON</a>
representation, we can fill in a teaser similar to that shown below.</p>
  ${this.sampleList.map(permalink =>
    html`
      ${this.examplePanel(html`
      <ucdlib-sils-permalink permalink='${permalink}'></ucdlib-sils-permalink>
    `)}
  `)}

  ${this.new_permalinks ? 
    this.new_permalinks.map(formData => html`
      ${this.examplePanel(html`
      <ucdlib-sils-permalink image="${formData.image}" 
                             title="${formData.title}"
                             host_url=${formData.permalink}
                             authorFull="${JSON.stringify(formData.author)}"
                             year="${formData.year}"
                             tags="${JSON.stringify(formData.tags)}"
                             summary="${formData.summary}"
                             index = "${formData.index}"
                             isCustom>
      </ucdlib-sils-permalink>      `)}
    `)
  : html``}

  ${this.hasCustomData ? html`
    <button class="btn btn--alt2 btn--block" @click="${this.reset}">Reset Custom Blocks</button>

  `: html`
    <button class="btn btn--alt2 btn--block btn--disabled">Reset Custom Blocks</button>
  `}
<p>Using the Fill in Method of article teaser</p>

  ${this.examplePanel(html`
  <article class="vm-teaser   ">
  <div class="vm-teaser__figure category">
    <a href="#"><img src="https://syndetics.com/index.php?client=primo&isbn=0-8093-3392-9/sc.jpg" alt="Thumbnail" class="" width="135" height="135" loading="lazy" />
    </a>
  </div>
  <div class="vm-teaser__body">
    <h3 class="vm-teaser__title"><a href="#">Engineering victory : the Union siege of Vicksburg</a></h3>
    <ul class="vm-teaser__byline">
      <li><span class="byline">by Solonick, Justin S.</span>
      </li>
      <li>2015</li>
    </ul>
    <ul class="vm-teaser__categories">
      <li class="vm-teaser__cat-marker tahoe"><a href="">Military engineers -- United States -- History -- 19th century</a></li>
      <li class="vm-teaser__cat-marker california"><a href="">Vicksburg (Miss.) -- History -- Siege, 1863</a></li>
      <li class="vm-teaser__cat-marker quad"><a href="">United States -- History -- Civil War, 1861-1865 -- Engineering and construction</a></li>
    </ul>
    <div class="vm-teaser__summary">Introduction: with a spade in one hand and a gun in the other -- The engineer's art -- America's early sieges -- Preparing to dig them out -- Earthworks rose as by magic -- More roads to Rome than one -- The school of the sap -- The body snatchers -- Turning loose the dogs of war -- Toiling day and night -- The key to Vicksburg -- Conclusion: Vicksburg is ours!</div>
  </div>
</article>
  `)}

`;}
