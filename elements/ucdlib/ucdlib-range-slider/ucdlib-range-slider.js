import { LitElement } from 'lit';

import render from './ucdlib-range-slider.tpl.js';

import './ucdlib-range-slider.js';

export default class UcdlibRangeSlider extends LitElement {
  static get properties() {
    return {
      data : { type: Array },
      mergedData : { type: Array },

      // slider/date input values
      absMin: { type: Number },
      absMax: { type: Number },
      min: { type: Number },
      max: { type: Number },

      // labels for slide btns
      minLabel: { type: String },
      maxLabel: { type: String },

      isMoving: { type: Boolean },
      movingType: { type: String },
      movingMin: { type: Boolean },
      movingMax: { type: Boolean },

      showUnknown: { type: Boolean },

      // track width and height of widget so we don't have to ask the DOM
      width: { type: Number },
      height: { type: Number },
      btnHeight: { type: Number },

      hideHistogram: { type: Boolean, attribute: 'hide-histogram' },
      hideSliderLabels: { type: Boolean, attribute: 'hide-slider-labels' },

      // colors for histogram
      lightColor: { type: String, attribute: 'light-color' },
      mediumColor: { type: String, attribute: 'medium-color' },
      darkColor: { type: String, attribute: 'dark-color' }
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this.data = [];
    this.mergedData = [];

    this.absMin = 0;
    this.absMax = 0;
    this.min = this.absMin;
    this.max = this.absMax;
    this.showUnknown = false;

    this.minLabel = '';
    this.maxLabel = '';
    this.width = 1;
    this.height = 50;
    this.btnHeight = 1;
    this.movingType = '';
    this.movingMin = false;
    this.movingMax = false;
    this.isMoving = false;
    this.hasRendered = false;
    this.hideHistogram = false;
    this.hideSliderLabels = false;
    this.lightColor = '#CCE0F3';
    this.mediumColor = '#73ABDD';
    this.darkColor = '#13639E';

    // consts to build histogram
    this.gapPx = 2;
    this.minBinWidth = 6;
    this.minBins = 5;
    this.maxBins = 50;

    this._windowResizeListener = this._onResize.bind(this);
    this._windowMouseListener = this._onMoveStop.bind(this);
  }

  /**
   * @method connectedCallback
   * @description setup our window mouse listeners, fire first render
   */
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('mousemove', (e) => this._onMove(e));
    this.addEventListener('touchmove', (e) => this._onMove(e));

    window.addEventListener('resize', this._windowResizeListener);
    window.addEventListener('mouseup', this._windowMouseListener);
    window.addEventListener('mouseout', this._windowMouseListener);
    window.addEventListener('touchend', this._windowMouseListener);
    window.addEventListener('touchcancel', this._windowMouseListener);
  }

  /**
   * @method disconnectedCallback
   * @description remove our window mouse listeners
   */
  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener('resize', this._windowResizeListener);
    window.removeEventListener('mouseup', this._windowMouseListener);
    window.removeEventListener('mouseout', this._windowMouseListener);
    window.removeEventListener('touchend', this._windowMouseListener);
    window.removeEventListener('touchcancel', this._windowMouseListener);
  }

  willUpdate(e) {
    if (!this.hasRendered) {
      requestAnimationFrame(() => {
        this._onResize(null, false);
        this._renderAsync();
      });
      this.hasRendered = true;
    }
  }

  /**
   * @method _onResize
   * @description when the window resizes, re-render the histogram
   *
   * @param {Event} evt
   * @param {Boolean} reMerge should we re-merge the data, typically when resizing window could cause difference
   */
  _onResize(evt, reMerge=true) {
    this.width = this.offsetWidth || 1;
    this.height = this.offsetHeight;
    this.left = this.offsetLeft;
    let lowNumberBtn = this.shadowRoot.querySelector('#lowNumberBtn');
    if (lowNumberBtn) {
      this.height = 50;
      this.btnHeight = 25;
      this._render();
    }

    this._updateHistogram(reMerge);
  }

  /**
   * @method _updateHistogram
   * @description render histogram bins based on the min and max values from data received,
   *  and the width of the rendered svg. smallest bin possible is 6px with 2px gaps,
   *  and a max of 50 bins is possible.
   *  otherwise data points will be merged to fit within the max bins.
   *  if less than 5 bins, histogram will be hidden.
   *
   * @param {Boolean} reMerge should we re-merge the data, typically when resizing window could cause difference
   */
  _updateHistogram(reMerge=false) {
    if( this.hideHistogram ) return;

    this.absMin = this.data?.[0]?.stat || 0;
    this.absMax = this.data?.[this.data?.length - 1]?.stat || 0;

    if( !this.merged ) {
      this.min = this.absMin;
      this.max = this.absMax;
    }

    if( this.data?.length < 5 ) return this.hideHistogram = true;

    // get bound of svg
    let svg = this.shadowRoot.getElementById('histogram');
    let svgWidth = Math.floor(svg.getBoundingClientRect().width);
    let svgHeight = svg.getBoundingClientRect().height;
    if( !svgWidth || !svgHeight ) return;

    let maxBarHeight = svgHeight - 20; // space for padding above histo
    let binWidth = (svgWidth / (this.mergedData.length || this.data.length)) || 1;
    svg.innerHTML = '';

    // max 50 bins of 6px + 2px gap, so 50*8-2 = 398px min width
    // if over 50 bins and svgWidth < 398px, need to merge bins
    // start by merging 2 bins at a time, then 3, etc
    // only merge initially on render, or when resizing window
    if( !this.merged || reMerge ) {
      // merge bins if necessary
      let mergedData = JSON.parse(JSON.stringify(this.data));
      let mergedBins = mergedData.length;

      let mergedPerBin = 1;

      while( binWidth < (this.minBinWidth + this.gapPx) || mergedBins > this.maxBins ) {
        mergedBins = Math.ceil(mergedData.length / 2);
        binWidth *= 2;
        mergedData = [];
        mergedPerBin *= 2;

        for( let i = 0; i < mergedBins; i++ ) {
          let start = i * mergedPerBin;
          let end = start + mergedPerBin - 1;

          if( end >= this.data.length ) {
            mergedData.push(this.data[start]);
          } else {
            let mergedValue = this.data[start].value + this.data[end].value;
            let mergedStat = this.data[start].stat + '-' + this.data[end].stat;
            mergedData.push({ stat: mergedStat, value: mergedValue });
          }
        }

        // recalc after potential merging above,
        // to fix floating point precision issues when multiplying binWidth multiple times
        binWidth = (svgWidth / (mergedData || []).length) || 1;
      }

      this.mergedData = mergedData;
      this.merged = true;
    }

    // find the max value in the data
    let max = Math.max(...this.mergedData.map(d => d.value));

    // create bins
    this.mergedData.forEach((d, i) => {
      let barHeight = (d.value / max) * maxBarHeight;
      let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', i * binWidth);
      rect.setAttribute('y', svgHeight - barHeight);
      rect.setAttribute('width', binWidth - this.gapPx);
      rect.setAttribute('height', barHeight);
      rect.setAttribute('class', 'bin');
      rect.setAttribute('stat', d.stat);
      svg.appendChild(rect);
    });

    this.binWidth = binWidth;
    this.numBins = (this.mergedData.length || this.data.length);

    this._updateHistogramColors();
  }

  /**
   * @method _updateHistogramColors
   * @description update light/medium/dark bin colors in histogram
   */
  _updateHistogramColors() {
    if( this.hideHistogram ) return;

    let histogram = this.shadowRoot.querySelector('#histogram');
    if( !histogram ) return;

    let bins = histogram.querySelectorAll('.bin');
    bins.forEach(bin => {
      let stat = bin.getAttribute('stat');

      // when data stats are merged, there will be a string of stats separated by a hyphen
      // ie '2010-2012' for years
      // color partially selected bins with a medium color
      let startStat = parseInt(stat.split('-')[0]);
      let endStat = parseInt(stat.split('-').pop());

      if( (startStat < this.min && endStat < this.min) || (startStat > this.max && endStat > this.max) ) {
        bin.style.fill = this.lightColor;
      } else if( startStat >= this.min && endStat <= this.max ) {
        bin.style.fill = this.darkColor;
      } else {
        bin.style.fill = this.mediumColor;
      }
    });
  }

  /**
   * @method _valueToPx
   * @description given a number line value, return px location relative
   * to the widget
   *
   * @param {Number} value number line value
   * @param {Boolean} isMin is this the min value
   *
   * @returns {Number} px location
   */
  _valueToPx(value, isMin=false) {
    let px = 0;
    let range = this.absMax - this.absMin + 1;

    value -= this.absMin;
    if( !isMin ) value += 1;
    
    // no merging of bins
    if( this.numBins === range ) {
      px = Math.round(value * this.binWidth);
    } else {
      let rangeWidth = this.binWidth / (range / this.numBins);
      px = Math.round(value * rangeWidth);
    }

    return px;
  }

  /**
   * @method _pxToValue
   * @description given a px location, return number line value
   *
   * @param {Number} px location
   *
   * @returns {Number} value
   */
  _pxToValue(px) {
    let range = this.absMax - this.absMin;
    let valPerPx = range / this.width;
    return Math.round(px * valPerPx) + this.absMin;
  }

  /**
   * @method _renderAsync
   * @description debounce render calls
  */
  _renderAsync() {
    if (this.renderTimer) {
      clearTimeout(this.renderTimer);
    }

    this.renderTimer = setTimeout(() => {
      this.renderTimer = 0;
      this._render();
    }, 0);
  }

  /**
   * @method _render
   * @description set top/left px values for buttons/slider
   */
  _render() {
    let hh = this.height * 0.6;

    // set line heights
    this.shadowRoot.querySelector('#numberLine').style.top = hh + 'px';
    this.shadowRoot.querySelector('#fillLine').style.top = hh + 'px';

    // set btn heights
    let hBtnHeight = this.btnHeight / 2;
    this.shadowRoot.querySelector('#lowNumberBtn').style.top =
      hh - hBtnHeight + 6 + 'px';
    this.shadowRoot.querySelector('#highNumberBtn').style.top =
      hh - hBtnHeight + 6 + 'px';

    this.shadowRoot.querySelector('#lowNumberLabel').style.top =
      hh - hBtnHeight - 22 + 'px';
    this.shadowRoot.querySelector('#highNumberLabel').style.top =
      hh - hBtnHeight - 22 + 'px';

    // set btn left
    let lv =
      this.min < this.absMin ? this.absMin : this.min;
    let uv =
      this.max > this.absMax ? this.absMax : this.max;

    let minPxValue = this._valueToPx(lv, true);
    let maxPxValue = this._valueToPx(uv);

    this.shadowRoot.querySelector('#lowNumberBtn').style.left =
      minPxValue - hBtnHeight + 'px';
    this.shadowRoot.querySelector('#highNumberBtn').style.left =
      maxPxValue - hBtnHeight + 'px';

    this.shadowRoot.querySelector('#lowNumberLabel').style.left =
      minPxValue - hBtnHeight + 'px';
    this.shadowRoot.querySelector('#highNumberLabel').style.left =
      maxPxValue - hBtnHeight + 'px';

    this.shadowRoot.querySelector('#fillLine').style.left = minPxValue + 'px';
    this.shadowRoot.querySelector('#fillLine').style.width =
      maxPxValue - minPxValue + 'px';

    this.minLabel = this.min;
    this.maxLabel = this.max;
  }

  /**
   * @method _onRangeSliderChange
   * @description moving of range slider has stopped
   */
  _onRangeSliderChange(e) {
    this._onRangeNullChange();
    this._updateHistogramColors();
  }

  /**
   * @method _onRangeNullChange
   * @description bound to input checkbox
   */
  _onRangeNullChange(evt) {
    let value = {
      gte: this.min,
      lte: this.max,
    };

    if( this.shadowRoot.querySelector('#unknown').checked ) {
      value.includeNull = true;
    }

    if( evt ) this._notifySelected();
  }

  /**
   * @method _onInputChange
   * @description bound to min/max number inputs
   */
  _onInputChange(e) {
    if( e.currentTarget.id === 'minInput' ) {
      let min = Number(e.currentTarget.value);
      if( min < this.absMin ) min = this.absMin;
      if( min > this.absMax ) min = this.absMax;
      if( min > this.max ) min = this.max;
      this.min = min;
      e.target.value = this.min;
    } else if( e.currentTarget.id === 'maxInput' ) {
      let max = Number(e.currentTarget.value);
      if( max > this.absMax ) max = this.absMax;
      if( max < this.absMin ) max = this.absMin;
      if( max < this.min ) max = this.min;
      this.max = max;
      e.target.value = this.max;
    }

    this._render();
    this._onRangeNullChange();
    this._updateHistogramColors();
    this._notifySelected();
  }

  /**
   * @method _isFilterApplied
   * @description is there currenlty a filter set
   *
   * @return {Boolean}
   */
  _isFilterApplied() {
    if (
      this.min === this.absMin &&
      this.max === this.absMax &&
      this.shadowRoot.querySelector('#unknown').checked === true
    ) {
      return false;
    }
    return true;
  }

  /**
   * @method _notifySelected
   * @description notify parent of selection change
   */
  _notifySelected() {
    this.dispatchEvent(
      new CustomEvent('range-slider-change', {
        detail: {
          min: this.min,
          max: this.max,
          includeUnknown: this.shadowRoot.querySelector('#unknown').checked
        },
      })
    );
  }

  /**
   * @method reset
   * @description reset range filter
   */
  reset() {
    this.min = this.absMin;
    this.max = this.absMax;
    this.shadowRoot.querySelector('#unknown').checked = true;

    this._onRangeNullChange();
  }

  /**
   * @method _onMoveStart
   * @description bound to btns and center line.  Fired when the user mouses
   * down on element indicating a move is starting
   *
   * @param {MouseEvent} e
   */
  _onMoveStart(e) {
    this.movingType = e.currentTarget.getAttribute('prop');

    this.isMoving = true;
    this.movingMin = this.movingType === 'max' ? false : true;
    this.movingMax = this.movingType === 'min' ? false : true;

    if( this.movingType === 'range' ) this._onMoveMiddle(e);    
  }

  /**
   * @method _onMove
   * @description bound to mousemove event on this element.  Update min/max
   * values based on type of move that is happening ie min, max or range.  Does
   * nothing if we are not moving.
   *
   * @param {MouseEvent} e
   */
  _onMove(e) {
    if (!this.isMoving) return;
    e.preventDefault();

    // handle both mouse and touch event
    let left;
    if (e.type === 'touchmove') {
      if (!e.changedTouches.length) return;
      left = e.changedTouches[0].pageX - this.left;
    } else {
      left = e.pageX - this.left;
    }

    if( this.movingType === 'min' ) {
      this.min = this._pxToValue(left);
    } else if( this.movingType === 'max' ) {
      this.max = this._pxToValue(left);
    }

    if (this.min < this.absMin) {
      this.min = this.absMin;
    }
    if (this.max > this.absMax) {
      this.max = this.absMax;
    }

    if (this.min > this.max) {
      if (this.movingType === 'min') this.min = this.max;
      else this.max = this.min;
    }
    this.hasRendered = false;
  }

  /**
   * @method _onMoveMiddle
   * @description bound to mousemove event on this element.  Update min/max
   * values based closest min/max button (adjust selection that is closest to mouse position)
   * @param {MouseEvent} e
   */
  _onMoveMiddle(e) {
    let fillLineWidth = e.currentTarget.offsetWidth;
    let leftOffset = e.offsetX;

    if( (fillLineWidth / 2) < leftOffset ) {
      this.movingType = 'max';
    } else {
      this.movingType = 'min';
    }

    this._onMove(e);
  }

  /**
   * @method _onMoveStop
   * @description bound to mouseup/mouseout event on window.  It's always best to bind
   * this to the window as a catch all.  Resets all moving flags
   */
  _onMoveStop() {
    if (!this.isMoving) return;

    this.movingType = '';
    this.movingMin = false;
    this.movingMax = false;
    this.isMoving = false;

    this._onRangeSliderChange();

    this.hasRendered = false;
    this.requestUpdate();
    this._notifySelected();
  }
}

customElements.define('ucdlib-range-slider', UcdlibRangeSlider);
