# mat4-css-stringify

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

Stringifies a 4x4 matrix (stored in a 16 float flat array) into a `matrix3d()` string. Useful in conjunction with [mat4-css-parse](https://nodei.co/npm/mat4-css-parse/).

```js
var stringify = require('mat4-css-stringify')
var parse = require('mat4-css-parse')

//get element's current transformation
var mat4 = parse(computedStyle.transform)

// ... do some matrix operations on the array

//then update the transform
var style = stringify(mat4)
require('dom-css')(element, 'transform', style)
```

## Usage

[![NPM](https://nodei.co/npm/mat4-css-stringify.png)](https://nodei.co/npm/mat4-css-stringify/)

#### `str = stringify(matrix)`

Returns a `matrix3d()` string representing the given 4x4 matrix (i.e. array with 16 floats).

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/mat4-css-stringify/blob/master/LICENSE.md) for details.
