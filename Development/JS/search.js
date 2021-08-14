window.searchDropDown = function(){
    $('.movie-sugg').css('display','block')
    $('.movie-sugg-genre').css('display','block')
    const input = $('.search-box').val();
    $('.movie-sugg').html('');
    $('.movie-sugg-genre').html('');
    $.ajax({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US&page=1&query=${input}`,
        dataType: `JSON`
    }).done(function(data){
    const dataRes = data.results;
    const filtering = dataRes.splice(0,5).filter(function(result){
        result.title.toLowerCase().startsWith(input)
        let date,dateSplit,splice,arr,getYearOnly
        date = result.release_date
        dateSplit = date.split('')
        splice = dateSplit.splice(0,4)
        arr = splice.join()
         getYearOnly = parseFloat(arr.replace(/,/g,''))
         const url = `https://image.tmdb.org/t/p/w500`
        const markup =  `
        <a href="" id = "sugg" onclick="getId(${result.id})">
         <img src="${url}${result.poster_path}" alt="" class="movie-poster-sugg" draggable="false"> ${result.title}
         <p>${getYearOnly}</p>
         <div class="rating">
                <p><i class="fas fa-star star"></i> &nbsp; ${result.vote_average}</p>
            </div>
          </a>
        `
        $(markup).appendTo('.movie-sugg')
        $(markup).appendTo('.movie-sugg-genre')
    })
    })

    if(input === ''){
        $('.movie-sugg').html('')
        $('.movie-sugg-genre').html('')
    }
}

$('#search-form').submit(function(event){
    event.preventDefault();
    const input = $('.search-box').val();
    $('.search-user span').text(input)
   location = `searchPage.html`
})


$('#in-search').submit(function(event){
    event.preventDefault();
    const input = $('.search-box').val();
    getTheMovies(input)
    $('.movie-sugg-genre').css('left','100%')
    $('.search-box').val('')
    $('.movie-sugg-genre').css('left','5%')
        $('.search-box').on("change", function(){
            $('.movie-results').html('')
        })
    })
 

function getTheMovies(input){
    $('.search-user span').text(input)
    $.ajax({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US&page=1&query=${input}`,
        dataType: `JSON`
    }).done(function(data){
    const dataRes = data.results;
     dataRes.splice(0,5).forEach(function(result){
        result.title.toLowerCase().startsWith(input)
        let date,dateSplit,splice,arr,getYearOnly
        date = result.release_date
        dateSplit = date.split('')
        splice = dateSplit.splice(0,4)
        arr = splice.join()
         getYearOnly = parseFloat(arr.replace(/,/g,''))
         const url = `https://image.tmdb.org/t/p/w500`
        const markup =  `
          <li>
          <a href="#" onclick="getId(${result.id})" >
       <img src="${url}${result.poster_path}" alt="" class="search-result-poster">
       <h6>${result.title}</h6>
       <p>${getYearOnly}</p>
          </a>
      </li>
        `
        $(markup).appendTo('.movie-results')
    })
})
}