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
        const genres = $.map(data.genres.slice(0,3),function(genre,index){
            return `<li>${genre.name}</li>`
        }).join("")
        let text;
        let icon;
        if(localStorage.getItem('btn') === null){
            text = 'ADD TO MY WATCHLISTS'
            icon = `fas fa-list watchlist-icon`
        }else{
            text = JSON.parse(localStorage.getItem('btn'))
            icon = `fas fa-check watchlist-icon`
        }
        const url = `https://image.tmdb.org/t/p/original`
        const wholeMarkup = `
        <div class="page-wrap">
        <div class="background-image" style="background-image:linear-gradient(rgba(0, 0, 0, 0.452),rgba(0, 0, 0, 0.452)), url(${url}${data.backdrop_path}) !important">
    <header>
        <div class="sent-back-home">
            <a href="index.html"><i class="fas fa-arrow-left left-arrow"> HOME</i></a>
        </div>
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
       <p class = "casts">Casts: </p>
    </div>
    </div>
    
    <div class="cta-btns">
        <button class="play-trailer">
            
        </button>
        <button class="add-watchlist">
            <i class="${icon}" > <span> ${text}</span></i>
        </button>
    </div>
    </section>
    </div>
    </div>
        
        `
     $(wholeMarkup).appendTo('.movies-info')
     $(`.add-watchlist`).click(function(id){
        window.localStorage.setItem('list',id)
        window.localStorage.setItem('btn',JSON.stringify('ADDED!'))
        localStorage.removeItem('btn')
        $('.add-watchlist i').removeClass('fa fa-list').addClass('fas fa-check').text(' ADDED!')
    })
    })
   
    getCasts(getId)
    getTrailer(getId)
}

function getCasts(id){
    $.ajax({
        method:"GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US&language=en-US`,
        dataType: `JSON`
    }).done(function(data){
        const dataCasts = data.cast
        $.each(dataCasts.splice(0,3),function(index,casts){
            const markup = `
            <span>${casts.name}&nbsp; </span>
            `
            $(markup).appendTo('.casts')
        })
    })
}

function getTrailer(id){
    $.ajax({
        method: "GET",
        url: `
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US`,
        dataType: `JSON`
    }).done(function(data){
        console.log()
        $.each(data.results,function(index,trailer){
            if(trailer.type === "Trailer"){
               let markup = `
               <a href ="https://www.youtube.com/watch?v=${trailer.key}" class = "trailer"><i class="fas fa-play play-icon"> <span>Watch Trailer</span></i></a>
               `
               $(markup).appendTo('.play-trailer')
            }
        })
        $('.trailer').each(function () {
            $('.trailer:contains("' + $(this).text() + '"):gt(0)').remove();  
       });
    })
}
