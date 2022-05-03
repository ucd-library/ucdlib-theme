import { marked } from 'marked';

const MdElement = (superClass) => class extends superClass {

  /**
   * @method renderMd
   * @description load and render the element markdown
   */
  async renderMd() {
    if( this.mdRendered ) return;
    
    let resp = await fetch('/pages/'+this.id+'.md');
    let docs = await resp.text();

    let div = document.createElement('div');
    div.innerHTML = `<div class="u-space-mt--large md-docs"><h2>Class Documentation</h2><div>`+marked(docs);
    this.appendChild(div);

    
    this.mdRendered = true;
  }

};

export {MdElement};
  