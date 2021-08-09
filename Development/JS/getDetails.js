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
        const genres = $.map(data.genres.slice(0,3),function(genre,index){
            return `<li>${genre.name}</li>`
        }).join("")
        const url = `https://image.tmdb.org/t/p/original`
        const wholeMarkup = `
        <div class="page-wrap">
        <div class="background-image" style="background-image:linear-gradient(rgba(0, 0, 0, 0.452),rgba(0, 0, 0, 0.452)), url(${url}${data.backdrop_path}) !important">
    <header>
        <div class="sent-back-home">
            <a href=""><i class="fas fa-arrow-left left-arrow"> HOME</i></a>
        </div>
    
        <form id="search-form">
            <div class="search-mobile">
                <button type="button" class="btn-close btn-close-white close-search" aria-label="Close"></button>
            <input type="search" placeholder="Search" class="search-box">
            </div>
            <button class="search-btn">
                <i class="fas fa-search search-icon"></i>
            </button>
            <div class="search-movie-suggestions">
                <div class="movie-sugg shadow-lg p-3 mb-5 bg-body rounded"">
                    <a href="">
                   <img src="./IMAGES/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" class="movie-poster-sugg"> avengers endgame
                   <p>2019</p>
                   <p>action,adventure,idk</p>
                    </a>
                    <a href="">
                        <img src="./IMAGES/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" class="movie-poster-sugg"> avengers endgame
                        <p>2019</p>
                        <p>action,adventure,idk</p>
                         </a>
                         <a href="">
                            <img src="./IMAGES/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" class="movie-poster-sugg"> avengers endgame
                            <p>2019</p>
                            <p>action,adventure,idk</p>
                             </a>
                             <a href="">
                                <img src="./IMAGES/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" class="movie-poster-sugg"> avengers endgame
                                <p>2019</p>
                                <p>action,adventure,idk</p>
                                 </a>
                                 <a href="">
                                    <img src="./IMAGES/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" alt="" class="movie-poster-sugg"> avengers endgame
                                    <p>2019</p>
                                    <p>action,adventure,idk</p>
                                     </a>
                </div>
            </div>
        </form>
    </header>
    
    <section id="info">
    
    <div class="movie-details">
        <div class="genre">
            <ul class="genre-container">
                ${genres}
            </ul>
        </div>
    <h1 class="title">${data.original_title}</h1>
    <p>${data.runtime} min</p>
    
    <div class="movie-paragraph">
        <p>${data.overview}</p>
    </div>
    
    <div class="casts-actors">
        <p>Cast:Scarlett Johansson,chris evans,RDJ,Chris Hemsworth</p>
    </div>
    </div>
    
    <div class="cta-btns">
        <button class="play-trailer">
            <i class="fas fa-play play-icon"> <span>Watch Trailer</span></i>
        </button>
        <button class="add-watchlist">
            <i class="fas fa-list watchlist-icon"> <span>Add to WatchList</span></i>
        </button>
    </div>
    </section>
    </div>
    </div>
        
        `
        $(wholeMarkup).appendTo('.movies-info')

    })
}