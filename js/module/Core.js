define([
	"jquery",
	"lib.use!lib.debug",
	"lib.knockoutjs",
	"lib.use!lib.bootstrap",
	"viewmodel.trail.TrailViewModel"
],
function(
	jQuery,
	debug,
	ko,
	bootstrap,
	TrailViewModel
) {
	"use strict";

	debug.info("Core", "Loading");

	var Module = function() {
		var self = this;

		self.coreViewModel = null;

		self.initialize = function() {
			debug.log("Core", "initialize", "Initializing");

			// Create view models
			debug.log("Core", "initialize", "Creating TrailViewModel", TrailViewModel);
			var trailViewModel = TrailViewModel.createModule();

			self.coreViewModel = {
				trailViewModel: trailViewModel
			};

			ko.applyBindings(self.coreViewModel);
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