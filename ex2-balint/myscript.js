$("form").submit(function(e) {

	e.preventDefault();
	
	$('#myform').remove()

	for (let i = 1; i <= 5; i++) {
		let newDiv = `<div>${i}</div>`
		$('article').append(newDiv)
	}

	$('div').attr('class', 'box')

	$('a').attr('href', 'www.codefactory.wien')
	
});

$('#msg').val('Search for...')
/* Using JQuery selectors select the listed elements below and do appropriate manipulation to them:

Remove the form from the page
Create 5 new DIVs in the article element
Within the input field change the value to "Search for..."
Add a class name of "box" to each new DIV
Change the link to "www.codefactory.wien"

 */
