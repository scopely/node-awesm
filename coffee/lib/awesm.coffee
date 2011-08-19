utils         = require('./utils')
Metadata      = require('./metadata').Metadata

class AweSM

  @API_URL = "api.awe.sm"

  constructor : (@apiKey) ->
    if !@apiKey
      throw new Error('Api Key missing')

  createEndpoint : (url, channel, tool, metaObject = null, callback, format = 'json', v = 3 ) ->
    @callAweSM('/url', url, channel, tool, metaObject, format, v, callback)

  createStaticEndpoint : (url, channel, tool, metaObject = null, callback, format = 'json', v = 3 ) ->
    @callAweSM('/url/static', url, channel, tool, metaObject, format, v, callback)


  callAweSM : (path, url, channel, tool, metaObject = null, format = 'json', v = 3, callback) ->
    if format not in ['json', 'txt']
      throw new Error('invalid format')
    v = 2 if format == 'txt'
    path  = "#{path}.#{format}"
    metadata = {}
    metadata = metaObject.getMetadata() if metaObject
    params = {
      format : format
      v       : v,
      key     : @apiKey,
      url     : url,
      channel : channel,
      tool    : tool
    }
    params[key] = value for own key, value of metadata

    utils.getHTTPResponse(AweSM.API_URL, path, params, (err, result) ->
      if format == 'json'
        result = JSON.parse(result)
      callback(err, result) if callback
    )

module.exports = {
  AweSM     : AweSM
  Metadata  : Metadata
}
