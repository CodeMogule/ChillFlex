export function popUpSearch(){
    try{
    $('.search-btn').click(function(event){
        event.preventDefault()
        $('#search-form').css('right','-15%')
        $('#in-search').css('right','-15%')
        $('.hamburger').css('visibility','hidden')
        $('.logo').css('visibility','hidden')
        $('.search-btn').css('visibility','hidden')
    })
}catch(error){

}
}

export function closeMobileSearch(){
    try{
    $('.close-search').click(function(event){
        event.preventDefault()
        $('#search-form').css('right','-200%')
        $('#in-search').css('right','-200%')
        $('.hamburger').css('visibility','visible')
        $('.logo').css('visibility','visible')
        $('.search-btn').css('visibility','visible')
        $('.movie-sugg').html('')
        $('.movie-sugg').css('display','none')
        $('.movie-sugg-genre').html('')
        $('.movie-sugg-genre').css('display','none')
    })
}catch(error){

}
}