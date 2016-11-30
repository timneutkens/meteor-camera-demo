Package.describe({
  name: 'timneutkens:velocity-demo',
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

  api.use('jquery', 'client');
  api.use('templating', 'client');

  api.use('percolate:velocityjs', 'client');
  api.use('timneutkens:velocity-demo-camera');
  
  api.addFiles('lib/templates/styles/main.css', 'client');
  api.addFiles('lib/templates/demo.html', 'client');
  api.addFiles('lib/modules/velocity.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('timneutkens:velocity-demo');
  api.addFiles('velocity-demo-tests.js');
});
