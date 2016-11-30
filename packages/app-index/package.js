Package.describe({
  name: 'timneutkens:app-index',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('iron:router@1.0.9');
  api.use('templating');
  api.addFiles('app.html');
  api.addFiles('router.js');
  api.addFiles('app-index.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('timneutkens:app-index');
  api.addFiles('app-index-tests.js');
});
