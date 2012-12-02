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

		self.latitude = ko.observable(0);
		self.longitude = ko.observable(0);
		self.description = ko.observable("");
		self.image = ko.observable(false);
		self.bottle = ko.observable(false);
		self.clothing = ko.observable(false);
		self.medicine = ko.observable(false);
		self.shelter = ko.observable(false);
		self.shoe = ko.observable(false);
		self.backpack = ko.observable(false);

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
		};

		self.initialize = function() {
			debug.log("viewmodel.Trail.TrailViewModel", "initialize", "Initializing...");

			if (Modernizr.geolocation) {
		    navigator.geolocation.getCurrentPosition(function(location) {
		      self.latitude(location.coords.latitude);
		      self.longitude(location.coords.longitude);
		    });
		  } else {
		    debug.log("No geolocation support.");
		  }
		};

	var populateUserCredentials = function() {
    FB.api('/me', function(response) {
      jQuery("#facebook-avatar").attr("src", "https://graph.facebook.com/" + response.username + "/picture");
      jQuery("#facebook-username").html(response.name);
    });
  };

  var login = function() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.dir(response);
            populateUserCredentials();
        } else {
            // cancelled
            console.error("Cancelled by user.");
        }
    });
  };

  // Login with Facebook integration
  FB.init({
    appId      : '453184598071361', // App ID
    channelUrl : '/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        // connected
        populateUserCredentials();
    } else if (response.status === 'not_authorized') {
        // not_authorized
        login();
    } else {
        // not_logged_in
        login();
    }
  });

		self.toggleBottle = function() {
			debug.log("Toggling Bottle...", self);
			self.bottle(!self.bottle());
		};

		self.toggleBackpack = function() {
			debug.log("Toggling Backpack...", self);
			self.backpack(!self.backpack());
		};

		self.toggleMedicine = function() {
			debug.log("Toggling Medicine...", self);
			self.medicine(!self.medicine());
		};

		self.toggleShelter = function() {
			debug.log("Toggling Shelter...", self);
			self.shelter(!self.shelter());
		};

		self.toggleShoe = function() {
			debug.log("Toggling Shoe...", self);
			self.shoe(!self.shoe());
		};

		self.toggleClothing = function() {
			debug.log("Toggling Clothing...", self);
			self.clothing(!self.clothing());
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