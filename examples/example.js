(function() {
  var aw, awesm, md;
  awesm = require('../index');
  aw = new awesm.AweSM('[key]');
  md = new awesm.Metadata();
  md.campaign = 'email-campaign';
  aw.createEndpoint('http://facebook.com', 'awesm-client', 'tool', md, function(err, result) {
    return console.log(err, result);
  });
  aw.createEndpoint('http://facebook.com', 'awesm-client', '[tool]', null, function(err, result) {
    return console.log(err, result);
  }, 'txt');
}).call(this);
