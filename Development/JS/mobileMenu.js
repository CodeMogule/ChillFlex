
export function openMenu(){
    try{
    $('.hamburger').click(function(){
        $('.nav').css('left','0');
        $('body').addClass('minimize')
     })
    }catch(error){

    }
}

export function closeMenu(){
    try{
    $('.close').click(function(){
        $('.nav').css('left','-100%')
        $('body').removeClass('minimize')
    })
}catch(error){

}
}
