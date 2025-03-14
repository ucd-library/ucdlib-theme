import { html, css } from 'lit';
import cssProps from '@ucd-lib/theme-sass/css-properties.css';

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
    ${cssProps}
    .snippet {
      background-color: #DBEAF7
    }
    .snippet pre {
      margin-top: 0;
      margin-bottom: 0;
    }
    p code {
      background-color: #DBEAF7;
      padding: 3px;
    }
    .md-docs #classes {
      display: none;
    }
    .md-docs #classes + dl{
      display: none;
    }
    .md-docs #functions {
      display: none;
    }
    .md-docs #functions + dl{
      display: none;
    }
  </style>



  <div class="page">
    <ucd-theme-header>

      <ucdlib-branding-bar
        site-name="UC Davis Library Digital Brand"
        slogan="Using the UC Davis brand in Library applications">
      </ucdlib-branding-bar>

      <ucd-theme-primary-nav>
        <ul link-text="Brand Web Components">
          <ul link-text="Header" href="#ucd-theme-header">
            <li><a href="#ucd-theme-header">Controller</a></li>
            <li><a href="#ucd-theme-primary-nav">Primary Nav</a></li>
            <li><a href="#ucd-theme-search-popup">Search Popup</a></li>
            <li><a href="#ucd-theme-search-form">Search Form</a></li>
            <li><a href="#ucd-theme-quick-links">Quick Links</a></li>
            <li><a href="#ucdlib-branding-bar">UC Davis Library Branding Bar</a></li>
          </ul>
          <ul link-text="Other Navigation">
            <li><a href="#ucd-theme-pagination">Pagination</a></li>
            <li><a href="#ucd-theme-subnav">Subnav</a></li>
          </ul>
          <ul link-text="Collapsible Content">
            <li><a href="#ucd-theme-collapse">Collapse</a></li>
            <li><a href="#ucd-theme-list-accordion">List Accordion (FAQ)</a></li>
            <li><a href="#ucd-theme-brand-textbox">Brand Textbox</a></li>
          </ul>
          <ul link-text="Forms">
            <li><a href="#ucd-theme-slim-select">Slim Select</a></li>
            <li><a href="#ucd-theme-search-form">Search Form</a></li>
          </ul>
        </ul>

        <ul link-text="Library Web Components">
          <ul link-text="Header" href="/#ucdlib-header">
            <li><a href="/#ucdlib-header">Controller</a></li>
            <li><a href="/#ucdlib-primary-nav">Primary Nav</a></li>
          </ul>
          <ul link-text="Icons" href="#ucdlib-icons">
            <li><a href="#ucdlib-icons">Icons</a></li>
            <li><a href="#ucdlib-icon">Icon</a></li>
            <li><a href="#ucdlib-iconset">Icon Set</a></li>
          </ul>
          <li><a href="#ucdlib-pages">Pages</a></li>
          <ul link-text="SILS">
            <li><a href="#ucdlib-sils-search-redirect">Search Redirect</a></li>
            <li><a href="#ucdlib-sils-permalink">SILS Permalinks</a></li>
          </ul>
          <li><a href="#ucdlib-md">Markdown</a></li>
          <li><a href="#ucdlib-author-profile">Author Profile</a></li>
          <li><a href="#ucdlib-range-slider">Range Slider</a></li>
        </ul>

        <ul link-text="Brand Guides" href="#overview">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#brand-colors">Colors</a></li>
          <li><a href="#infographics">Infographics</a></li>
          <li><a href="#fonts">Fonts</a></li>
          <li><a href="#brand-buttons">Buttons</a></li>
          <li><a href="#brand-selectors">Selectors</a></li>
        </ul>
      </ucd-theme-primary-nav>

    </ucd-theme-header>

    <main class="l-main">
      <div class="l-container">
        <div class="l-content">
          <ucdlib-pages id="pages" selected="${this.selectedPage}" ></ucdlib-pages>
        </div>
      </div>
    </main>

  </div>


`;}
