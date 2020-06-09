/* 
Let's do some dynamic styling with jQuery instead of hard-coded styling using CSS. Do the following changes to the downloaded project:

1. Change the href attribute to "www.codefactory.wien" for all links

2. Change the text color to red for the <code> tags

3. Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element

4. Within the form, change the placeholder text to "Express your opinion"

5. Replace all images on the page with this one "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"

6. Change the background color to orange for all blockquote elements and the font-style to italic

7. At the top of the page, change the logo color "Simple" to black and "Blog" to white

8. Remove the "Oct 01, 2006" Date from the page

9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"

10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."

 */

 $(document).ready(() => {
    $('a').attr('href', 'www.codefactory.wien')

    $('code').css('color', 'red')

    $('ol > li').css('background-color', '#2a7b90')

    $('.textbox').attr('value', 'Express your opinion')

    $('img').attr('src', 'https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg')

    $('blockquote').css({
        "background-color": "orange", 
        "font-style": "italic"
    })

    $('#logo').css('color', 'black')

    $('#logo > span').css('color', 'white')

    $('.date').remove()

    const newTempArr = [`<li>New Templates</li>`, `<li>Order Template</li>`, `<li>Contact Us</li>`]
    /* const orderTemp = `<li>Order Template</li>`
    const contactUs= `<li>Contact Us</li>` */


    newTempArr.map((item) => $('.sidemenu').append(item))

    $('#wise').text(`When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.`)

 })