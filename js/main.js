const getDate = () => {
    const date = new Date()
    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    return dateStr
}

let rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$( () => {

    /* get start time */
    const dateStr = getDate()
    const time = new Date().toLocaleTimeString()
    $('.timer .start').html(`${dateStr} ${time}`)

    /* start timer */
    setInterval( () => {
        const time = new Date().toLocaleTimeString()
        const dateStr = getDate()
        $('.timer .current').html(`${dateStr} ${time}`)
    }, 1000)

    /* handle button clicks */
    $('.btn-primary').click( e => {
        const el = $(e.target)
        const count = parseInt( el.html() ) ? parseInt( el.html() ) + 1 : 1
        el.html(count)
    })

    /* handle rotate */
    $('.rotate').click( e => {
        rotation += 10;
        $('.map').rotate(rotation); // rotate the map
        $('.btn-primary, .point').rotate(-rotation) //unrotate the buttons
    })

    /* detect query string to invert colors */
    const field = 'robert';
    let present = false
    const url = window.location.href;
    if(url.indexOf('?' + field) != -1)
        present = true
    else if(url.indexOf('&' + field) != -1)
        present = true
    console.log(present)
    if (present) {
        // invert the colors
        $('.btn-green').css('background-color', 'red')
        $('.btn-red').css('background-color', 'green')
    }

})