import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import Prism from 'prismjs';
import Normalizer from "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

const nw = new Normalizer({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  /*'break-lines': 80,
  'indent': 2,
  'remove-initial-line-feed': false,
  'tabs-to-spaces': 4,
  'spaces-to-tabs': 4*/
});

const BrandedPageElement = (superClass) => class extends superClass {

  /**
   * @method pageTitle
   * @description Display a formatted page title
   * @param {String} text - page title
   * @returns {TemplateResult}
   */
  pageTitle(text){
    return html`
    <div class="l-full-width">
      <h1 class="page-title u-space-mb--large">${text}</h1>
    </div>
    `;
  }

  /**
   * @method examplePanel
   * @description Renders code with code snippet
   * @param {TemplateResult} code A lit html render template
   * @param {Boolean} hideRendered Won't render code.
   * @returns {TemplateResult}
   */
  examplePanel(code, hideRendered=false){
    if ( !code ) return html``;

    let codeString = code.strings.map((s, i) => {
      if ( i===0 ) {
        //if (s.startsWith("\n")) s = s.slice(1);
        //s = s.trimLeft();
        return s;
      }
      /*
      if ( 
        i === code.strings.length - 1 && 
        s.endsWith("\n")
      ) s = s.slice(0, -1);
      */
      return "${" + code.values[i-1] + "}" + s;
    });

    codeString = nw.normalize(codeString.join(""));
    codeString = unsafeHTML(Prism.highlight(codeString, Prism.languages.html, 'html'));

    const codeBlock = html`
      <pre>
        <code class="language-html">
          ${codeString}
        </code>
      </pre>
    `;
    
    return html`
    <div>
      <div class="quick-summary">
        <div class="quick-summary__body u-space-px u-space-py ${hideRendered ? 'u-hidden' : ''}">
          ${code}
        </div>

        <div class="snippet">
          ${codeBlock}
        </div>
      </div>
    </div>
    `;
  }

  /**
   * @method jsPanel
   * @description Display a stylized javascript code block
   * @param code {String} - js code to display
   * @returns {TemplateResult}
   */
  jsPanel(code){
    code = nw.normalize(code);
    return html`
    <div class="quick-summary">
      <div class="snippet">
      <pre>
        <code class="language-javascript">
        ${unsafeHTML(Prism.highlight(code, Prism.languages.javascript, 'javascript'))}
        </code>
      </pre>
      </div>
    </div>
    `;
  }
};
  
export {BrandedPageElement};