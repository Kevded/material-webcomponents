const sass = require('@stencil/sass');
exports.config = {
  namespace: 'material-webcomponents',
  // generateDistribution: true,
  bundles: [
    { components: [
      'mwc-button',
      'mwc-card-actions',
      'mwc-card-content',
      'mwc-card-header',
      'mwc-card-media',
      'mwc-card',
      'mwc-container',
      'mwc-checkbox',
      'mwc-dialog-body',
      'mwc-dialog-footer',
      'mwc-dialog-header',
      'mwc-dialog',
      'mwc-drawer',
      'mwc-fab',
      'mwc-grid-list',
      'mwc-grid-list-tile',
      'mwc-icon-toggle',
      'mwc-list',
      'mwc-list-item',
      'mwc-menu',
      'mwc-menu-item',
      'mwc-paper',
      'mwc-progress',
      'mwc-radio',
      'mwc-select',
      'mwc-slider',
      'mwc-snackbar',
      'mwc-switch',
      'mwc-tabbar',
      //'mwc-textfield',
      'mwc-theme',
      'mwc-toolbar',
      'mwc-toolbar-section',
      'mwc-toolbar-title',
      'mwc-toolbar-icon',
      'mwc-content-for-toolbar',
      'mwc-typography',
      'mwc-viewport'
      ] }
  ],
  plugins:[
    sass({ includePaths: ['node_modules/'] })
  ],
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ],
  copy: [
    {
      src: 'index.dev.html'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
