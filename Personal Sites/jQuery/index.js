$('button').on('click', function()
{
    $('h1').slideUp().slideDown().animate({opacity: 0.5});
    setTimeout(function() {
        $('h1').clearQueue();
    }, 1);
    
});