/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseRange.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseRange.js ***!
  \*******************************************/
/***/ ((module) => {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createRange.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRange = __webpack_require__(/*! ./_baseRange */ "./node_modules/lodash/_baseRange.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/clone.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/clone.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/range.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/range.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createRange = __webpack_require__(/*! ./_createRange */ "./node_modules/lodash/_createRange.js");

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./src/components/accordion/accordion.ts":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.Accordion;
let Accordion = class Accordion extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.isOpen = false;
        this.disabled = false;
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container border-radius-4">
                <div class="title" @click=${() => this.isOpen = !this.isOpen}>
                    <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({ rotate: this.isOpen, 'title-icon': true })}>
                        <svg width="18" height="9" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 10L19 1" stroke="var(--icon-svg-stroke)" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="head-4 title-text">
                        <slot name="title"></slot>
                    </div>
                </div>
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_5__.isVisible)(this.isOpen, lit__WEBPACK_IMPORTED_MODULE_0__.html `
                    <div class="content">
                        <slot name="content"></slot>
                    </div>
                `)}
            </div>`;
    }
};
Accordion.styles = [_utils_css_css_utils__WEBPACK_IMPORTED_MODULE_3__.baseCSS, lit__WEBPACK_IMPORTED_MODULE_0__.css `
      .title {
        height: calc(var(--base-size) * 10);
        background-color: var(--grey-20);
        color: var(--grey-200);
        display: flex;
        justify-content: left;
        align-items: center;
        --icon-svg-stroke: var(--grey-70);
        padding-left: var(--space-20);
        padding-right: var(--space-20);
        cursor: pointer;
      }

      .title:hover {
        --icon-svg-stroke: var(--grey-120);
      }

      .title-icon {
        transition: transform .5s;
      }

      .title-icon svg {
        width: calc(var(--base-size) * 9 / 2);
        height: calc(var(--base-size) * 9 / 4)
      }

      .rotate {
        transform: rotate(.5turn);
      }

      .title-text {
        margin-left: var(--space-12);
      }
    `];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], Accordion.prototype, "isOpen", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], Accordion.prototype, "disabled", void 0);
Accordion = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__.customElementRegistry)(tagName)
], Accordion);



/***/ }),

/***/ "./src/components/action/action.ts":
/*!*****************************************!*\
  !*** ./src/components/action/action.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/ref.js */ "./node_modules/lit/directives/ref.js");
/* harmony import */ var lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/static-html.js */ "./node_modules/lit/static-html.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_input_config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/input/config/constants */ "./src/components/base/input/config/constants.ts");
/* harmony import */ var _base_input_config_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/input/config/types */ "./src/components/base/input/config/types.ts");
/* harmony import */ var _utils_components_radiobutton_render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/components/radiobutton-render */ "./src/components/utils/components/radiobutton-render.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/constants */ "./src/components/action/config/constants.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./style */ "./src/components/action/style.ts");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.ts");
/* harmony import */ var _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../checkbox/checkbox */ "./src/components/checkbox/checkbox.ts");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../input/input */ "./src/components/input/input.ts");
/* harmony import */ var _radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../radiobutton/radiobutton */ "./src/components/radiobutton/radiobutton.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let Action = class Action extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.menuOpenOptions = _config_constants__WEBPACK_IMPORTED_MODULE_10__.OpenOptions.RIGHT;
        this.options = [];
    }
    render() {
        return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
            <div class="level-2 action-container border-radius-4">
                ${this.options?.map((option, index) => {
            const resultTemplate = [];
            const headerTemplate = option.header
                ? lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<h1 class="action-header overline">
                                ${option.header}
                            </h1>`
                : lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html ``;
            resultTemplate.push(lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
                        <div class="action-block">
                            ${headerTemplate}
                            ${this.getActionItemsTemplate(option, index.toString())}
                        </div>
                    `);
            if (option.useBottomSeparator) {
                resultTemplate.push(lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
                                    <div class="action-separator"></div>`);
            }
            return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${resultTemplate}`;
        })}
            </div>
        `;
    }
    getActionItemsTemplate(option, idBlock) {
        const radioGroupItems = [];
        return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${Object.entries(option.items).map(([key, item]) => {
            const iconTemplate = item.imageSrc
                ? lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `<img class="action-item__icon" .src="${item.imageSrc}"/>`
                : lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html ``;
            const itemTemplate = [];
            switch (item.type) {
                case _config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionItemType.BUTTON:
                    itemTemplate.push(iconTemplate, this._buttonTemplate(item));
                    break;
                case _config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionItemType.MENU:
                    itemTemplate.push(iconTemplate, this._menuTemplate(key, item));
                    break;
                case _config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionItemType.INPUT:
                    itemTemplate.push(iconTemplate, this._inputTemplate());
                    break;
                case _config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionItemType.CHECKBOX:
                    itemTemplate.push(iconTemplate, this._checkboxTemplate(item));
                    break;
                case _config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionItemType.RADIO_BUTTON:
                    radioGroupItems.push({ key, item });
                    break;
                case _config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionItemType.CALENDAR:
                    break;
                default:
            }
            return itemTemplate.length > 0
                ? lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `${this._itemTemplate(itemTemplate, {
                    idBlock,
                    key,
                    type: item.type,
                })}`
                : lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html ``;
        })}
        ${this._radioGroupTemplate(radioGroupItems, idBlock)} `;
    }
    _emitItemClick(_e, idBlock, key) {
        this.dispatchEvent(new CustomEvent(_config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionEventName.click, {
            detail: {
                idBlock,
                key,
            },
            bubbles: false,
        }));
    }
    _emitChangeEvent(e, detail) {
        const newDetail = { ...e.detail, ...detail };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_9__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionEventName.change, {
            detail: newDetail,
            eventOption: { bubbles: false },
        }));
    }
    _emitInputEvent(e, detail) {
        const newDetail = { ...e.detail, ...detail };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_9__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionEventName.input, {
            detail: newDetail,
            eventOption: { bubbles: false },
        }));
    }
    _radioGroupTemplate(radioGroupItems, groupName) {
        return radioGroupItems.length > 0
            ? lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
                    <div class="radio-group">
                        ${radioGroupItems.map((radioItem) => {
                return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
                                <div
                                        @change=${(e) => this._emitChangeEvent(e, {
                    idBlock: groupName,
                    key: radioItem.key,
                })}
                                >
                                    ${this._itemTemplate((0,_utils_components_radiobutton_render__WEBPACK_IMPORTED_MODULE_7__.radioHtmlTemplate)({
                    name: groupName,
                    value: radioItem.item.value.toString(),
                    text: radioItem.item.label,
                }), { idBlock: groupName, key: radioItem.key })}
                                </div>
                            `;
            })}
                    </div>
            `
            : lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html ``;
    }
    _itemTemplate(content, { idBlock, key, type }) {
        const handleClick = (e) => type !== _config_constants__WEBPACK_IMPORTED_MODULE_10__.ActionItemType.MENU &&
            this._emitItemClick(e, idBlock, key);
        const handleChange = (event) => {
            const e = event;
            this._emitChangeEvent(e, { ...e.detail, idBlock, key });
        };
        const handleInput = (event) => {
            const e = event;
            this._emitInputEvent(e, { ...e.detail, idBlock, key });
        };
        const changeEventNames = [
            'change',
            `${_base_input_config_constants__WEBPACK_IMPORTED_MODULE_5__.InputEventName.changeEventName}`,
        ];
        const initializeEvents = (el) => {
            changeEventNames.forEach((eventName) => el?.addEventListener(eventName, handleChange));
            el?.addEventListener('input-value', lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(handleInput, 500));
        };
        return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
            <div
                    class="action-item body-3"
                    ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_2__.ref)(initializeEvents)}
                    @click=${handleClick}
            >
                ${content}
            </div>`;
    }
    _menuTemplate(key, item) {
        const mouseover = () => {
        };
        const mouseleave = () => {
        };
        const click = () => {
        };
        return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
            <div
                    class="menu-container"
                    @click=${click}
                    @mouseover=${mouseover}
                    @mouseleave=${mouseleave}
            >
                <div class="menu-item">
                    <div>${item.value}</div>
                    <div class="menu-item__icon">${_config_constants__WEBPACK_IMPORTED_MODULE_10__.ARROW_RIGHT_TEMPLATE}</div>
                </div>

                <div class="sub-menu">
                    <slot name=${key} class="sub-menu__content"></slot>
                </div>
            </div>
        `;
    }
    _buttonTemplate(item) {
        return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
            <div>${item.value}</div> `;
    }
    _inputTemplate() {
        return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
            <div class="input-container">
                <tsc-input ?outline=${true} .size=${_base_input_config_types__WEBPACK_IMPORTED_MODULE_6__.Size.XS}></tsc-input>
            </div>
        `;
    }
    _checkboxTemplate(item) {
        return lit_static_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
            <tsc-checkbox value=${item.value} text=${item.label}></tsc-checkbox>
        `;
    }
};
Action.styles = _style__WEBPACK_IMPORTED_MODULE_11__.stylesAction;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'menu-open-options' })
], Action.prototype, "menuOpenOptions", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], Action.prototype, "options", void 0);
Action = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_8__.customElementRegistry)(_config_constants__WEBPACK_IMPORTED_MODULE_10__.ACTION_TAG_NAME)
], Action);



/***/ }),

/***/ "./src/components/action/config/constants.ts":
/*!***************************************************!*\
  !*** ./src/components/action/config/constants.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TAG_NAME": () => (/* binding */ ACTION_TAG_NAME),
/* harmony export */   "ARROW_RIGHT_TEMPLATE": () => (/* binding */ ARROW_RIGHT_TEMPLATE),
/* harmony export */   "ActionEventName": () => (/* binding */ ActionEventName),
/* harmony export */   "ActionItemType": () => (/* binding */ ActionItemType),
/* harmony export */   "OpenOptions": () => (/* binding */ OpenOptions)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types */ "./src/shared/types.ts");


const ACTION_TAG_NAME = _shared_types__WEBPACK_IMPORTED_MODULE_1__.Selector.Action;
var OpenOptions;
(function (OpenOptions) {
    OpenOptions["LEFT"] = "left";
    OpenOptions["RIGHT"] = "right";
})(OpenOptions || (OpenOptions = {}));
var ActionItemType;
(function (ActionItemType) {
    ActionItemType["RADIO_BUTTON"] = "RadioButton";
    ActionItemType["CHECKBOX"] = "Checkbox";
    ActionItemType["BUTTON"] = "Button";
    ActionItemType["INPUT"] = "Input";
    ActionItemType["MENU"] = "Menu";
    ActionItemType["CALENDAR"] = "Calendar";
})(ActionItemType || (ActionItemType = {}));
const ARROW_RIGHT_TEMPLATE = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8335 17.5L13.3335 10L5.8335 2.5" stroke="#C0C8D0" stroke-width="1.66667"/>
    </svg>
`;
var ActionEventName;
(function (ActionEventName) {
    ActionEventName["click"] = "clickItem";
    ActionEventName["change"] = "onChange";
    ActionEventName["input"] = "onInput";
})(ActionEventName || (ActionEventName = {}));


/***/ }),

/***/ "./src/components/action/style.ts":
/*!****************************************!*\
  !*** ./src/components/action/style.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesAction": () => (/* binding */ stylesAction)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _radiobutton_radiobutton_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../radiobutton/radiobutton-style */ "./src/components/radiobutton/radiobutton-style.ts");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");



const stylesAction = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_2__.baseCSS,
    _radiobutton_radiobutton_style__WEBPACK_IMPORTED_MODULE_1__.radioButtonStyle,
    lit__WEBPACK_IMPORTED_MODULE_0__.css ` 
    .action-container {
        display: flex;
        flex-direction: column;
        padding: var(--space-16) 0;
        gap: var(--space-16);
        width: calc(var(--base-size) * 62)
    }

    .action-block {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
    }

    .action-header {
        margin: 0;
        letter-spacing: calc(var(--base-size) * 0.25);
        text-transform: uppercase;
        color: var(--grey-100);
        padding-left: var(--space-32);
    }

    .action-item {
        width: 100%;
        height: calc(var(--base-space) * 8);

        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: var(--space-24);
        gap: var(--space-8);

        position: relative;

        color: var(--grey-200);
        cursor: pointer;
    }

    .action-item:hover {
        background: var(--grey-10)
    }

    .action-item .container,
    .menu-container {
        display: flex;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
    }

    .action-item .container label {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding-left: var(--space-24);
        cursor: pointer;
    }

    .action-separator {
        background-color: var(--grey-20);
        height: calc(var(--base-size) * 0.25);
        width: 100%;
    }

    .menu-item {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0 var(--space-16) 0 var(--space-24);
    }

    .menu-item__icon {
        display: flex;
    }

    .menu-container:hover .sub-menu,  .sub-menu[fixed]{
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .sub-menu {
        display: none;
        z-index: 1000;
    }

    .sub-menu__content {
        position: relative;
    }

    .input-container {
        width: 100%;
        margin-right: var(--space-24);
    }

    .action-input {
        width: 100%
    }
    `
];


/***/ }),

/***/ "./src/components/base/checkbox/checkbox-base.ts":
/*!*******************************************************!*\
  !*** ./src/components/base/checkbox/checkbox-base.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxBase": () => (/* binding */ CheckboxBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _checkbox_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox-style */ "./src/components/base/checkbox/checkbox-style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const changeEventName = 'change';
class CheckboxBase extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.initCheckedState = false;
        this.disabled = false;
        this.text = '';
        this.value = '';
        this.name = '';
    }
    emitChangeEvent(e) {
        const detail = { value: e.target.checked };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_2__.createEvent)(changeEventName, { detail }));
    }
}
CheckboxBase.styles = _checkbox_style__WEBPACK_IMPORTED_MODULE_3__.checkboxStyleBase;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], CheckboxBase.prototype, "initCheckedState", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], CheckboxBase.prototype, "disabled", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], CheckboxBase.prototype, "text", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], CheckboxBase.prototype, "value", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], CheckboxBase.prototype, "name", void 0);


/***/ }),

/***/ "./src/components/base/checkbox/checkbox-style.ts":
/*!********************************************************!*\
  !*** ./src/components/base/checkbox/checkbox-style.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxStyleBase": () => (/* binding */ checkboxStyleBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const checkboxStyleBase = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        position: relative;
      }

      input {
        display: flex;
        position: relative;
        user-select: none;
        align-items: center;
        cursor: pointer;
        appearance: none;
        --before-background: white;
        --space-1: calc(var(--base-size) / 4);
      }

      input::after,
      input::before {
        transition-duration: .25s;
        transition-property: background-color, border-color, box-shadow;
        transition-timing-function: ease;
      }

      input:checked:hover {
        --before-background: var(--blue-100);
      }

      input:checked {
        --box-shadow-color: var(--blue-50);
        --before-background: var(--blue-120);
      }

      input:not(:checked) {
        --box-shadow-color: var(--grey-50);
      }

      input:focus::before {
        box-shadow: 0 0 0 var(--space-1) white, 0 0 0 var(--base-size) var(--box-shadow-color);
      }

      input[type="radio" i]:focus-visible {
        box-shadow: 0 0 0 calc(var(--base-size) / 2) var(--box-shadow-color);
        outline: none;
        outline-offset: 0;
      }

      label {
        display: flex;
        grid-gap: calc(var(--base-size) * 3);
        color: var(--grey-200);
        align-items: center;
        cursor: pointer;
      }

      .disabled {
        color: var(--grey-80);
      }

      input.disabled {
        pointer-events: none;
        cursor: not-allowed;
      }
    `
];


/***/ }),

/***/ "./src/components/base/input/config/constants.ts":
/*!*******************************************************!*\
  !*** ./src/components/base/input/config/constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputEventName": () => (/* binding */ InputEventName),
/* harmony export */   "changeEventName": () => (/* binding */ changeEventName),
/* harmony export */   "inputEventName": () => (/* binding */ inputEventName)
/* harmony export */ });
const inputEventName = 'input-value';
const changeEventName = 'input-change';
const InputEventName = {
    changeEventName: 'input-change',
    inputEventName: 'input-value',
    clearEventName: 'input-clear'
};


/***/ }),

/***/ "./src/components/base/input/config/types.ts":
/*!***************************************************!*\
  !*** ./src/components/base/input/config/types.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Size": () => (/* binding */ Size)
/* harmony export */ });
var Size;
(function (Size) {
    Size["M"] = "M";
    Size["L"] = "L";
    Size["S"] = "S";
    Size["XS"] = "XS";
    Size["XXS"] = "XXS";
})(Size || (Size = {}));


/***/ }),

/***/ "./src/components/base/input/config/utils.ts":
/*!***************************************************!*\
  !*** ./src/components/base/input/config/utils.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMaskingCheck": () => (/* binding */ addMaskingCheck)
/* harmony export */ });
const addMaskingCheck = (inputElement, mask, maskSlot) => {
    const maskChars = mask.split('');
    inputElement.addEventListener('keypress', (event) => {
        if (mask.length <= inputElement.value.length) {
            event.preventDefault();
            return;
        }
        const { value, selectionStart, selectionEnd } = inputElement;
        if (selectionStart !== null && selectionEnd !== null) {
            if (!maskSlot.includes(maskChars[selectionEnd])) {
                const t = maskChars
                    .slice(selectionEnd)
                    .findIndex((char) => maskSlot.includes(char));
                if (t < 0) {
                    inputElement.value =
                        value + maskChars.slice(selectionEnd).join('');
                    event.preventDefault();
                }
                else
                    inputElement.value =
                        value +
                            maskChars
                                .slice(selectionEnd, t + selectionEnd)
                                .join('');
            }
        }
    });
};


/***/ }),

/***/ "./src/components/base/input/input-base.ts":
/*!*************************************************!*\
  !*** ./src/components/base/input/input-base.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputBase": () => (/* binding */ InputBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/constants */ "./src/components/base/input/config/constants.ts");
/* harmony import */ var _config_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/types */ "./src/components/base/input/config/types.ts");
/* harmony import */ var _config_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/utils */ "./src/components/base/input/config/utils.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/components/base/input/style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class InputBase extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.outline = false;
        this.size = _config_types__WEBPACK_IMPORTED_MODULE_4__.Size.M;
        this.success = false;
        this.error = false;
        this.disabled = false;
        this.value = '';
        this.mask = '';
        this.maskSlot = '';
        this.placeholder = '';
        this.additionalText = '';
        this.clearButtonExist = true;
        this.placeHolderVisible = false;
        this.clearButtonVisible = false;
        this.name = '';
        this.classSettings = {
            XXS: {
                placeholder: 'body-3',
                inputText: 'body-3',
                className: 'xxs-input'
            },
            XS: {
                placeholder: 'body-3',
                inputText: 'body-3',
                className: 'xs-input'
            },
            S: {
                placeholder: 'body-3',
                inputText: 'body-3',
                className: 's-input'
            },
            M: {
                placeholder: 'subtitle-2',
                inputText: 'body-3',
                className: 'm-input'
            },
            L: {
                placeholder: 'body-3',
                inputText: 'body-2',
                className: 'l-input'
            }
        };
    }
    connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback: ', this.input);
        setTimeout(() => {
            if (this.input) {
            }
        }, 0);
    }
    focusInput() {
        this.placeHolderVisible = true;
        this.clearButtonVisible = true;
    }
    blurInput() {
        this.placeHolderVisible = !!this.input?.value;
        this.clearButtonVisible = false;
    }
    editInput() {
        this.value = this.input?.value || '';
        const detail = { value: this.input?.value };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_2__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_3__.InputEventName.inputEventName, { detail }));
    }
    clearInputValue() {
        if (this.input)
            this.input.value = '';
        this.input?.focus();
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_2__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_3__.InputEventName.clearEventName));
    }
    changeValue() {
        const detail = { value: this.input?.value };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_2__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_3__.InputEventName.changeEventName, { detail }));
    }
    firstUpdated() {
        if (this.input && this.mask && this.maskSlot) {
            (0,_config_utils__WEBPACK_IMPORTED_MODULE_5__.addMaskingCheck)(this.input, this.mask, this.maskSlot);
        }
    }
}
InputBase.styles = _style__WEBPACK_IMPORTED_MODULE_6__.stylesBase;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], InputBase.prototype, "outline", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], InputBase.prototype, "size", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], InputBase.prototype, "success", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], InputBase.prototype, "error", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], InputBase.prototype, "disabled", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], InputBase.prototype, "value", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], InputBase.prototype, "mask", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: 'mask-slot' })
], InputBase.prototype, "maskSlot", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], InputBase.prototype, "placeholder", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], InputBase.prototype, "additionalText", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, attribute: 'clear-button-exist' })
], InputBase.prototype, "clearButtonExist", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], InputBase.prototype, "placeHolderVisible", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('#input')
], InputBase.prototype, "input", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], InputBase.prototype, "clearButtonVisible", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], InputBase.prototype, "name", void 0);


/***/ }),

/***/ "./src/components/base/input/style.ts":
/*!********************************************!*\
  !*** ./src/components/base/input/style.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesBase": () => (/* binding */ stylesBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const stylesBase = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
      .input-container {
        width: min(22em, 100%);
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        height: calc(var(--base-size) * 12);
        position: relative;
      }

      .xxs-input .input-wrapper {
        height: calc(var(--base-size) * 8);
      }

      .xs-input .input-wrapper {
        height: calc(var(--base-size) * 8);
      }

      .s-input .input-wrapper {
        height: calc(var(--base-size) * 10);
      }

      .m-input .input-wrapper {
        height: calc(var(--base-size) * 12);
      }

      .l-input .input-wrapper {
        height: calc(var(--base-size) * 14);
      }

      #input {
        width: 100%;
        border: none;
        border-bottom: calc(var(--base-size) / 4) solid var(--grey-30);
        color: var(--grey-200);
        outline: none;
      }

      #input:disabled {
        color: var(--grey-100);
        background-color: var(--grey-10);
        border-radius: var(--border-radius-4) var(--border-radius-4) 0 0;
        border-bottom: calc(var(--base-size) / 4) solid var(--grey-30);
        cursor: not-allowed;
        pointer-events: none;
      }

      #input::placeholder {
        color: var(--grey-100);
        opacity: 1;
      }

      .xxs-input #input {
        padding: var(--space-6) var(--space-8);
      }

      .xs-input #input {
        padding: var(--space-6) var(--space-12);
      }

      .s-input #input {
        padding: var(--space-10) var(--space-12) var(--space-12);
      }

      .m-input #input {
        padding: var(--space-24) var(--space-12) var(--space-6);
      }

      .m-input #input.empty:not(:focus) {
        padding: var(--space-14) var(--space-12) var(--space-16);
      }

      .l-input #input {
        padding: var(--space-28) var(--space-12) var(--space-8);
      }

      .l-input #input.empty:not(:focus) {
        padding: var(--space-18) var(--space-12) var(--space-16);
      }

      #input:not(:disabled):hover {
        border-bottom: calc(var(--base-size) / 4) solid var(--grey-100);
      }

      #input:focus {
        border-bottom: calc(var(--base-size) / 4) solid var(--blue-120);
      }

      .input-placeholder {
        position: absolute;
        padding-left: var(--space-12);
        color: var(--grey-100);
        top: var(--space-8);
      }

      .clear-button {
        display: none;
        margin-left: calc(var(--space-24) * -1);
        cursor: pointer;
      }

      .input-wrapper:not(.disabled):hover .clear-button {
        display: flex !important;
      }

      #input.outline {
        border: calc(var(--base-size) / 4) solid var(--grey-30);
        border-radius: var(--border-radius-4);
        outline: none;
      }

      #input:hover.outline {
        border: calc(var(--base-size) / 4) solid var(--grey-100);
      }

      #input:focus.outline {
        border: calc(var(--base-size) / 4) solid var(--blue-120);
      }

      #input.disabled.outline {
        border: calc(var(--base-size) / 4) solid var(--grey-30);
      }

      .additional-text {
        color: var(--grey-100);
        margin-top: var(--space-6);
      }

      .xxs-input .additional-text {
        margin-top: var(--space-4);
      }

      .xs-input .additional-text {
        margin-top: var(--space-4);
      }

      .additional-text.success {
        color: var(--green-100);
      }

      .additional-text.error {
        color: var(--red-100);
      }

      #input.success {
        border-color: var(--green-120);
      }

      #input.error {
        border-color: var(--red-120);
      }
    `
];


/***/ }),

/***/ "./src/components/button/basic-button.ts":
/*!***********************************************!*\
  !*** ./src/components/button/basic-button.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicButton": () => (/* binding */ BasicButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/constants */ "./src/components/button/config/constants.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/components/button/style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







class BasicButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.size = _config_constants__WEBPACK_IMPORTED_MODULE_5__.Size.M;
        this.styleType = _config_constants__WEBPACK_IMPORTED_MODULE_5__.BaseStyleType.DEFAULT;
        this.disabled = false;
        this.autofocus = false;
        this.formnovalidate = false;
        this._classNameMap = {};
        this._styleInfoMap = {};
    }
    addClassName(className) {
        this._classNameMap = { ...this._classNameMap, [className]: true };
    }
    addStyleProperties(styleProperties) {
        this._styleInfoMap = { ...this._styleInfoMap, ...styleProperties };
    }
    focus(options) {
        super.focus(options);
        this._buttonComponent?.focus(options);
    }
    basicRender(content) {
        this.addStyleProperties({
            '--base-padding': this.classSettings ? this.classSettings[this.size].padding : ''
        });
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <style>
            ${this._getSizeStyle()}
        </style>
        <button
            id="button"
            class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)(this._classNameMap)}
            style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__.styleMap)(this._styleInfoMap)}
            style-type=${this.styleType} 
            size=${this.size}
            form=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(this.form)}
            name=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(this.name)}
            type=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(this.buttonType)}
            formaction=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(this.formaction)}
            formenctype=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(this.formenctype)}
            formmethod=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(this.formmethod)}
            formtarget=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_3__.ifDefined)(this.formtarget)}
            ?formnovalidate=${this.formnovalidate}
            ?disabled=${this.disabled}
            ?autofocus=${this.autofocus}
        >
            ${content}
        </button>
        `;
    }
    _getSizeStyle() {
        if (this.classSettings) {
            const { height } = this.classSettings[this.size];
            return lit__WEBPACK_IMPORTED_MODULE_0__.css `
            button[size="${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(this.size)}"] {
                padding: 0 var(--base-padding);
                height: ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(height)};
            }
        `;
        }
        return lit__WEBPACK_IMPORTED_MODULE_0__.css ``;
    }
}
BasicButton.styles = _style__WEBPACK_IMPORTED_MODULE_6__.stylesBaseButton;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "size", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: 'style-type' })
], BasicButton.prototype, "styleType", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], BasicButton.prototype, "disabled", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], BasicButton.prototype, "autofocus", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "form", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "formaction", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "formenctype", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "formmethod", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "formtarget", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "name", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], BasicButton.prototype, "buttonType", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], BasicButton.prototype, "formnovalidate", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], BasicButton.prototype, "_classNameMap", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], BasicButton.prototype, "_styleInfoMap", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('#button')
], BasicButton.prototype, "_buttonComponent", void 0);


/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _basic_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-button */ "./src/components/button/basic-button.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/components/button/style.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.Button;
let Button = class Button extends _basic_button__WEBPACK_IMPORTED_MODULE_4__.BasicButton {
    constructor() {
        super(...arguments);
        this.classSettings = {
            XS: {
                buttonTextSize: 'head-5',
                height: 'calc(var(--base-size) * 8)',
                padding: 'var(--space-8)',
                squareIconSize: 'calc(var(--base-space) * 5)',
                contentGap: 'var(--space-8)'
            },
            S: {
                buttonTextSize: 'head-5',
                height: 'calc(var(--base-size) * 10)',
                padding: 'var(--space-12)',
                squareIconSize: 'calc(var(--base-space) * 6)',
                contentGap: 'var(--space-8)'
            },
            M: {
                buttonTextSize: 'head-4',
                height: 'calc(var(--base-size) * 12)',
                padding: 'var(--space-16)',
                squareIconSize: 'calc(var(--base-space) * 6)',
                contentGap: 'var(--space-8)'
            },
            L: {
                buttonTextSize: 'head-3',
                height: 'calc(var(--base-size) * 14)',
                padding: 'var(--space-20)',
                squareIconSize: 'calc(var(--base-space) * 6)',
                contentGap: 'var(--space-8)'
            }
        };
        this.text = '';
        this.iconUrl = '';
        this.iconAlt = '';
    }
    render() {
        this.addStyleProperties(this._initializeCssVariable());
        this.addClassName(this.classSettings[this.size].buttonTextSize);
        const imageTemplate = this.iconUrl
            ? lit__WEBPACK_IMPORTED_MODULE_0__.html `<img class="button__icon" .src=${this.iconUrl} .alt=${this.iconAlt}>`
            : undefined;
        return this.basicRender(lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <slot class="button__content" name="content" @click=${this.focus}>
                <slot name="image">
                    ${imageTemplate}
                </slot>
                <slot name="text">
                    ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_2__.isVisible)(Boolean(this.text), lit__WEBPACK_IMPORTED_MODULE_0__.html `<span>${this.text}</span>`)}
                </slot>
                <slot></slot>
            </slot>
        `);
    }
    _initializeCssVariable() {
        return {
            '--content-gap': this.classSettings[this.size].contentGap,
            '--icon-size': this.classSettings[this.size].squareIconSize
        };
    }
};
Button.styles = _style__WEBPACK_IMPORTED_MODULE_5__.stylesButton;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], Button.prototype, "text", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], Button.prototype, "iconUrl", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], Button.prototype, "iconAlt", void 0);
Button = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__.customElementRegistry)(tagName)
], Button);



/***/ }),

/***/ "./src/components/button/config/constants.ts":
/*!***************************************************!*\
  !*** ./src/components/button/config/constants.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseStyleType": () => (/* binding */ BaseStyleType),
/* harmony export */   "CHECKMARK_TEMPLATE": () => (/* binding */ CHECKMARK_TEMPLATE),
/* harmony export */   "IconStyleType": () => (/* binding */ IconStyleType),
/* harmony export */   "Size": () => (/* binding */ Size)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const CHECKMARK_TEMPLATE = lit__WEBPACK_IMPORTED_MODULE_0__.html `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L7.125 13.125L15 5.25" stroke="white" stroke-width="2" />
</svg>
`;
var Size;
(function (Size) {
    Size["M"] = "M";
    Size["L"] = "L";
    Size["S"] = "S";
    Size["XS"] = "XS";
    Size["XXS"] = "XXS";
})(Size || (Size = {}));
var BaseStyleType;
(function (BaseStyleType) {
    BaseStyleType["DEFAULT"] = "Default";
    BaseStyleType["OUTLINE"] = "Outline";
    BaseStyleType["FLAT"] = "Flat";
})(BaseStyleType || (BaseStyleType = {}));
const IconStyleType = {
    ...BaseStyleType,
    ROUND: 'Round'
};


/***/ }),

/***/ "./src/components/button/icon-button.ts":
/*!**********************************************!*\
  !*** ./src/components/button/icon-button.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButton": () => (/* binding */ IconButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _basic_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-button */ "./src/components/button/basic-button.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/constants */ "./src/components/button/config/constants.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/components/button/style.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let IconButton = class IconButton extends _basic_button__WEBPACK_IMPORTED_MODULE_3__.BasicButton {
    constructor() {
        super(...arguments);
        this.classSettings = {
            XS: {
                squareIconSize: 'calc(var(--base-space) * 5)',
                height: 'calc(var(--base-size) * 8)',
                padding: 'var(--space-8)'
            },
            S: {
                squareIconSize: 'calc(var(--base-space) * 6)',
                height: 'calc(var(--base-size) * 10)',
                padding: 'var(--space-12)'
            },
            M: {
                squareIconSize: 'calc(var(--base-space) * 6)',
                height: 'calc(var(--base-size) * 12)',
                padding: 'var(--space-16)'
            },
            L: {
                squareIconSize: 'calc(var(--base-space) * 6)',
                height: 'calc(var(--base-size) * 14)',
                padding: 'var(--space-20)'
            }
        };
        this.iconUrl = '';
        this.iconAlt = '';
    }
    render() {
        if (this.styleType === _config_constants__WEBPACK_IMPORTED_MODULE_4__.IconStyleType.ROUND) {
            this.size = _config_constants__WEBPACK_IMPORTED_MODULE_4__.Size.XS;
            this.classSettings[this.size] = {
                squareIconSize: 'calc(var(--base-space) * 4.5)',
                height: 'calc(var(--base-size) * 6)',
                padding: 'calc(var(--space-4)*3/4)'
            };
        }
        this.addStyleProperties(this._initializeCssVariable());
        return this.basicRender(this._getTemplate());
    }
    _initializeCssVariable() {
        return {
            '--icon-size': this.classSettings[this.size].squareIconSize
        };
    }
    _getTemplate() {
        return this.styleType === _config_constants__WEBPACK_IMPORTED_MODULE_4__.IconStyleType.ROUND
            ? _config_constants__WEBPACK_IMPORTED_MODULE_4__.CHECKMARK_TEMPLATE
            : lit__WEBPACK_IMPORTED_MODULE_0__.html `
                    <slot name="image" @click=${this.focus}>
                        <img class="button__icon" src=${this.iconUrl} alt=${this.iconAlt}>
                    </slot>
            `;
    }
};
IconButton.styles = _style__WEBPACK_IMPORTED_MODULE_5__.stylesIconButton;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], IconButton.prototype, "iconUrl", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
], IconButton.prototype, "iconAlt", void 0);
IconButton = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_2__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.IconButton)
], IconButton);



/***/ }),

/***/ "./src/components/button/style.ts":
/*!****************************************!*\
  !*** ./src/components/button/style.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesBaseButton": () => (/* binding */ stylesBaseButton),
/* harmony export */   "stylesButton": () => (/* binding */ stylesButton),
/* harmony export */   "stylesIconButton": () => (/* binding */ stylesIconButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/constants */ "./src/components/button/config/constants.ts");



const stylesBaseButton = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        :host {
            --base-padding: 0
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--blue-120);
            color: var(--common-white);
            border: none;
            outline: none;
            border-radius: var(--border-radius-4);
            cursor: pointer;
            transition-duration: .25s;
            transition-property: background-color, border-color, box-shadow;
            transition-timing-function: ease;
        }

        button:focus {
            box-shadow: 0 0 0 calc(var(--base-size)/2) var(--blue-190);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.DEFAULT)}]:not(:disabled):hover {
            background: var(--blue-100);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.DEFAULT)}]:not(:disabled):active {
            background: var(--blue-90);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.DEFAULT)}]:disabled {
            background: var(--grey-20);
            color: var(--grey-100);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.OUTLINE)}] {
            --border: calc(var(--space-4)/4);
            background: transparent;
            border: var(--border) solid var(--grey-30);
            padding: 0 calc(var(--base-padding) - var(--border));
            color: var(--blue-120)
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.OUTLINE)}]:hover {
            border-color: var(--blue-120);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.OUTLINE)}]:not(:disabled):active {
            border-color: var(--blue-100);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.OUTLINE)}]:not(:disabled):focus {
            border-color: var(--grey-30);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.OUTLINE)}]:disabled {
            color: var(--grey-80);
            border-color: var(--grey-30);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.FLAT)}] {
            background: transparent;
            color: var(--blue-120)
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.FLAT)}]:not(:disabled):hover,
        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.FLAT)}]:not(:disabled):active {
            background: var(--blue-10);
        }

        button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.BaseStyleType.FLAT)}]:disabled {
            color: var(--grey-80);
        }
    `
];
const stylesButton = [
    stylesBaseButton,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
    :host {
        --content-gap: 0;
        --icon-size: 0;
    }

    .button__icon {
        height: var(--icon-size);
        width: var(--icon-size);
    }

    .button__content {
        display: flex;
        align-items: center;
        gap: var(--content-gap);
    }
    `
];
const stylesIconButton = [
    stylesButton,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
    button:focus {
        border-color: var(--blue-180); //TODO: другой цвет обводки в макете для Round
    }

    button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.IconStyleType.ROUND)}] {
        border-radius: 100%;
        background-color: var(--green-120);
        padding: var(--base-padding);
        height: fit-content;
    }

    button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.IconStyleType.ROUND)}]:hover {
        background-color: var(--green-100)
    }

    button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.IconStyleType.ROUND)}]:active {
        background-color: var(--green-100)
    }

    button[style-type=${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.IconStyleType.ROUND)}]:disabled {
        background-color: var(--grey-50)
    }
    `
];


/***/ }),

/***/ "./src/components/calendar/calendar.ts":
/*!*********************************************!*\
  !*** ./src/components/calendar/calendar.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _utils_other_property_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utils/other/property-type */ "./src/components/utils/other/property-type.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/constants */ "./src/components/calendar/config/constants.ts");
/* harmony import */ var _button_config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../button/config/constants */ "./src/components/button/config/constants.ts");
/* harmony import */ var _config_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/templates */ "./src/components/calendar/config/templates.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style */ "./src/components/calendar/style.ts");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.ts");
/* harmony import */ var _time_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./time-picker */ "./src/components/calendar/time-picker.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let Calendar = class Calendar extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super();
        this.showTime = false;
        this.isShowingMonthsDialog = false;
        this.isShowingYearsDialog = false;
        this.offsetByYear = 0;
        this.currentDate = new Date();
        this.firstDayOfWeek = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0).getDay();
        this.numberOfDays = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, -1).getDate() + 1;
        this.targetYear = this.currentDate.getFullYear();
        this.targetMonth = this.currentDate.getMonth();
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <div class="level-4 container">
            <div class="calendar-container">
                ${(0,_config_templates__WEBPACK_IMPORTED_MODULE_9__.getCalendarCaptionTemplate)(this.isShowingMonthsDialog, this.isShowingYearsDialog, new Date(this.targetYear, this.targetMonth), this.offsetByYear, this.subMonth.bind(this), this.addMonth.bind(this), this.clickMonth.bind(this), this.clickYear.bind(this), this.addOffset.bind(this), this.setYear.bind(this), this.setMonth.bind(this), this.hideMonthsDialog.bind(this), this.hideYearsDialog.bind(this))}
                <div class="calendar-header calendar-grid head-6">
                    ${_config_constants__WEBPACK_IMPORTED_MODULE_7__.DAYS_OF_WEEK.map((dayName) => lit__WEBPACK_IMPORTED_MODULE_0__.html `<div class="value flex-centred">${dayName}</div>`)}
                </div>
                <div class="divider"></div>
                <div class="calendar-body calendar-grid">
                    ${this.getMonthDayTemplates().map((day) => lit__WEBPACK_IMPORTED_MODULE_0__.html `${day}`)}
                </div>
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__.isVisible)(this.showTime, lit__WEBPACK_IMPORTED_MODULE_0__.html `<tsc-time-picker></tsc-time-picker>`)}
            </div>
            <div class="block-divider"></div>
            <div class="buttons-container">
                <tsc-button .styleType=${_button_config_constants__WEBPACK_IMPORTED_MODULE_8__.BaseStyleType.OUTLINE} @click=${this.clickCancel}>${_config_constants__WEBPACK_IMPORTED_MODULE_7__.CANCEL_TEXT}</tsc-button>
                <tsc-button @click=${this.clickApply}>${_config_constants__WEBPACK_IMPORTED_MODULE_7__.APPLY_TEXT}</tsc-button>
            </div>
        </div>
        `;
    }
    clickApply(e) {
        e.stopPropagation();
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_5__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_7__.APPLY_EVENT, {
            detail: {
                value: this.selectedDate
            }
        }));
    }
    clickCancel(e) {
        e.stopPropagation();
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_5__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_7__.CANCEL_EVENT));
    }
    clickMonth() {
        this.isShowingMonthsDialog = !this.isShowingMonthsDialog;
    }
    clickYear() {
        this.isShowingYearsDialog = !this.isShowingYearsDialog;
        this.offsetByYear = 0;
    }
    getMonthDayTemplates() {
        const days = [];
        const dayTemplate = (date) => (0,_config_templates__WEBPACK_IMPORTED_MODULE_9__.getDayTemplate)(date, new Date(this.targetYear, this.targetMonth), this.currentDate, this.selectedDate, this.selectDate.bind(this));
        if (this.firstDayOfWeek !== 0) {
            const prevDays = lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(this.firstDayOfWeek)
                .map((index) => dayTemplate(new Date(this.targetYear, this.targetMonth, -index)))
                .reverse();
            days.push(...prevDays);
        }
        const targetDays = lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(this.numberOfDays).map((index) => dayTemplate(new Date(this.targetYear, this.targetMonth, index + 1)));
        days.push(...targetDays);
        if (days.length < 42) {
            const residual = 42 - days.length;
            const followingDays = lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(residual).map((index) => dayTemplate(new Date(this.targetYear, this.targetMonth + 1, index + 1)));
            days.push(...followingDays);
        }
        return days;
    }
    addOffset(page, day = 0) {
        this.offsetByYear += 11 * page + day;
    }
    setMonth(month) {
        this.targetMonth = month;
        this.updateState();
    }
    setYear(year) {
        this.targetYear = year;
        this.updateState();
    }
    addMonth() {
        if (this.targetMonth < 11) {
            this.targetMonth += 1;
        }
        else {
            this.targetYear += 1;
            this.targetMonth = 0;
        }
        this.updateState();
    }
    subMonth() {
        if (this.targetMonth > 0) {
            this.targetMonth -= 1;
        }
        else {
            this.targetYear -= 1;
            this.targetMonth = 11;
        }
        this.updateState();
    }
    updateState() {
        this.firstDayOfWeek = new Date(this.targetYear, this.targetMonth, 0).getDay();
        this.numberOfDays =
            new Date(this.targetYear, this.targetMonth + 1, -1).getDate() + 1;
        this.isShowingMonthsDialog = false;
        this.isShowingYearsDialog = false;
    }
    selectDate(date) {
        this.selectedDate =
            this.selectedDate?.getTime() !== date.getTime() ? date : undefined;
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_5__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_7__.SELECT_EVENT, {
            detail: {
                value: this.selectedDate
            }
        }));
    }
    hideMonthsDialog() {
        this.isShowingMonthsDialog = false;
    }
    hideYearsDialog() {
        this.isShowingYearsDialog = false;
    }
};
Calendar.styles = _style__WEBPACK_IMPORTED_MODULE_10__.stylesCalendar;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: 'show-time', type: Boolean })
], Calendar.prototype, "showTime", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        attribute: 'selected-date',
        ..._utils_other_property_type__WEBPACK_IMPORTED_MODULE_6__.PROPERTY_TYPES.date
    })
], Calendar.prototype, "selectedDate", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], Calendar.prototype, "targetYear", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], Calendar.prototype, "targetMonth", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], Calendar.prototype, "isShowingMonthsDialog", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], Calendar.prototype, "isShowingYearsDialog", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], Calendar.prototype, "offsetByYear", void 0);
Calendar = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__.customElementRegistry)(_config_constants__WEBPACK_IMPORTED_MODULE_7__.CALENDAR_TAG)
], Calendar);



/***/ }),

/***/ "./src/components/calendar/config/constants.ts":
/*!*****************************************************!*\
  !*** ./src/components/calendar/config/constants.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APPLY_EVENT": () => (/* binding */ APPLY_EVENT),
/* harmony export */   "APPLY_TEXT": () => (/* binding */ APPLY_TEXT),
/* harmony export */   "CALENDAR_TAG": () => (/* binding */ CALENDAR_TAG),
/* harmony export */   "CANCEL_EVENT": () => (/* binding */ CANCEL_EVENT),
/* harmony export */   "CANCEL_TEXT": () => (/* binding */ CANCEL_TEXT),
/* harmony export */   "DAYS_OF_WEEK": () => (/* binding */ DAYS_OF_WEEK),
/* harmony export */   "LEFT_ARROW_TEMPLATE": () => (/* binding */ LEFT_ARROW_TEMPLATE),
/* harmony export */   "MONTHS": () => (/* binding */ MONTHS),
/* harmony export */   "RIGHT_ARROW_TEMPLATE": () => (/* binding */ RIGHT_ARROW_TEMPLATE),
/* harmony export */   "SELECT_EVENT": () => (/* binding */ SELECT_EVENT),
/* harmony export */   "SMALL_ARROW_DOWN_TEMPLATE": () => (/* binding */ SMALL_ARROW_DOWN_TEMPLATE),
/* harmony export */   "SMALL_ARROW_UP_TEMPLATE": () => (/* binding */ SMALL_ARROW_UP_TEMPLATE),
/* harmony export */   "TIME_PICKER_TAG": () => (/* binding */ TIME_PICKER_TAG)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/types */ "./src/shared/types.ts");


const CALENDAR_TAG = _shared_types__WEBPACK_IMPORTED_MODULE_1__.Selector.Calendar;
const TIME_PICKER_TAG = _shared_types__WEBPACK_IMPORTED_MODULE_1__.Selector.TimePicker;
const DAYS_OF_WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
const CANCEL_EVENT = 'cancel';
const APPLY_EVENT = 'apply';
const SELECT_EVENT = 'select';
const CANCEL_TEXT = 'Отменить';
const APPLY_TEXT = 'Применить';
const LEFT_ARROW_TEMPLATE = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
    >
        <path
                d="M7.91659 14.5834L3.33325 10M3.33325 10L7.91659 5.41671M3.33325 10L15.4166 10"
                stroke="#B3BDC6"
                stroke-width="2"
        />
    </svg> `;
const RIGHT_ARROW_TEMPLATE = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
    >
        <path
                d="M10.8334 5.41663L15.4167 9.99996M15.4167 9.99996L10.8334 14.5833M15.4167 9.99996H3.33341"
                stroke="#B3BDC6"
                stroke-width="2"
        />
    </svg> `;
const SMALL_ARROW_UP_TEMPLATE = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
    >
        <path
                d="M14.6666 11.25L10.4999 7.08337L6.33325 11.25H14.6666Z"
                fill="#21272C"
        />
    </svg>
`;
const SMALL_ARROW_DOWN_TEMPLATE = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
    >
        <path
                d="M6.33341 8.74996L10.5001 12.9166L14.6667 8.74996L6.33341 8.74996Z"
                fill="#21272C"
        />
    </svg>
`;


/***/ }),

/***/ "./src/components/calendar/config/templates.ts":
/*!*****************************************************!*\
  !*** ./src/components/calendar/config/templates.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areEqualDates": () => (/* binding */ areEqualDates),
/* harmony export */   "getCalendarCaptionTemplate": () => (/* binding */ getCalendarCaptionTemplate),
/* harmony export */   "getDayTemplate": () => (/* binding */ getDayTemplate),
/* harmony export */   "getMonthsContainerTemplate": () => (/* binding */ getMonthsContainerTemplate),
/* harmony export */   "getMonthsDialogTemplate": () => (/* binding */ getMonthsDialogTemplate),
/* harmony export */   "getYearsContainerTemplate": () => (/* binding */ getYearsContainerTemplate),
/* harmony export */   "getYearsDialogTemplate": () => (/* binding */ getYearsDialogTemplate)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_directives_clickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/directives/clickOutside */ "./src/components/utils/directives/clickOutside.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/components/calendar/config/constants.ts");






const getMonthsDialogTemplate = (currentMonth, clickCallback) => {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <div class="dialog__container dialog__grid container level-2">
            ${_constants__WEBPACK_IMPORTED_MODULE_5__.MONTHS.map((month, index) => lit__WEBPACK_IMPORTED_MODULE_0__.html `
                    <div
                        class="dialog__month flex-centred selectable ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        selected: index === currentMonth,
    })}"
                        @click=${() => clickCallback(index)}
                    >
                        ${month}
                    </div>
                `)}
        </div>
    `;
};
const getYearsDialogTemplate = (currentYear, offsetByYear, arrowClickCallback, selectYearCallback) => {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <div class="dialog__container level-2">
            <div class="year-action">
                <div
                    class="year-action__arrow"
                    @click=${() => arrowClickCallback(-1)}
                >
                    ${_constants__WEBPACK_IMPORTED_MODULE_5__.LEFT_ARROW_TEMPLATE}
                </div>
                ${currentYear}
                <div
                    class="year-action__arrow"
                    @click=${() => arrowClickCallback(1)}
                >
                    ${_constants__WEBPACK_IMPORTED_MODULE_5__.RIGHT_ARROW_TEMPLATE}
                </div>
            </div>
            <div class="dialog__grid container">
                ${lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(12).map((index) => {
        const calculatedYear = currentYear + offsetByYear + index;
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
                        <div
                            class="dialog__year flex-centred selectable ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
            selected: calculatedYear === currentYear,
        })}"
                            @click=${() => selectYearCallback(calculatedYear)}
                        >
                            ${calculatedYear}
                        </div>
                    `;
    })}
            </div>
        </div>
    `;
};
const getDayTemplate = (date, targetDate, currentDate, selectedDate, selectDayCallback) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const targetMonth = targetDate.getMonth();
    const targetYear = targetDate.getFullYear();
    const isTargetMonth = areEqualDates(new Date(year, month), new Date(targetYear, targetMonth));
    return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <div
            @click=${() => selectDayCallback(date)}
            class="day value selectable flex-centred ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
        'target-month': isTargetMonth,
        'other-month': !isTargetMonth,
        'current-day': areEqualDates(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()), date),
        selected: areEqualDates(selectedDate, date),
    })}"
        >
            ${day}
        </div>
    `;
};
const areEqualDates = (date1, date2) => {
    return (date1 !== undefined &&
        date2 !== undefined &&
        date1.toDateString() === date2.toDateString());
};
const getMonthsContainerTemplate = (isShowingMonthsDialog, targetMonth, clickMonthCallback, setMonthCallback, hideMonthsDialog) => lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <div
        class="calendar-container__month-container"
        ${(0,_utils_directives_clickOutside__WEBPACK_IMPORTED_MODULE_3__.clickOutside)(() => hideMonthsDialog())}
    >
        <div class="calendar-container__button" @click=${clickMonthCallback}>
            ${_constants__WEBPACK_IMPORTED_MODULE_5__.MONTHS[targetMonth]}
            <i>
                ${isShowingMonthsDialog
    ? _constants__WEBPACK_IMPORTED_MODULE_5__.SMALL_ARROW_UP_TEMPLATE
    : _constants__WEBPACK_IMPORTED_MODULE_5__.SMALL_ARROW_DOWN_TEMPLATE}
            </i>
        </div>
        ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_4__.isVisible)(isShowingMonthsDialog, getMonthsDialogTemplate(targetMonth, setMonthCallback))}
    </div>
`;
const getYearsContainerTemplate = (isShowingYearsDialog, targetYear, offsetByYear, addOffsetCallback, clickYearCallback, setYearCallback, hideYearsDialog) => lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <div
        class="calendar-container__year"
        ${(0,_utils_directives_clickOutside__WEBPACK_IMPORTED_MODULE_3__.clickOutside)(() => hideYearsDialog())}
    >
        <div class="calendar-container__button" @click=${clickYearCallback}>
            ${targetYear}
            <i>
                ${isShowingYearsDialog
    ? _constants__WEBPACK_IMPORTED_MODULE_5__.SMALL_ARROW_UP_TEMPLATE
    : _constants__WEBPACK_IMPORTED_MODULE_5__.SMALL_ARROW_DOWN_TEMPLATE}
            </i>
        </div>
        ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_4__.isVisible)(isShowingYearsDialog, getYearsDialogTemplate(targetYear, offsetByYear, addOffsetCallback, setYearCallback))}
    </div>
`;
const getCalendarCaptionTemplate = (isShowingMonthsDialog, isShowingYearsDialog, targetDate, offsetByYear, subMonthCallback, addMonthCallback, clickMonthCallback, clickYearCallback, addOffsetCallback, setYearCallback, setMonthCallback, hideMonthsDialog, hideYearsDialog) => {
    const targetMonth = targetDate.getMonth();
    const targetYear = targetDate.getFullYear();
    return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <div class="calendar-caption">
            <div class="calendar-container__button" @click=${subMonthCallback}>
                ${_constants__WEBPACK_IMPORTED_MODULE_5__.LEFT_ARROW_TEMPLATE}
            </div>
            <div class="calendar-container__dialogs-container head-5">
                ${getMonthsContainerTemplate(isShowingMonthsDialog, targetMonth, clickMonthCallback, setMonthCallback, hideMonthsDialog)}
                <span class="separator"></span>
                ${getYearsContainerTemplate(isShowingYearsDialog, targetYear, offsetByYear, addOffsetCallback, clickYearCallback, setYearCallback, hideYearsDialog)}
            </div>
            <div class="calendar-container__button" @click=${addMonthCallback}>
                ${_constants__WEBPACK_IMPORTED_MODULE_5__.RIGHT_ARROW_TEMPLATE}
            </div>
        </div>
    `;
};


/***/ }),

/***/ "./src/components/calendar/style.ts":
/*!******************************************!*\
  !*** ./src/components/calendar/style.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleTimePicker": () => (/* binding */ styleTimePicker),
/* harmony export */   "stylesCalendar": () => (/* binding */ stylesCalendar)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const stylesCalendar = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        .value {
            height: var(--space-32);
            width: var(--space-32);
        }

        .selectable {
            cursor: pointer;
            border-radius: var(--space-16);
        }

        .selectable:hover:not(.selected) {
            background-color: var(--grey-10);
        }

        .flex-centred {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .selected {
            background-color: var(--blue-120);
            color: var(--common-white);
        }

        .container {
            width: fit-content;
        }

        .dialog__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }

        .dialog__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            row-gap: var(--space-16);
            column-gap: var(--space-8);
        }

        .dialog__month {
            display: flex;
            width: calc(var(--space-20) * 4);
            height: var(--space-32);
        }

        .dialog__year {
            display: flex;
            width: calc(var(--space-32) * 2);
            height: var(--space-32);
        }

        .buttons-container {
            display: flex;
            gap: var(--space-8);
            padding: var(--space-12) var(--space-24);
        }

        .calendar-container {
            position: relative;
            padding: var(--space-20) var(--space-24);
            color: var(--grey-200);
        }

        .calendar-header {
            margin-top: var(--space-12);
            color: var(--grey-100);
        }

        .calendar-container__button {
            display: flex;
            align-items: center;
            gap: var(--space-4);
            cursor: pointer;
        }

        .calendar-container__button > i {
            display: flex;
        }

        .calendar-caption {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }

        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
        }

        .divider {
            width: 100%;
            height: calc(var(--space-4) / 4);
            background: var(--grey-10);
        }
        
        .block-divider {
            width: 100%;
            height: calc(var(--space-4) / 4);
            background: var(--grey-20);
        }

        .separator {
            width: calc(var(--space-4) / 4);
            background: var(--grey-20);
        }

        .calendar-container__dialogs-container {
            display: flex;
            gap: var(--space-8);
        }

        .day {
            border-radius: 50%;
        }

        .current-day {
            border: calc(var(--space-4) / 4) solid var(--grey-200);
        }

        .target-month:nth-child(7n-1).day:not(.selected),
        .target-month:nth-child(7n).day:not(.selected) {
            color: var(--grey-100);
        }

        .other-month:not(.selected) {
            color: var(--grey-60);
        }

        .year-action {
            display: flex;
            justify-content: space-between;
            padding-top: var(--space-16);
            gap: calc(var(--space-4) * 13);
        }

        .year-action__arrow {
            display: flex;
            height: 100%;
            cursor: pointer;
        }
    `,
];
const styleTimePicker = [_utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS, lit__WEBPACK_IMPORTED_MODULE_0__.css ``];


/***/ }),

/***/ "./src/components/calendar/time-picker.ts":
/*!************************************************!*\
  !*** ./src/components/calendar/time-picker.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimePicker": () => (/* binding */ TimePicker)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/constants */ "./src/components/calendar/config/constants.ts");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/input */ "./src/components/input/input.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/components/calendar/style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TimePicker = class TimePicker extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-input ?outline=${true}></tsc-input> `;
    }
};
TimePicker.styles = _style__WEBPACK_IMPORTED_MODULE_4__.styleTimePicker;
TimePicker = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_1__.customElementRegistry)(_config_constants__WEBPACK_IMPORTED_MODULE_2__.TIME_PICKER_TAG)
], TimePicker);



/***/ }),

/***/ "./src/components/checkbox/checkbox.ts":
/*!*********************************************!*\
  !*** ./src/components/checkbox/checkbox.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _base_checkbox_checkbox_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/checkbox/checkbox-base */ "./src/components/base/checkbox/checkbox-base.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/components/checkbox/style.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let Checkbox = class Checkbox extends _base_checkbox_checkbox_base__WEBPACK_IMPORTED_MODULE_2__.CheckboxBase {
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container">
                <label class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({ disabled: this.disabled })}>
                    <input .name=${this.name}
                           tabindex="1"
                           class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({ disabled: this.disabled })}
                           type="checkbox"
                           ?checked=${this.initCheckedState}
                           @change=${this.emitChangeEvent}
                           ?disabled=${this.disabled}
                           .value=${this.value}
                    />
                    ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__.isVisible)(!!this.text, lit__WEBPACK_IMPORTED_MODULE_0__.html `<span class="body-3">${this.text}</span>`)}
                </label>
            </div>
        `;
    }
};
Checkbox.styles = [_base_checkbox_checkbox_base__WEBPACK_IMPORTED_MODULE_2__.CheckboxBase.styles, _style__WEBPACK_IMPORTED_MODULE_5__.checkboxStyle];
Checkbox = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.Checkbox)
], Checkbox);



/***/ }),

/***/ "./src/components/checkbox/style.ts":
/*!******************************************!*\
  !*** ./src/components/checkbox/style.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkboxStyle": () => (/* binding */ checkboxStyle)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const checkboxStyle = lit__WEBPACK_IMPORTED_MODULE_0__.css `
  .container {
    position: relative;
  }

  input {
    width: calc(var(--base-size) * 4);
    height: calc(var(--base-size) * 4);
    --after-background: transparent;
    --before-border-color: var(--grey-80);
    --after-border-color: white;
    --label-color: var(--grey-200);
  }

  input::before {
    content: '';
    border-radius: calc(var(--border-radius-4) / 2);
    width: calc(var(--base-size) * 4);
    height: calc(var(--base-size) * 4);
    background-color: var(--before-background);
    box-sizing: border-box;
    position: absolute;
  }

  input::after {
    content: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIgNkw0Ljc1IDguNzVMMTAgMy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMiIvPgo8L3N2Zz4KCg==");
    background-color: transparent;
    position: absolute;
    left: calc(var(--base-size) / 2);
    top: calc(var(--base-size) / 2);
    width: calc(var(--base-size) * 3);
    height: calc(var(--base-size) * 3);
    box-sizing: border-box;
    border: none;
    border-radius: 0;
  }

  input::after,
  input::before {
    transition-duration: .25s;
    transition-property: background-color, border-color, box-shadow;
    transition-timing-function: ease;
  }

  input:not(:checked)::after {
    display: none;
  }

  input:not(:checked)::before {
    background-color: var(--before-background);
    border: calc(var(--base-size) / 2) solid var(--before-border-color);
  }

  input:checked {
    --box-shadow-color: var(--blue-50);
    --before-background: var(--blue-120);
    --after-background: transparent;
  }

  input:not(:checked) {
    --box-shadow-color: var(--grey-50);
    --before-background: white;
    --after-background: transparent;
    --before-border-color: var(--grey-80);
    --after-border-color: white;
  }

  input:not(:checked):hover {
    --before-border-color: var(--grey-60);
  }

  input:checked:hover {
    --before-background: var(--blue-100);
  }

  input.disabled:checked::before {
    --before-background: var(--blue-50);
  }

  input.disabled:not(:checked)::before {
    --before-background: white;
    --before-border-color: var(--grey-50);
  }
`;


/***/ }),

/***/ "./src/components/dropdown/config/constants.ts":
/*!*****************************************************!*\
  !*** ./src/components/dropdown/config/constants.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownEventName": () => (/* binding */ DropdownEventName),
/* harmony export */   "ITEM_LIMIT": () => (/* binding */ ITEM_LIMIT),
/* harmony export */   "testItems": () => (/* binding */ testItems)
/* harmony export */ });
const DropdownEventName = {
    selectedValue: 'selectedValue'
};
const ITEM_LIMIT = 50;
const testItems = new Array(200).fill(0).map((_e, index) => ({
    value: Math.random(),
    label: (index + 1).toString(),
    subtitle: 'some text',
    inn: 1,
    kpp: 12
}));


/***/ }),

/***/ "./src/components/dropdown/dropdown-list.ts":
/*!**************************************************!*\
  !*** ./src/components/dropdown/dropdown-list.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkbox/checkbox */ "./src/components/checkbox/checkbox.ts");
/* harmony import */ var _utils_components_scroll_scroll_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/components/scroll/scroll-container */ "./src/components/utils/components/scroll/scroll-container.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/constants */ "./src/components/dropdown/config/constants.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_9__.Selector.List;
let List = class List extends lit__WEBPACK_IMPORTED_MODULE_2__.LitElement {
    constructor() {
        super(...arguments);
        this._items = [];
        this.multiselect = false;
        this.itemLimit = _config_constants__WEBPACK_IMPORTED_MODULE_7__.ITEM_LIMIT;
        this.maxHeight = 'calc(var(--base-size) * 25)';
        this.extraLabelKeys = ['inn', 'kpp'];
        this._visibleItems = [];
        this.offset = 0;
    }
    set items(value) {
        console.log('get new items', value);
        const hasChanged = (value, oldValue) => {
            if (!oldValue)
                return true;
            return value.some(e => !oldValue.find(item => item.value === e.value));
        };
        const isChanged = hasChanged(value, this.items);
        console.log('isChanged: ', isChanged);
        if (hasChanged(value, this.items)) {
            this._items = value;
            this.offset = 0;
            this.visibleItems = [];
            this.getNextItems();
        }
    }
    get items() {
        return this._items;
    }
    set visibleItems(value) {
        const oldValue = this.visibleItems.slice();
        this._visibleItems = value;
        this.offset += value.length;
        this.requestUpdate('visibleItems', oldValue);
    }
    get visibleItems() {
        return this._visibleItems;
    }
    emitSelectedValue(value) {
        if (this.multiselect) {
            return;
        }
        else {
            const detail = { value };
            this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_6__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_7__.DropdownEventName.selectedValue, { detail }));
        }
    }
    getNextItems() {
        let newSliceItems = this.items.slice(this.offset, this.itemLimit + this.offset);
        if (newSliceItems.length === 0 && this.paginateFunction) {
            newSliceItems = this.paginateFunction();
        }
        this.visibleItems = [...this.visibleItems, ...newSliceItems];
    }
    changeSelected(item, checked) {
        const itemFind = this.visibleItems.find(e => e.value === item.value);
        if (itemFind) {
            itemFind.checked = checked;
        }
        const detail = { value: this.visibleItems.filter(e => e.checked) };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_6__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_7__.DropdownEventName.selectedValue, { detail }));
    }
    getListItemText(item) {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="list-item-text">
                <div class="body-2">${item.label}</div>
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_5__.isVisible)(!this.extraLabelKeys, lit__WEBPACK_IMPORTED_MODULE_2__.html `
                    <div class="subtitle-2 grey-100">${item.subtitle || ''}</div>`)}
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_5__.isVisible)(this.extraLabelKeys.length > 0, lit__WEBPACK_IMPORTED_MODULE_2__.html `
                            <div class="extra-label">
                                ${this.extraLabelKeys.filter(key => key in item).map(key => lit__WEBPACK_IMPORTED_MODULE_2__.html `
                                    <div><span class="subtitle-2 grey-100">${key}</span>:
                                        <span class="subtitle-2 grey-160">${item[key]}</span>
                                    </div>
                                `)}
                            </div>
                        `)}
            </div>
        `;
    }
    getListItem(item) {
        return this.multiselect ? lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <tsc-checkbox ?initCheckedState=${item.checked}
                          @change=${(e) => this.changeSelected(item, e.detail.checked)}>
                ${this.getListItemText(item)}
            </tsc-checkbox>
        ` : this.getListItemText(item);
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <tsc-scroll .maxHeight=${this.maxHeight} @scrollPaginate=${this.getNextItems}>
                <div class="list">
                    ${this.visibleItems.map(item => lit__WEBPACK_IMPORTED_MODULE_2__.html `
                                <div class="list-item" @click=${(e) => {
            e.stopPropagation();
            this.emitSelectedValue(item);
        }}>
                                    ${this.getListItem(item)}
                                </div>
                            `)}
                </div>
            </tsc-scroll>
        `;
    }
};
List.styles = [_utils_css_css_utils__WEBPACK_IMPORTED_MODULE_4__.baseCSS, lit__WEBPACK_IMPORTED_MODULE_2__.css `
      * {
        box-sizing: border-box;
      }

      .list {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .list-item {
        padding-left: var(--space-16);
        padding-top: var(--space-16);
        padding-bottom: var(--space-12);
        height: calc(var(--base-size) * 14);
        cursor: pointer;
        display: flex;
      }

      .list-item:hover {
        background: var(--grey-10);
      }

      .list-item-text {
        display: flex;
        flex-direction: column;
      }

      .body-2 {
        color: var(--grey-200);
      }

      .grey-100 {
        color: var(--grey-100);
      }

      .grey-160 {
        color: var(--grey-160);
      }

      .extra-label {
        display: flex;
        gap: var(--space-12);
      }
    `];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Boolean })
], List.prototype, "multiselect", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Number })
], List.prototype, "itemLimit", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], List.prototype, "maxHeight", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Array })
], List.prototype, "items", null);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Array })
], List.prototype, "extraLabelKeys", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Object })
], List.prototype, "paginateFunction", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.state)()
], List.prototype, "visibleItems", null);
List = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_8__.customElementRegistry)(tagName)
], List);



/***/ }),

/***/ "./src/components/dropdown/dropdown.ts":
/*!*********************************************!*\
  !*** ./src/components/dropdown/dropdown.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var _utils_components_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/components/divider */ "./src/components/utils/components/divider.ts");
/* harmony import */ var _dropdown_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-list */ "./src/components/dropdown/dropdown-list.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _base_input_input_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/input/input-base */ "./src/components/base/input/input-base.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/constants */ "./src/components/dropdown/config/constants.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./src/components/dropdown/style.ts");
/* harmony import */ var _base_input_config_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../base/input/config/types */ "./src/components/base/input/config/types.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _utils_other_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/other/icons */ "./src/components/utils/other/icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_11__.Selector.Dropdown;
let Dropdown = class Dropdown extends _base_input_input_base__WEBPACK_IMPORTED_MODULE_5__.InputBase {
    constructor() {
        super(...arguments);
        this.isListVisible = false;
        this._inputLabel = '';
        this.items = _config_constants__WEBPACK_IMPORTED_MODULE_8__.testItems;
        this.multiselect = false;
        this.readonlyInput = false;
    }
    set initValue(v) {
        if (this.items && this.items.length) {
            this._inputLabel = this.items.find((e) => e.value === v)?.label || '';
        }
    }
    get clearButtonHtml() {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="clear-button">
                <svg @click=${this.clearInputValue}
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.714 5.28601L10 10.0001M10 10.0001L5.28595 14.7141M10 10.0001L14.714 14.7141M10 10.0001L5.28595 5.28601"
                          stroke="#C0C8D0"
                          stroke-width="2" />
                </svg>
                <tsc-divider></tsc-divider>
            </div>
        `;
    }
    get arrowButtonHtml() {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            rotate: this.isListVisible,
            'dropdown-list-icon': true,
        })}>
                ${this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_10__.Size.XXS ? _utils_other_icons__WEBPACK_IMPORTED_MODULE_12__.smallArrowIcon : _utils_other_icons__WEBPACK_IMPORTED_MODULE_12__.arrowIcon}
            </div>
        `;
    }
    get listTemplate() {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class="dropdown-list">
                <tsc-list ?multiselect=${this.multiselect}
                          .items=${this.items}
                          @selectedValue=${this.emitSelectedValue}
                          .paginateFunction=${() => [{ label: 'new label', value: 'some value' }]}>
                </tsc-list>
            </div>
        `;
    }
    get additionalTextTemplate() {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            'subtitle-2': true,
            'additional-text': true,
            success: this.success,
            error: this.error,
        })}>
                ${this.additionalText}
            </div>
        `;
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('click', () => {
            this.isListVisible = false;
        });
    }
    clearInputValue() {
        if (this.input)
            this.input.value = '';
        this._inputLabel = '';
    }
    emitSelectedValue(v) {
        if (Array.isArray(v.detail.value)) {
            this._inputLabel = v.detail.value.map(e => e.label).join('; ');
            return;
        }
        else if (v.detail.value && 'value' in v.detail.value) {
            const eventValue = v.detail.value;
            this.isListVisible = false;
            this._inputLabel = this.items.find((e) => e.value === eventValue.value)?.label || '';
        }
        if (this.input) {
            this.input.value = this._inputLabel;
            this.changeValue();
        }
    }
    openList(e) {
        if (this.disabled) {
            return;
        }
        e.stopPropagation();
        this.isListVisible = !this.isListVisible;
        if (this.isListVisible) {
            setTimeout(() => {
                if (this.dropdownContainer) {
                    const dropdownRect = this.dropdownContainer.getBoundingClientRect();
                    if (this.dropdownList) {
                        this.dropdownList.style.top = `${dropdownRect.height}px`;
                        this.dropdownList.style.width = `${dropdownRect.width}px`;
                    }
                }
            });
        }
    }
    get inputTemplate() {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <input @focus="${this.focusInput}"
                   @blur="${this.blurInput}"
                   .name=${this.name}
                   @input=${this.editInput}
                   ?disabled=${this.disabled}
                   id="input"
                   class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            [this.classSettings[this.size].inputText]: true,
            outline: this.outline,
            success: this.success,
            error: this.error,
            'empty': !this.input?.value
        })}
                   .placeholder=${this.placeHolderVisible ? '' : this.placeholder}
                   .value=${this._inputLabel}
                   .readOnly=${this.readonlyInput}
            />
        `;
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_2__.html `
            <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            'input-container': true,
            'dropdown': true,
            [this.classSettings[this.size].className]: true,
            'disabled': this.disabled
        })}
                 @click=${this.openList}>
                <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            'input-wrapper': true,
            disabled: this.disabled,
            'read-only': this.readonlyInput
        })}">
                    ${this.placeHolderVisible && (this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_10__.Size.M || this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_10__.Size.L) ? lit__WEBPACK_IMPORTED_MODULE_2__.html `
                        <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            [this.classSettings[this.size].placeholder]: true,
            'input-placeholder': true
        })}">${this.placeholder}
                        </div>` : ''}
                    ${this.inputTemplate}
                    <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__.classMap)({
            'input-button': true,
            'input-button-xxs': this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_10__.Size.XXS
        })}" >
                        ${this.readonlyInput ? '' : this.clearButtonHtml}
                        ${this.arrowButtonHtml}
                    </div>

                </div>
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_6__.isVisible)(!!this.additionalText, this.additionalTextTemplate)}
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_6__.isVisible)(this.isListVisible, this.listTemplate)}
            </div>
        `;
    }
};
Dropdown.styles = [_base_input_input_base__WEBPACK_IMPORTED_MODULE_5__.InputBase.styles, _style__WEBPACK_IMPORTED_MODULE_9__.stylesBase];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.state)()
], Dropdown.prototype, "isListVisible", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.state)()
], Dropdown.prototype, "_inputLabel", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.query)('.dropdown')
], Dropdown.prototype, "dropdownContainer", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.query)('.dropdown-list')
], Dropdown.prototype, "dropdownList", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], Dropdown.prototype, "initValue", null);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Array })
], Dropdown.prototype, "items", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Boolean })
], Dropdown.prototype, "multiselect", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Boolean, attribute: 'read-only-input' })
], Dropdown.prototype, "readonlyInput", void 0);
Dropdown = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_7__.customElementRegistry)(tagName)
], Dropdown);



/***/ }),

/***/ "./src/components/dropdown/style.ts":
/*!******************************************!*\
  !*** ./src/components/dropdown/style.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesBase": () => (/* binding */ stylesBase)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const stylesBase = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
      .input-button {
        display: flex;
        grid-gap: calc(var(--base-size) * 3);
        margin-left: calc(var(--space-32) * -1);
      }

      .input-button-xxs {
        margin-left: calc(var(--space-24) * -1);
      }

      .clear-button {
        display: none;
        margin-left: 0;
        align-items: center;
        grid-gap: calc(var(--base-size) * 3);
      }

      #input:not(:disabled):not(:read-only):focus + .input-button,
      .input-wrapper:not(.disabled):not(.read-only):hover .input-button {
       margin-left: calc(var(--space-76) * -1 - var(--space-1));
      }

      #input:not(:disabled):focus + .input-button .clear-button,
      .input-wrapper:not(.disabled):hover .clear-button {
        display: flex !important;
      }

      #input:read-only {
        cursor: pointer;
      }

      .rotate {
        transform: rotate(180deg);
      }

      .dropdown {
        position: relative;
      }

      .dropdown-list-icon {
        transition: transform 0.5s;
        cursor: pointer;
        display: flex;
        align-items: center;
      }

      .dropdown-list {
        position: absolute;
        width: 100%;
        top: 3em;
        z-index: 100
      }
    `
];


/***/ }),

/***/ "./src/components/form-inputs/configs/constant.ts":
/*!********************************************************!*\
  !*** ./src/components/form-inputs/configs/constant.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRID_COLUMNS": () => (/* binding */ GRID_COLUMNS),
/* harmony export */   "GRID_ROWS": () => (/* binding */ GRID_ROWS),
/* harmony export */   "GRID_UNIT": () => (/* binding */ GRID_UNIT),
/* harmony export */   "formChangeEventName": () => (/* binding */ formChangeEventName)
/* harmony export */ });
const GRID_COLUMNS = '--grid-columns';
const GRID_ROWS = '--grid-rows';
const GRID_UNIT = '1fr';
const formChangeEventName = 'form-change';


/***/ }),

/***/ "./src/components/form-inputs/form-inputs.ts":
/*!***************************************************!*\
  !*** ./src/components/form-inputs/form-inputs.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputs": () => (/* binding */ FormInputs)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/input/config/types */ "./src/components/base/input/config/types.ts");
/* harmony import */ var _input_calendar_configs_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input-calendar/configs/constants */ "./src/components/input-calendar/configs/constants.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_other_field_type_guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/other/field-type-guards */ "./src/components/utils/other/field-type-guards.ts");
/* harmony import */ var _configs_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configs/constant */ "./src/components/form-inputs/configs/constant.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./src/components/form-inputs/style.ts");
/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dropdown/dropdown */ "./src/components/dropdown/dropdown.ts");
/* harmony import */ var _input_calendar_input_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../input-calendar/input-calendar */ "./src/components/input-calendar/input-calendar.ts");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../input/input */ "./src/components/input/input.ts");
/* harmony import */ var _switch_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../switch/switch */ "./src/components/switch/switch.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_3__.Selector.FormInputs;
let FormInputs = class FormInputs extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.formFields = [];
        this.gridStyle = {};
        this.formValue = {};
    }
    set columns(count) {
        this.gridStyle = {
            ...this.gridStyle,
            [_configs_constant__WEBPACK_IMPORTED_MODULE_8__.GRID_COLUMNS]: (_configs_constant__WEBPACK_IMPORTED_MODULE_8__.GRID_UNIT + ' ').repeat(count),
        };
    }
    set columnsTmplate(template) {
        if (template) {
            this.gridStyle = { ...this.gridStyle, [_configs_constant__WEBPACK_IMPORTED_MODULE_8__.GRID_COLUMNS]: template };
        }
    }
    set rowsTmplate(template) {
        if (template) {
            this.gridStyle = { ...this.gridStyle, [_configs_constant__WEBPACK_IMPORTED_MODULE_8__.GRID_ROWS]: template };
        }
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container" style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.styleMap)(this.gridStyle)}>
                ${this.formFields.map((field) => this.getFieldTemplate(field))}
            </div>
        `;
    }
    getFieldTemplate(field) {
        if ((0,_utils_other_field_type_guards__WEBPACK_IMPORTED_MODULE_7__.isInput)(field)) {
            return this.getInputTemplate(field);
        }
        else if ((0,_utils_other_field_type_guards__WEBPACK_IMPORTED_MODULE_7__.isCalendar)(field)) {
            return this.getCalendarTemplate(field);
        }
        else if ((0,_utils_other_field_type_guards__WEBPACK_IMPORTED_MODULE_7__.isDropdown)(field)) {
            return this.getDropdownTemplate(field);
        }
        else if ((0,_utils_other_field_type_guards__WEBPACK_IMPORTED_MODULE_7__.isBoolean)(field)) {
            return this.getBooleanTemplate(field);
        }
        return lit__WEBPACK_IMPORTED_MODULE_0__.html ``;
    }
    getInputTemplate(inputField) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-input
                ?outline=${inputField.outline}
                ?error=${inputField.error}
                ?success=${inputField.success}
                .additionalText=${inputField.additionalText || ''}
                .placeholder=${inputField.placeholder || ''}
                .size=${inputField.size || _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.M}
                .value=${inputField.value || ''}
                .mask=${inputField.mask || ''}
                .maskSlot=${inputField.maskSlot || ''}
                @input-change=${(event) => this.formChange(inputField.itemProperty, event.detail.value)}
            ></tsc-input>
        `;
    }
    getCalendarTemplate(calendarField) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-input-calendar
                ?outline=${calendarField.outline}
                .dateFormat=${calendarField.dateFormat || _input_calendar_configs_constants__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_FORMAT}
                .placeholder=${calendarField.placeholder || ''}
                .selectedDate=${calendarField.selectedDate
            ? new Date(calendarField.selectedDate)
            : undefined}
                @input-change=${(event) => this.formChange(calendarField.itemProperty, event.detail.value)}
            ></tsc-input-calendar>
        `;
    }
    getDropdownTemplate(dropdownField) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-dropdown
                ?outline=${dropdownField.outline}
                ?error=${dropdownField.error}
                ?success=${dropdownField.success}
                .additionalText=${dropdownField.additionalText || ''}
                .placeholder=${dropdownField.placeholder || ''}
                .size=${dropdownField.size || _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.M}
                .items=${dropdownField.listOptions || []}
                .initValue=${dropdownField.listInitOption}
                @input-change=${(event) => this.formChange(dropdownField.itemProperty, event.detail.value)}
            ></tsc-dropdown>
        `;
    }
    getBooleanTemplate(booleanField) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-switch
                .text=${booleanField.label}
                .initCheckedState=${booleanField.initialSatate}
                ?disabled=${booleanField.disabled}
                @change=${(event) => this.formChange(booleanField.itemProperty, event.detail.value)}
            ></tsc-switch>
        `;
    }
    formChange(property, value) {
        this.formValue = { ...this.formValue, ...{ [property]: value } };
        const detail = { value: this.formValue };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_14__.createEvent)(_configs_constant__WEBPACK_IMPORTED_MODULE_8__.formChangeEventName, { detail }));
    }
};
FormInputs.styles = _style__WEBPACK_IMPORTED_MODULE_9__.stylesFormInputs;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], FormInputs.prototype, "formFields", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
], FormInputs.prototype, "columns", null);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: 'columns-template' })
], FormInputs.prototype, "columnsTmplate", null);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: 'rows-template' })
], FormInputs.prototype, "rowsTmplate", null);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], FormInputs.prototype, "gridStyle", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], FormInputs.prototype, "formValue", void 0);
FormInputs = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_6__.customElementRegistry)(tagName)
], FormInputs);



/***/ }),

/***/ "./src/components/form-inputs/style.ts":
/*!*********************************************!*\
  !*** ./src/components/form-inputs/style.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesFormInputs": () => (/* binding */ stylesFormInputs)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");
/* harmony import */ var _configs_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs/constant */ "./src/components/form-inputs/configs/constant.ts");



const stylesFormInputs = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        .container {
            ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_configs_constant__WEBPACK_IMPORTED_MODULE_2__.GRID_COLUMNS)}: auto;
            ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_configs_constant__WEBPACK_IMPORTED_MODULE_2__.GRID_ROWS)}: auto;
            display: grid;
            grid-template-columns: var(${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_configs_constant__WEBPACK_IMPORTED_MODULE_2__.GRID_COLUMNS)});
            grid-template-rows: var(${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(_configs_constant__WEBPACK_IMPORTED_MODULE_2__.GRID_ROWS)});
            align-items: center;
        }
    `,
];


/***/ }),

/***/ "./src/components/input-calendar/configs/constants.ts":
/*!************************************************************!*\
  !*** ./src/components/input-calendar/configs/constants.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CALENDAR_DATE_PLACEHOLDER": () => (/* binding */ CALENDAR_DATE_PLACEHOLDER),
/* harmony export */   "DEFAULT_FORMAT": () => (/* binding */ DEFAULT_FORMAT),
/* harmony export */   "PLASEHOLDERS": () => (/* binding */ PLASEHOLDERS),
/* harmony export */   "TAG_NAME": () => (/* binding */ TAG_NAME)
/* harmony export */ });
const TAG_NAME = 'tsc-input-calendar';
const CALENDAR_DATE_PLACEHOLDER = {
    hours: 'hh',
    minutes: 'mm',
    seconds: 'ss',
    days: 'DD',
    months: 'MM',
    fullYears: 'YYYY',
    shortYears: 'YY'
};
const DEFAULT_FORMAT = `${CALENDAR_DATE_PLACEHOLDER.days}.${CALENDAR_DATE_PLACEHOLDER.months}.${CALENDAR_DATE_PLACEHOLDER.fullYears}`;
const PLASEHOLDERS = Object.values(CALENDAR_DATE_PLACEHOLDER).join('');


/***/ }),

/***/ "./src/components/input-calendar/configs/utils.ts":
/*!********************************************************!*\
  !*** ./src/components/input-calendar/configs/utils.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/components/input-calendar/configs/constants.ts");

const formatDate = (date, format) => {
    if (date === undefined) {
        return '';
    }
    let result = format;
    const numberLength = 2;
    const filler = '0';
    result = result.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_DATE_PLACEHOLDER.days, String(date.getDate()).padStart(numberLength, filler));
    result = result.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_DATE_PLACEHOLDER.months, String(date.getMonth() + 1).padStart(numberLength, filler));
    result = result.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_DATE_PLACEHOLDER.fullYears, String(date.getFullYear()));
    result = result.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_DATE_PLACEHOLDER.shortYears, String(date.getFullYear() % 100).padStart(numberLength, filler));
    result = result.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_DATE_PLACEHOLDER.hours, String(date.getHours()).padStart(numberLength, filler));
    result = result.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_DATE_PLACEHOLDER.minutes, String(date.getMinutes()).padStart(numberLength, filler));
    result = result.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.CALENDAR_DATE_PLACEHOLDER.seconds, String(date.getSeconds()).padStart(numberLength, filler));
    return result;
};


/***/ }),

/***/ "./src/components/input-calendar/input-calendar.ts":
/*!*********************************************************!*\
  !*** ./src/components/input-calendar/input-calendar.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputCalendar": () => (/* binding */ InputCalendar)
/* harmony export */ });
/* harmony import */ var _utils_other_property_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/other/property-type */ "./src/components/utils/other/property-type.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lodash_clone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/clone.js */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_clone_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _configs_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/constants */ "./src/components/input-calendar/configs/constants.ts");
/* harmony import */ var _configs_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configs/utils */ "./src/components/input-calendar/configs/utils.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./src/components/input-calendar/style.ts");
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../calendar/calendar */ "./src/components/calendar/calendar.ts");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../input/input */ "./src/components/input/input.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let InputCalendar = class InputCalendar extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        this.dateFormat = _configs_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_FORMAT;
        this.placeholder = '';
        this.outline = false;
        this.isShowCalendar = false;
        this.outsideCallback = (event) => this.onClickOutsideCalendar(event);
    }
    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener('click', (event) => {
            event.stopPropagation();
            const ev = new Event('click', {
                ...event,
                bubbles: false
            });
            this.dispatchEvent(ev);
        });
        return root;
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', this.outsideCallback);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.outsideCallback);
        super.disconnectedCallback();
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <div class="container">
                <tsc-input
                    @click=${this.onInputClick}
                    @keypress=${this.onKeyPress}
                    @input-clear=${this.onClear}
                    .placeholder=${this.placeholder}
                    .outline=${this.outline}
                    .value=${(0,_configs_utils__WEBPACK_IMPORTED_MODULE_7__.formatDate)(this.selectedDate, this.dateFormat)}
                    .mask=${this.dateFormat}
                    .maskSlot=${_configs_constants__WEBPACK_IMPORTED_MODULE_6__.PLASEHOLDERS}
                ></tsc-input>
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_5__.isVisible)(this.isShowCalendar, this.getCalendarTemplate())}
            </div>
        `;
    }
    onKeyPress(event) {
        const { key } = event;
        if (isNaN(parseInt(key))) {
            event.preventDefault();
        }
    }
    onClear() {
        this.selectedDate = undefined;
    }
    getCalendarTemplate() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <tsc-calendar
                class="calendar"
                .selectedDate=${this.selectedDate}
                @select=${this.selectDate}
                @cancel=${this.cancelSelectedDate}
                @apply=${this.applyDate}
            ></tsc-calendar>
        `;
    }
    applyDate() {
        this.previousDate = lodash_clone_js__WEBPACK_IMPORTED_MODULE_3___default()(this.selectedDate);
        this.isShowCalendar = false;
    }
    selectDate(event) {
        this.selectedDate = lodash_clone_js__WEBPACK_IMPORTED_MODULE_3___default()(event.detail.value) || undefined;
    }
    cancelSelectedDate() {
        this.selectedDate = lodash_clone_js__WEBPACK_IMPORTED_MODULE_3___default()(this.previousDate);
        this.isShowCalendar = false;
    }
    onInputClick() {
        this.isShowCalendar = !this.isShowCalendar;
        if (this.isShowCalendar) {
            this.previousDate = lodash_clone_js__WEBPACK_IMPORTED_MODULE_3___default()(this.selectedDate);
        }
    }
    onClickOutsideCalendar(event) {
        if (!this.calendarElement?.contains(event.target) &&
            this.isShowCalendar) {
            this.isShowCalendar = false;
            this.selectedDate = this.previousDate;
        }
    }
};
InputCalendar.styles = _style__WEBPACK_IMPORTED_MODULE_8__.inputCalendarStyles;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ attribute: 'date-format' })
], InputCalendar.prototype, "dateFormat", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({
        attribute: 'selected-date',
        ..._utils_other_property_type__WEBPACK_IMPORTED_MODULE_0__.PROPERTY_TYPES.date
    })
], InputCalendar.prototype, "selectedDate", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)()
], InputCalendar.prototype, "placeholder", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Boolean })
], InputCalendar.prototype, "outline", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)()
], InputCalendar.prototype, "isShowCalendar", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)()
], InputCalendar.prototype, "previousDate", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.query)('tsc-calendar')
], InputCalendar.prototype, "calendarElement", void 0);
InputCalendar = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__.customElementRegistry)(_configs_constants__WEBPACK_IMPORTED_MODULE_6__.TAG_NAME)
], InputCalendar);



/***/ }),

/***/ "./src/components/input-calendar/style.ts":
/*!************************************************!*\
  !*** ./src/components/input-calendar/style.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputCalendarStyles": () => (/* binding */ inputCalendarStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const inputCalendarStyles = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        .container {
            position: relative;
        }

        .calendar {
            position: absolute;
            left: 0;
            top: 100% + var(--space-10);
            z-index: 1000;
        }
    `
];


/***/ }),

/***/ "./src/components/input-number/input-number.ts":
/*!*****************************************************!*\
  !*** ./src/components/input-number/input-number.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputNumber": () => (/* binding */ InputNumber)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/input/config/types */ "./src/components/base/input/config/types.ts");
/* harmony import */ var _base_input_input_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/input/input-base */ "./src/components/base/input/input-base.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_other_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/other/icons */ "./src/components/utils/other/icons.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./src/components/input-number/style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let InputNumber = class InputNumber extends _base_input_input_base__WEBPACK_IMPORTED_MODULE_5__.InputBase {
    constructor() {
        super(...arguments);
        this.step = '1';
        this.min = '1';
        this.max = '1';
    }
    get clearButton() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="clear-button"
                 @click=${this.clearInputValue}>
                ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_8__.clearIcon}
            </div>
        `;
    }
    get inputTemplate() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <input @focus="${this.focusInput}"
                @blur="${this.blurInput}"
                .name=${this.name}
                @input=${this.editInput}
                @change=${this.changeValue}
                ?disabled=${this.disabled}
                type="number"
                .step=${this.step}
                .min=${this.min}
                .max=${this.max}
                id="input"
                class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
            [this.classSettings[this.size].inputText]: true,
            outline: this.outline,
            success: this.success,
            error: this.error,
            'empty': !this.input?.value
        })}
                .placeholder=${this.placeHolderVisible ? '' : this.placeholder}
                .value=${this.value}
        />
        `;
    }
    editInput() {
        const inputValue = this.input?.value || '';
        if (this.input && ((Number(inputValue) > Number(this.max)) || (Number(inputValue) < Number(this.min))) && inputValue !== '') {
            this.input.value = this.value;
            return;
        }
        super.editInput();
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
            'input-container': true,
            [this.classSettings[this.size].className]: true,
            'disabled': this.disabled
        })}>
                <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
            'input-wrapper': true,
            disabled: this.disabled
        })}">
                ${this.placeHolderVisible && (this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.M || this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.L) ? lit__WEBPACK_IMPORTED_MODULE_0__.html `
                <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
            [this.classSettings[this.size].placeholder]: true,
            'input-placeholder': true
        })}">${this.placeholder}
                </div>` : ''}
                ${this.inputTemplate}
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_6__.isVisible)(this.clearButtonExist && this.clearButtonVisible, this.clearButton)}
                </div>
                <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
            'subtitle-2': this.size !== _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.L,
            'body-3': this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.L,
            'additional-text': true,
            success: this.success,
            error: this.error
        })}>
                    ${this.additionalText}
                </div>
            </div>
        `;
    }
};
InputNumber.styles = _style__WEBPACK_IMPORTED_MODULE_9__.inputNumberStyles;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], InputNumber.prototype, "step", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], InputNumber.prototype, "min", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], InputNumber.prototype, "max", void 0);
InputNumber = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_7__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_3__.Selector.InputNumber)
], InputNumber);



/***/ }),

/***/ "./src/components/input-number/style.ts":
/*!**********************************************!*\
  !*** ./src/components/input-number/style.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputNumberStyles": () => (/* binding */ inputNumberStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _base_input_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/input/style */ "./src/components/base/input/style.ts");


const inputNumberStyles = [
    _base_input_style__WEBPACK_IMPORTED_MODULE_1__.stylesBase,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        .xs-input #input {
            padding: var(--space-6) var(--space-6);
            text-align: center;
        }

        #input::-webkit-outer-spin-button,
        #input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        #input[type=number] {
            -moz-appearance: textfield;
        }
    `
];


/***/ }),

/***/ "./src/components/input/input.ts":
/*!***************************************!*\
  !*** ./src/components/input/input.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/input/config/types */ "./src/components/base/input/config/types.ts");
/* harmony import */ var _base_input_input_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/input/input-base */ "./src/components/base/input/input-base.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_3__.Selector.Input;
let Input = class Input extends _base_input_input_base__WEBPACK_IMPORTED_MODULE_5__.InputBase {
    get clearButton() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="clear-button"
                 @click=${this.clearInputValue}
                 style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.styleMap)({
            display: this.clearButtonVisible ? 'flex' : 'none',
        })}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.714 1.28595L6 6M6 6L1.28595 10.714M6 6L10.714 10.714M6 6L1.28595 1.28595"
                          stroke="#C0C8D0" stroke-width="2"/>
                </svg>
            </div>
        `;
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
            'input-container': true,
            [this.classSettings[this.size].className]: true,
            'disabled': this.disabled
        })}>
                <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
            'input-wrapper': true,
            disabled: this.disabled
        })}">
                    ${this.placeHolderVisible && (this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.M || this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.L) ? lit__WEBPACK_IMPORTED_MODULE_0__.html `
                        <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
            [this.classSettings[this.size].placeholder]: true,
            'input-placeholder': true
        })}">${this.placeholder}
                        </div>` : ''}
                    <input @focus="${this.focusInput}"
                           @blur="${this.blurInput}"
                           .name=${this.name}
                           @input=${this.editInput}
                           @change=${this.changeValue}
                           ?disabled=${this.disabled}
                           id="input"
                           class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
            [this.classSettings[this.size].inputText]: true,
            outline: this.outline,
            success: this.success,
            error: this.error,
            'empty': !this.input?.value
        })}
                           .placeholder=${this.placeHolderVisible ? '' : this.placeholder}
                           .value=${this.value}
                    />
                    ${this.clearButton}
                </div>
                <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({
            'subtitle-2': this.size !== _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.L,
            'body-3': this.size === _base_input_config_types__WEBPACK_IMPORTED_MODULE_4__.Size.L,
            'additional-text': true,
            success: this.success,
            error: this.error
        })}>
                    ${this.additionalText}
                </div>
            </div>
        `;
    }
};
Input = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_6__.customElementRegistry)(tagName)
], Input);



/***/ }),

/***/ "./src/components/message/config/constants.ts":
/*!****************************************************!*\
  !*** ./src/components/message/config/constants.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemsChangeEventName": () => (/* binding */ itemsChangeEventName)
/* harmony export */ });
const itemsChangeEventName = 'items-change';


/***/ }),

/***/ "./src/components/message/message.ts":
/*!*******************************************!*\
  !*** ./src/components/message/message.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _lit_reactive_element_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators.js */ "./node_modules/@lit/reactive-element/development/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/components/message/style.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/constants */ "./src/components/message/config/constants.ts");
/* harmony import */ var _utils_other_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/other/icons */ "./src/components/utils/other/icons.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let Message = class Message extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.closeButtonVisible = true;
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            ${this.items.map((item, index) => this.createMessageContainerTemplate(item, index))}
        `;
    }
    createMessageContainerTemplate(message, index) {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__.classMap)({ 'message-container': true, [message.type]: true })}>
                <div class="highlighting"></div>
                <div class="details-conteiner">
                    <div class="message-text head-5">${message.text}</div>
                     ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_0__.isVisible)(this.closeButtonVisible, this.getCloseButton(index))}
                </div>
            </div>
        `;
    }
    getCloseButton(index) {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <div class="close-button" @click=${() => this.closeButtonClick(index)}>
                ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_9__.closeIcon}
            </div>
        `;
    }
    closeButtonClick(msgIndex) {
        this.items = this.items.filter((_, index) => index !== msgIndex);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        const detail = { items: this.items };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_7__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_8__.itemsChangeEventName, { detail }));
    }
};
Message.styles = _style__WEBPACK_IMPORTED_MODULE_6__.messageStyles;
__decorate([
    (0,_lit_reactive_element_decorators_js__WEBPACK_IMPORTED_MODULE_4__.property)({ type: Array })
], Message.prototype, "items", void 0);
__decorate([
    (0,_lit_reactive_element_decorators_js__WEBPACK_IMPORTED_MODULE_4__.property)({ type: Boolean })
], Message.prototype, "closeButtonVisible", void 0);
Message = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_2__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_3__.Selector.Message)
], Message);



/***/ }),

/***/ "./src/components/message/style.ts":
/*!*****************************************!*\
  !*** ./src/components/message/style.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageStyles": () => (/* binding */ messageStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const messageStyles = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        .message-container {
            display: flex;
            align-items: stretch;
            padding: var(--space-4);
            width: calc(var(--space-152) * 4);
            border-width: var(--space-1);
            border-radius: calc(var(--border-radius-4) / 2);
        }

        .message-container:not(:last-child) {
            margin-bottom: var(--space-20);
        }

        .highlighting {
            border-style: solid;
            width: var(--space-4);
            border-radius: var(--border-radius-4);
        }

        .details-conteiner {
            flex: 2;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-8);
        }

        .close-button {
            cursor: pointer;
        }

        .success {
            background-color: var(--green-20);
            color: var(--green-140);
        }

        .success svg {
            stroke: var(--green-140);
        }

        .warning {
            background-color: var(--yellow-20);
            color: var(--yellow-180);
        }

        .warning svg {
            stroke: var(--yellow-180);
        }

        .error {
            background-color: var(--red-20);
            color: var(--red-140);
        }

        .error svg {
            stroke: var(--red-140);
        }
    `
];


/***/ }),

/***/ "./src/components/modal-form/config/consts.ts":
/*!****************************************************!*\
  !*** ./src/components/modal-form/config/consts.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_FORM_CONFIG": () => (/* binding */ DEFAULT_FORM_CONFIG)
/* harmony export */ });
const DEFAULT_FORM_CONFIG = { groups: [] };


/***/ }),

/***/ "./src/components/modal-form/modal-form.ts":
/*!*************************************************!*\
  !*** ./src/components/modal-form/modal-form.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalForm": () => (/* binding */ ModalForm)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.ts");
/* harmony import */ var _config_consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/consts */ "./src/components/modal-form/config/consts.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _form_inputs_configs_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-inputs/configs/constant */ "./src/components/form-inputs/configs/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_1__.Selector.ModalForm;
let ModalForm = class ModalForm extends _modal_modal__WEBPACK_IMPORTED_MODULE_4__.Modal {
    constructor() {
        super(...arguments);
        this.formConfig = _config_consts__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_FORM_CONFIG;
    }
    get form() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-form
                .config=${this.formConfig}
                @form-change=${(event) => { event.stopImmediatePropagation(); this.formChange(event.detail); }}
            ></tsc-form>
        `;
    }
    willUpdate(changedProperties) {
        if (this.config && changedProperties.has('open') && this.formConfig && this.open) {
            this.config.body = this.form;
        }
    }
    formChange(detail) {
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_6__.createEvent)(_form_inputs_configs_constant__WEBPACK_IMPORTED_MODULE_7__.formChangeEventName, { detail }));
    }
};
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)()
], ModalForm.prototype, "formConfig", void 0);
ModalForm = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_2__.customElementRegistry)(tagName)
], ModalForm);



/***/ }),

/***/ "./src/components/modal/modal.ts":
/*!***************************************!*\
  !*** ./src/components/modal/modal.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/components/modal/style.ts");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _utils_other_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/other/icons */ "./src/components/utils/other/icons.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_3__.Selector.Modal;
let Modal = class Modal extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    get closeButton() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <div class="close-button"
                @click=${this.close}>
                ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_7__.closeIcon}
            </div>
        `;
    }
    get modalHeader() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <div class="modal-header">
                <div class="head-3">${this.config?.header.text}</div>
                ${this.closeButton}
            </div>
        `;
    }
    get modalFooter() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            ${this.config?.footer.buttons.map(button => lit__WEBPACK_IMPORTED_MODULE_1__.html `
                <tsc-button .id=${button.id} class="footer-button"
                    .disabled=${button.disabled}
                    @click=${() => this.handleClick(button.id)}
                    text=${button.label}
                    .styleType=${button.style}
                    .size=${button.size}>
                </tsc-button>
            `)}
        `;
    }
    render() {
        if (!this.config) {
            return lit__WEBPACK_IMPORTED_MODULE_1__.html ``;
        }
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_6__.classMap)({ 'overlay': true, open: this.open })}" @click="${this.close}"></div>
            <div class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_6__.classMap)({ 'modal-container': true, open: this.open })}">
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_0__.isVisible)(this.config.header.show, this.modalHeader)}
                <div class="modal-body">
                    ${this.config.body}
                </div>
                <div class="modal-footer">
                    ${this.modalFooter}
                </div>
            </div>
        `;
    }
    close() {
        this.open = false;
    }
    handleClick(buttonId) {
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_8__.createEvent)(`${buttonId}-button-click`));
    }
};
Modal.styles = _style__WEBPACK_IMPORTED_MODULE_5__.modalStyles;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)()
], Modal.prototype, "config", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Boolean })
], Modal.prototype, "open", void 0);
Modal = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__.customElementRegistry)(tagName)
], Modal);



/***/ }),

/***/ "./src/components/modal/style.ts":
/*!***************************************!*\
  !*** ./src/components/modal/style.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalStyles": () => (/* binding */ modalStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const modalStyles = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }

        .overlay:not(.open),
        .modal-container:not(.open) {
            display: none;
        }

        .modal-container.open {
            z-index: 10000;
            position: fixed;
            display: block;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: var(--common-white);
            border-radius: var(--space-6);
            min-width: calc(var(--space-40) * 20);
        }

        .overlay.open {
            background: var(--grey-200);
            opacity: 20%;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
        }

        .close-button {
            cursor: pointer;
        }

        .close-button svg {
            stroke: var(--grey-100);
        }

        .modal-header {
            background: var(--grey-10);
            padding: var(--space-24) var(--space-24) var(--space-20);
            border-radius: var(--space-6) var(--space-6) 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-body {
            padding: var(--space-20) var(--space-24) var(--space-24);
        }

        .modal-footer {
            padding-bottom: var(--space-24);
            padding: 0 var(--space-24) var(--space-24);
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .footer-button {
            margin-left: var(--space-12);
        }
    `
];


/***/ }),

/***/ "./src/components/paginator/config/constants.ts":
/*!******************************************************!*\
  !*** ./src/components/paginator/config/constants.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROWS_PER_PAGE_OPTIONS": () => (/* binding */ ROWS_PER_PAGE_OPTIONS),
/* harmony export */   "pageChangeEventName": () => (/* binding */ pageChangeEventName)
/* harmony export */ });
const ROWS_PER_PAGE_OPTIONS = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
];
const pageChangeEventName = 'page-change';


/***/ }),

/***/ "./src/components/paginator/paginator.ts":
/*!***********************************************!*\
  !*** ./src/components/paginator/paginator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paginator": () => (/* binding */ Paginator)
/* harmony export */ });
/* harmony import */ var _utils_other_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/other/icons */ "./src/components/utils/other/icons.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _button_config_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/config/constants */ "./src/components/button/config/constants.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/constants */ "./src/components/paginator/config/constants.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./src/components/paginator/style.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let Paginator = class Paginator extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
    constructor() {
        super(...arguments);
        this.totalRecords = 0;
        this.rows = 5;
        this.first = 0;
        this.rowsPerPageOptions = _config_constants__WEBPACK_IMPORTED_MODULE_8__.ROWS_PER_PAGE_OPTIONS;
        this._currentPage = 1;
        this._pageCount = 0;
    }
    get pageInputTemplate() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <tsc-input-number
                class="selected-page-input"
                .value=${this._currentPage.toString()}
                .size=${_button_config_constants__WEBPACK_IMPORTED_MODULE_5__.Size.XS}
                .clearButtonExist=${false}
                .min=${'1'}
                .max=${this._pageCount.toString()}
                ?outline=${true}
                @input-change=${(event) => this.changePage(event.detail.value)}
                >
            </tsc-input-number>
        `;
    }
    get rowsDropdownTemplate() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <tsc-dropdown
                id="dropdown"
                .items=${this.rowsPerPageOptions}
                .initValue=${this.rows}
                .size=${_button_config_constants__WEBPACK_IMPORTED_MODULE_5__.Size.XXS}
                .readonlyInput=${true}
                ?outline=${true}
                @input-change=${(rowsCount) => this.rowsCountChange(rowsCount)}>
            </tsc-dropdown>
        `;
    }
    willUpdate(changedProperties) {
        if (changedProperties.has('totalRecords') || changedProperties.has('rows')) {
            this.updatePaginatorState();
        }
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_1__.html `
            <div class="paginator-container">
                <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.classMap)({ disabled: this._currentPage === 1, 'nav-button': true })} @click=${() => this.changePage(1)}>
                    ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_0__.leftDoubleArrowIcon}
                </div>
                <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.classMap)({ disabled: this._currentPage === 1, 'nav-button': true })} @click=${() => this.changePage(this._currentPage - 1)}>
                    ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_0__.leftArrowIcon}
                </div>
                <div class="pages-container">
                    ${this.pageInputTemplate}
                    <!-- TODO: localization -->
                    <span class="selected-page-of">из</span>
                    <span class="body-3">${this._pageCount}</span>
                </div>
                <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.classMap)({ disabled: this._currentPage === this._pageCount, 'nav-button': true })} @click=${() => this.changePage(this._currentPage + 1)}>
                    ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_0__.rightArrowIcon}
                </div>
                <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_3__.classMap)({ disabled: this._currentPage === this._pageCount, 'nav-button': true })} @click=${() => this.changePage(this._pageCount)}>
                    ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_0__.rightDoubleArrowIcon}
                </div>
                ${this.rowsDropdownTemplate}
            </div>
        `;
    }
    getPageCount() {
        return Math.ceil(this.totalRecords / this.rows);
    }
    getCurrentPage() {
        return Math.ceil(this.first / this.rows) || 1;
    }
    getFirstRow() {
        return (this._currentPage - 1) * this.rows;
    }
    rowsCountChange(rows) {
        this.rows = Number(rows.detail.value);
        this.updatePaginatorState();
        this.emitChangePage();
    }
    updatePaginatorState() {
        this._pageCount = this.getPageCount();
        this._currentPage = this.getCurrentPage();
        this.first = this.getFirstRow();
    }
    changePage(page) {
        this._currentPage = page;
        this.first = this.getFirstRow();
        this.emitChangePage();
    }
    emitChangePage() {
        const detail = { page: this._currentPage, rows: this.rows, first: this.first };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_7__.createEvent)(_config_constants__WEBPACK_IMPORTED_MODULE_8__.pageChangeEventName, { detail }));
    }
};
Paginator.styles = _style__WEBPACK_IMPORTED_MODULE_9__.paginatorStyles;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Number, attribute: 'total-records' })
], Paginator.prototype, "totalRecords", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Number })
], Paginator.prototype, "rows", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Number })
], Paginator.prototype, "first", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.property)({ type: Array })
], Paginator.prototype, "rowsPerPageOptions", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)()
], Paginator.prototype, "_currentPage", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.state)()
], Paginator.prototype, "_pageCount", void 0);
Paginator = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_6__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_4__.Selector.Paginator)
], Paginator);



/***/ }),

/***/ "./src/components/paginator/style.ts":
/*!*******************************************!*\
  !*** ./src/components/paginator/style.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paginatorStyles": () => (/* binding */ paginatorStyles)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const paginatorStyles = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        .paginator-container {
            display: flex;
            align-items: center;
        }

        .nav-button {
            cursor: pointer;
            width: var(--space-32);
            height: var(--space-32);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .nav-button:hover {
            background-color: var(--grey-10);
        }

        .pages-container {
            display: flex;
            align-items: baseline;
            margin: var(--space-14);
        }

        .page-count-bar span {
            color: var(--grey-80);
        }

        .selected-page-input {
            width: var(--space-40);
            height: var(--space-32);
        }

        .selected-page-of {
            color: var(--grey-80);
            margin: var(--space-8);
        }

        .disabled {
            pointer-events: none;
        }

        #dropdown {
            height: var(--space-32);
            width: calc(var(--space-18) * 3);
            margin-left: var(--space-14);
        }
    `
];


/***/ }),

/***/ "./src/components/progress-bar/progress-bar.ts":
/*!*****************************************************!*\
  !*** ./src/components/progress-bar/progress-bar.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBar": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ProgressBar = class ProgressBar extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.isDisplay = true;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        return (0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_2__.isVisible)(this.isDisplay, lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container">
                <div class="progress"></div>
            </div>
        `);
    }
};
ProgressBar.styles = lit__WEBPACK_IMPORTED_MODULE_0__.css `
      .container {
        height: var(--base-size);
        background: var(--blue-40);
        width: 100%;
        position: relative;
      }

      .progress {
        position: absolute;
        left: 0;
        background: var(--blue-120);
        height: var(--base-size);
        animation-name: move;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      @keyframes move {
        from {
          width: 0%;
        }

        to {
          width: 100%;
        }
      }
    `;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('.container')
], ProgressBar.prototype, "container", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], ProgressBar.prototype, "isDisplay", void 0);
ProgressBar = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_4__.Selector.ProgressBar)
], ProgressBar);



/***/ }),

/***/ "./src/components/radio-group/radioGroup.ts":
/*!**************************************************!*\
  !*** ./src/components/radio-group/radioGroup.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioGroup": () => (/* binding */ RadioGroup)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../radiobutton/radiobutton */ "./src/components/radiobutton/radiobutton.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_components_radiobutton_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/components/radiobutton-render */ "./src/components/utils/components/radiobutton-render.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const gridColumnVar = '--grid-template-columns';
const gridRowVar = '--grid-template-rows';
let RadioGroup = class RadioGroup extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.items = [
            { label: 'var 1', value: '1' },
            { label: 'var 2', value: '2' }
        ];
        this.name = '';
    }
    set gridColumns(v) {
        setTimeout(() => {
            this.radioGroup.style.setProperty(gridColumnVar, v);
        }, 0);
    }
    set gridRows(v) {
        setTimeout(() => {
            this.radioGroup.style.setProperty(gridRowVar, v);
        }, 0);
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="radio-group"
                 @change=${(e) => console.log('get event in radio group', e, e.detail)}>
                ${this.items.map(item => (0,_utils_components_radiobutton_render__WEBPACK_IMPORTED_MODULE_4__.radioHtmlTemplate)({
            name: this.name,
            value: item.value,
            text: item.label,
            error: item.error
        }))}
            </div>
        `;
    }
};
RadioGroup.styles = [
    _radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_2__.RadioButton.styles,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
          .radio-group {
            ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(gridColumnVar)}: auto;
            ${(0,lit__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)(gridRowVar)}: auto;
            display: grid;
            grid-template-columns: var(--grid-template-columns);
            grid-template-rows: var(--grid-template-rows);
          }
        `
];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], RadioGroup.prototype, "items", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], RadioGroup.prototype, "name", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'grid-columns' })
], RadioGroup.prototype, "gridColumns", null);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, attribute: 'grid-rows' })
], RadioGroup.prototype, "gridRows", null);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('.radio-group')
], RadioGroup.prototype, "radioGroup", void 0);
RadioGroup = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_5__.Selector.RadioGroup)
], RadioGroup);



/***/ }),

/***/ "./src/components/radiobutton/radiobutton-style.ts":
/*!*********************************************************!*\
  !*** ./src/components/radiobutton/radiobutton-style.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "radioButtonStyle": () => (/* binding */ radioButtonStyle)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");


const radioButtonStyle = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_1__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
      .container {
        position: relative;
        --label-color: var(--grey-200);
      }

      input {
        display: flex;
        position: relative;
        width: calc(var(--base-size) * 4);
        height: calc(var(--base-size) * 4);
        margin: var(--base-size);
        cursor: pointer;
        appearance: none;
        border-radius: 50%;
        --before-background: var(--blue-120);
        --after-background: transparent;
        --before-border-color: var(--grey-80);
        --after-border-color: white;
      }

      input::before {
        content: '';
        width: calc(var(--base-size) * 4);
        height: calc(var(--base-size) * 4);
        background-color: var(--before-background);
        border-radius: calc(var(--base-size) * 25);
        position: absolute;
        left: 0;
        box-sizing: border-box;
      }

      input::after {
        content: '';
        background-color: var(--after-background);
        position: absolute;
        left: calc(var(--base-size) / 2);
        top: calc(var(--base-size) / 2);
        width: calc(var(--base-size) * 2);
        height: calc(var(--base-size) * 2);
        border: calc(var(--base-size) / 2) solid var(--after-border-color);
        border-radius: 50%;
      }

      input::after,
      input::before {
        transition-duration: .25s;
        transition-property: background-color, border-color, box-shadow;
        transition-timing-function: ease;
      }

      input:not(:checked)::after {
        display: none;
      }

      input:not(:checked)::before {
        background-color: var(--before-background);
        border: calc(var(--base-size) / 2) solid var(--before-border-color);
      }

      label {
        display: flex;
        grid-gap: calc(var(--base-size) * 3);
        color: var(--label-color);
        align-items: center;
        cursor: pointer;
      }

      input:checked {
        --box-shadow-color: var(--blue-50);
        --before-background: var(--blue-120);
        --after-background: transparent;
      }

      input:not(:checked) {
        --box-shadow-color: var(--grey-50);
        --before-background: white;
        --after-background: transparent;
        --before-border-color: var(--grey-80);
        --after-border-color: white;
      }

      input:not(:checked):hover {
        --before-border-color: var(--grey-60);
      }

      input:checked:hover {
        --before-background: var(--blue-100);
      }

      input:focus::before {
        box-shadow: 0 0 0 calc(var(--base-size) / 2) var(--box-shadow-color);
      }

      input[type="radio" i]:focus-visible {
        box-shadow: 0 0 0 calc(var(--base-size) / 2) var(--box-shadow-color);
        outline: none;
        outline-offset: 0;
      }

      input.error {
        --box-shadow-color: var(--red-50);
        --before-border-color: var(--red-120);
        --after-background: var(--grey-80);
      }

      input.error:checked {
        --before-background: var(--red-120);
      }

      .disabled {
        --before-background: var(--grey-50) !important;
        --before-border-color: var(--grey-50) !important;
        --after-background: var(--grey-50) !important;
        --label-color: var(--grey-80) !important;
        pointer-events: none;
      }
    `
];


/***/ }),

/***/ "./src/components/radiobutton/radiobutton.ts":
/*!***************************************************!*\
  !*** ./src/components/radiobutton/radiobutton.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButton": () => (/* binding */ RadioButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_components_radiobutton_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/components/radiobutton-render */ "./src/components/utils/components/radiobutton-render.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _radiobutton_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radiobutton-style */ "./src/components/radiobutton/radiobutton-style.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let RadioButton = class RadioButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.text = '';
        this.disabled = false;
        this.value = '';
        this.error = '';
    }
    emitValue(e) {
        const el = e.target;
        console.log('el', el, this);
        const detail = { value: this.value, checked: el.checked };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_4__.createEvent)(e.type, { detail }));
    }
    render() {
        return (0,_utils_components_radiobutton_render__WEBPACK_IMPORTED_MODULE_2__.radioHtmlTemplate)({
            name: this.name,
            value: this.value,
            text: this.text,
            emitValue: this.emitValue.bind(this),
            disabled: this.disabled,
            error: this.error
        });
    }
};
RadioButton.styles = _radiobutton_style__WEBPACK_IMPORTED_MODULE_5__.radioButtonStyle;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], RadioButton.prototype, "name", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], RadioButton.prototype, "text", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], RadioButton.prototype, "disabled", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], RadioButton.prototype, "value", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], RadioButton.prototype, "error", void 0);
RadioButton = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.RadioButton)
], RadioButton);



/***/ }),

/***/ "./src/components/spinner/spinner.ts":
/*!*******************************************!*\
  !*** ./src/components/spinner/spinner.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spinner": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/components/spinner/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/components/spinner/utils.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let Spinner = class Spinner extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.size = _types__WEBPACK_IMPORTED_MODULE_4__.SpinnerSize.M;
        this.isDisplay = true;
    }
    connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            this.container.style.setProperty('--size', (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getSpinnerSize)(this.size));
        }, 0);
    }
    render() {
        return (0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_2__.isVisible)(this.isDisplay, lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container"></div>
        `);
    }
};
Spinner.styles = lit__WEBPACK_IMPORTED_MODULE_0__.css `
      .container {
        --size: calc(var(--base-size) / 2 * 23);
        background-color: white;
        border-left: calc(var(--base-size) / 2) solid var(--blue-120);
        border-radius: 50%;
        width: var(--size);
        height: var(--size);
        animation-name: rotate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg)
        }

        to {
          transform: rotate(1turn)
        }
      }
    `;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], Spinner.prototype, "size", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('.container')
], Spinner.prototype, "container", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], Spinner.prototype, "isDisplay", void 0);
Spinner = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.Spinner)
], Spinner);



/***/ }),

/***/ "./src/components/spinner/types.ts":
/*!*****************************************!*\
  !*** ./src/components/spinner/types.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerSize": () => (/* binding */ SpinnerSize)
/* harmony export */ });
var SpinnerSize;
(function (SpinnerSize) {
    SpinnerSize["XS"] = "XS";
    SpinnerSize["S"] = "S";
    SpinnerSize["M"] = "M";
    SpinnerSize["L"] = "L";
})(SpinnerSize || (SpinnerSize = {}));


/***/ }),

/***/ "./src/components/spinner/utils.ts":
/*!*****************************************!*\
  !*** ./src/components/spinner/utils.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSpinnerSize": () => (/* binding */ getSpinnerSize)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/components/spinner/types.ts");

function getSpinnerSize(size) {
    switch (size) {
        case _types__WEBPACK_IMPORTED_MODULE_0__.SpinnerSize.XS:
            return 'calc(var(--base-size) / 2 * 15)';
        case _types__WEBPACK_IMPORTED_MODULE_0__.SpinnerSize.S:
            return 'calc(var(--base-size) / 2 * 19)';
        case _types__WEBPACK_IMPORTED_MODULE_0__.SpinnerSize.M:
            return 'calc(var(--base-size) / 2 * 23)';
        case _types__WEBPACK_IMPORTED_MODULE_0__.SpinnerSize.L:
            return 'calc(var(--base-size) / 2 * 27)';
        default:
            return 'calc(var(--base-size) / 2 * 23)';
    }
}


/***/ }),

/***/ "./src/components/switch/styles.ts":
/*!*****************************************!*\
  !*** ./src/components/switch/styles.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchStyle": () => (/* binding */ switchStyle)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const switchStyle = lit__WEBPACK_IMPORTED_MODULE_0__.css `
  input {
    width: calc(var(--base-size) * 8);
    --before-background: var(--grey-80);
    margin: calc(var(--base-size) / 2) 0 calc(var(--base-size) / 2) var(--base-size);
  }

  input::before {
    content: '';
    position: relative;
    border-radius: calc(var(--border-radius-4) * 25);
    width: calc(var(--base-size) * 8);
    height: calc(var(--base-size) * 5);
    background-color: var(--before-background);
  }
  
  input::after {
    content: '';
    background-color: white;
    position: absolute;
    border-radius: 50%;
    width: calc(var(--base-size) * 3);
    height: calc(var(--base-size) * 3);
  }

  input:not(:checked):hover {
    --before-background: var(--grey-60);
  }

  input:not(:checked)::after {
    left: var(--base-size);
  }

  input:checked::after {
    right: var(--base-size);
  }
  
  input.disabled:checked {
    --before-background: var(--blue-50);
  }

  input.disabled:not(:checked) {
    --before-background: var(--grey-50);
  }
`;


/***/ }),

/***/ "./src/components/switch/switch.ts":
/*!*****************************************!*\
  !*** ./src/components/switch/switch.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Switch": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _base_checkbox_checkbox_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/checkbox/checkbox-base */ "./src/components/base/checkbox/checkbox-base.ts");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/switch/styles.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let Switch = class Switch extends _base_checkbox_checkbox_base__WEBPACK_IMPORTED_MODULE_2__.CheckboxBase {
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container">
                <label class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({ disabled: this.disabled })}>
                    <input
                            .name=${this.name}
                            tabindex="1"
                            class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({ disabled: this.disabled })}
                            type="checkbox"
                            ?checked=${this.initCheckedState}
                            @change=${this.emitChangeEvent}
                            ?disabled=${this.disabled}
                            .value=${this.value}
                    />
                    ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__.isVisible)(!!this.text, lit__WEBPACK_IMPORTED_MODULE_0__.html `<span class="body-3">${this.text}</span>`)}
                </label>
            </div>
        `;
    }
};
Switch.styles = [_base_checkbox_checkbox_base__WEBPACK_IMPORTED_MODULE_2__.CheckboxBase.styles, _styles__WEBPACK_IMPORTED_MODULE_5__.switchStyle];
Switch = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_4__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.Switch)
], Switch);



/***/ }),

/***/ "./src/components/tab-bar/config.ts":
/*!******************************************!*\
  !*** ./src/components/tab-bar/config.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabEventName": () => (/* binding */ TabEventName)
/* harmony export */ });
const TabEventName = 'selectedTab';


/***/ }),

/***/ "./src/components/tab-bar/tabBar.ts":
/*!******************************************!*\
  !*** ./src/components/tab-bar/tabBar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabBar": () => (/* binding */ TabBar)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/components/tab-bar/config.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let TabBar = class TabBar extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.items = [
            { name: 'tab 1' },
            { name: 'tab 2' }
        ];
        this.selectedTabName = '';
    }
    selectTab(name) {
        this.selectedTabName = name;
        const detail = { value: this.selectedTabName };
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_4__.createEvent)(_config__WEBPACK_IMPORTED_MODULE_5__.TabEventName, { detail }));
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="container">
                ${this.items.map(tab => lit__WEBPACK_IMPORTED_MODULE_0__.html `
                    <div class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap)({
            'tab-item': true,
            active: tab.name === this.selectedTabName,
            disabled: this.disabled
        })} @click=${() => this.selectTab(tab.name)}>${tab.name}
                    </div>`)}
            </div>
        `;
    }
};
TabBar.styles = lit__WEBPACK_IMPORTED_MODULE_0__.css `
      .container {
        display: flex;
      }

      .tab-item {
        color: var(--grey-100);
        border-bottom: calc(var(--base-size) / 2) solid var(--grey-20);
        padding-right: var(--space-16);
        padding-left: var(--space-16);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: border-bottom 1s;
      }

      .tab-item:hover {
        color: var(--grey-200);
        cursor: pointer;
      }

      .active {
        color: var(--grey-200);
        border-bottom: calc(var(--base-size) / 2) solid var(--blue-120);
      }

      .disabled {
        color: var(--grey-50);
        pointer-events: none;
      }
    `;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], TabBar.prototype, "disabled", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], TabBar.prototype, "items", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], TabBar.prototype, "selectedTabName", void 0);
TabBar = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__.customElementRegistry)(_shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.TabBar)
], TabBar);



/***/ }),

/***/ "./src/components/table/config/consts.ts":
/*!***********************************************!*\
  !*** ./src/components/table/config/consts.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItemButtonClickEventName": () => (/* binding */ addItemButtonClickEventName)
/* harmony export */ });
const addItemButtonClickEventName = 'add-item-button-click';


/***/ }),

/***/ "./src/components/table/style.ts":
/*!***************************************!*\
  !*** ./src/components/table/style.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stylesBase": () => (/* binding */ stylesBase)
/* harmony export */ });
/* harmony import */ var _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/css/css-utils */ "./src/components/utils/css/css-utils.ts");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


const stylesBase = [
    _utils_css_css_utils__WEBPACK_IMPORTED_MODULE_0__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_1__.css `
      .container {
        display: grid;
        --columns-grid-columns: auto;
        max-height: calc(var(--base-size) * 200);
        color: var(--grey-200);
        background: white;
      }

      .header {
        display: grid;
        grid-template-columns: var(--columns-grid-columns);
        border-bottom: var(--space-1) solid var(--grey-60);
        overflow: hidden;
      }

      .content {
        overflow: auto;
        max-height: 64vh;
      }

      .row {
        display: grid;
        grid-template-columns: var(--columns-grid-columns);
        border-bottom: var(--space-1) solid var(--grey-20);
        height: var(--space-40);
        width: fit-content;
      }

      .column-header {
        padding: var(--space-12);
        height: var(--space-40);
      }

      .row-item {
        display: flex;
        align-items: center;
        padding: 0 var(--space-12);
      }

      .tag-column-content {
        font-size: calc(var(--base-font-size) * 7.5);
        line-height: calc(var(--base-line-height) * 5);
        font-weight: var(--base-font-weight);
        padding: var(--space-4) var(--space-8);
        border-radius: var(--border-radius-4);
      }

      .link-column-content {
        color: var(--grey-160);
      }

      .date-column-content {
        display: flex;
        align-items: center;
        gap: var(--space-8);
      }

      .priority-column-content {

      }

      .priority-border {
        width: var(--space-4);
        height: var(--space-20);
        display: inline-block;
        border-radius: var(--border-radius-4);
        margin-right: var(--space-8);
      }

      .priority-border.low {
        background-color: var(--green-120);
      }

      .priority-border.mid {
        background-color: var(--yellow-120);
      }

      .priority-border.high {
        background-color: var(--red-120);
      }

      .icon-column-content {
        margin-left: var(--space-8);
      }

      .icon-column-image {
        width: var(--space-24);
        height: var(--space-24);
        border-radius: var(--border-radius-4);
      }

      .action-panel {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    `
];


/***/ }),

/***/ "./src/components/table/table.ts":
/*!***************************************!*\
  !*** ./src/components/table/table.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "./node_modules/lit/directives/unsafe-html.js");
/* harmony import */ var _utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _table_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.type */ "./src/components/table/table.type.ts");
/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dropdown/dropdown */ "./src/components/dropdown/dropdown.ts");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/components/table/style.ts");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var _utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/directives/isVisible */ "./src/components/utils/directives/isVisible.ts");
/* harmony import */ var _utils_other_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/other/icons */ "./src/components/utils/other/icons.ts");
/* harmony import */ var _utils_other_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _button_config_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../button/config/constants */ "./src/components/button/config/constants.ts");
/* harmony import */ var _config_consts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config/consts */ "./src/components/table/config/consts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














const tagName = _shared_types__WEBPACK_IMPORTED_MODULE_6__.Selector.Table;
const selectionChangeEvent = 'selectionChange';
const rowClickEvent = 'rowClick';
const rowChangeEvent = 'rowChange';
let Table = class Table extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.columns = [];
        this.items = [];
        this.showActionPanel = false;
        this._scrollLeft = 0;
        this.defaultTextBackground = 'white';
        this.defaultTextColor = '#21272C';
        this.selection = [];
    }
    connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            console.log('this.container: ', this.container);
            console.log('this.columns: ', this.columns);
            console.log('this.items: ', this.items);
            const gridTemplateColumns = this.columns.map(e => e.width || 'minmax(var(--space-152), 1fr)').join(' ');
            this.container?.style.setProperty('--columns-grid-columns', gridTemplateColumns);
        }, 0);
    }
    selectAll(event) {
        if (event.detail.value) {
            this.selection = [...this.items];
        }
        else {
            this.selection = [];
        }
        this._emitSelectionChange();
    }
    setSelectedRow(rowId, event) {
        const selectedRow = this.items.find(row => row.id === rowId);
        if (!selectedRow) {
            return;
        }
        if (event.detail.value) {
            this.selection.push(selectedRow);
        }
        else {
            this.selection = this.selection.filter(row => row.id === rowId);
        }
        this._emitSelectionChange();
    }
    rowChanged(event, row, itemProperty) {
        const newRow = { ...row };
        newRow[itemProperty].value = event.detail.value;
        this._emitRowChanged(event, newRow);
    }
    getTextRowHtml(row) {
        if (row.textBackground || row.textColor) {
            const styles = {
                color: row.textColor || this.defaultTextColor,
                backgroundColor: row.textBackground || this.defaultTextBackground
            };
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `
                <span class="tag-column-content"
                      style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_8__.styleMap)(styles)}>${row.value}</span>
            `;
        }
        else {
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `<span class="text-column-content">${row.value}</span>`;
        }
    }
    getListRowHtml(rowsInfo, column) {
        const options = column.listOptions && Array.isArray(column.listOptions) ? column.listOptions : [];
        const row = rowsInfo[column.itemProperty];
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-dropdown .items=${options}
                          initValue=${row.value}
                          @input-change=${(event) => this.rowChanged(event, rowsInfo, column.itemProperty)}
                          disabled="${row.disabled || lit__WEBPACK_IMPORTED_MODULE_0__.nothing}"
                          size="XS"
                          outline="true">
            </tsc-dropdown>
        `;
    }
    getInputRowHtml(rowsInfo, column) {
        const row = rowsInfo[column.itemProperty];
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-input initInputValue=${row.value}
                       @input-change=${(event) => this.rowChanged(event, rowsInfo, column.itemProperty)}
                       disabled="${row.disabled || lit__WEBPACK_IMPORTED_MODULE_0__.nothing}"
                       size="XS"
                       outline="true">
            </tsc-input>
        `;
    }
    getLinkRowHtml(row) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `<a class="link-column-content body-3" href="${row.value}">${row.label}</a>`;
    }
    getDateRowHtml(row) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="date-column-content">
                ${_utils_other_icons__WEBPACK_IMPORTED_MODULE_10__.calendarIcon}
                <span>${new Date(row.value).toLocaleDateString()}</span>
                ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_9__.isVisible)(!!row.isWarning, _utils_other_icons__WEBPACK_IMPORTED_MODULE_10__.warningIcon)}
            </div>
        `;
    }
    getPriorityRowHtml(row) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <span class="priority-border ${row.value}"></span>
            <span class="priority-column-content">${row.label}</span>
        `;
    }
    getSwitchRowHtml(rowsInfo, column) {
        const row = rowsInfo[column.itemProperty];
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-switch @change=${(event) => this.rowChanged(event, rowsInfo, column.itemProperty)}
                        initCheckedState="${row.value || lit__WEBPACK_IMPORTED_MODULE_0__.nothing}"
                        disabled="${row.disabled || lit__WEBPACK_IMPORTED_MODULE_0__.nothing}"
                        text="${row.label}"></tsc-switch>
        `;
    }
    getIconRowHtml(row) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_9__.isVisible)(!!row.iconSVG, lit__WEBPACK_IMPORTED_MODULE_0__.html `${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_2__.unsafeHTML)(row.iconSVG)}`)}
            ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_9__.isVisible)(!!row.iconURL, lit__WEBPACK_IMPORTED_MODULE_0__.html `<img class="icon-column-image" .src="${row.iconURL}" />`)}
            <span class="icon-column-content">${row.label}</span>
        `;
    }
    getCheckboxRowHtml(row, rowId) {
        const selected = this.selection.find(row => row.id === rowId);
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <tsc-checkbox initCheckedState="${!!selected || lit__WEBPACK_IMPORTED_MODULE_0__.nothing}"
                          disabled="${row.disabled || lit__WEBPACK_IMPORTED_MODULE_0__.nothing}"
                          @change=${(event) => this.setSelectedRow(rowId, event)}></tsc-checkbox>
        `;
    }
    getRowItem(rowsInfo, column) {
        const rowItem = rowsInfo[column.itemProperty];
        let itemContent = lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div>${rowItem.value}</div>
        `;
        switch (column.type) {
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.text:
                itemContent = this.getTextRowHtml(rowItem);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.list:
                itemContent = this.getListRowHtml(rowsInfo, column);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.link:
                itemContent = this.getLinkRowHtml(rowItem);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.date:
                itemContent = this.getDateRowHtml(rowItem);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.priority:
                itemContent = this.getPriorityRowHtml(rowItem);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType["switch"]:
                itemContent = this.getSwitchRowHtml(rowsInfo, column);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.icon:
                itemContent = this.getIconRowHtml(rowItem);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.checkbox:
                itemContent = this.getCheckboxRowHtml(rowItem, rowsInfo.id);
                break;
            case _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.input:
                itemContent = this.getInputRowHtml(rowsInfo, column);
                break;
        }
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="row-item body-3"
                 @click=${(event) => this._emitRowClicked(event, rowsInfo, column.itemProperty)}>
                ${itemContent}
            </div>
        `;
    }
    getHtmlRow(row) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="row">
                ${this.columns.map(col => this.getRowItem(row, col))}
            </div>
        `;
    }
    getHtmlColumn(col) {
        if (col.type === _table_type__WEBPACK_IMPORTED_MODULE_4__.FieldType.checkbox) {
            const columnRows = this.items.map(item => item[col.itemProperty]);
            const selected = columnRows.filter(row => row.value);
            const allSelected = selected.length === columnRows.length;
            return lit__WEBPACK_IMPORTED_MODULE_0__.html `
                <div class="column-header head-5">
                    <tsc-checkbox @change=${this.selectAll}
                                  initCheckedState="${allSelected || lit__WEBPACK_IMPORTED_MODULE_0__.nothing}"></tsc-checkbox>
                </div>
            `;
        }
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="column-header head-5">${col.label}</div>
        `;
    }
    scrollData(event) {
        const newScrollLeft = event.target.scrollLeft;
        if (newScrollLeft === this._scrollLeft) {
            return;
        }
        this._scrollLeft = newScrollLeft;
        this.requestUpdate();
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            ${(0,_utils_directives_isVisible__WEBPACK_IMPORTED_MODULE_9__.isVisible)(this.showActionPanel, this.actionPanel)}
            <div class="container">
                <div class="header" .scrollLeft=${this._scrollLeft}>
                    ${this.columns.map(this.getHtmlColumn.bind(this))}
                </div>
                <div class="content scroll-white" @scroll=${this.scrollData}>
                    ${this.items.map(this.getHtmlRow.bind(this))}
                </div>
            </div>
        `;
    }
    _emitSelectionChange() {
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent(selectionChangeEvent, { detail: this.selection }));
    }
    _emitRowClicked(event, row, itemProperty) {
        console.log(itemProperty);
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_11__.createEvent)(rowClickEvent, {
            ...event,
            detail: {
                row,
                itemProperty
            }
        }));
    }
    _emitRowChanged(event, row) {
        console.log(row);
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_11__.createEvent)(rowChangeEvent, { ...event, detail: row }));
    }
    get actionPanel() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div class="action-panel">
                <!-- TODO: localize -->
                <tsc-button id="add-button" text='+ Добавить' .styleType=${_button_config_constants__WEBPACK_IMPORTED_MODULE_12__.BaseStyleType.FLAT} @click=${this.addItemButtonClick}></tsc-button>
            </div>
        `;
    }
    addItemButtonClick() {
        this.dispatchEvent((0,_utils_other_event__WEBPACK_IMPORTED_MODULE_11__.createEvent)(_config_consts__WEBPACK_IMPORTED_MODULE_13__.addItemButtonClickEventName));
    }
};
Table.styles = _style__WEBPACK_IMPORTED_MODULE_7__.stylesBase;
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('.container')
], Table.prototype, "container", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], Table.prototype, "columns", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], Table.prototype, "items", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, attribute: 'show-action-panel' })
], Table.prototype, "showActionPanel", void 0);
Table = __decorate([
    (0,_utils_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_3__.customElementRegistry)(tagName)
], Table);



/***/ }),

/***/ "./src/components/table/table.type.ts":
/*!********************************************!*\
  !*** ./src/components/table/table.type.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldType": () => (/* binding */ FieldType),
/* harmony export */   "IconPosition": () => (/* binding */ IconPosition)
/* harmony export */ });
var FieldType;
(function (FieldType) {
    FieldType["text"] = "text";
    FieldType["number"] = "number";
    FieldType["date"] = "date";
    FieldType["dateRange"] = "dateRange";
    FieldType["dictionary"] = "dictionary";
    FieldType["list"] = "list";
    FieldType["boolean"] = "boolean";
    FieldType["link"] = "link";
    FieldType["priority"] = "priority";
    FieldType["switch"] = "switch";
    FieldType["icon"] = "icon";
    FieldType["checkbox"] = "checkbox";
    FieldType["input"] = "input";
})(FieldType || (FieldType = {}));
var IconPosition;
(function (IconPosition) {
    IconPosition[IconPosition["left"] = 0] = "left";
    IconPosition[IconPosition["right"] = 1] = "right";
    IconPosition[IconPosition["top"] = 2] = "top";
    IconPosition[IconPosition["bottom"] = 3] = "bottom";
})(IconPosition || (IconPosition = {}));


/***/ }),

/***/ "./src/components/utils/components/divider.ts":
/*!****************************************************!*\
  !*** ./src/components/utils/components/divider.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Divider": () => (/* binding */ Divider)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Divider = class Divider extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
            <div></div>
        `;
    }
};
Divider.styles = lit__WEBPACK_IMPORTED_MODULE_0__.css `
        div {
            background-color: var(--grey-10);
            width: calc(var(--base-size) / 4);
            height: calc(var(--base-size) * 5);
        }
    `;
Divider = __decorate([
    (0,_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_1__.customElementRegistry)('tsc-divider')
], Divider);



/***/ }),

/***/ "./src/components/utils/components/radiobutton-render.ts":
/*!***************************************************************!*\
  !*** ./src/components/utils/components/radiobutton-render.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "radioHtmlTemplate": () => (/* binding */ radioHtmlTemplate)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var _other_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _directives_isVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/isVisible */ "./src/components/utils/directives/isVisible.ts");




function emitValueDefault(e, value) {
    const target = e.target;
    const detail = { value, checked: target.checked };
    const changeEvent = (0,_other_event__WEBPACK_IMPORTED_MODULE_2__.createEvent)(e.type, { detail });
    target.parentElement?.dispatchEvent(changeEvent);
}
const radioHtmlTemplate = ({ name, value, text, emitValue = emitValueDefault, disabled = false, error = '' }) => lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <div class="container">
            <label class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({ disabled, error })}>
                <input
                        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({ disabled, error })}
                        type="radio" .name=${name} .value=${value}
                        @click=${(e) => e.stopPropagation()}
                        @change=${(e) => {
    e.stopPropagation();
    emitValue(e, value);
}}>
                ${(0,_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__.isVisible)(!!text, lit__WEBPACK_IMPORTED_MODULE_0__.html `<span class="body-3">${text}</span>`)}
            </label>
            ${(0,_directives_isVisible__WEBPACK_IMPORTED_MODULE_3__.isVisible)(!!error, lit__WEBPACK_IMPORTED_MODULE_0__.html `<span class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.classMap)({ 'error-text': true })}>${error}</span>`)}
        </div>
    `;


/***/ }),

/***/ "./src/components/utils/components/scroll/config/constant.ts":
/*!*******************************************************************!*\
  !*** ./src/components/utils/components/scroll/config/constant.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGINATE_EVENT": () => (/* binding */ PAGINATE_EVENT)
/* harmony export */ });
const PAGINATE_EVENT = 'scrollPaginate';


/***/ }),

/***/ "./src/components/utils/components/scroll/scroll-container.ts":
/*!********************************************************************!*\
  !*** ./src/components/utils/components/scroll/scroll-container.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollContainer": () => (/* binding */ ScrollContainer)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_css_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/css-utils */ "./src/components/utils/css/css-utils.ts");
/* harmony import */ var _other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/custom-element.decorator */ "./src/components/utils/other/custom-element.decorator.ts");
/* harmony import */ var _other_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../other/event */ "./src/components/utils/other/event.ts");
/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/constant */ "./src/components/utils/components/scroll/config/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let ScrollContainer = class ScrollContainer extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.itemHeight = '10em';
        this.maxHeight = 'calc(var(--base-size) * 91)';
        this.scrollbarHeight = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        setTimeout(() => {
            this.scrollbarHeight = (this.container?.clientHeight || 0) / 3;
            this.container?.style.setProperty('--scroll-height', `${this.scrollbarHeight}px`);
            this.container?.addEventListener('scroll', lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.scrollContainer.bind(this), 150));
        }, 100);
    }
    scrollContainer() {
        if (this.container) {
            const scrollTop = this.container?.scrollTop;
            const scrollHeight = this.container?.scrollHeight;
            if (scrollTop + this.scrollbarHeight >= 0.6 * scrollHeight) {
                this.dispatchEvent((0,_other_event__WEBPACK_IMPORTED_MODULE_6__.createEvent)(_config_constant__WEBPACK_IMPORTED_MODULE_7__.PAGINATE_EVENT));
            }
        }
    }
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html `
        <div class="container level-2" style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.styleMap)({ maxHeight: this.maxHeight })}>
            <slot></slot>
        </div>
        `;
    }
};
ScrollContainer.styles = [
    _css_css_utils__WEBPACK_IMPORTED_MODULE_4__.baseCSS,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
            .container {
                --scroll-height: calc(var(--base-size) * 20);
                overflow: auto;
                width: 100%;
            }

            .container::-webkit-scrollbar {
                background-color: white;
                width: calc(var(--base-size) * 3 / 2);
            }

            .container::-webkit-scrollbar-thumb {
                background: var(--grey-70);
                height: var(--scroll-height);
                border-radius: calc(var(--border-radius-4) * 4);
            }

            .container::-webkit-scrollbar-track {
                background: white;
            }
        `
];
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], ScrollContainer.prototype, "items", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], ScrollContainer.prototype, "itemHeight", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], ScrollContainer.prototype, "maxHeight", void 0);
__decorate([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('.container')
], ScrollContainer.prototype, "container", void 0);
ScrollContainer = __decorate([
    (0,_other_custom_element_decorator__WEBPACK_IMPORTED_MODULE_5__.customElementRegistry)('tsc-scroll')
], ScrollContainer);



/***/ }),

/***/ "./src/components/utils/css/border-radius.ts":
/*!***************************************************!*\
  !*** ./src/components/utils/css/border-radius.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "borderRadiusCSS": () => (/* binding */ borderRadiusCSS)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const borderRadiusCSS = lit__WEBPACK_IMPORTED_MODULE_0__.css `
.border-radius-4 {
    border-radius: var(--border-radius-4);
}

.border-radius-6 {
    border-radius: var(--border-radius-4);
}
`;


/***/ }),

/***/ "./src/components/utils/css/css-utils.ts":
/*!***********************************************!*\
  !*** ./src/components/utils/css/css-utils.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseCSS": () => (/* binding */ baseCSS)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _border_radius__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border-radius */ "./src/components/utils/css/border-radius.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font */ "./src/components/utils/css/font.ts");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ "./src/components/utils/css/shadow.ts");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll */ "./src/components/utils/css/scroll.ts");





const baseCSS = [
    _border_radius__WEBPACK_IMPORTED_MODULE_1__.borderRadiusCSS,
    _font__WEBPACK_IMPORTED_MODULE_2__.fontCSS,
    _shadow__WEBPACK_IMPORTED_MODULE_3__.shadowCSS,
    _scroll__WEBPACK_IMPORTED_MODULE_4__.scrollStyle,
    lit__WEBPACK_IMPORTED_MODULE_0__.css `
        * {
            box-sizing: border-box;
        }`
];


/***/ }),

/***/ "./src/components/utils/css/font.ts":
/*!******************************************!*\
  !*** ./src/components/utils/css/font.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontCSS": () => (/* binding */ fontCSS)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const fontCSS = lit__WEBPACK_IMPORTED_MODULE_0__.css `
  .display-1 {
    font-size: calc(var(--base-font-size) * 24);
    line-height: calc(var(--base-line-height) * 24);
    font-weight: calc(var(--base-font-weight) * 7 / 5);
  }

  .display-2 {
    font-size: calc(var(--base-font-size) * 17);
    line-height: calc(var(--base-line-height) * 17);
    font-weight: calc(var(--base-font-weight) * 7 / 5);
  }

  .head-1 {
    font-size: calc(var(--base-font-size) * 14);
    line-height: calc(var(--base-line-height) * 35 / 3);
    font-weight: var(--base-font-weight);
  }

  .head-2 {
    font-size: calc(var(--base-font-size) * 12);
    line-height: calc(var(--base-line-height) * 10);
    font-weight: var(--base-font-weight);
  }

  .head-3 {
    font-size: calc(var(--base-font-size) * 9);
    line-height: calc(var(--base-line-height) * 23 / 3);
    font-weight: var(--base-font-weight);
  }

  .head-4 {
    font-size: calc(var(--base-font-size) * 8);
    line-height: calc(var(--base-line-height) * 20 / 3);
    font-weight: var(--base-font-weight);
  }

  .head-5 {
    font-size: calc(var(--base-font-size) * 7);
    line-height: calc(var(--base-line-height) * 5);
    font-weight: var(--base-font-weight);
  }

  .head-6 {
    font-size: calc(var(--base-font-size) * 6);
    line-height: calc(var(--base-line-height) * 5);
    font-weight: var(--base-font-weight);
  }

  .body-1 {
    font-size: calc(var(--base-font-size) * 9);
    line-height: calc(var(--base-line-height) * 23 / 3);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
  }

  .body-2 {
    font-size: calc(var(--base-font-size) * 8);
    line-height: calc(var(--base-line-height) * 20 / 3);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
  }

  .body-3 {
    font-size: calc(var(--base-font-size) * 7);
    line-height: calc(var(--base-line-height) * 6);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
  }

  .subtitle-2 {
    font-size: calc(var(--base-font-size) * 6);
    line-height: calc(var(--base-line-height) * 5);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
  }

  .overline {
    font-size: calc(var(--base-font-size) * 6);
    line-height: calc(var(--base-line-height) * 5);
    font-weight: var(--base-font-weight);
  }

  .menu {
    font-size: calc(var(--base-font-size) * 11 / 2);
    line-height: calc(var(--base-line-height) * 14 / 3);
    font-weight: var(--base-font-weight);
  }

  .error-text {
    font-size: calc(var(--base-font-size) * 7);
    line-height: calc(var(--base-line-height) * 5);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
    color: var(--red-120);
  }
`;


/***/ }),

/***/ "./src/components/utils/css/scroll.ts":
/*!********************************************!*\
  !*** ./src/components/utils/css/scroll.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollStyle": () => (/* binding */ scrollStyle)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const scrollStyle = lit__WEBPACK_IMPORTED_MODULE_0__.css `
  .scroll-white::-webkit-scrollbar,
  .scroll-grey::-webkit-scrollbar {
    width: var(--space-16);
  }

  .scroll-white::-webkit-scrollbar-track,
  .scroll-grey::-webkit-scrollbar-track {
    margin: var(--space-14);
    border-radius: var(--space-4);
  }

  .scroll-white::-webkit-scrollbar-track {
    background-color: white;
  }

  .scroll-grey::-webkit-scrollbar-track {
    background-color: var(--grey-10);
  }

  .scroll-white::-webkit-scrollbar-thumb,
  .scroll-grey::-webkit-scrollbar-thumb {
    background-color: var(--grey-40);
    border-radius: var(--space-16);
    height: 10vh;
  }

  .scroll-white::-webkit-scrollbar-thumb {
    border: var(--space-6) solid white;
  }

  .scroll-grey::-webkit-scrollbar-thumb {
    border: var(--space-6) solid var(--grey-10);
  }

  .scroll-white::-webkit-scrollbar-thumb:hover,
  .scroll-grey::-webkit-scrollbar-thumb:hover {
    background-color: var(--grey-70);
  }

  .scroll-white::-webkit-scrollbar-thumb:hover {
    border: var(--space-5) solid white;
  }

  .scroll-grey::-webkit-scrollbar-thumb:hover {
    border: var(--space-5) solid var(--grey-10);
  }
`;


/***/ }),

/***/ "./src/components/utils/css/shadow.ts":
/*!********************************************!*\
  !*** ./src/components/utils/css/shadow.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shadowCSS": () => (/* binding */ shadowCSS)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const shadowCSS = lit__WEBPACK_IMPORTED_MODULE_0__.css `
.level-1 {
    background: white;
    box-shadow: 0 calc(var(--base-size) / 4) var(--base-size) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-2 {
    background: white;
    box-shadow: 0 calc(var(--base-size) / 4) calc(var(--base-size) * 15 / 4) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-3 {
    background: white;
    box-shadow: 0 0 calc(var(--base-size) * 10) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-4 {
    background: white;
    box-shadow: 0 0 calc(var(--base-size) * 55 / 4) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}
`;


/***/ }),

/***/ "./src/components/utils/directives/clickOutside.ts":
/*!*********************************************************!*\
  !*** ./src/components/utils/directives/clickOutside.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickOutside": () => (/* binding */ clickOutside)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directive.js */ "./node_modules/lit/directive.js");


class ClickOutside extends lit_directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor() {
        super(...arguments);
        this.isInitialize = false;
        this.linkedElement = null;
        this.parentElement = null;
        this.bindedHandler = this.handleClick.bind(this);
    }
    update(_part, [callbackMethod]) {
        if (!this.isInitialize) {
            this.linkedElement = _part.element;
            this.callbackMethod = callbackMethod;
            setTimeout(() => {
                this.parentElement = this.linkedElement?.parentElement || null;
                document.addEventListener('click', this.bindedHandler);
                this.isInitialize = true;
            }, 0);
        }
        return this.render(callbackMethod);
    }
    render(_callbackMethod) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    handleClick(event) {
        if (this.parentElement?.contains(this.linkedElement || null)) {
            const isClickInsideElement = this.linkedElement?.contains(event.composedPath()[0]);
            if (!isClickInsideElement) {
                if (this.callbackMethod)
                    this.callbackMethod();
                document.removeEventListener('click', this.bindedHandler);
                this.isInitialize = false;
            }
        }
        else {
            document.removeEventListener('click', this.bindedHandler);
        }
    }
}
ClickOutside.isFirst = true;
const clickOutside = (0,lit_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(ClickOutside);


/***/ }),

/***/ "./src/components/utils/directives/isVisible.ts":
/*!******************************************************!*\
  !*** ./src/components/utils/directives/isVisible.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVisible": () => (/* binding */ isVisible)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_when_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/when.js */ "./node_modules/lit/directives/when.js");


const isVisible = (value, htmlTemplate, defaultTemplate) => lit__WEBPACK_IMPORTED_MODULE_0__.html `${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_1__.when)(value, () => htmlTemplate, () => defaultTemplate || '')}`;


/***/ }),

/***/ "./src/components/utils/other/custom-element.decorator.ts":
/*!****************************************************************!*\
  !*** ./src/components/utils/other/custom-element.decorator.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElementRegistry": () => (/* binding */ customElementRegistry)
/* harmony export */ });
const customElementRegistry = (tag) => {
    return classD => {
        if (!customElements.get(tag))
            customElements.define(tag, classD);
        return classD;
    };
};


/***/ }),

/***/ "./src/components/utils/other/event.ts":
/*!*********************************************!*\
  !*** ./src/components/utils/other/event.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEvent": () => (/* binding */ createEvent)
/* harmony export */ });
const baseEventOptions = { bubbles: true, composed: true };
const createEvent = (eventName, payload) => new CustomEvent(eventName, {
    ...baseEventOptions,
    ...payload?.eventOption,
    detail: payload?.detail,
});


/***/ }),

/***/ "./src/components/utils/other/field-type-guards.ts":
/*!*********************************************************!*\
  !*** ./src/components/utils/other/field-type-guards.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBoolean": () => (/* binding */ isBoolean),
/* harmony export */   "isCalendar": () => (/* binding */ isCalendar),
/* harmony export */   "isDropdown": () => (/* binding */ isDropdown),
/* harmony export */   "isInput": () => (/* binding */ isInput)
/* harmony export */ });
/* harmony import */ var _table_table_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../table/table.type */ "./src/components/table/table.type.ts");

const isInput = (field) => {
    return field.type === _table_table_type__WEBPACK_IMPORTED_MODULE_0__.FieldType.number || field.type === _table_table_type__WEBPACK_IMPORTED_MODULE_0__.FieldType.text;
};
const isCalendar = (field) => {
    return field.type === _table_table_type__WEBPACK_IMPORTED_MODULE_0__.FieldType.date || field.type === _table_table_type__WEBPACK_IMPORTED_MODULE_0__.FieldType.dateRange;
};
const isDropdown = (field) => {
    return field.type === _table_table_type__WEBPACK_IMPORTED_MODULE_0__.FieldType.list || field.type === _table_table_type__WEBPACK_IMPORTED_MODULE_0__.FieldType.dictionary;
};
const isBoolean = (field) => {
    return field.type === _table_table_type__WEBPACK_IMPORTED_MODULE_0__.FieldType.boolean;
};


/***/ }),

/***/ "./src/components/utils/other/icons.ts":
/*!*********************************************!*\
  !*** ./src/components/utils/other/icons.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrowIcon": () => (/* binding */ arrowIcon),
/* harmony export */   "calendarIcon": () => (/* binding */ calendarIcon),
/* harmony export */   "clearIcon": () => (/* binding */ clearIcon),
/* harmony export */   "closeIcon": () => (/* binding */ closeIcon),
/* harmony export */   "leftArrowIcon": () => (/* binding */ leftArrowIcon),
/* harmony export */   "leftDoubleArrowIcon": () => (/* binding */ leftDoubleArrowIcon),
/* harmony export */   "rightArrowIcon": () => (/* binding */ rightArrowIcon),
/* harmony export */   "rightDoubleArrowIcon": () => (/* binding */ rightDoubleArrowIcon),
/* harmony export */   "smallArrowIcon": () => (/* binding */ smallArrowIcon),
/* harmony export */   "warningIcon": () => (/* binding */ warningIcon)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const warningIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_17396_8290)">
            <circle cx="10.0002" cy="10" r="8.33333" stroke="#F5A700" stroke-width="1.66667" />
            <path d="M10 5L10 11.6667M10 15L10 13.3333" stroke="#F5A700" stroke-width="1.66667" />
        </g>
        <defs>
            <clipPath id="clip0_17396_8290">
                <rect width="20" height="20" fill="white" />
            </clipPath>
        </defs>
    </svg>
`;
const calendarIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 7.45837V4.16671C17.5 3.70647 17.1269 3.33337 16.6667 3.33337H14.1667M17.5 7.45837H2.5M17.5 7.45837V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V7.45837M2.5 7.45837V4.16671C2.5 3.70647 2.8731 3.33337 3.33333 3.33337H5.83333M5.83333 3.33337V0.833374M5.83333 3.33337H14.1667M14.1667 3.33337V0.833374"
              stroke="#99A5B3" stroke-width="1.66667" />
    </svg>
`;
const closeIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6568 6.34314L12 12M12 12L6.34314 17.6568M12 12L17.6568 17.6568M12 12L6.34314 6.34314" stroke-width="2"/>
    </svg>
`;
const arrowIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 5.83337L10 13.3334L17.5 5.83337" stroke="#C0C8D0" stroke-width="2" />
    </svg>
`;
const smallArrowIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.00021 12.2761L14.4716 5.80472L13.5288 4.86191L8.00021 10.3905L2.47162 4.86191L1.52881 5.80472L8.00021 12.2761Z"
            fill="#788694"
        />
    </svg>
`;
const clearIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.714 1.28595L6 6M6 6L1.28595 10.714M6 6L10.714 10.714M6 6L1.28595 1.28595"
                stroke="#C0C8D0" stroke-width="2"/>
    </svg>
`;
const leftDoubleArrowIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14L8 8L14 2" stroke="#788694" stroke-width="1.33333"/>
        <path d="M8 14L2 8L8 2" stroke="#788694" stroke-width="1.33333"/>
    </svg>
`;
const leftArrowIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3333 14L5.33325 8L11.3333 2" stroke="#788694" stroke-width="1.33333"/>
    </svg>
`;
const rightDoubleArrowIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 14L8 8L2 2" stroke="#788694" stroke-width="1.33333"/>
        <path d="M8 14L14 8L8 2" stroke="#788694" stroke-width="1.33333"/>
    </svg>
`;
const rightArrowIcon = lit__WEBPACK_IMPORTED_MODULE_0__.html `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.66675 14L10.6667 8L4.66675 2" stroke="#788694" stroke-width="1.33333"/>
    </svg>
`;


/***/ }),

/***/ "./src/components/utils/other/property-type.ts":
/*!*****************************************************!*\
  !*** ./src/components/utils/other/property-type.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROPERTY_TYPES": () => (/* binding */ PROPERTY_TYPES)
/* harmony export */ });
const PROPERTY_TYPES = {
    date: {
        type: Date,
        converter: {
            fromAttribute: (value) => new Date(value)
        }
    },
};


/***/ }),

/***/ "./src/components/widget/types.ts":
/*!****************************************!*\
  !*** ./src/components/widget/types.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectorAttributes": () => (/* binding */ SelectorAttributes)
/* harmony export */ });
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _accordion_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accordion/accordion */ "./src/components/accordion/accordion.ts");
/* harmony import */ var _action_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action/action */ "./src/components/action/action.ts");
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button */ "./src/components/button/button.ts");
/* harmony import */ var _button_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/icon-button */ "./src/components/button/icon-button.ts");
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar/calendar */ "./src/components/calendar/calendar.ts");
/* harmony import */ var _calendar_time_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar/time-picker */ "./src/components/calendar/time-picker.ts");
/* harmony import */ var _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkbox/checkbox */ "./src/components/checkbox/checkbox.ts");
/* harmony import */ var _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dropdown/dropdown */ "./src/components/dropdown/dropdown.ts");
/* harmony import */ var _dropdown_dropdown_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dropdown/dropdown-list */ "./src/components/dropdown/dropdown-list.ts");
/* harmony import */ var _form_inputs_form_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form-inputs/form-inputs */ "./src/components/form-inputs/form-inputs.ts");
/* harmony import */ var _input_number_input_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../input-number/input-number */ "./src/components/input-number/input-number.ts");
/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../input/input */ "./src/components/input/input.ts");
/* harmony import */ var _message_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../message/message */ "./src/components/message/message.ts");
/* harmony import */ var _paginator_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../paginator/paginator */ "./src/components/paginator/paginator.ts");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modal/modal */ "./src/components/modal/modal.ts");
/* harmony import */ var _progress_bar_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../progress-bar/progress-bar */ "./src/components/progress-bar/progress-bar.ts");
/* harmony import */ var _radio_group_radioGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../radio-group/radioGroup */ "./src/components/radio-group/radioGroup.ts");
/* harmony import */ var _radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../radiobutton/radiobutton */ "./src/components/radiobutton/radiobutton.ts");
/* harmony import */ var _spinner_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../spinner/spinner */ "./src/components/spinner/spinner.ts");
/* harmony import */ var _switch_switch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../switch/switch */ "./src/components/switch/switch.ts");
/* harmony import */ var _tab_bar_tabBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../tab-bar/tabBar */ "./src/components/tab-bar/tabBar.ts");
/* harmony import */ var _table_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../table/table */ "./src/components/table/table.ts");
/* harmony import */ var _modal_form_modal_form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../modal-form/modal-form */ "./src/components/modal-form/modal-form.ts");
























const SelectorAttributes = {
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Accordion]: _accordion_accordion__WEBPACK_IMPORTED_MODULE_1__.Accordion,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Action]: _action_action__WEBPACK_IMPORTED_MODULE_2__.Action,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Input]: _input_input__WEBPACK_IMPORTED_MODULE_12__.Input,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.InputNumber]: _input_number_input_number__WEBPACK_IMPORTED_MODULE_11__.InputNumber,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Button]: _button_button__WEBPACK_IMPORTED_MODULE_3__.Button,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.IconButton]: _button_icon_button__WEBPACK_IMPORTED_MODULE_4__.IconButton,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Calendar]: _calendar_calendar__WEBPACK_IMPORTED_MODULE_5__.Calendar,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.TimePicker]: _calendar_time_picker__WEBPACK_IMPORTED_MODULE_6__.TimePicker,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Checkbox]: _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_7__.Checkbox,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Dropdown]: _dropdown_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.List]: _dropdown_dropdown_list__WEBPACK_IMPORTED_MODULE_9__.List,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Form]: _form_inputs_form_inputs__WEBPACK_IMPORTED_MODULE_10__.FormInputs,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Message]: _message_message__WEBPACK_IMPORTED_MODULE_13__.Message,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Paginator]: _paginator_paginator__WEBPACK_IMPORTED_MODULE_14__.Paginator,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Modal]: _modal_modal__WEBPACK_IMPORTED_MODULE_15__.Modal,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.ModalForm]: _modal_form_modal_form__WEBPACK_IMPORTED_MODULE_23__.ModalForm,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.ProgressBar]: _progress_bar_progress_bar__WEBPACK_IMPORTED_MODULE_16__.ProgressBar,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.RadioGroup]: _radio_group_radioGroup__WEBPACK_IMPORTED_MODULE_17__.RadioGroup,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.RadioButton]: _radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_18__.RadioButton,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Spinner]: _spinner_spinner__WEBPACK_IMPORTED_MODULE_19__.Spinner,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Switch]: _switch_switch__WEBPACK_IMPORTED_MODULE_20__.Switch,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.TabBar]: _tab_bar_tabBar__WEBPACK_IMPORTED_MODULE_21__.TabBar,
    [_shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Table]: _table_table__WEBPACK_IMPORTED_MODULE_22__.Table,
};
console.log(SelectorAttributes);


/***/ }),

/***/ "./src/shared/types.ts":
/*!*****************************!*\
  !*** ./src/shared/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selector": () => (/* binding */ Selector)
/* harmony export */ });
var Selector;
(function (Selector) {
    Selector["Accordion"] = "tsc-accordion";
    Selector["Action"] = "tsc-action";
    Selector["Input"] = "tsc-input";
    Selector["InputNumber"] = "tsc-input-number";
    Selector["Button"] = "tsc-button";
    Selector["IconButton"] = "tsc-icon-button";
    Selector["Calendar"] = "tsc-calendar";
    Selector["TimePicker"] = "tsc-time-picker";
    Selector["Checkbox"] = "tsc-checkbox";
    Selector["Dropdown"] = "tsc-dropdown";
    Selector["List"] = "tsc-list";
    Selector["Form"] = "tsc-form";
    Selector["FormInputs"] = "tsc-form-inputs";
    Selector["Message"] = "tsc-message";
    Selector["Paginator"] = "tsc-paginator";
    Selector["Modal"] = "tsc-modal";
    Selector["ModalForm"] = "tsc-modal-form";
    Selector["ProgressBar"] = "tsc-progress-bar";
    Selector["RadioGroup"] = "tsc-radio-group";
    Selector["RadioButton"] = "tsc-radiobutton";
    Selector["Spinner"] = "tsc-spinner";
    Selector["Switch"] = "tsc-switch";
    Selector["TabBar"] = "tsc-tab-bar";
    Selector["Table"] = "tsc-table";
})(Selector || (Selector = {}));


/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* binding */ CSSResult),
/* harmony export */   "adoptStyles": () => (/* binding */ adoptStyles),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "getCompatibleStyle": () => (/* binding */ getCompatibleStyle),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = global.ShadowRoot &&
    (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, strings, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        styles.forEach((s) => {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        });
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* reexport safe */ _decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_1__.customElement),
/* harmony export */   "decorateProperty": () => (/* reexport safe */ _decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty),
/* harmony export */   "eventOptions": () => (/* reexport safe */ _decorators_event_options_js__WEBPACK_IMPORTED_MODULE_4__.eventOptions),
/* harmony export */   "legacyPrototypeMethod": () => (/* reexport safe */ _decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.legacyPrototypeMethod),
/* harmony export */   "property": () => (/* reexport safe */ _decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property),
/* harmony export */   "query": () => (/* reexport safe */ _decorators_query_js__WEBPACK_IMPORTED_MODULE_5__.query),
/* harmony export */   "queryAll": () => (/* reexport safe */ _decorators_query_all_js__WEBPACK_IMPORTED_MODULE_6__.queryAll),
/* harmony export */   "queryAssignedElements": () => (/* reexport safe */ _decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedElements),
/* harmony export */   "queryAssignedNodes": () => (/* reexport safe */ _decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_9__.queryAssignedNodes),
/* harmony export */   "queryAsync": () => (/* reexport safe */ _decorators_query_async_js__WEBPACK_IMPORTED_MODULE_7__.queryAsync),
/* harmony export */   "standardPrototypeMethod": () => (/* reexport safe */ _decorators_base_js__WEBPACK_IMPORTED_MODULE_0__.standardPrototypeMethod),
/* harmony export */   "state": () => (/* reexport safe */ _decorators_state_js__WEBPACK_IMPORTED_MODULE_3__.state)
/* harmony export */ });
/* harmony import */ var _decorators_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _decorators_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _decorators_event_options_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _decorators_query_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _decorators_query_all_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _decorators_query_async_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */










//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decorateProperty": () => (/* binding */ decorateProperty),
/* harmony export */   "legacyPrototypeMethod": () => (/* binding */ legacyPrototypeMethod),
/* harmony export */   "standardPrototypeMethod": () => (/* binding */ standardPrototypeMethod)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyPrototypeMethod = (descriptor, proto, name) => {
    Object.defineProperty(proto, name, descriptor);
};
const standardPrototypeMethod = (descriptor, element) => ({
    kind: 'method',
    placement: 'prototype',
    key: element.key,
    descriptor,
});
/**
 * Helper for decorating a property that is compatible with both TypeScript
 * and Babel decorators. The optional `finisher` can be used to perform work on
 * the class. The optional `descriptor` should return a PropertyDescriptor
 * to install for the given property.
 *
 * @param finisher {function} Optional finisher method; receives the element
 * constructor and property key as arguments and has no return value.
 * @param descriptor {function} Optional descriptor method; receives the
 * property key as an argument and returns a property descriptor to define for
 * the given property.
 * @returns {ClassElement|void}
 */
const decorateProperty = ({ finisher, descriptor, }) => (protoOrDescriptor, name
// Note TypeScript requires the return type to be `void|any`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => {
    var _a;
    // TypeScript / Babel legacy mode
    if (name !== undefined) {
        const ctor = protoOrDescriptor
            .constructor;
        if (descriptor !== undefined) {
            Object.defineProperty(protoOrDescriptor, name, descriptor(name));
        }
        finisher === null || finisher === void 0 ? void 0 : finisher(ctor, name);
        // Babel standard mode
    }
    else {
        // Note, the @property decorator saves `key` as `originalKey`
        // so try to use it here.
        const key = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (_a = protoOrDescriptor.originalKey) !== null && _a !== void 0 ? _a : protoOrDescriptor.key;
        const info = descriptor != undefined
            ? {
                kind: 'method',
                placement: 'prototype',
                key,
                descriptor: descriptor(protoOrDescriptor.key),
            }
            : { ...protoOrDescriptor, key };
        if (finisher != undefined) {
            info.finisher = function (ctor) {
                finisher(ctor, key);
            };
        }
        return info;
    }
};
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const legacyCustomElement = (tagName, clazz) => {
    customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher(clazz) {
            customElements.define(tagName, clazz);
        },
    };
};
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === 'function'
    ? legacyCustomElement(tagName, classOrDescriptor)
    : standardCustomElement(tagName, classOrDescriptor);
//# sourceMappingURL=custom-element.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventOptions": () => (/* binding */ eventOptions)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        finisher: (ctor, name) => {
            Object.assign(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ctor.prototype[name], options);
        },
    });
}
//# sourceMappingURL=event-options.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "property": () => (/* binding */ property)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const standardProperty = (options, element) => {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' &&
        element.descriptor &&
        !('value' in element.descriptor)) {
        return {
            ...element,
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
    else {
        // createProperty() takes care of defining the property, but we still
        // must return some kind of descriptor, so return a descriptor for an
        // unused prototype field. The finisher calls createProperty().
        return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // store the original key so subsequent decorators have access to it.
            originalKey: element.key,
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer() {
                if (typeof element.initializer === 'function') {
                    this[element.key] = element.initializer.call(this);
                }
            },
            finisher(clazz) {
                clazz.createProperty(element.key, options);
            },
        };
    }
};
const legacyProperty = (options, proto, name) => {
    proto.constructor.createProperty(name, options);
};
/**
 * A property decorator which creates a reactive property that reflects a
 * corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (protoOrDescriptor, name) => name !== undefined
        ? legacyProperty(options, protoOrDescriptor, name)
        : standardProperty(options, protoOrDescriptor);
}
//# sourceMappingURL=property.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAll": () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs: NodeListOf<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-all.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAssignedElements": () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a;
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * A tiny module scoped polyfill for HTMLSlotElement.assignedElements.
 */
const slotAssignedElements = ((_a = global.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null
    ? (slot, opts) => slot.assignedElements(opts)
    : (slot, opts) => slot
        .assignedNodes(opts)
        .filter((node) => node.nodeType === Node.ELEMENT_NODE);
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
    const { slot, selector } = options !== null && options !== void 0 ? options : {};
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                const elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
                if (selector) {
                    return elements.filter((node) => node.matches(selector));
                }
                return elements;
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-elements.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAssignedNodes": () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */


function queryAssignedNodes(slotOrOptions, flatten, selector) {
    // Normalize the overloaded arguments.
    let slot = slotOrOptions;
    let assignedNodesOptions;
    if (typeof slotOrOptions === 'object') {
        slot = slotOrOptions.slot;
        assignedNodesOptions = slotOrOptions;
    }
    else {
        assignedNodesOptions = { flatten };
    }
    // For backwards compatibility, queryAssignedNodes with a selector behaves
    // exactly like queryAssignedElements with a selector.
    if (selector) {
        return (0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({
            slot: slot,
            flatten,
            selector,
        });
    }
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            get() {
                var _a, _b;
                const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                return (_b = slotEl === null || slotEl === void 0 ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b !== void 0 ? _b : [];
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-assigned-nodes.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryAsync": () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (_name) => ({
            async get() {
                var _a;
                await this.updateComplete;
                return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
            },
            enumerable: true,
            configurable: true,
        }),
    });
}
//# sourceMappingURL=query-async.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "query": () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first: HTMLDivElement;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
        descriptor: (name) => {
            const descriptor = {
                get() {
                    var _a, _b;
                    return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                },
                enumerable: true,
                configurable: true,
            };
            if (cache) {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                descriptor.get = function () {
                    var _a, _b;
                    if (this[key] === undefined) {
                        this[key] = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                    }
                    return this[key];
                };
            }
            return descriptor;
        },
    });
}
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
    return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
        ...options,
        state: true,
    });
}
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "ReactiveElement": () => (/* binding */ ReactiveElement),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* binding */ defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "notEqual": () => (/* binding */ notEqual),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
var _e;
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */


const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
if (NODE_MODE) {
    (_a = global.customElements) !== null && _a !== void 0 ? _a : (global.customElements = {
        define() { },
    });
}
const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = global
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? global.reactiveElementPolyfillSupportDevMode
    : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_b = global.litIssuedWarnings) !== null && _b !== void 0 ? _b : (global.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.inUse) && polyfillSupport === undefined) {
        issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
    requestUpdateThenable = (name) => ({
        then: (onfulfilled, _onrejected) => {
            issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` +
                `does so on \`${name}\`. Use \`updateComplete\` instead.`);
            if (onfulfilled !== undefined) {
                onfulfilled(false);
            }
        },
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
const htmlElementShimNeeded = NODE_MODE && global.HTMLElement === undefined;
if (htmlElementShimNeeded) {
    global.HTMLElement = class HTMLElement {
    };
}
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this._initialize();
    }
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        var _a;
        (_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = []);
        this._initializers.push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        var _a;
        // if this is a state property, force the attribute to false.
        if (options.state) {
            // Cast as any since this is readonly.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.attribute = false;
        }
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure finalization has been kicked off.
        this.finalize();
        this.elementProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
                if (DEV_MODE) {
                    // If this class doesn't have its own set, create one and initialize
                    // with the values in the set from the nearest ancestor class, if any.
                    if (!this.hasOwnProperty('__reactivePropertyKeys')) {
                        this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
                    }
                    this.__reactivePropertyKeys.add(name);
                }
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties, sets up element
     * styling, and ensures any superclasses are also finalized. Returns true if
     * the element was finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(finalized)) {
            return false;
        }
        this[finalized] = true;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        this.elementProperties = new Map(superCtor.elementProperties);
        // initialize Map populated in observedAttributes
        this.__attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...Object.getOwnPropertySymbols(props),
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeScript lack of support for symbol in
                // index types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.createProperty(p, props[p]);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        // DEV mode warnings
        if (DEV_MODE) {
            const warnRemovedOrRenamed = (name, renamed = false) => {
                if (this.prototype.hasOwnProperty(name)) {
                    issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` +
                        `has been ${renamed ? 'renamed' : 'removed'} ` +
                        `in this version of LitElement.`);
                }
            };
            warnRemovedOrRenamed('initialize');
            warnRemovedOrRenamed('requestUpdateInternal');
            warnRemovedOrRenamed('_getUpdateComplete', true);
        }
        return true;
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     *
     * @internal
     */
    _initialize() {
        var _a;
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        var _a, _b;
        ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        var _a;
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor.elementProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                this.__instanceProperties.set(p, this[p]);
                delete this[p];
            }
        });
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        // create renderRoot before first update.
        if (this.renderRoot === undefined) {
            this.renderRoot = this.createRenderRoot();
        }
        this.enableUpdating(true);
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        var _a;
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const converter = ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !==
                undefined
                ? options.converter
                : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        var _a;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function'
                ? { fromAttribute: options.converter }
                : ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== undefined
                    ? options.converter
                    : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            this[propName] = converter.fromAttribute(value, options.type
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            );
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            options =
                options ||
                    this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged || notEqual;
            if (hasChanged(this[name], oldValue)) {
                if (!this._$changedProperties.has(name)) {
                    this._$changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && this.__reflectingProperty !== name) {
                    if (this.__reflectingProperties === undefined) {
                        this.__reflectingProperties = new Map();
                    }
                    this.__reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this.isUpdatePending && shouldRequestUpdate) {
            this.__updatePromise = this.__enqueueUpdate();
        }
        // Note, since this no longer returns a promise, in dev mode we return a
        // thenable which warns if it's called.
        return DEV_MODE
            ? requestUpdateThenable(this.localName)
            : undefined;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        return this.performUpdate();
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * Note: To ensure `performUpdate()` synchronously completes a pending update,
     * it should not be overridden. In LitElement 2.x it was suggested to override
     * `performUpdate()` to also customizing update scheduling. Instead, you should now
     * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
     * scheduling updates via `performUpdate()` continues to work, but will make
     * also calling `performUpdate()` to synchronously process updates difficult.
     *
     * @category updates
     */
    performUpdate() {
        var _a, _b;
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: 'update' });
        // create renderRoot before first update.
        if (!this.hasUpdated) {
            // Produce warning if any class properties are shadowed by class fields
            if (DEV_MODE) {
                const shadowedProperties = [];
                (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                    var _a;
                    if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                        shadowedProperties.push(p);
                    }
                });
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
        }
        // Mixin instance properties once, if they exist.
        if (this.__instanceProperties) {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.__instanceProperties.forEach((v, p) => (this[p] = v));
            this.__instanceProperties = undefined;
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        if (this.__reflectingProperties !== undefined) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
            this.__reflectingProperties = undefined;
        }
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
_e = finalized;
/**
 * Marks class as having finished creating properties.
 */
ReactiveElement[_e] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */
ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
if (htmlElementShimNeeded) {
    delete global.HTMLElement;
}
// Apply polyfills if available
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = ['change-in-update'];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (this.enabledWarnings.indexOf(warning) < 0) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_d = global.reactiveElementVersions) !== null && _d !== void 0 ? _d : (global.reactiveElementVersions = [])).push('1.4.0');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "LitElement": () => (/* binding */ LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* binding */ UpdatingElement),
/* harmony export */   "_$LE": () => (/* binding */ _$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




// For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.
const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        var _b;
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement['finalized'] = true;
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
// Install hydration if available
(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? globalThis.litElementPolyfillSupportDevMode
    : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
// DEV mode warnings
if (DEV_MODE) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Note, for compatibility with closure compilation, this access
    // needs to be as a string property index.
    LitElement['finalize'] = function () {
        const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
        if (!finalized) {
            return false;
        }
        const warnRemovedOrRenamed = (obj, name, renamed = false) => {
            if (obj.hasOwnProperty(name)) {
                const ctorName = (typeof obj === 'function' ? obj : obj.constructor)
                    .name;
                issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` +
                    `has been ${renamed ? 'renamed' : 'removed'} ` +
                    `in this version of LitElement.`);
            }
        };
        warnRemovedOrRenamed(this, 'render');
        warnRemovedOrRenamed(this, 'getStyles', true);
        warnRemovedOrRenamed(this.prototype, 'adoptStyles');
        return true;
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : (globalThis.litElementVersions = [])).push('3.2.2');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/async-directive.js":
/*!**************************************************************!*\
  !*** ./node_modules/lit-html/development/async-directive.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncDirective": () => (/* binding */ AsyncDirective),
/* harmony export */   "Directive": () => (/* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive),
/* harmony export */   "PartType": () => (/* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType),
/* harmony export */   "directive": () => (/* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)
/* harmony export */ });
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



const DEV_MODE = true;
/**
 * Recursively walks down the tree of Parts/TemplateInstances/Directives to set
 * the connected state of directives and run `disconnected`/ `reconnected`
 * callbacks.
 *
 * @return True if there were children to disconnect; false otherwise
 */
const notifyChildrenConnectedChanged = (parent, isConnected) => {
    var _a, _b;
    const children = parent._$disconnectableChildren;
    if (children === undefined) {
        return false;
    }
    for (const obj of children) {
        // The existence of `_$notifyDirectiveConnectionChanged` is used as a "brand" to
        // disambiguate AsyncDirectives from other DisconnectableChildren
        // (as opposed to using an instanceof check to know when to call it); the
        // redundancy of "Directive" in the API name is to avoid conflicting with
        // `_$notifyConnectionChanged`, which exists `ChildParts` which are also in
        // this list
        // Disconnect Directive (and any nested directives contained within)
        // This property needs to remain unminified.
        (_b = (_a = obj)['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(_a, isConnected, false);
        // Disconnect Part/TemplateInstance
        notifyChildrenConnectedChanged(obj, isConnected);
    }
    return true;
};
/**
 * Removes the given child from its parent list of disconnectable children, and
 * if the parent list becomes empty as a result, removes the parent from its
 * parent, and so forth up the tree when that causes subsequent parent lists to
 * become empty.
 */
const removeDisconnectableFromParent = (obj) => {
    let parent, children;
    do {
        if ((parent = obj._$parent) === undefined) {
            break;
        }
        children = parent._$disconnectableChildren;
        children.delete(obj);
        obj = parent;
    } while ((children === null || children === void 0 ? void 0 : children.size) === 0);
};
const addDisconnectableToParent = (obj) => {
    // Climb the parent tree, creating a sparse tree of children needing
    // disconnection
    for (let parent; (parent = obj._$parent); obj = parent) {
        let children = parent._$disconnectableChildren;
        if (children === undefined) {
            parent._$disconnectableChildren = children = new Set();
        }
        else if (children.has(obj)) {
            // Once we've reached a parent that already contains this child, we
            // can short-circuit
            break;
        }
        children.add(obj);
        installDisconnectAPI(parent);
    }
};
/**
 * Changes the parent reference of the ChildPart, and updates the sparse tree of
 * Disconnectable children accordingly.
 *
 * Note, this method will be patched onto ChildPart instances and called from
 * the core code when parts are moved between different parents.
 */
function reparentDisconnectables(newParent) {
    if (this._$disconnectableChildren !== undefined) {
        removeDisconnectableFromParent(this);
        this._$parent = newParent;
        addDisconnectableToParent(this);
    }
    else {
        this._$parent = newParent;
    }
}
/**
 * Sets the connected state on any directives contained within the committed
 * value of this part (i.e. within a TemplateInstance or iterable of
 * ChildParts) and runs their `disconnected`/`reconnected`s, as well as within
 * any directives stored on the ChildPart (when `valueOnly` is false).
 *
 * `isClearingValue` should be passed as `true` on a top-level part that is
 * clearing itself, and not as a result of recursively disconnecting directives
 * as part of a `clear` operation higher up the tree. This both ensures that any
 * directive on this ChildPart that produced a value that caused the clear
 * operation is not disconnected, and also serves as a performance optimization
 * to avoid needless bookkeeping when a subtree is going away; when clearing a
 * subtree, only the top-most part need to remove itself from the parent.
 *
 * `fromPartIndex` is passed only in the case of a partial `_clear` running as a
 * result of truncating an iterable.
 *
 * Note, this method will be patched onto ChildPart instances and called from the
 * core code when parts are cleared or the connection state is changed by the
 * user.
 */
function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
    const value = this._$committedValue;
    const children = this._$disconnectableChildren;
    if (children === undefined || children.size === 0) {
        return;
    }
    if (isClearingValue) {
        if (Array.isArray(value)) {
            // Iterable case: Any ChildParts created by the iterable should be
            // disconnected and removed from this ChildPart's disconnectable
            // children (starting at `fromPartIndex` in the case of truncation)
            for (let i = fromPartIndex; i < value.length; i++) {
                notifyChildrenConnectedChanged(value[i], false);
                removeDisconnectableFromParent(value[i]);
            }
        }
        else if (value != null) {
            // TemplateInstance case: If the value has disconnectable children (will
            // only be in the case that it is a TemplateInstance), we disconnect it
            // and remove it from this ChildPart's disconnectable children
            notifyChildrenConnectedChanged(value, false);
            removeDisconnectableFromParent(value);
        }
    }
    else {
        notifyChildrenConnectedChanged(this, isConnected);
    }
}
/**
 * Patches disconnection API onto ChildParts.
 */
const installDisconnectAPI = (obj) => {
    var _a, _b;
    var _c, _d;
    if (obj.type == _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
        (_a = (_c = obj)._$notifyConnectionChanged) !== null && _a !== void 0 ? _a : (_c._$notifyConnectionChanged = notifyChildPartConnectedChanged);
        (_b = (_d = obj)._$reparentDisconnectables) !== null && _b !== void 0 ? _b : (_d._$reparentDisconnectables = reparentDisconnectables);
    }
};
/**
 * An abstract `Directive` base class whose `disconnected` method will be
 * called when the part containing the directive is cleared as a result of
 * re-rendering, or when the user calls `part.setConnected(false)` on
 * a part that was previously rendered containing the directive (as happens
 * when e.g. a LitElement disconnects from the DOM).
 *
 * If `part.setConnected(true)` is subsequently called on a
 * containing part, the directive's `reconnected` method will be called prior
 * to its next `update`/`render` callbacks. When implementing `disconnected`,
 * `reconnected` should also be implemented to be compatible with reconnection.
 *
 * Note that updates may occur while the directive is disconnected. As such,
 * directives should generally check the `this.isConnected` flag during
 * render/update to determine whether it is safe to subscribe to resources
 * that may prevent garbage collection.
 */
class AsyncDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor() {
        super(...arguments);
        // @internal
        this._$disconnectableChildren = undefined;
    }
    /**
     * Initialize the part with internal fields
     * @param part
     * @param parent
     * @param attributeIndex
     */
    _$initialize(part, parent, attributeIndex) {
        super._$initialize(part, parent, attributeIndex);
        addDisconnectableToParent(this);
        this.isConnected = part._$isConnected;
    }
    // This property needs to remain unminified.
    /**
     * Called from the core code when a directive is going away from a part (in
     * which case `shouldRemoveFromParent` should be true), and from the
     * `setChildrenConnected` helper function when recursively changing the
     * connection state of a tree (in which case `shouldRemoveFromParent` should
     * be false).
     *
     * @param isConnected
     * @param isClearingDirective - True when the directive itself is being
     *     removed; false when the tree is being disconnected
     * @internal
     */
    ['_$notifyDirectiveConnectionChanged'](isConnected, isClearingDirective = true) {
        var _a, _b;
        if (isConnected !== this.isConnected) {
            this.isConnected = isConnected;
            if (isConnected) {
                (_a = this.reconnected) === null || _a === void 0 ? void 0 : _a.call(this);
            }
            else {
                (_b = this.disconnected) === null || _b === void 0 ? void 0 : _b.call(this);
            }
        }
        if (isClearingDirective) {
            notifyChildrenConnectedChanged(this, isConnected);
            removeDisconnectableFromParent(this);
        }
    }
    /**
     * Sets the value of the directive's Part outside the normal `update`/`render`
     * lifecycle of a directive.
     *
     * This method should not be called synchronously from a directive's `update`
     * or `render`.
     *
     * @param directive The directive to update
     * @param value The value to set
     */
    setValue(value) {
        if ((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isSingleExpression)(this.__part)) {
            this.__part._$setValue(value, this);
        }
        else {
            // this.__attributeIndex will be defined in this case, but
            // assert it in dev mode
            if (DEV_MODE && this.__attributeIndex === undefined) {
                throw new Error(`Expected this.__attributeIndex to be a number`);
            }
            const newValues = [...this.__part._$committedValue];
            newValues[this.__attributeIndex] = value;
            this.__part._$setValue(newValues, this, 0);
        }
    }
    /**
     * User callbacks for implementing logic to release any resources/subscriptions
     * that may have been retained by this directive. Since directives may also be
     * re-connected, `reconnected` should also be implemented to restore the
     * working state of the directive prior to the next render.
     */
    disconnected() { }
    reconnected() { }
}
//# sourceMappingURL=async-directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive-helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directive-helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateResultType": () => (/* binding */ TemplateResultType),
/* harmony export */   "clearPart": () => (/* binding */ clearPart),
/* harmony export */   "getCommittedValue": () => (/* binding */ getCommittedValue),
/* harmony export */   "getDirectiveClass": () => (/* binding */ getDirectiveClass),
/* harmony export */   "insertPart": () => (/* binding */ insertPart),
/* harmony export */   "isDirectiveResult": () => (/* binding */ isDirectiveResult),
/* harmony export */   "isPrimitive": () => (/* binding */ isPrimitive),
/* harmony export */   "isSingleExpression": () => (/* binding */ isSingleExpression),
/* harmony export */   "isTemplateResult": () => (/* binding */ isTemplateResult),
/* harmony export */   "removePart": () => (/* binding */ removePart),
/* harmony export */   "setChildPartValue": () => (/* binding */ setChildPartValue),
/* harmony export */   "setCommittedValue": () => (/* binding */ setCommittedValue)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;

const { _ChildPart: ChildPart } = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH;
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
    ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true
    ? window.ShadyDOM.wrap
    : (node) => node;
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const TemplateResultType = {
    HTML: 1,
    SVG: 2,
};
/**
 * Tests if a value is a TemplateResult.
 */
const isTemplateResult = (value, type) => type === undefined
    ? // This property needs to remain unminified.
        (value === null || value === void 0 ? void 0 : value['_$litType$']) !== undefined
    : (value === null || value === void 0 ? void 0 : value['_$litType$']) === type;
/**
 * Tests if a value is a DirectiveResult.
 */
const isDirectiveResult = (value) => 
// This property needs to remain unminified.
(value === null || value === void 0 ? void 0 : value['_$litDirective$']) !== undefined;
/**
 * Retrieves the Directive class for a DirectiveResult
 */
const getDirectiveClass = (value) => 
// This property needs to remain unminified.
value === null || value === void 0 ? void 0 : value['_$litDirective$'];
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
const isSingleExpression = (part) => part.strings === undefined;
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
    var _a;
    const container = wrap(containerPart._$startNode).parentNode;
    const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
    if (part === undefined) {
        const startNode = wrap(container).insertBefore(createMarker(), refNode);
        const endNode = wrap(container).insertBefore(createMarker(), refNode);
        part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
    }
    else {
        const endNode = wrap(part._$endNode).nextSibling;
        const oldParent = part._$parent;
        const parentChanged = oldParent !== containerPart;
        if (parentChanged) {
            (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart);
            // Note that although `_$reparentDisconnectables` updates the part's
            // `_$parent` reference after unlinking from its current parent, that
            // method only exists if Disconnectables are present, so we need to
            // unconditionally set it here
            part._$parent = containerPart;
            // Since the _$isConnected getter is somewhat costly, only
            // read it once we know the subtree has directives that need
            // to be notified
            let newConnectionState;
            if (part._$notifyConnectionChanged !== undefined &&
                (newConnectionState = containerPart._$isConnected) !==
                    oldParent._$isConnected) {
                part._$notifyConnectionChanged(newConnectionState);
            }
        }
        if (endNode !== refNode || parentChanged) {
            let start = part._$startNode;
            while (start !== endNode) {
                const n = wrap(start).nextSibling;
                wrap(container).insertBefore(start, refNode);
                start = n;
            }
        }
    }
    return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
    part._$setValue(value, directiveParent);
    return part;
};
// A sentinal value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => (part._$committedValue = value);
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being commited.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = (part) => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = (part) => {
    var _a;
    (_a = part._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
    let start = part._$startNode;
    const end = wrap(part._$endNode).nextSibling;
    while (start !== end) {
        const n = wrap(start).nextSibling;
        wrap(start).remove();
        start = n;
    }
};
const clearPart = (part) => {
    part._$clear();
};
//# sourceMappingURL=directive-helpers.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directive": () => (/* binding */ Directive),
/* harmony export */   "PartType": () => (/* binding */ PartType),
/* harmony export */   "directive": () => (/* binding */ directive)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    // This property needs to remain unminified.
    ['_$litDirective$']: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/class-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/class-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* binding */ classMap)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class ClassMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        var _a;
        super(partInfo);
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
            partInfo.name !== 'class' ||
            ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
            throw new Error('`classMap()` can only be used in the `class` attribute ' +
                'and must be the only part in the attribute.');
        }
    }
    render(classInfo) {
        // Add spaces to ensure separation from static classes
        return (' ' +
            Object.keys(classInfo)
                .filter((key) => classInfo[key])
                .join(' ') +
            ' ');
    }
    update(part, [classInfo]) {
        var _a, _b;
        // Remember dynamic classes on the first render
        if (this._previousClasses === undefined) {
            this._previousClasses = new Set();
            if (part.strings !== undefined) {
                this._staticClasses = new Set(part.strings
                    .join(' ')
                    .split(/\s/)
                    .filter((s) => s !== ''));
            }
            for (const name in classInfo) {
                if (classInfo[name] && !((_a = this._staticClasses) === null || _a === void 0 ? void 0 : _a.has(name))) {
                    this._previousClasses.add(name);
                }
            }
            return this.render(classInfo);
        }
        const classList = part.element.classList;
        // Remove old classes that no longer apply
        // We use forEach() instead of for-of so that we don't require down-level
        // iteration.
        this._previousClasses.forEach((name) => {
            if (!(name in classInfo)) {
                classList.remove(name);
                this._previousClasses.delete(name);
            }
        });
        // Add or remove classes based on their classMap value
        for (const name in classInfo) {
            // We explicitly want a loose truthy check of `value` because it seems
            // more convenient that '' and 0 are skipped.
            const value = !!classInfo[name];
            if (value !== this._previousClasses.has(name) &&
                !((_b = this._staticClasses) === null || _b === void 0 ? void 0 : _b.has(name))) {
                if (value) {
                    classList.add(name);
                    this._previousClasses.add(name);
                }
                else {
                    classList.remove(name);
                    this._previousClasses.delete(name);
                }
            }
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
}
/**
 * A directive that applies dynamic CSS classes.
 *
 * This must be used in the `class` attribute and must be the only part used in
 * the attribute. It takes each property in the `classInfo` argument and adds
 * the property name to the element's `classList` if the property value is
 * truthy; if the property value is falsey, the property name is removed from
 * the element's `class`.
 *
 * For example `{foo: bar}` applies the class `foo` if the value of `bar` is
 * truthy.
 *
 * @param classInfo
 */
const classMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(ClassMapDirective);
//# sourceMappingURL=class-map.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/if-defined.js":
/*!********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/if-defined.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": () => (/* binding */ ifDefined)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = (value) => value !== null && value !== void 0 ? value : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
//# sourceMappingURL=if-defined.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/ref.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/ref.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRef": () => (/* binding */ createRef),
/* harmony export */   "ref": () => (/* binding */ ref)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _async_directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../async-directive.js */ "./node_modules/lit-html/development/async-directive.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


/**
 * Creates a new Ref object, which is container for a reference to an element.
 */
const createRef = () => new Ref();
/**
 * An object that holds a ref value.
 */
class Ref {
}
// When callbacks are used for refs, this map tracks the last value the callback
// was called with, for ensuring a directive doesn't clear the ref if the ref
// has already been rendered to a new spot. It is double-keyed on both the
// context (`options.host`) and the callback, since we auto-bind class methods
// to `options.host`.
const lastElementForContextAndCallback = new WeakMap();
class RefDirective extends _async_directive_js__WEBPACK_IMPORTED_MODULE_1__.AsyncDirective {
    render(_ref) {
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    update(part, [ref]) {
        var _a;
        const refChanged = ref !== this._ref;
        if (refChanged && this._ref !== undefined) {
            // The ref passed to the directive has changed;
            // unset the previous ref's value
            this._updateRefValue(undefined);
        }
        if (refChanged || this._lastElementForRef !== this._element) {
            // We either got a new ref or this is the first render;
            // store the ref/element & update the ref value
            this._ref = ref;
            this._context = (_a = part.options) === null || _a === void 0 ? void 0 : _a.host;
            this._updateRefValue((this._element = part.element));
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    _updateRefValue(element) {
        var _a;
        if (typeof this._ref === 'function') {
            // If the current ref was called with a previous value, call with
            // `undefined`; We do this to ensure callbacks are called in a consistent
            // way regardless of whether a ref might be moving up in the tree (in
            // which case it would otherwise be called with the new value before the
            // previous one unsets it) and down in the tree (where it would be unset
            // before being set). Note that element lookup is keyed by
            // both the context and the callback, since we allow passing unbound
            // functions that are called on options.host, and we want to treat
            // these as unique "instances" of a function.
            const context = (_a = this._context) !== null && _a !== void 0 ? _a : globalThis;
            let lastElementForCallback = lastElementForContextAndCallback.get(context);
            if (lastElementForCallback === undefined) {
                lastElementForCallback = new WeakMap();
                lastElementForContextAndCallback.set(context, lastElementForCallback);
            }
            if (lastElementForCallback.get(this._ref) !== undefined) {
                this._ref.call(this._context, undefined);
            }
            lastElementForCallback.set(this._ref, element);
            // Call the ref with the new element value
            if (element !== undefined) {
                this._ref.call(this._context, element);
            }
        }
        else {
            this._ref.value = element;
        }
    }
    get _lastElementForRef() {
        var _a, _b, _c;
        return typeof this._ref === 'function'
            ? (_b = lastElementForContextAndCallback
                .get((_a = this._context) !== null && _a !== void 0 ? _a : globalThis)) === null || _b === void 0 ? void 0 : _b.get(this._ref)
            : (_c = this._ref) === null || _c === void 0 ? void 0 : _c.value;
    }
    disconnected() {
        // Only clear the box if our element is still the one in it (i.e. another
        // directive instance hasn't rendered its element to it before us); that
        // only happens in the event of the directive being cleared (not via manual
        // disconnection)
        if (this._lastElementForRef === this._element) {
            this._updateRefValue(undefined);
        }
    }
    reconnected() {
        // If we were manually disconnected, we can safely put our element back in
        // the box, since no rendering could have occurred to change its state
        this._updateRefValue(this._element);
    }
}
/**
 * Sets the value of a Ref object or calls a ref callback with the element it's
 * bound to.
 *
 * A Ref object acts as a container for a reference to an element. A ref
 * callback is a function that takes an element as its only argument.
 *
 * The ref directive sets the value of the Ref object or calls the ref callback
 * during rendering, if the referenced element changed.
 *
 * Note: If a ref callback is rendered to a different element position or is
 * removed in a subsequent render, it will first be called with `undefined`,
 * followed by another call with the new element it was rendered to (if any).
 *
 * ```js
 * // Using Ref object
 * const inputRef = createRef();
 * render(html`<input ${ref(inputRef)}>`, container);
 * inputRef.value.focus();
 *
 * // Using callback
 * const callback = (inputElement) => inputElement.focus();
 * render(html`<input ${ref(callback)}>`, container);
 * ```
 */
const ref = (0,_async_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(RefDirective);
//# sourceMappingURL=ref.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/style-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/style-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleMap": () => (/* binding */ styleMap)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class StyleMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        var _a;
        super(partInfo);
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
            partInfo.name !== 'style' ||
            ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
            throw new Error('The `styleMap` directive must be used in the `style` attribute ' +
                'and must be the only part in the attribute.');
        }
    }
    render(styleInfo) {
        return Object.keys(styleInfo).reduce((style, prop) => {
            const value = styleInfo[prop];
            if (value == null) {
                return style;
            }
            // Convert property names from camel-case to dash-case, i.e.:
            //  `backgroundColor` -> `background-color`
            // Vendor-prefixed names need an extra `-` appended to front:
            //  `webkitAppearance` -> `-webkit-appearance`
            // Exception is any property name containing a dash, including
            // custom properties; we assume these are already dash-cased i.e.:
            //  `--my-button-color` --> `--my-button-color`
            prop = prop
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                .toLowerCase();
            return style + `${prop}:${value};`;
        }, '');
    }
    update(part, [styleInfo]) {
        const { style } = part.element;
        if (this._previousStyleProperties === undefined) {
            this._previousStyleProperties = new Set();
            for (const name in styleInfo) {
                this._previousStyleProperties.add(name);
            }
            return this.render(styleInfo);
        }
        // Remove old properties that no longer exist in styleInfo
        // We use forEach() instead of for-of so that re don't require down-level
        // iteration.
        this._previousStyleProperties.forEach((name) => {
            // If the name isn't in styleInfo or it's null/undefined
            if (styleInfo[name] == null) {
                this._previousStyleProperties.delete(name);
                if (name.includes('-')) {
                    style.removeProperty(name);
                }
                else {
                    // Note reset using empty string (vs null) as IE11 does not always
                    // reset via null (https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style#setting_styles)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    style[name] = '';
                }
            }
        });
        // Add or update properties
        for (const name in styleInfo) {
            const value = styleInfo[name];
            if (value != null) {
                this._previousStyleProperties.add(name);
                if (name.includes('-')) {
                    style.setProperty(name, value);
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    style[name] = value;
                }
            }
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
}
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the
 * {@link StyleInfo styleInfo} object and adds the property values as CSS
 * properties. Property names with dashes (`-`) are assumed to be valid CSS
 * property names and set on the element's style object using `setProperty()`.
 * Names without dashes are assumed to be camelCased JavaScript property names
 * and set on the element's style object using property assignment, allowing the
 * style object to translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo
 * @see {@link https://lit.dev/docs/templates/directives/#stylemap styleMap code samples on Lit.dev}
 */
const styleMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(StyleMapDirective);
//# sourceMappingURL=style-map.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/unsafe-html.js":
/*!*********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/unsafe-html.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": () => (/* binding */ UnsafeHTMLDirective),
/* harmony export */   "unsafeHTML": () => (/* binding */ unsafeHTML)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const HTML_RESULT = 1;
class UnsafeHTMLDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        super(partInfo);
        this._value = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
            throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
        }
    }
    render(value) {
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing || value == null) {
            this._templateResult = undefined;
            return (this._value = value);
        }
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange) {
            return value;
        }
        if (typeof value != 'string') {
            throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
        }
        if (value === this._value) {
            return this._templateResult;
        }
        this._value = value;
        const strings = [value];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        strings.raw = strings;
        // WARNING: impersonating a TemplateResult like this is extremely
        // dangerous. Third-party directives should not do this.
        return (this._templateResult = {
            // Cast to a known set of integers that satisfy ResultType so that we
            // don't have to export ResultType and possibly encourage this pattern.
            // This property needs to remain unminified.
            ['_$litType$']: this.constructor
                .resultType,
            strings,
            values: [],
        });
    }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(UnsafeHTMLDirective);
//# sourceMappingURL=unsafe-html.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/when.js":
/*!**************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/when.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "when": () => (/* binding */ when)
/* harmony export */ });
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function when(condition, trueCase, falseCase) {
    return condition ? trueCase() : falseCase === null || falseCase === void 0 ? void 0 : falseCase();
}
//# sourceMappingURL=when.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_$LH": () => (/* binding */ _$LH),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "noChange": () => (/* binding */ noChange),
/* harmony export */   "nothing": () => (/* binding */ nothing),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "svg": () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
// Use window for browser builds because IE11 doesn't have globalThis.
const global = NODE_MODE ? globalThis : window;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
if (DEV_MODE) {
    (_a = global.litIssuedWarnings) !== null && _a !== void 0 ? _a : (global.litIssuedWarnings = new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!global.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_b = global.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) &&
    ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
    ? global.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = NODE_MODE
    ? {
        createTreeWalker() {
            return {};
        },
    }
    : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = (v = '') => d.createComment(v);
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => isArray(value) ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */
const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
const render = (value, container, options) => {
    var _a, _b;
    if (DEV_MODE && container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError(`The container to render into may not be ${container}`);
    }
    const renderId = DEV_MODE ? debugLogRenderId++ : 0;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if (DEV_MODE) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!Array.isArray(strings) || !strings.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if (DEV_MODE) {
            message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.

          If you're using the html or svg tagged template functions normally
          and and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `
                .trim()
                .replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    // Returned as an array for terseness
    return [
        policy !== undefined
            ? policy.createHTML(htmlResult)
            : htmlResult,
        attrNames,
    ];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        /** @internal */
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                if (DEV_MODE) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _neccessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings,
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        /** @internal */
        this._parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._parts) {
            if (part !== undefined) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this,
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        var _a;
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _a, _b;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            parentNode.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        var _a;
        if (DEV_MODE && this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options,
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            if (DEV_MODE && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.host) === value) {
                this._commitText(`[probable mistake: rendered a template's host in itself ` +
                    `(commonly caused by writing \${this} in a template]`);
                console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                return;
            }
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node, ref = this._$endNode) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, ref);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and make do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options,
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options,
            });
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = document.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options,
                });
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: wrap(this._$startNode).nextSibling,
                    value,
                    options: this.options,
                });
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(type.h, this.options)),
                type);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._parts,
                options: this.options,
                values,
            });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            instance._update(values);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this metod
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        var _a;
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
        }
        else if (DEV_MODE) {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options,
        });
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener =
            (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener,
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options,
        });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in hydrate
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    // Used in tests and private-ssr-support
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? global.litHtmlPolyfillSupportDevMode
    : global.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : (global.litHtmlVersions = [])).push('2.3.0');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/static.js":
/*!*****************************************************!*\
  !*** ./node_modules/lit-html/development/static.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "literal": () => (/* binding */ literal),
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "unsafeStatic": () => (/* binding */ unsafeStatic),
/* harmony export */   "withStatic": () => (/* binding */ withStatic)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Any new exports need to be added to the export statement in
// `packages/lit/src/index.all.ts`.

/**
 * Prevents JSON injection attacks.
 *
 * The goals of this brand:
 *   1) fast to check
 *   2) code is small on the wire
 *   3) multiple versions of Lit in a single page will all produce mutually
 *      interoperable StaticValues
 *   4) normal JSON.parse (without an unusual reviver) can not produce a
 *      StaticValue
 *
 * Symbols satisfy (1), (2), and (4). We use Symbol.for to satisfy (3), but
 * we don't care about the key, so we break ties via (2) and use the empty
 * string.
 */
const brand = Symbol.for('');
/** Safely extracts the string part of a StaticValue. */
const unwrapStaticValue = (value) => {
    if ((value === null || value === void 0 ? void 0 : value.r) !== brand) {
        return undefined;
    }
    return value === null || value === void 0 ? void 0 : value['_$litStatic$'];
};
/**
 * Wraps a string so that it behaves like part of the static template
 * strings instead of a dynamic value.
 *
 * Users must take care to ensure that adding the static string to the template
 * results in well-formed HTML, or else templates may break unexpectedly.
 *
 * Note that this function is unsafe to use on untrusted content, as it will be
 * directly parsed into HTML. Do not pass user input to this function
 * without sanitizing it.
 *
 * Static values can be changed, but they will cause a complete re-render
 * since they effectively create a new template.
 */
const unsafeStatic = (value) => ({
    ['_$litStatic$']: value,
    r: brand,
});
const textFromStatic = (value) => {
    if (value['_$litStatic$'] !== undefined) {
        return value['_$litStatic$'];
    }
    else {
        throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${value}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
    }
};
/**
 * Tags a string literal so that it behaves like part of the static template
 * strings instead of a dynamic value.
 *
 * The only values that may be used in template expressions are other tagged
 * `literal` results or `unsafeStatic` values (note that untrusted content
 * should never be passed to `unsafeStatic`).
 *
 * Users must take care to ensure that adding the static string to the template
 * results in well-formed HTML, or else templates may break unexpectedly.
 *
 * Static values can be changed, but they will cause a complete re-render since
 * they effectively create a new template.
 */
const literal = (strings, ...values) => ({
    ['_$litStatic$']: values.reduce((acc, v, idx) => acc + textFromStatic(v) + strings[idx + 1], strings[0]),
    r: brand,
});
const stringsCache = new Map();
/**
 * Wraps a lit-html template tag (`html` or `svg`) to add static value support.
 */
const withStatic = (coreTag) => (strings, ...values) => {
    const l = values.length;
    let staticValue;
    let dynamicValue;
    const staticStrings = [];
    const dynamicValues = [];
    let i = 0;
    let hasStatics = false;
    let s;
    while (i < l) {
        s = strings[i];
        // Collect any unsafeStatic values, and their following template strings
        // so that we treat a run of template strings and unsafe static values as
        // a single template string.
        while (i < l &&
            ((dynamicValue = values[i]),
                (staticValue = unwrapStaticValue(dynamicValue))) !== undefined) {
            s += staticValue + strings[++i];
            hasStatics = true;
        }
        dynamicValues.push(dynamicValue);
        staticStrings.push(s);
        i++;
    }
    // If the last value isn't static (which would have consumed the last
    // string), then we need to add the last string.
    if (i === l) {
        staticStrings.push(strings[l]);
    }
    if (hasStatics) {
        const key = staticStrings.join('$$lit$$');
        strings = stringsCache.get(key);
        if (strings === undefined) {
            // Beware: in general this pattern is unsafe, and doing so may bypass
            // lit's security checks and allow an attacker to execute arbitrary
            // code and inject arbitrary content.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            staticStrings.raw = staticStrings;
            stringsCache.set(key, (strings = staticStrings));
        }
        values = dynamicValues;
    }
    return coreTag(strings, ...values);
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * Includes static value support from `lit-html/static.js`.
 */
const html = withStatic(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 *
 * Includes static value support from `lit-html/static.js`.
 */
const svg = withStatic(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.svg);
//# sourceMappingURL=static.js.map

/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customElement": () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   "eventOptions": () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   "property": () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   "query": () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query),
/* harmony export */   "queryAll": () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll),
/* harmony export */   "queryAssignedElements": () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements),
/* harmony export */   "queryAssignedNodes": () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes),
/* harmony export */   "queryAsync": () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync),
/* harmony export */   "state": () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");

//# sourceMappingURL=decorators.js.map


/***/ }),

/***/ "./node_modules/lit/directive.js":
/*!***************************************!*\
  !*** ./node_modules/lit/directive.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directive": () => (/* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.Directive),
/* harmony export */   "PartType": () => (/* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.PartType),
/* harmony export */   "directive": () => (/* reexport safe */ lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.directive)
/* harmony export */ });
/* harmony import */ var lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directive.js */ "./node_modules/lit-html/development/directive.js");

//# sourceMappingURL=directive.js.map


/***/ }),

/***/ "./node_modules/lit/directives/class-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/class-map.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classMap": () => (/* reexport safe */ lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.classMap)
/* harmony export */ });
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/development/directives/class-map.js");

//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ "./node_modules/lit/directives/if-defined.js":
/*!***************************************************!*\
  !*** ./node_modules/lit/directives/if-defined.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifDefined": () => (/* reexport safe */ lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined)
/* harmony export */ });
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/development/directives/if-defined.js");

//# sourceMappingURL=if-defined.js.map


/***/ }),

/***/ "./node_modules/lit/directives/ref.js":
/*!********************************************!*\
  !*** ./node_modules/lit/directives/ref.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRef": () => (/* reexport safe */ lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "ref": () => (/* reexport safe */ lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__.ref)
/* harmony export */ });
/* harmony import */ var lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/ref.js */ "./node_modules/lit-html/development/directives/ref.js");

//# sourceMappingURL=ref.js.map


/***/ }),

/***/ "./node_modules/lit/directives/style-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/style-map.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleMap": () => (/* reexport safe */ lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__.styleMap)
/* harmony export */ });
/* harmony import */ var lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/style-map.js */ "./node_modules/lit-html/development/directives/style-map.js");

//# sourceMappingURL=style-map.js.map


/***/ }),

/***/ "./node_modules/lit/directives/unsafe-html.js":
/*!****************************************************!*\
  !*** ./node_modules/lit/directives/unsafe-html.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": () => (/* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.UnsafeHTMLDirective),
/* harmony export */   "unsafeHTML": () => (/* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML)
/* harmony export */ });
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./node_modules/lit-html/development/directives/unsafe-html.js");

//# sourceMappingURL=unsafe-html.js.map


/***/ }),

/***/ "./node_modules/lit/directives/when.js":
/*!*********************************************!*\
  !*** ./node_modules/lit/directives/when.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "when": () => (/* reexport safe */ lit_html_directives_when_js__WEBPACK_IMPORTED_MODULE_0__.when)
/* harmony export */ });
/* harmony import */ var lit_html_directives_when_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/when.js */ "./node_modules/lit-html/development/directives/when.js");

//# sourceMappingURL=when.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   "LitElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
/* harmony export */   "_$LE": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/lit/static-html.js":
/*!*****************************************!*\
  !*** ./node_modules/lit/static-html.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": () => (/* reexport safe */ lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__.html),
/* harmony export */   "literal": () => (/* reexport safe */ lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__.literal),
/* harmony export */   "svg": () => (/* reexport safe */ lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__.svg),
/* harmony export */   "unsafeStatic": () => (/* reexport safe */ lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__.unsafeStatic),
/* harmony export */   "withStatic": () => (/* reexport safe */ lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__.withStatic)
/* harmony export */ });
/* harmony import */ var lit_html_static_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/static.js */ "./node_modules/lit-html/development/static.js");

//# sourceMappingURL=static-html.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************!*\
  !*** ./src/components/widget/widget.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Widget": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/types */ "./src/shared/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/components/widget/types.ts");


class Widget {
    constructor(config, parentElement = document.body) {
        const widgetContainer = document.createElement('div');
        widgetContainer.setAttribute('id', config.name);
        if (config.style)
            Object.keys(config.style).forEach(styleName => {
                if (config.style)
                    widgetContainer.style[styleName] = config.style[styleName];
            });
        parentElement.appendChild(widgetContainer);
        checkTime(() => {
            config.componentList.forEach(e => {
                setTimeout(() => {
                    if (!('name' in e))
                        widgetContainer.appendChild(createElement(e));
                    else
                        new Widget(e, widgetContainer);
                });
            });
        }, 'prepare components');
    }
}
function checkTime(func, logName) {
    const name = logName || Math.random().toString();
    console.time(name);
    func();
    console.timeEnd(name);
}
function createElement(elConfig) {
    const componentAttributeList = [];
    _types__WEBPACK_IMPORTED_MODULE_1__.SelectorAttributes[elConfig.selector].elementProperties.forEach((v, k) => {
        if (!v.state)
            componentAttributeList.push(k.toString());
    });
    const el = document.createElement(elConfig.selector);
    if (elConfig.attributes) {
        Object.keys(elConfig.attributes)
            .filter(attr => componentAttributeList.includes(attr))
            .forEach(attr => el.setAttribute(attr, elConfig.attributes && elConfig.attributes[attr] || ''));
    }
    return el;
}
const widgetConf = {
    name: 'widget', style: { gridTemplateColumns: '1fr' },
    componentList: [
        {
            name: 'row1',
            componentList: [
                { selector: _shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Input, attributes: { initInputValue: 'some text' } },
                { selector: _shared_types__WEBPACK_IMPORTED_MODULE_0__.Selector.Action }
            ],
            style: { display: 'flex', justifyContent: 'space-between' }
        }
    ]
};
new Widget(widgetConf);

})();

/******/ })()
;
//# sourceMappingURL=widget.bundle.js.map