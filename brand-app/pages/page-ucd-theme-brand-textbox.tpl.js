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
  ${this.pageTitle('Brand Textbox')}
  <h2>Make Content Collapsible</h2>
  <p>Any slotted content can be made collapsible with the <code>collapsible</code> attribute:</p>

  ${this.examplePanel(html`
    <ucd-theme-brand-textbox collapsible>
      <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet. Sit amet mauris commodo quis imperdiet. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ultrices vitae auctor eu augue ut. Pellentesque habitant morbi tristique senectus. Ac auctor augue mauris augue neque gravida in. Pulvinar neque laoreet suspendisse interdum. Risus pretium quam vulputate dignissim suspendisse in. Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
    </ucd-theme-brand-textbox>
  `)}

  <p>The <code>collapsed</code> attribute will hide the content.</p>
  ${this.examplePanel(html`
    <ucd-theme-brand-textbox collapsible collapsed>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet. Sit amet mauris commodo quis imperdiet. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ultrices vitae auctor eu augue ut. Pellentesque habitant morbi tristique senectus. Ac auctor augue mauris augue neque gravida in. Pulvinar neque laoreet suspendisse interdum. Risus pretium quam vulputate dignissim suspendisse in. Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
    </ucd-theme-brand-textbox>
  `)}
  <h2>Colors!</h2>
  <p>Change the background color by using the <code>brand-color</code> attribute.</p>
  ${this.examplePanel(html`
    <ucd-theme-brand-textbox collapsible brand-color="double-decker">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet. Sit amet mauris commodo quis imperdiet. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ultrices vitae auctor eu augue ut. Pellentesque habitant morbi tristique senectus. Ac auctor augue mauris augue neque gravida in. Pulvinar neque laoreet suspendisse interdum. Risus pretium quam vulputate dignissim suspendisse in. Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
      <p>woop</p>
    </ucd-theme-brand-textbox>

    <ucd-theme-brand-textbox collapsible brand-color="primary">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet. Sit amet mauris commodo quis imperdiet. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ultrices vitae auctor eu augue ut. Pellentesque habitant morbi tristique senectus. Ac auctor augue mauris augue neque gravida in. Pulvinar neque laoreet suspendisse interdum. Risus pretium quam vulputate dignissim suspendisse in. Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
    </ucd-theme-brand-textbox>

    <ucd-theme-brand-textbox collapsible brand-color="secondary">
      <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet. Sit amet mauris commodo quis imperdiet. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Ultrices vitae auctor eu augue ut. Pellentesque habitant morbi tristique senectus. Ac auctor augue mauris augue neque gravida in. Pulvinar neque laoreet suspendisse interdum. Risus pretium quam vulputate dignissim suspendisse in. Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
    </ucd-theme-brand-textbox>
  `)}
`;}