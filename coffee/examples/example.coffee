awesm = require('../index')

aw = new awesm.AweSM('[key]')

md = new awesm.Metadata()
md.campaign = 'email-campaign'

aw.createEndpoint('http://facebook.com', 'awesm-client', 'tool', md, (err, result) ->
  console.log err, result
)


aw.createEndpoint('http://facebook.com', 'awesm-client', '[tool]', null, (err, result) ->
  console.log err, result
, 'txt')


