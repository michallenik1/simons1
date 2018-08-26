$(document).ready(function() {

	$('input[type="button"]').click(function(event) {
		event.preventDefault();
		var empty = $('#zip-code').val()

		if (empty == "") {
			$('input[name="zip-input"]').addClass('error').after('<div class="error-text">invalid zip code</div>');
		}

		else {
			$('.wifi-popup, .gray-bg').removeClass('hidden');
			$('div.error-text').remove();
			$('input[name="zip-input"]').removeClass('error');
		var zipCode = $('#zip-code').val()
		$('.wifi-popup h3 span').append(zipCode); 
		}

		if ($('input[name="zip-input"]').hasClass('error')) {
			$('div.error-text').slice(0, -1).remove();
		}

	});

	$('.wifi-popup .close a').click(function(event) {
		event.preventDefault();
		$('.wifi-popup, .gray-bg').addClass('hidden');
	});

});

