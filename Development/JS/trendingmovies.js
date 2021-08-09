import {getMovieDetails} from './getDetails'

export function getTrendingMovies(){
    $.ajax({
        method: "GET",
        url:`https://api.themoviedb.org/3/trending/all/day?api_key=cc65c8449d31408a45621d9ff608f031`,
        dataType : 'json'
    }).done(function(data){
       let trendData = data.results
       $.each(trendData,function(index,movies){
           const blockPath = `https://image.tmdb.org/t/p/w500`
           const markup = `
           <li class="trending-movie-lists">
           <a href = "#" draggable="false" onclick = "getId(${movies.id})">
           <img src="${blockPath}${movies.backdrop_path}" alt="" draggable="false"> 
           <h5>${movies.title}</h5>
            <div class="rating">
                <p>${movies.vote_average}</p>
                <i class="fas fa-star star"></i>
            </div>
            </a>
        </li>
           `
           $(markup).appendTo('.trending-movies')
       })
    })
    
}
