(function() {
  var AweSM, Metadata, utils;
  var __hasProp = Object.prototype.hasOwnProperty;
  utils = require('./utils');
  Metadata = require('./metadata').Metadata;
  AweSM = (function() {
    AweSM.API_URL = "api.awe.sm";
    function AweSM(apiKey) {
      this.apiKey = apiKey;
      if (!this.apiKey) {
        throw new Error('Api Key missing');
      }
    }
    AweSM.prototype.createEndpoint = function(url, channel, tool, metaObject, callback, format, v) {
      if (metaObject == null) {
        metaObject = null;
      }
      if (format == null) {
        format = 'json';
      }
      if (v == null) {
        v = 3;
      }
      return this.callAweSM('/url', url, channel, tool, metaObject, format, v, callback);
    };
    AweSM.prototype.createStaticEndpoint = function(url, channel, tool, metaObject, callback, format, v) {
      if (metaObject == null) {
        metaObject = null;
      }
      if (format == null) {
        format = 'json';
      }
      if (v == null) {
        v = 3;
      }
      return this.callAweSM('/url/static', url, channel, tool, metaObject, format, v, callback);
    };
    AweSM.prototype.callAweSM = function(path, url, channel, tool, metaObject, format, v, callback) {
      var key, metadata, params, value;
      if (metaObject == null) {
        metaObject = null;
      }
      if (format == null) {
        format = 'json';
      }
      if (v == null) {
        v = 3;
      }
      if (format !== 'json' && format !== 'txt') {
        throw new Error('invalid format');
      }
      if (format === 'txt') {
        v = 2;
      }
      path = "" + path + "." + format;
      metadata = {};
      if (metaObject) {
        metadata = metaObject.getMetadata();
      }
      params = {
        format: format,
        v: v,
        key: this.apiKey,
        url: url,
        channel: channel,
        tool: tool
      };
      for (key in metadata) {
        if (!__hasProp.call(metadata, key)) continue;
        value = metadata[key];
        params[key] = value;
      }
      return utils.getHTTPResponse(AweSM.API_URL, path, params, function(err, result) {
        if (format === 'json') {
          result = JSON.parse(result);
        }
        if (callback) {
          return callback(err, result);
        }
      });
    };
    return AweSM;
  })();
  module.exports = {
    AweSM: AweSM,
    Metadata: Metadata
  };
}).call(this);
