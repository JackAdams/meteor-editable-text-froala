Package.describe({
  name: 'babrahams:editable-text-froala',
  summary: 'Add Froala editor to babrahams:editable-text',
  version: '0.2.16',
  git: 'https://github.com/JackAdams/meteor-editable-text-froala'
});

Package.onUse(function (api) {
    
  api.versionsFrom(['1.8.2', '2.3']);
  
  api.use('babrahams:editable-text@0.9.17', 'client');
  api.use('froala:editor-reactive@2.9.7', 'client');
  api.use(['templating@1.3.2', 'blaze@2.3.4', 'spacebars@1.0.15', 'jquery@1.11.11'], 'client');
  api.use('underscore', 'client');
  api.use('reactive-var', 'client');
  
  api.addFiles('lib/froala.css', 'client');
  api.addFiles('lib/froala.html', 'client');
  api.addFiles('lib/froala.js', 'client');

});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('babrahams:editable-text-froala');
  api.addFiles('editable-text-froala-tests.js');
});
