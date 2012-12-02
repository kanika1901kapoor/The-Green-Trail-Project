/**
 * TrailModel
 * The TrailModel module.
 */
define([
	"lib.use!lib.debug",
	"lib.knockoutjs"
],
function(
	debug,
	ko
) {
	"use strict";

	debug.log("model.trial.TrailModel", "Loading");
	var Module = function() {
		var self = this;

		self.latitude = ko.observable();
		self.longitude = ko.observable();
		self.description = ko.observable();
		self.image = ko.observable();
		self.bottle = ko.observable();
		self.clothing = ko.observable();
		self.medicine = ko.observable();
		self.shelter = ko.observable();
		self.shoe = ko.observable();
		self.backpack = ko.observable();

		self.applyMappings = function(value) {
			debug.log("model.trial.TrailModel", "applyMappings", "Applying mappings with", value);

			if(typeof value !== "undefined") {
				self.latitude                (((typeof value.latitude           !== "undefined") && (value.latitude           !== "")) ? value.latitude           : "n/a");
				self.longitude                (((typeof value.longitude           !== "undefined") && (value.longitude           !== "")) ? value.longitude           : "n/a");
				self.description                (((typeof value.description           !== "undefined") && (value.description           !== "")) ? value.description           : "n/a");
				self.bottle                (((typeof value.bottle           !== "undefined") && (value.bottle           !== "")) ? value.bottle           : "n/a");
				self.clothing                (((typeof value.clothing           !== "undefined") && (value.clothing           !== "")) ? value.clothing           : "n/a");
				self.medicine                (((typeof value.medicine           !== "undefined") && (value.medicine           !== "")) ? value.medicine           : "n/a");
				self.shelter                (((typeof value.shelter           !== "undefined") && (value.shelter           !== "")) ? value.shelter           : "n/a");
				self.shoe                (((typeof value.shoe           !== "undefined") && (value.shoe           !== "")) ? value.shoe           : "n/a");
				self.backpack                (((typeof value.backpack           !== "undefined") && (value.backpack           !== "")) ? value.backpack           : "n/a");
			}
		}

		return {
			createModule: function() {
				return new Module();
			}
		};
	};
});
