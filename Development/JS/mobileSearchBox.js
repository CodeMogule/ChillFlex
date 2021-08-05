export function popUpSearch(){
    $('.search-btn').click(function(event){
        event.preventDefault()
        $('.search-mobile').css('right','10%')
        $('.hamburger').css('visibility','hidden')
        $('.logo').css('visibility','hidden')
        $('.search-btn').css('visibility','hidden')
    })
}

export function closeMobileSearch(){
    $('.close-search').click(function(event){
        event.preventDefault()
        $('.search-mobile').css('right','-200%')
        $('.hamburger').css('visibility','visible')
        $('.logo').css('visibility','visible')
        $('.search-btn').css('visibility','visible')
    })
}