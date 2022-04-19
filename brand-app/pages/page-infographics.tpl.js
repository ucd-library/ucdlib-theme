import { html, css } from 'lit';

import "../../elements/ucdlib/ucdlib-icon/ucdlib-icon";

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import factoidCss from "@ucd-lib/theme-sass/main_site/factoid/_factoid.css.js";
import layoutCss from "@ucd-lib/theme-sass/5_layout/_index.css.js";

export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  `;

  return [elementStyles,factoidCss,normalizeCss,layoutCss];
}

export function render() {
return html`

  ${this.pageTitle('Infographics')}

<H2> Factoids </H2>

<p>Factoids are small components of a statistic,title,icon and link, that are
typically used to display a brief datum, with a link to more information.  The
factoids are an encompassing div tag with some bracket decoration.</p>

<p>Factoids can be generated using only the CSS styling included in the ucdlib-theme, but they can be pretty complicated.</p>

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

<p>An alternative is to create a small webcomponent that can then encapsulate
these components.  For example this page includes a simple

<a href="https://lit.dev/playground/#project=W3sibmFtZSI6Im15LWZhY3RvaWQuanMiLCJjb250ZW50IjoiaW1wb3J0IHtodG1sLCBjc3MsIExpdEVsZW1lbnR9IGZyb20gJ2xpdCc7XG5pbXBvcnQgZmFjdG9pZENzcyBmcm9tIFwiLi9fZmFjdG9pZC5jc3MuanNcIjtcblxuZXhwb3J0IGNsYXNzIE15RmFjdG9pZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgc3RhdGljIHN0eWxlcyA9IFtmYWN0b2lkQ3NzXTtcbiBcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiB7dHlwZTogU3RyaW5nfSxcbiAgICAgIHN0YXRpc3RpYzoge3R5cGU6IFN0cmluZ30sXG4gICAgICB0aXRsZToge3R5cGU6U3RyaW5nfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5ocmVmPScnO1xuICAgIHRoaXMuc3RhdGlzdGljPScxNTAsMDAwJztcbiAgICB0aGlzLnRpdGxlID0gJ3NxLmZ0LiBmaXRuZXNzIGNlbnRlcic7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZhY3RvaWRcIj5cbiBcdFx0PGEgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPlxuIFx0XHRcdDxkaXYgY2xhc3M9XCJmYWN0b2lkLWJyYWNrZXQgbGVmdFwiPlxuIFx0XHRcdFx0PGRpdiBjbGFzcz1cImZhY3RvaWQtYnJhY2tldF9fdGhpbmdcIj48L2Rpdj5cbiBcdFx0XHQ8L2Rpdj5cbiBcdFx0XHQ8ZGl2IGNsYXNzPVwiZmFjdG9pZC1jb250ZW50XCI-XG4gXHRcdCAgICAgICA8ZGl2IGNsYXNzPVwiZmFjdG9pZC1jb250ZW50X19pY29uXCI-XG4gICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q-XG4gXHRcdFx0ICAgPC9kaXY-XG4gXHRcdFx0ICAgPGRpdiBjbGFzcz1cImZhY3RvaWQtY29udGVudF9fdGV4dFwiPlxuIFx0XHRcdFx0ICA8cCBjbGFzcz1cImZhY3RvaWQtY29udGVudF9fdGV4dC0tc3RhdGlzdGljXCI-JHt0aGlzLnN0YXRpc3RpY308L3A-XG4gXHRcdFx0XHQgIDxwIGNsYXNzPVwiZmFjdG9pZC1jb250ZW50X190ZXh0LS10aXRsZVwiPiR7dGhpcy50aXRsZX08L3A-XG4gXHRcdFx0ICAgPC9kaXY-XG5cdFx0XHQ8L2Rpdj5cbiBcdFx0XHQ8ZGl2IGNsYXNzPVwiZmFjdG9pZC1icmFja2V0IHJpZ2h0XCI-XG4gXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmFjdG9pZC1icmFja2V0X190aGluZ1wiPjwvZGl2PlxuIFx0XHRcdDwvZGl2PlxuIFx0XHQ8L2E-XG5cdDwvZGl2PlxuICAgICAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZmFjdG9pZCcsIE15RmFjdG9pZCk7XG4ifSx7Im5hbWUiOiJpbmRleC5odG1sIiwiY29udGVudCI6IjwhRE9DVFlQRSBodG1sPlxuPGhlYWQ-XG4gIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi4vbXktZmFjdG9pZC5qc1wiPjwvc2NyaXB0PlxuICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgbWVkaWE9XCJhbGxcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjEwLjEvY3NzL2FsbC5jc3NcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPlxuXG48L2hlYWQ-XG4gPGJvZHk-XG4gIDxteS1mYWN0b2lkICBocmVmPVwiaHR0cHM6Ly9saWJyYXJ5LnVjZGF2aXMuZWR1XCIgXG4gICAgICBzdGF0aXN0aWM9XCIzMDAsMDAwXCIgdGl0bGU9J29mIHNvbWV0aGlnJz5cbiAgPHNwYW4gY2xhc3M9XCJmYXMgZmEtZHVtYmJlbGwgZmEtNnhcIj48L3NwYW4-XG4gIDwvbXktZmFjdG9pZD5cblxuPC9ib2R5PlxuIn0seyJuYW1lIjoicGFja2FnZS5qc29uIiwiY29udGVudCI6IntcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwibGl0XCI6IFwiXjIuMC4wLXJjLjJcIixcbiAgICBcIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiOiBcIl4xLjAuMC1yYy4yXCIsXG4gICAgXCJsaXQtZWxlbWVudFwiOiBcIl4zLjAuMC1yYy4yXCIsXG4gICAgXCJsaXQtaHRtbFwiOiBcIl4yLjAuMC1yYy4zXCJcbiAgfVxufSIsImhpZGRlbiI6dHJ1ZX0seyJuYW1lIjoiX2ZhY3RvaWQuY3NzLmpzIiwiY29udGVudCI6ImltcG9ydCB7Y3NzfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgXG5cbi5mYWN0b2lkIHtcbiAgZm9udC1mYW1pbHk6IFwicHJveGltYS1ub3ZhXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgVWJ1bnR1LCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycmVtIDAgMXJlbTtcbn1cbi5mYWN0b2lkIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mYWN0b2lkOmhvdmVyIC5mYWN0b2lkLWJyYWNrZXQubGVmdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uZmFjdG9pZDpob3ZlciAuZmFjdG9pZC1icmFja2V0LnJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmZhY3RvaWQ6aG92ZXIgLmZhY3RvaWQtY29udGVudF9faWNvbiB7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHg7XG59XG4uZmFjdG9pZDpob3ZlciAuZmFjdG9pZC1jb250ZW50X19pbWcge1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4O1xufVxuLmZhY3RvaWQ6aG92ZXIgLmZhY3RvaWQtY29udGVudF9fdGV4dCB7XG4gIHBhZGRpbmc6IDVweCAwIDEwcHg7XG59XG4uZmFjdG9pZC1icmFja2V0IHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmZhY3RvaWQtYnJhY2tldC5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZmFjdG9pZC1icmFja2V0LnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mYWN0b2lkLWJyYWNrZXQubGVmdCAuZmFjdG9pZC1icmFja2V0X190aGluZyB7XG4gIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkICNiMGQwZWQ7XG59XG4uZmFjdG9pZC1icmFja2V0LnJpZ2h0IC5mYWN0b2lkLWJyYWNrZXRfX3RoaW5nIHtcbiAgYm9yZGVyLXJpZ2h0OiAxNnB4IHNvbGlkICNiMGQwZWQ7XG59XG4uZmFjdG9pZC1icmFja2V0X190aGluZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgI2IwZDBlZDtcbiAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCAjYjBkMGVkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZmFjdG9pZC1jb250ZW50IHtcbiAgbWFyZ2luOiAtMnJlbSAwIC0xcmVtO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA3MiU7XG59XG4uZmFjdG9pZC1jb250ZW50X19pY29uIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMCAxNXB4O1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGNvbG9yOiAjZmZiZjAwO1xufVxuLmZhY3RvaWQtY29udGVudF9faWNvbiBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mYWN0b2lkLWNvbnRlbnRfX2ltZyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAgMTVweDtcbiAgd2lkdGg6IDYwJTtcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmZhY3RvaWQtY29udGVudF9faW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZhY3RvaWQtY29udGVudF9fdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweCAwIDA7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5mYWN0b2lkLWNvbnRlbnRfX3RleHQtLXN0YXRpc3RpYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMC42cmVtO1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxMzYzOWU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mYWN0b2lkLWNvbnRlbnRfX3RleHQtLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC42cmVtIDAgMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMjI4NTE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1gXG5cbiJ9XQ">MyFactoid</a>

component. The title and statistic are included as attributes, while the iconography is
rendered from the content of the component, typically an icon or svg file.</p>


${this.examplePanel(html`
  <style>
      .import-icon{
        margin:auto;
        width:135px; 
        height:135px;
      }
  </style>
  <div class="l-4col layout-columns">

    <my-factoid href="http://library.ucdavis.edu" statistic="4,000,000" title="Books">
			<span><ucdlib-icon class="import-icon" src="/img/dog.svg" size=24></ucdlib-icon></span>
    </my-factoid>

    <my-factoid href="http://library.ucdavis.edu" statistic="800" title="Scorpus IDs">
      <span><ucdlib-icon style="margin:auto;width:135px; height:135px;"  icon="academic:scopus" size=24></ucdlib-icon></span>
    </my-factoid>

    <my-factoid href="http://library.ucdavis.edu" statistic="5000" title="Seats">
      <span style="font-size:100px;">⑁</span>
    </my-factoid>

    <my-factoid href="http://library.ucdavis.edu" statistic="40" title="Donations">
			<span><ucdlib-icon style="margin:auto;width:135px; height:135px;"  icon="ucdlib:hand-holding-usd"></ucdlib-icon></span>
    </my-factoid>

  </div>
`)}

`;}
