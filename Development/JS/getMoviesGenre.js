import {getMovieDetails} from './getDetails'

window.getMoviesGenre = function(genreNum,pageNum){
    $.ajax({
        method:"GET",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=cc65c8449d31408a45621d9ff608f031&with_genres=${genreNum}&language=en-US&page=${pageNum}`,
        dataType : `JSON`
    }).done(function(data){
        const GenreData = data.results
        $.each(GenreData, function(index,getGenre){
            let date,dateSplit,splice,arr,getYearOnly
         date = getGenre.release_date
         dateSplit = date.split('')
         splice = dateSplit.splice(0,4)
         arr = splice.join()
          getYearOnly = parseFloat(arr.replace(/,/g,''))
            const url = `https://image.tmdb.org/t/p/w500`
            const markup = `
            <li>
            <a href="#" onclick = "getId(${getGenre.id})">
         <img src="${url}${getGenre.poster_path}" class="popluar-poster">
         <h6>${getGenre.title}</h6>
         <p>${getYearOnly}</p>
            </a>
        </li>
            `
            $(markup).appendTo('.get-movies')
        })
    })
}
getMovieDetails()
