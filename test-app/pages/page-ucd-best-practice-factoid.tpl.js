import { html, css } from 'lit';

//import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
//import factoidCss from "@ucd-lib/theme-sass/magic/factoid.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
  `;

  return [elementStyles];
}

export function render() {
return html`

  ${this.pageTitle('Factoid - Best Practice')}

<p>Factoids are small components of a statistic,title,icon and link, that are
typically used to display a brief datum, with a link to more information.  The
factoids are an encompassing div tag with some bracket decoration.</p>

  ${this.examplePanel(html`

<div class="factoid">
		<a href="https://rec.ucdavis.edu/">
			<div class="factoid-bracket left">
				<div class="factoid-bracket__thing"></div>
			</div>
			<div class="factoid-content">
								<div class="factoid-content__icon">
					<span class="fas fa-dumbbell fa-3x"></span>
				</div>
								<div class="factoid-content__text">
					<p class="factoid-content__text--statistic">150,000</p>
					<p class="factoid-content__text--title">square foot fitness center</p>
				</div>
			</div>
			<div class="factoid-bracket right">
				<div class="factoid-bracket__thing"></div>
			</div>
		</a>
	  </div>
  `)}

`;}
