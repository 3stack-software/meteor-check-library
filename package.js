Package.describe({
  name: '3stack:match-library',
  version: '1.0.4',
  summary: 'A library of additional check/match filters',
  git: 'https://github.com/3stack-software/meteor-match-library',
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use('underscore');
  api.use('check');

  api.export('MatchLib');

  api.use('3stack:colour@0.1.0', {weak: true});

  api.use('3stack:country-codes@0.1.1', {weak: true});

  api.addFiles('match-library.js');
});
