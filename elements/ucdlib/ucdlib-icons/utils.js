import "@ucd-lib/theme-elements/ucdlib/ucdlib-iconset/ucdlib-iconset";
import "@ucd-lib/theme-elements/ucdlib/ucdlib-icon/ucdlib-icon";

import { html, render } from "lit-html";

/**
 * @description Creates iconset and moves to document head
 * @param {TemplateResult} icons - SVG html string of icons
 * @param {String} name - name of iconset. 
 * @param {Number} size  - size of icons
 */
function renderIconSet(icons, name, size=24){
  const containerId = `ucdlib-icons--${name}`;
  let container = document.getElementById(containerId);
  if ( !container ){
    container = document.createElement("div");
    container.style.display = "none";
    container.id = containerId;
    document.head.appendChild(container); 
  } 
  const template = html`
    <ucdlib-iconset name=${name} size=${size}>
      ${icons}
    </ucdlib-iconset>
  `;
  render(template, container);
}

export { renderIconSet };