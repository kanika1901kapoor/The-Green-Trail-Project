/* Author: See /humans.txt
*/

"use strict";

require.config({
	paths: {
		// libraries
		'lib.modernizr': "lib/modernizr/modernizr-2.5.3-respond-1.1.0.min", // modernizr.com
		'lib.use': "lib/requirejs/addons/use", // documentup.com/tbranyen/use.js
		'lib.domready': "lib/requirejs/addons/domReady", // requirejs.com/docs/download.html#domReady
		'jquery': "lib/jquery/jquery-1.8.2", // jquery.com
    'jquery-ui': "lib/jquery-ui/jquery-ui-1.9.2.custom",
		'lib.bootstrap': "lib/bootstrap/bootstrap", // twitter.github.com/bootstrap,
		'lib.bootstrap.carousel': "lib/bootstrap/carousel", // twitter.github.com/bootstrap,
		'lib.debug': "lib/ba.debug/ba.debug", // benalman.com/code/projects/javascript-debug
		'lib.knockoutjs': "lib/knockoutjs/knockout-2.1.0.debug", // knockoutjs.com
		'lib.qunit': "lib/qunit/qunit", // qunitjs.com
		// /libraries

		// application core
		'Core': "module/Core",
		// /application core

		// models
		'model.trail.TrailModel': "module/model/trail/TrailModel",
		// /models

		// viewmodels
		'viewmodel.trail.TrailViewModel': "module/viewmodel/trail/TrailViewModel",
		// /viewmodels

		// utilities
		'util.Storage': "module/util/Storage",
		// /utilities

		// tests
		// /tests
	},

	// use.js configuration for non-amd libraries
	use: {
		'lib.debug': {
			'attach': "debug"
		},
		'lib.bootstrap': {
			'attach': "bootstrap"
		}
	},
	// /use.js configuration for non-amd libraries

	// shim configuration
	shim: {
		// libraries
		'lib.bootstrap': {
			deps: [
				'jquery'
			]
		},

		'lib.qunit': {
			deps: [
				'jquery'
			]
		},

    'lib.jquery-ui': {
      deps: [
      'jquery'
      ]
    }
		// /libraries
	}
	// /shim configuration
});

require([
	"lib.domready",
	"lib.use!lib.debug",
	"Core"
],
function(
	domReady,
	debug,
	Core
) {
	domReady(function() {
		debug.info("Starting application");

		var core = Core.createModule();
	});
});