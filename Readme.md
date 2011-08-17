# node-awesm

node-awesm is a Node.JS project that wraps the API calls for AWE.SM service
It is written using CoffeScript http://jashkenas.github.com/coffee-script,


## How to Install

npm install node-awesm

## How to use

First, require `node-awesm`:

```js
var awesm = require('node-awesm');
```

Next, create a Awesm object using your AWE.SM api key:

```js
var client = new awesm.AweSM('[AWESM KEY]');
```

Finally, start calling the api methods using the created object:

```js
client.createEndpoint('[url]', '[channel]', '[tool]', [metadata-object], function(err, result) {
  console.log(err, result)
})

```

For more thorough examples, look at the `examples/` directory.

## License

(The MIT License)

Copyright (c) 2011 Gabriel Teodoru &lt;gabriel@scopely.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
