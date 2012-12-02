"use strict";

/**
 * ErrorHandler
 * The ErrorHandler module.
 * @author rishabhsrao
 */
define([
	"lib.use!lib.debug",
	"jquery"
],
function(
	debug,
	jQuery
) {
	debug.log("Loading util.ErrorHandler");
	var Module = function() {
		var self = this;

		self.showError = function(error) {
			debug.error(error);

		};

		self.showWarn = function(error) {
			debug.warn(error);

		};

		self.showInfo = function(error) {
			debug.info(error);

		};

		return self;
	};

	return {
		createModule: function() {
			return new Module();
		}
	};
});