/* Author: See /humans.txt

*/
"use strict";

jQuery(document).ready(function() {
	// Enable tooltips
	jQuery("[rel~='tooltip']").tooltip();

	// Enable popovers
	jQuery("[rel~='popover']").popover({
		html: true,
		placement: 'right'
	});

	jQuery("#carousel").carousel();

  jQuery("#lh-location").jeoCityAutoComplete();

  if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(function(location) {
      jQuery(".latitude").val(location.coords.latitude);
      jQuery(".longitude").val(location.coords.longitude);
    });
  } else {
    console.warn("No geolocation support.");
  }

  var login = function() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.dir(response);
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
    } else if (response.status === 'not_authorized') {
        // not_authorized
        login();
    } else {
        // not_logged_in
        login();
    }
  });

  // jQuery("#login-with-facebook").on("click", login);
});





