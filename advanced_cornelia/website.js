
$(document).ready(function() {


    $('a').attr('href', 'www.codefactory.wien');
    $('code').css('color', '#2a7b90');
    $('ol' > 'li').css('background-color', '#2a7b90');
    $('textarea').attr('placeholder', 'Express your opinion');

    $('img').attr('href', 'https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg');
    $('blockquote').css({
        'background-color': 'orange',
        'font-style': 'italic'
    });
    $('.logo').css('color', 'black');
    $('.logo.gray').css('color', 'white');
    $('.date').remove();

    var newItems = ['New Templates', 'Order Template', 'Contact Us'];

    newItems.forEach(function (item) {
        var newItem = $(`<li><a href="#">${item}</a></li>`);
        $('.sidemenu:first li:last').after(newItem)
    });


    $("p:contains(Be not afraid of life)").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

});