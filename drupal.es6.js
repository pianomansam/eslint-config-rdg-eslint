module.exports = {
  extends: [
    './index.js',
  ].map(require.resolve),
  "globals": {
    "Drupal": true,
    "drupalSettings": true,
    "drupalTranslations": true,
    "domready": true,
    "jQuery": true,
    "_": true,
    "matchMedia": true,
    "Cookies": true,
    "Backbone": true,
    "Modernizr": true,
    "Popper": true,
    "Sortable": true,
    "CKEDITOR": true
  },
};
