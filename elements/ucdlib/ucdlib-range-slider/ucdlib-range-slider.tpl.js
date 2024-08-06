import { html } from 'lit';

export default function render() {
  return html`


<style>
  :host {
    display: block;
  }

  [hidden] { display: none !important; }

  .labels {
    display: flex;
    color: var(--gray-text, #666);
    font-size: .92rem;
    padding-top: 9px;
  }

  .inputs {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 0 .5rem
  }

  input[type="number"] {
    border: 0;
    width: 6rem;
    height: 61px;
    padding: 0 1rem;
    margin: 0 0.5rem;
    font-size: var(--fs-sm);
    background: var(--color-aggie-blue-30);
    color: var(--color-aggie-blue-80, #13639E);
    text-align: center;

    /* remove default styles for chrome/safari/ff */
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }

  /* remove spinner button for chrome/safari */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  .unknown {
    display: flex;
    align-items: center;
    padding-top: .5rem;
  }

  label {
    padding-left: 5px;
  }

  range-slider {
    --light-background-color: var(--medium-background-color);
  }

  #minInput {
    margin-left: 0;
  }

  input[type="checkbox"] {
    height: 1rem;
    width: 1rem;
    margin-left: 0;
  }

  #histogram {
    /* padding-top: 1.78rem; */
    height: 100px;
    width: 100%;
  }

  .bin {
    fill: var(--color-aggie-blue-80);
  }

  .slider {
    display: block;
    position: relative;
    height: 20px;
    top: -22px;
    /* margin: 0 13px; */

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
  }

  #numberLine {
    position: absolute;
    left : 0;
    right : 0;
    height: 3px;
    background-color: ${this.lightColor};

    border-top: 5px solid white;
    border-bottom: 5px solid white;
  }

  #fillLine {
    position: absolute;
    cursor: move;
    background-color: ${this.darkColor};
    height: 3px;

    border-top: 5px solid white;
    border-bottom: 5px solid white;
  }

  .btn {
    position: absolute;
    height: 25px;
    width: 25px;
    cursor: move;
  }

  .btn > div {
    margin: 5px;
    height: 15px;
    width: 15px;
    border-radius: 15px;
    background-color: ${this.darkColor};
    transition: all 150ms linear;
  }

  .btn[moving] > div {
    margin: 0px;
    height: 25px;
    width: 25px;
    border-radius: 25px;
  }

  .label {
    width : 25px;
    font-size: 12px;
    position: absolute;
    text-align: center;
    transform: scale(0);
    transition: transform 200ms linear;
    color: var(--default-primary-color);
  }
</style>

<svg ?hidden="${this.hideHistogram}" id="histogram"></svg>

<div class="slider">
  <div id="numberLine"></div>

  <div id="fillLine"
    prop="range"
    @mousedown="${this._onMoveStart}"
    @touchstart="${this._onMoveStart}">
  </div>

  <div id="lowNumberLabel" class="label" ?moving="${this.isMoving}">${this.minLabel}</div>
  <div id="highNumberLabel" class="label" ?moving="${this.isMoving}">${this.maxLabel}</div>

  <div id="lowNumberBtn"
    class="btn"
    prop="min"
    @mousedown="${this._onMoveStart}"
    @touchstart="${this._onMoveStart}"
    ?moving="${this.movingMin}" >
    <div></div>
  </div>

  <div id="highNumberBtn"
    class="btn"
    prop="max"
    @mousedown="${this._onMoveStart}"
    @touchstart="${this._onMoveStart}"
    ?moving="${this.movingMax}">
    <div></div>
  </div>
</div>

<div ?hidden="${this.hideSliderLabels}" class="labels">
  <div style="flex:1">${this.absMin}</div>
  <div>${this.absMax}</div>
</div>

<div class="inputs">
  <input id="minInput" .value="${this.min}" type="number" @change="${this._onInputChange}" min="${this.absMin}" max="${this.max}">
  <span> - </span>
  <input id="maxInput" .value="${this.max}" type="number" @change="${this._onInputChange}" min="${this.min}" max="${this.absMax}">
</div>

<div class="unknown" ?hidden="${this.showUnknown}">
  <input type="checkbox" id="unknown" @click="${this._onRangeNullChange}" checked />
  <label for="unknown">Include unknown/unspecified</label>
</div>
`;}
