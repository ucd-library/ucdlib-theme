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

  ${this.pageTitle('Author Profile')}
  ${this.importPanel("ucdlib/ucdlib-author-profile/ucdlib-author-profile.js")}

  <p>This element retrieves and displays the profile of a UC Davis Library employee from the main library website, 
    or one of its subdomains.</p>
  <p>Use the <code>email</code> attribute to query an employee: </p>
  ${this.sampleList.map(email => this.examplePanel(
    html`
      <ucdlib-author-profile domain="stage" email='${email}'></ucdlib-author-profile>
    `)  
  )}

  <h2>Use in sidebars</h2>
  <p>If you need to use this element in a sidebar, or another container that does not take up the full screen width, 
    use the <code>sidebar</code> attribute:</p>

    ${this.examplePanel(html`
    <div class="l-2col l-2col">
      <div class='l-first panel'>
        <p>Eiusmod cillum deserunt id ut nostrud exercitation laboris veniam do esse commodo eu ut aute.
           Est commodo pariatur aute ullamco ea irure qui cillum. Ex laborum pariatur cupidatat esse proident. 
           Consectetur irure sunt irure sit ea.
          Laborum laboris sint ea anim esse culpa. 
          Veniam amet pariatur dolore eiusmod voluptate deserunt aliquip. 
          Nulla sunt in irure ipsum elit. Non consequat reprehenderit excepteur non est tempor et id sit aliqua in elit incididunt. 
          Occaecat veniam ullamco amet ad duis eiusmod eiusmod consequat. Nostrud excepteur nulla eu sit mollit duis magna ex laboris in sit. 
          Et elit pariatur ipsum mollit aliqua non sit in.
        </p>
      </div>
      <div class='l-second panel'>
        <ucdlib-author-profile domain="stage" email='${this.sampleList[0]}' sidebar></ucdlib-author-profile>
        <ucdlib-author-profile domain="stage" email='${this.sampleList[1]}' sidebar></ucdlib-author-profile>
      </div>
  </div>
    `)}

  <h2>Changing the Data Source</h2>
  <p>By default, this element queries data from <code>https://library.ucdavis.edu</code>. 
    However, the <code>domain</code> attribute can be used to query a subdomain of the site instead:</p>
    ${this.examplePanel(html`
        <ucdlib-author-profile domain="stage" email='qjhart@ucdavis.edu'></ucdlib-author-profile>
      `)}

  `;}
