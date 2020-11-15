'use strict';
var ArrayBufferViewCore = require('../internals/array-buffer-view-core');
var toLength = require('../internals/to-length');
var toInteger = require('../internals/to-integer');

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;

// `%TypedArray%.prototype.item` method
// https://github.com/tc39/proposal-item-method
exportTypedArrayMethod('item', function item(index) {
  var O = aTypedArray(this);
  var len = toLength(O.length);
  var relativeIndex = toInteger(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});
