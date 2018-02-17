/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, components) {

function init(win, doc, appNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}';
        x.setAttribute('data-visibility', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    appNamespace = appNamespace.toLowerCase();
    x = doc.scripts[doc.scripts.length - 1];
    if (x && x.src) {
        y = x.src.split('/').slice(0, -1);
        publicPath = (y.join('/')) + (y.length ? '/' : '') + appNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + ((supportsCustomElements(x) && supportsEsModules(win) && supportsFetch(win) && supportsCssVariables(win)) ? (requiresSsrClient(doc) ? appCoreSsr : appCore) : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', appNamespace);
    doc.head.appendChild(x);
}
function supportsCustomElements(scriptElm) {
    return 'noModule' in scriptElm;
}
function supportsEsModules(win) {
    return win.customElements;
}
function supportsFetch(win) {
    return win.fetch;
}
function supportsCssVariables(win) {
    return (win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}
function requiresSsrClient(doc) {
    return doc.documentElement.hasAttribute('data-ssr');
}


init(win, doc, appNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, components);

})(window, document, "material-webcomponents","/build/material-webcomponents/","material-webcomponents.core.js","material-webcomponents.core.ssr.js","es5-build-disabled.js",[["mwc-button",["mwc-button",null],0,[["backgroundcolor",1,1,2],["btnEl",7],["color",1,1,1],["compact",1,1,3],["dense",1,1,3],["disabled",1,1,3],["fab",1,1,3],["href",1,1,2],["icon",1,1,2],["mini",1,1,3],["raised",1,1,3],["ripple",1,1,3],["stroked",1,1,3],["unelevated",1,1,3]],0,1],["mwc-card",["mwc-button",null],0,[["cardEl",7],["height",1,1,2],["radius",1,1,4],["raised",1,1,3],["width",1,1,2]],0,1],["mwc-card-actions",["mwc-button",null],1,0,0,1],["mwc-card-content",["mwc-button",null],0,0,0,1],["mwc-card-header",["mwc-button",null],1,[["subtitle",1,1,2],["title",1,1,2]],0,1],["mwc-card-media",["mwc-button",null],0,[["mediaheight",1,1,2],["src",1,1,2]]],["mwc-checkbox",["mwc-button",null],1,[["alignlabel",1,1,2],["checkBoxEl",7],["checkcolor",1,1,2],["checked",1,1,3],["disabled",1,1,3],["indeterminate",1,1,3],["label",1,1,2],["name",1,1,2],["ripple",1,1,3],["value",1,1,2]]],["mwc-container",["mwc-button",null],0,[["aligncontent",1,1,2],["alignitems",1,1,2],["backgroundcolor",1,1,2],["containerEl",7],["flexdirection",1,1,2],["flexwrap",1,1,2],["height",1,1,2],["justifycontent",1,1,2],["width",1,1,2]],0,1],["mwc-content-for-toolbar",["mwc-button",null],0,[["contentToolbarEl",7]],0,1],["mwc-dialog",["mwc-button",null],1,[["close",6],["dialogEl",7],["height",1,1,2],["show",6],["width",1,1,2]],0,1],["mwc-dialog-body",["mwc-button",null],1,0,0,1],["mwc-dialog-footer",["mwc-button",null],1,[["dialogFooterEl",7]],0,1],["mwc-dialog-header",["mwc-button",null],1,0,0,1],["mwc-drawer",["mwc-button",null],1,[["close",6],["drawerEl",7],["header",1,1,3],["open",6],["toolbarspacer",1,1,3],["type",1,1,1]],0,2],["mwc-fab",["mwc-button",null],1,[["backgroundcolor",1,1,2],["color",1,1,2],["fabEl",7],["icon",1,1,2],["mini",1,1,3],["ripple",1,1,3]]],["mwc-grid-list",["mwc-button",null],1,[["aspectratio",1,1,2],["gridListEl",7],["tiletitleposition",1,1,2],["tilewidth",1,1,2]],0,1],["mwc-grid-list-tile",["mwc-button",null],1,[["gridListTileEl",7],["titlebackgroundcolor",1,1,2]],0,2],["mwc-icon-toggle",["mwc-button",null],1,[["color",1,1,2],["disabled",1,1,3],["iconToggleEl",7],["officon",1,1,2],["officonlabel",1,1,2],["onicon",1,1,2],["oniconlabel",1,1,2],["ripple",1,1,3],["toggleon",1,1,3]]],["mwc-list",["mwc-button",null],0,[["borderlist",1,1,3],["dense",1,1,3],["listEl",7]],0,1],["mwc-list-item",["mwc-button",null],1,[["interactive",1,1,3],["listItemEl",7],["ripple",1,1,3]],0,1],["mwc-menu",["mwc-button",null],1,[["hide",6],["menuEl",7],["open",1,1,3],["show",6]],0,1],["mwc-menu-item",["mwc-button",null],1,[["disabled",1,1,3],["role",1,1,2]],0,1],["mwc-paper",["mwc-button",null],0,[["elevation",1,1,4],["height",1,1,2],["radius",1,1,4],["width",1,1,2]],0,1],["mwc-progress",["mwc-button",null],1,[["buffer",6],["bufferbarcolor",1,1,2],["height",1,1,2],["progress",6],["progressEl",7],["progressbarcolor",1,1,2],["reversed",1,1,3],["show",1,1,3],["type",1,1,2],["width",1,1,2]]],["mwc-radio",["mwc-button",null],1,[["borderlist",1,1,3],["checked",1,1,3],["dense",1,1,3],["name",1,1,2],["radioEl",7],["radiocolor",1,1,2],["ripple",1,1,3]]],["mwc-select",["mwc-button",null],1,[["borderlist",1,1,3],["checked",1,1,3],["dense",1,1,3],["name",1,1,2],["radiocolor",1,1,2],["ripple",1,1,3],["selectEl",7]],0,1],["mwc-slider",["mwc-button",null],1,[["disabled",1,1,3],["discrete",1,1,3],["max",1,1,4],["min",1,1,4],["sliderEl",7],["slidercolor",1,1,2],["step",1,1,4],["stepdown",6],["stepup",6],["value",1,1,4]]],["mwc-snackbar",["mwc-button",null],1,[["actioncolor",1,1,2],["actiononbutton",1,1,3],["actiontext",1,1,2],["backgroundcolor",1,1,2],["dismissesonaction",1,1,3],["message",1,1,2],["messagecolor",1,1,2],["multiline",1,1,3],["show",6],["snackBarEl",7],["timeout",1,1,4]]],["mwc-switch",["mwc-button",null],1,[["checked",1,1,3],["disabled",1,1,3],["label",1,1,2],["labelposition",1,1,2],["switchEl",7],["switchcolor",1,1,2]]],["mwc-tabbar",["mwc-button",null],1,[["activeindex",1,1,4],["scroller",1,1,3],["tabBarEl",7],["tabs",1,1,1]]],["mwc-textfield",["mwc-button",null],1,[["dense",1,1,3],["disabled",1,1,3],["focused",1,1,3],["fullwidth",1,1,3],["helpertext",1,1,2],["icon",1,1,2],["iconposition",1,1,2],["label",1,1,2],["labelposition",1,1,2],["minlength",1,1,4],["outlined",1,1,3],["required",1,1,3],["showbox",1,1,3],["switchEl",7],["textarea",1,1,3],["type",1,1,2],["value",1,1,2]]],["mwc-theme",["mwc-button",null],0,[["fonts",1,1,1],["icons",1,1,1],["theme",1,1,1],["themeEl",7]],0,1],["mwc-toolbar",["mwc-button",null],1,[["toolbarEl",7],["type",1,1,2]],0,1],["mwc-toolbar-icon",["mwc-button",null],1,[["toolbarIconEl",7]],0,1],["mwc-toolbar-section",["mwc-button",null],0,[["align",1,1,2],["toolbarSectionEl",7]],0,1],["mwc-toolbar-title",["mwc-button",null],0,[["toolbarTitleEl",7]],0,1],["mwc-typography",["mwc-button",null],0,[["align",1,1,1],["color",1,1,2],["display",1,1,1],["gutterbottom",1,1,3],["nowrap",1,1,3],["styles",1,1,1],["type",1,1,1],["typographyEl",7]],0,1],["mwc-viewport",["mwc-button",null],0,[["backgroundcolor",1,1,2],["viewportEl",7]],0,1]]);