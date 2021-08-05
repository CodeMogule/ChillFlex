export function openMenu(){
    $('.hamburger').click(function(){
        $('.nav').css('left','0');
        $('body').addClass('minimize')
     })
}

export function closeMenu(){
    $('.close').click(function(){
        $('.nav').css('left','-100%')
        $('body').removeClass('minimize')
    })
}