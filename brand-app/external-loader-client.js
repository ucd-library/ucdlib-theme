(function() {

  if( !window.UCD_LIB_THEME_LOADER ) {
    window.UCD_LIB_THEME_LOADER = {};
  }

  function addCss(path) {
    if( WebComponents.noPolyRequired ) {
      console.log('doc write css', path);
      document.open();
      document.write('<link rel="stylesheet" href="'+host()+path+'" />');
      document.close();
    } else {
      let link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', host()+path);
      document.head.appendChild(link);
    }
  }

  function addJs(path) {
    if( WebComponents.noPolyRequired ) {
      console.log('doc write js', path);
      document.open();
      document.write('<script src="'+host()+path+'" ><\/script>');
      document.close();
    } else {
      let script = document.createElement('script');
      script.setAttribute('src', host()+path);
      document.head.appendChild(script);
    }
  }

  function loaderRootPath() {
    return window.UCD_LIB_THEME_LOADER.loaderPath || '/loader';
  }

  function loaderVersion() {
    window.UCD_LIB_THEME_LOADER.loaderVersion || Date.now();
  }

  function bundleRootPath() {
    return window.UCD_LIB_THEME_LOADER.bundlePath || '/js/external';
  }

  function host() {
    return window.UCD_LIB_THEME_LOADER.host || 'https://brand.library.ucdavis.edu';
  }

  function classSupport() {
    try {
      eval("class Foo {}");
    } catch (e) { return false; }
    return true;
  }

  function load() {
    console.log('Webcomponents ready: '+(WebComponents.noPolyRequired ? 'native' : 'polyfill'));
  
    var version = '';
    if( UCD_LIB_THEME_LOADER.version ) {
      version = '?_='+UCD_LIB_THEME_LOADER.version;
      console.log('Loading ucdlib theme client bundle version: '+UCD_LIB_THEME_LOADER.version);
    } else {
      console.warn('No ucdlib theme client bundle version specified');
    }
  
    let scriptRoot = bundleRootPath();
    if( classSupport() ) addJs(scriptRoot+'.js'+version);
    else addJs(scriptRoot+'-ie.js'+version);
  }

  var version = '?_='+loaderVersion();
  
  if( !classSupport() ) {
    console.log('No ES Class support found, using ucdlib theme using IE compatibility build');
    if( UCD_LIB_THEME_LOADER.ignorePolyfills === true ) {
      console.log(' - ignorePolyfills flag set, ucdlib theme not loading polyfills');
    } else {
      console.log(' - ucdlib theme client adding babel polyfills');
      document.open();
      document.write('<script src="'+loaderRootPath()+'/polyfills/polyfills.js'+version+'"><\/script>');
      document.close();
    }
  }

  if( document.head.attachShadow && ('customElements' in window) && ('content' in document.createElement('template')) ) {
    window.WebComponents = {
      ready : true,
      noPolyRequired : true
    };
  } else {
    document.open();
    document.write('<script src="'+loaderRootPath()+'/polyfills/webcomponents-loader.js'+version+'" ><\/script>');
    document.close();
  }

  if( UCD_LIB_THEME_LOADER.ignoreIcons !== true ) {
    addJs('/js/solid.min.js');
    addJs('/js/fontawesome.min.js');
  } else {
    console.log(' - ignoreIcons flag set, ucdlib theme not loading icon set');
  }

  if( UCD_LIB_THEME_LOADER.ignoreFonts !== true ) {
    addCss('/css/fonts.css');
  } else {
    console.log(' - ignoreFonts flag set, ucdlib theme not loading font set');
  }

  if( UCD_LIB_THEME_LOADER.ignoreCss !== true ) {
    addCss('/css/style-ucdlib.css');
  } else {
    console.log(' - ignoreCss flag set, ucdlib theme not loading global theme css');
  }

  if( window.WebComponents && WebComponents.ready) load();
  else window.addEventListener('WebComponentsReady', load);
})();