/**
 * TrailViewModel
 * The TrailViewModel module.
 */
define([
	"lib.use!lib.debug",
	"jquery",
	"lib.knockoutjs",
	"model.trail.TrailModel"
],
function(
	debug,
	jQuery,
	ko,
	TrailModel
) {
	"use strict";

	debug.info("viewmodel.Trail.TrailViewModel", "Loading");
	var Module = function() {
		var self = this;

		self.trail = ko.observable();

		self.initialize = function() {
			debug.log("viewmodel.Trail.TrailViewModel", "initialize", "Initializing...");
		};

		self.uploadTrail = function() {
			debug.log("viewmodel.Trail.TrailViewModel", "uploadTrail", "Saving Trails data.", self.selectedTrail());
		};

		self.initialize();
		return self;
	};

	return {
		createModule: function() {
			return new Module();
		}
	};
});