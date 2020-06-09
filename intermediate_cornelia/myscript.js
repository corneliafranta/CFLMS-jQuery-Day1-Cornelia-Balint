$("form").submit(function(e) {

	e.preventDefault();
	$("form").contents().unwrap();
	var div = {};
	for(i=0; i<5; i++){
		div[i] = $('<div></div>');
		$('article').append(div[i]);
		div[i].addClass('box');
		console.log(div[i]);
	}

	var input = $('input');
	input.removeAttr('value');
	input.attr('value', 'Search for');

	$('footer p a').attr('href', 'www.codefactory.wien')


});