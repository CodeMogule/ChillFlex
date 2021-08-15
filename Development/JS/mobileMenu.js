
export function openMenu(){
    try{
    $('.hamburger').click(function(){
        $('.nav').css('left','0');
        $('body').addClass('minimize')
        $('.nav').addClass('bg-body')
     })
    }catch(error){

    }
}

export function closeMenu(){
    try{
    $('.close').click(function(){
        $('.nav').css('left','-100%')
        $('body').removeClass('minimize')
        $('.nav').removeClass('bg-body')
    })
}catch(error){

}
}
