window.getId = function(id){
    window.sessionStorage.setItem('movie',id)
    window.location = 'moviedetails.html';
    
}

export function getMovieDetails(){
    let getId = window.sessionStorage.getItem('movie')
    $.ajax({
        method:"GET",
        url: `https://api.themoviedb.org/3/movie/${getId}?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US`,
        dataType: `JSON`
    }).done(function(data){
        console.log(data)
        const url = `https://image.tmdb.org/t/p/w500`
    })
}