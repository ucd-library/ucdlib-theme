import { html, css } from 'lit';

import normalizeCss from "@ucd-lib/theme-sass/normalize.css.js";
import teaserStyles from "@ucd-lib/theme-sass/4_component/_index.css.js";
import baseStyles from "@ucd-lib/theme-sass/1_base_html/_index.css.js";
import buttons from "@ucd-lib/theme-sass/2_base_class/_index.css.js";
export function styles() {
  const elementStyles = css`
    :host {
      display: block;
    }
    form {
      width:100%;
    }
    #tag {
      width:75%;
      display: inline-block;
    }
    #tag-color {
      width:24%;
      display: inline-block;    
    }
    #delete {
      width:24%;
      display: inline-block;    
    }
    #permalink-author {
      width:75%;
      display: inline-block;
    }
    #permalink-tags {
      width:75%;
      display: inline-block;  
    }
    #permalink-tags-url {
      width:75%;
      display: inline-block;  
    }


  `;

  return [elementStyles,baseStyles,teaserStyles,normalizeCss, buttons];
}

export function render() {
  return html`
  <style>
    .vm-teaser__figure.category_loading{
      background-color:#dcdcdc;
      height:165px;
      width:135px;
    }
    .load_teaser_a{
      background-color:#dcdcdc;
      width: 85%;
      height:25px;
    }
    .load_teaser_b{
      background-color:#dcdcdc;
      width: 67%;
      height:20px;
    }
    .load_teaser_c{
      background-color:#dcdcdc;
      width: 33.3%;
      height:18px;
    }
  </style>
  <!-- 
    Starts the Permalink Fetch
  -->
  ${this.perma ? html`
    ${this.perma.render({
      complete: (result) => this._onComplete(result),
      initial: () => this._onLoading(),
      pending: () => this._onPending(),
      error: (e) => this._onError(e)
      })
    }`:html``
  }

  <article class="vm-teaser   ">
  ${!this.LOADING ? html`
      <!-- 
        If it is completed permalink fetch
      -->
    ${!this.form ? 

      html`
      <!-- 
        This is the original permalink read that fires if there is are 
        attributes added to the permalink.  If the form is not triggered 
      -->

        <div class="vm-teaser__figure category">
            <a href="${this.image}"><img src="${this.image}" alt="" class="" width="135" loading="eager" />
            </a>
        </div> 
        <div class="vm-teaser__body">
        <h3 class="vm-teaser__title"><a href="${this.host_url ? this.host_url : this.permalink}">${this.title}</a></h3>

          <ul class="vm-teaser__byline">
            <li>
            
            ${this.authorFull ? 
                typeof this.authorFull === 'string' || this.authorFull instanceof String ? 
                  JSON.parse(this.authorFull).map(author => author["label"] != "" ? html`<span class="byline"> ${author["label"]}.</span>--<br />` : html``)
                  :this.authorFull.map(author => author["label"] != "" ? html`<span class="byline"> ${author["label"]}.</span>--<br />` : html``)
              :html``
            }
            </li>
            <li>${this.year}</li>
          </ul>
          <ul class="vm-teaser__categories">
            ${this.tags ? 
                typeof this.tags === 'string' || this.tags instanceof String ? 
                  JSON.parse(this.tags).map(tag => html`<li class="vm-teaser__cat-marker tahoe"><a href="${tag['@id']}">${tag['label']}</a></li>`)
                  :this.tags.map(tag => tag["label"] != "" ? html`<li class="vm-teaser__cat-marker ${this.elemClass[Math.floor(Math.random() * this.elemClass.length)]}"><a href="${tag['@id']}">${tag['label']}</a></li>`:html``)
              :html``
            }
          </ul>
          <div class="vm-teaser__summary">${this.summary}</div>
        </div>
        ${this.isCustom ? html`
          <button id="delete-permalink" class="btn btn--alt2" @click="${this.handleDelete}">Delete Permalink</button>

        `: html`
          <button id="edit-permalink" class="btn--primary" @click="${this.handleEdit}">Edit Permalink</button>
        `}
 
      `:html`     
      <!-- 
        This is if the form is triggered meaning the edit permalink is occuring
        so that it adds to the entries to the session.  Also takes info from what 
        is already in the permalink.  This is the edit form
      -->
        <form method="post">
        <!-- START OF FORM -->

          <fieldset>

            <!-- Title -->
            <div class="field-container">
              <label for="permalink-title">Title</label>
              <input id="permalink-title" .value=${this.title ? this.title : ""} type="text" placeholder=${this.title ? this.title : "Enter Your Title"} />
            </div>

            <!-- Host URL -->
            <div class="field-container">
              <label for="permalink-permalink">Permalink Host URL</label>
              <input id="permalink-permalink" .value=${this.permalink ? this.permalink : ""} type="text" placeholder=${this.permalink ? this.permalink : "Enter Your Title"} />
            </div>


            <br />
            <br />
            <br />


            <!-- Author -->
            ${this.authorFull ? 
            html`
              <!-- If permalink already has authors -->
              <div class="author">
                <div style="border-style: solid; margin: 25px 0; padding:5px;">
                ${this.authorFull.map((author, index) => 
                  html`
                  <div class="field-container">
                        <label for="permalink-author no-${index}">Author</label>
                        <input id="permalink-author no-${index}" type="author" .value=${author['label']} placeholder="${author['label'].split(",")[0]}, ${author['label'].split(",")[1] ? author['label'].split(",")[1] : ""} " />
                  </div> `  
                )}
                </div>
                <br />
                <div>

                  <h5>New Author Entry</h5>
                  ${this.authorEntryField.map((item, index) =>                
                    html`
                      <div class="field-container">
                          <label for="permalink-author no-${index}">Author</label>
                          <input id="permalink-author no-${index}" type="author" .value=${item.value} placeholder="Enter the Authors of the Work" />
                      </div>
    
                    `
                  )}
                  <a @click="${this._addAuthor}" class="btn--alt3 btn--sm" >Add Author Field</a>
                </div>
              </div>
            `   
            :html`
              <!-- If permalink DOES NOT has authors -->

              <div>

                <div class="author">
                  <br />
                  <h5>New Author Entry</h5>
                  ${this.authorEntryField.map((item, index) =>                
                  html`
                    <div class="field-container">
                        <label for="permalink-author no-${index}">Author</label>
                        <input id="permalink-author no-${index}" type="author" .value=${item.value} placeholder="Enter the Authors of the Work" />
                    </div>
    
                  `
                  )}
                  <a @click="${this._addAuthor}" class="btn--alt3 btn--sm" >Add Author Field</a>
                </div>
              </div>
              `}


            <br />
            <br />
            <br />

            <!-- Year -->
            <div class="field-container">
              <label for="permalink-date">Year of Publication</label>
              <input id="permalink-date" value=${this.year ? this.year : ""}  type="text" placeholder=${this.year ? this.year : "Year of Publication"} />
            </div>

            <!-- Image -->
            <div class="field-container">
              <label for="permalink-image">Image JPEG URL</label>
              <input id="permalink-image" value=${this.image ? this.image : ""}  type="url" placeholder=${this.year ? this.year : "Year of Publication"} />
            </div>
            
            <br />
            <br />
            <br />

            <!-- Tags -->
            ${this.tags ? 
            html`

              <!-- If permalink already has Tags -->
                <div class="tag">
                  <div style="border-style: solid; margin: 25px 0; padding:5px;">
                  ${this.tags.map((tag, index)=> 
                    html`
                    <div id="tag"  class="field-container">
                      <label for="permalink-tags no-${index}">Tag</label>
                      <input id="permalink-tags no-${index}" type="url" .value=${tag['label']} placeholder="${tag['label']}" />
                    </div>

                    <label for="permalink-tags-url no-${index}">URL</label>
                    <input id="permalink-tags-url no-${index}" .value=${tag['@id'] ? tag['@id']: ''} type="url" placeholder="${tag['@id'] ? tag['@id']: 'URL Not Defined'}" />

                  <br />
                  <br />
                  <br />
                `
                )}
                </div>

              <h5>New Tag Entry</h5>
                ${this.tagEntryField.map((item, index) =>                
                  html`
                    <div class="tag">
                      <div id="tag" class="field-container">
                        <label for="permalink-tags no-${index}">Tag</label>
                        <input id="permalink-tags no-${index}" type="url" .value=${item.label} placeholder="Name Your Permalink Tag" />
                        <label for="permalink-tags-url no-${index}">URL</label>
                        <input id="permalink-tags-url no-${index}" .value=${item.url} type="url" placeholder="URL of Permalink Tag" />
                      </div>
                    </div>
                  `
                )}
              
                <br />
                <a @click="${this._addTag}" id="form-apply"class="btn--alt3 btn--sm">Add Tag Field</a>
              

            `:html `
              <!-- If permalink DOES NOT has Tags -->
              <h5>New Tag Entry</h5>
                ${this.tagEntryField.map((item, index) =>                
                html`
                  <div class="tag">
                    <div id="tag" class="field-container">
                      <label for="permalink-tags no-${index}">Tag</label>
                      <input id="permalink-tags no-${index}" type="url" .value=${item.label} placeholder="Name Your Permalink Tag" />
                      <label for="permalink-tags-url no-${index}">URL</label>
                      <input id="permalink-tags-url no-${index}" .value=${item.url} type="url" placeholder="URL of Permalink Tag" />
                    </div>
                  </div>
                `
            
                )}

                <br />
                <a @click="${this._addTag}" id="form-apply"class="btn--alt3 btn--sm">Add Tag Field</a>
            
            `}

            <br />
            <!-- Summary -->
            <div class="field-container">
              <label for="permalink-summary">Summary</label>
              <textarea id="permalink-summary"  .value=${this.summary ? this.summary : ""} rows="5" placeholder=${this.summary ? this.summary : "Write Summary Here"}></textarea>
            </div>


          </fieldset>

          <!-- Apply Button -->
          <div class="field-container--small views-filters__submit-field">
            <a @click="${this._sendValues}" class="btn--primary">Apply</a>
            <a onClick="window.location.reload();" class="btn--alt">Cancel</a>
          </div>

        <!-- END OF FORM -->
        </form>   
      `}
    `:html`
      <!-- 
        If it is in the loading stage of the permalink fetch
        it will render this
        look.
      -->
      <div class="vm-teaser__figure category_loading"></div>
      <div class="vm-teaser__body">
        <div class="load_teaser_a"></div>
        <br/>
        <div class="load_teaser_b"></div>
        <br/>
        <div class="load_teaser_c"></div>
        <br/>
        <div class="load_teaser_c"></div>
      </div>
    `}
</article>
`;
}