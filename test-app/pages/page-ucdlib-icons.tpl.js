import { html, css } from 'lit';

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
  <style>
    .icons-demo {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      color: var(--brand--primary);
    }
    .icons-demo ucdlib-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      transition: .2s;
    }
    .icon-wrapper:hover {
      color: var(--putah-creek);
    }
    .icons-demo .icon-wrapper {
      text-align: center;
      width: 10em;
      min-width: 10em;
      margin: 1em 0.5em;
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .icons-demo .icon-label {
      margin-top: 0.5em;
      font-size: 10px;
    }
  </style>

  ${this.pageTitle("Predefined Iconsets")}
  <p>This package contains several predefined iconsets that can be imported into your application, 
    and used by the <a href="#ucdlib-icon">ucdlib-icon element</a>.
  </p>

  <select class="u-space-mb" @change=${e => this.selectedSet=parseInt(e.target.value)}>
    ${this.iconSets.map((d, i) => html`
      <option .value=${i} ?selected=${i == this.selectedSet}>${d.label}</option>
    `)}
  </select>
  <ucdlib-pages .selected=${this.selectedSet}>
    ${this.iconSets.map(d => html`
      <div>
        ${this.importPanel(`ucdlib/ucdlib-icons/${d.path ? d.path : d.id}`)}
        <div class="icons-demo panel o-box o-box--large u-space-pt--flush">
          ${d.iconNames ? html`
            ${d.iconNames.map(name => html`
              <div class="icon-wrapper">
                <ucdlib-icon icon=${this._getIconName(name, d.id)}>
                </ucdlib-icon>
                <div class="icon-label">${this._getIconName(name, d.id)}</div>
              </div>
            `)}
          ` : html`
            <p class="u-align--center"><a @click=${() => this.requestUpdate()} class="btn btn--primary btn--lg">Load Icons</a></p>
          `}


        </div>
      </div>
    `)}

  </ucdlib-pages>


`;}