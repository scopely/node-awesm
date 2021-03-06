(function() {
  var WGET_LONG_TIMEOUT_SEC, WGET_NAME, WGET_REQUEST_LONG_TIMEOUT_SEC, WGET_REQUEST_RETRY, WGET_REQUEST_TIMEOUT_SEC, getHTTPResponse, getWgetOptions, http, querystring, requestByWget, spawn, wget;
  http = require('http');
  querystring = require('querystring');
  spawn = require('child_process').spawn;
  WGET_REQUEST_TIMEOUT_SEC = 10;
  WGET_REQUEST_RETRY = 0;
  WGET_REQUEST_LONG_TIMEOUT_SEC = 10;
  WGET_LONG_TIMEOUT_SEC = 10;
  WGET_NAME = '/usr/bin/wget';
  getHTTPResponse = function(host, path, params, callback) {
    var options, req, responseData;
    responseData = '';
    options = {
      method: 'POST',
      host: host,
      port: 80,
      path: path
    };
    req = http.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        return responseData += chunk;
      });
      return res.on('end', function() {
        return callback(null, responseData);
      });
    });
    req.on('error', function(e) {
      return callback(e, null);
    });
    req.write(querystring.stringify(params));
    return req.end();
  };
  getWgetOptions = function(timeoutSec, retryNum) {
    var options;
    options = [];
    options.push("--no-check-certificate");
    options.push("-O");
    options.push("-");
    options.push("--timeout");
    options.push(timeoutSec);
    options.push("--read-timeout");
    options.push(timeoutSec);
    options.push("--connect-timeout");
    options.push("2");
    options.push("-q");
    return options;
  };
  wget = function(args, ttl, callback) {
    var stderr, stdout, wgetSpawn;
    wgetSpawn = spawn(WGET_NAME, args);
    if (!ttl) {
      ttl = WGET_LONG_TIMEOUT_SEC * 3;
    }
    stdout = '';
    stderr = '';
    wgetSpawn.on('exit', function(code) {
      if (callback) {
        callback(code, stdout, stderr);
      }
      wgetSpawn.kill('SIGHUP');
      return wgetSpawn = null;
    });
    wgetSpawn.on('close', function() {
      return wgetSpawn.kill('SIGHUP');
    });
    wgetSpawn.stdout.on('data', function(data) {
      return stdout += data;
    });
    wgetSpawn.stderr.on('data', function(data) {
      return stderr += data;
    });
    return setTimeout(function() {
      if (wgetSpawn !== null) {
        return wgetSpawn.kill('SIGHUP');
      }
    }, ttl * 1000);
  };
  requestByWget = function(url, options, callback) {
    var onWgetResponse;
    if (options === void 0 || options === null) {
      options = getWgetOptions(WGET_REQUEST_TIMEOUT_SEC, WGET_REQUEST_RETRY);
    }
    options.push(url);
    onWgetResponse = function(code, stdout, stderr) {
      if (!stderr) {
        if (callback) {
          return callback(null, stdout);
        }
      } else {
        if (callback) {
          return callback("wget_error: " + stderr, null);
        }
      }
    };
    try {
      return wget(options, WGET_REQUEST_LONG_TIMEOUT_SEC * 3, onWgetResponse);
    } catch (ex) {
      if (callback) {
        return callback("wget_exception: " + ex, null);
      }
    }
  };
  module.exports = {
    requestByWget: requestByWget,
    getHTTPResponse: getHTTPResponse
  };
}).call(this);
