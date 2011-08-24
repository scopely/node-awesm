(function() {
  var aw, awesm, md;
  awesm = require('../index');
  aw = new awesm.AweSM('c0e8429833f0b1440615b35f06f59ead60882efb318237d7420de7e68922357f');
  md = new awesm.Metadata();
  md.campaign = 'test-campaign';
  aw.createStaticEndpoint('http://www.alexeypro.com', 'test123', '8wlO7r', md, function(err, result) {
    return console.log(err, result);
  });
}).call(this);
