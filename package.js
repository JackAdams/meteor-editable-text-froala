Package.describe({
  name: 'babrahams:editable-text-froala',
  summary: 'Add Froala editor to babrahams:editable-text',
  version: '0.2.3',
  git: 'https://github.com/JackAdams/meteor-editable-text-froala'
});

Package.onUse(function(api) {
    
  api.versionsFrom('1.0');
  
  api.use('babrahams:editable-text@0.9.3', 'client');
  api.use('froala:editor-reactive@2.4.2', 'client');
  api.use('templating', 'client');
  api.use('blaze', 'client');
  api.use('spacebars', 'client');
  api.use('jquery', 'client');
  api.use('underscore', 'client');
  api.use('reactive-var', 'client');
  
  api.addFiles('lib/froala.css', 'client');
  api.addFiles('lib/froala.html', 'client');
  api.addFiles('lib/froala.js', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:editable-text-froala');
  api.addFiles('editable-text-froala-tests.js');
});
