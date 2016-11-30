Package.describe({
    name: 'timneutkens:velocity-demo-camera',
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

    api.addFiles('lib/collections/images.js');
    api.export('images');

    api.use(['templating', 'mongo']);

    api.use('mdg:camera');

    api.addFiles('lib/templates/styles/camera-tool.css', 'client');
    api.addFiles('lib/templates/camera-tool.html', 'client');

    api.addFiles('lib/modules/camera.js', 'client');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('timneutkens:velocity-demo-camera');
});
