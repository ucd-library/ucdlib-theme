import { html, css } from 'lit';
import '@ucd-lib/theme-elements/ucdlib/ucdlib-range-slider/ucdlib-range-slider';

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
    ${this.pageTitle("Range slider with histogram")}
    <p>The <code>ucdlib-range-slider</code> element is a range slider component with start / end inputs and an optional histogram.</p>

    <h2>Using the component</h2>
    
    ${this.examplePanel(html`
      <div style="max-width: 350px">
        <ucdlib-range-slider
          @range-slider-change="${this._onRangeSliderChange}"
          .data=${[
              { stat : 2020, value : 42 },
              { stat : 2021, value : 52 },
              { stat : 2022, value : 32 },
              { stat : 2023, value : 62 },
              { stat : 2024, value : 22 },
              { stat : 2025, value : 24 },
              { stat : 2026, value : 27 },
              { stat : 2027, value : 75 },
              { stat : 2028, value : 72 },
              { stat : 2029, value : 88 },
              { stat : 2030, value : 11 },
              { stat : 2031, value : 77 },
              { stat : 2032, value : 45 },
              { stat : 2033, value : 60 }
          ]}>
        </ucdlib-range-slider> 
      </div>
    `)}

    <p>
      Note, the <code>.data</code> attribute is expecting an array of objects containing a 
      <code>stat</code> and a <code>value</code>, for instance, 
      <code>[{ stat : 2020, value : 42 }, ..., { stat : 2033, value : 60 }]</code>.
    </p>

    <p>
      Also, if there are less than 5 stats to display, the histogram will not be shown. The max number of bins (bars) is 50, 
      so if there are more than 50, multiple stats will be grouped together.
    </p>

    <p>
      When the slider min / max values are changed, or when the "Include unknown/unspecified" checkbox is changed, 
      an event is triggered to <code>range-slider-change</code>.
      The event details will include <code>min</code>, <code>max</code>, and <code>includeUnknown</code>.      
    </p>

    <h2>Customizing the component</h2>
    <p>It's possible to override the colors of the histogram and slider, as well as to hide the labels under the min / max ends of the slider.</p>
     ${this.examplePanel(html`

      <div style="max-width: 350px">
        <ucdlib-range-slider
          @range-slider-change="${this._onRangeSliderChange}"
          .data=${[
              { stat : 1971, value : 42 },
              { stat : 1972, value : 52 },
              { stat : 1973, value : 32 },
              { stat : 1974, value : 62 },
              { stat : 1975, value : 22 },
              { stat : 1976, value : 24 },
              { stat : 1977, value : 27 },
              { stat : 1978, value : 75 },
              { stat : 1979, value : 72 },
              { stat : 1980, value : 88 },
              { stat : 1981, value : 11 },
              { stat : 1982, value : 77 },
              { stat : 1983, value : 45 },
              { stat : 1984, value : 60 }
          ]}
          light-color="#FFF4D2"
          medium-color="#FFDF80"
          dark-color="#FFBF00"
          hide-slider-labels>
        </ucdlib-range-slider>
    `)}

  `;
}
