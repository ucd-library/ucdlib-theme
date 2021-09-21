import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import teaserStyles from "@ucd-lib/theme-sass/4_component/_index.css.js";
import baseStyles from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles,baseStyles,teaserStyles,normalizeCss];
}

export function render() {
  return html`
  <article class="vm-teaser   ">
  <div class="vm-teaser__figure category">
    <a href="#"><img src="https://syndetics.com/index.php?client=primo&isbn=0-8093-3392-9/sc.jpg" alt="Thumbnail" class="" width="135" loading="lazy" />
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
`;
}
