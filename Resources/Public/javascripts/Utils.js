Ext.ns('TYPO3.Newsletter');

TYPO3.Newsletter.Utils = {};

/**
 * Clone Function
 *
 * @param {Object/Array} o Object or array to clone
 * @return {Object/Array} Deep clone of an object or an array
 * @author Ing. Jozef Sakáloš
 */
TYPO3.Newsletter.Utils.clone = function(o) {
	if (!o || 'object' !== typeof o) {
		return o;
	}
	if ('function' === typeof o.clone) {
		return o.clone();
	}
	var c = '[object Array]' === Object.prototype.toString.call(o) ? [] : {};
	var p, v;
	for (p in o) {
		if (o.hasOwnProperty(p)) {
			v = o[p];
			if (v && 'object' === typeof v) {
				c[p] = TYPO3.Newsletter.Utils.clone(v);
			} else {
				c[p] = v;
			}
		}
	}
	return c;
};