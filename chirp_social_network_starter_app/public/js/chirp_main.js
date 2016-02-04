//Open or close chirp window

var lockedIn = false;

$(document).on("keydown", function(event) {
	if (event.which === 16) {
		lockedIn = true;
	}
});

var wordsTypes = new Array();

$(document).on("keyup", function(event) {
	if (event.which === 16) {
		lockedIn = false;
		wordsTypes = new Array();
	}

	if (lockedIn === true) {
		wordsTypes.push(String.fromCharCode(event.which));

		var result = wordsTypes.join("");

		if (result === "CHIRP") {
			$("#chirp-wrapper").slideDown(function() {
				$("#chirp-text").focus();
			});
		} else if (result === "NAH") {
			$("#chirp-wrapper").slideUp(function() {
				$("#chirp-text").val("");
			});
		}
	}
});

$(document).on("click", "#cancel-chirp-button", function() {
	$("#chirp-wrapper").slideUp(function() {
		$("#chirp-text").val("");
	});
});

$(document).on("click", ".edit-chirp-button", function(event) {
	event.preventDefault();

	//Store the bird a user selected to LS
	localStorage.setItem("bird_selected", $(this).attr("data-bird"));

	//Send the user to the ultimate destination
	window.location.href = $(this).attr("href");
});

$(document).ready(function() {

	//Show correct bird on edit page
	if ($("#edit-bird").length > 0) {
		$("#edit-bird").attr("src", "/img/birds/bird" + localStorage.getItem("bird_selected") + ".png");
	}

});
