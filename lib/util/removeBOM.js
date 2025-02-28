/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Jiahao Nan @inottn
*/

"use strict";

/**
 * Remove BOM from source string
 * @param {string} source the source string
 * @returns {string} the source string without BOM
 */
module.exports = function removeBOM(source) {
	return source[0] === "\uFEFF" ? source.slice(1) : source;
};
