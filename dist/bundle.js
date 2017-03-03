(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _module = require('./module1.js');

var _constants = require('./constants.js');

(0, _module.logMessage)('hello');
(0, _module.logMessage)('MAX_SOMETHING: ' + _constants.MAX_SOMETHING);

},{"./constants.js":2,"./module1.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MAX_SOMETHING = exports.MAX_SOMETHING = 10;
var MAX_OTHER = exports.MAX_OTHER = 20;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logMessage = logMessage;
function logMessage(text) {
    console.log(text);
}

},{}]},{},[1]);
