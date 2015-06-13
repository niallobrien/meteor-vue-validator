Package.describe({
  name: 'niallobrien:vue-validator',
  summary: 'Vue Validator wrapped & repackaged for Meteor',
  version: '0.1.0',
  git: 'https://github.com/niallobrien/meteor-vue-validator.git'
});

Package.onUse(function (api) {
  api.use('vue:vue@0.11.10', 'client');
  api.addFiles('vue-validator.js', 'client');
  api.export('validator', 'client')
});