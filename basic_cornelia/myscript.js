/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements
$('p').css('background-color', 'beige');

// the p element with an ID of "intro"
$('p#intro').css('background-color', 'white');

// all elements with a class of "note"
$('.note').css('color', 'darkgrey');

// all DIV elements with a class of note
$('div.note').css('color', 'darkblue');

// all p elements in the article element

$('article p').css('font-family', 'wingdings');
// the last element in any section which is a p tag
$('p:last').css('font-size', '1.5em');

// the first paragraph on the page
$('p:first').css('font-weight', 'bold');

// all p elements which have a link
$('p:has(a)').css('color', 'green');

// the second li within nested ul element
$("li ul li:eq(1)").css('color', 'red');

// every second and third p element
$("p:nth-of-type(2), p:nth-of-type(3)").css('color', 'red');