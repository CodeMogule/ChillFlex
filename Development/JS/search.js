window.searchDropDown = function(){
    $('.movie-sugg').css('display','flex')
    const input = $('.search-box').val();
    $('.movie-sugg').html('');
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
        <a href="#" id = "sugg" onclick="getId(${result.id})">
         <img src="${url}${result.poster_path}" alt="" class="movie-poster-sugg" draggable="false"> ${result.title}
         <p>${getYearOnly}</p>
         <div class="rating">
                <p><i class="fas fa-star star"></i> &nbsp; ${result.vote_average}</p>
            </div>
          </a>
        `
        $(markup).appendTo('.movie-sugg')
    })
    })

    if(input === ''){
        $('.movie-sugg').html('')
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
    getTheMovies(input,500)
    $('.movie-sugg').css('left','100%')
    $('.search-box').val('')
    $('.movie-sugg').css('left','5%')
        $('.search-box').on("change", function(){
            $('.movie-results').html('')
        })
        
        if(input === "" && $('.movie-results').html('') ){
            $('.no-result').css('display','block')
        }
        else if($('.result-movie')){
            $('.no-result').css('display','none')
        }
    })
 

function getTheMovies(input,num){
    $('.search-user span').text(input)
    $.ajax({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US&page=1&query=${input}`,
        dataType: `JSON`
    }).done(function(data){
    const dataRes = data.results;
     dataRes.splice(0,num).forEach(function(result){
        result.title.toLowerCase().startsWith(input)
        let date,dateSplit,splice,arr,getYearOnly
        date = result.release_date
        dateSplit = date.split('')
        splice = dateSplit.splice(0,4)
        arr = splice.join()
         getYearOnly = parseFloat(arr.replace(/,/g,''))
         const url = `https://image.tmdb.org/t/p/w500`
        const markup =  `
          <li class = 'result-movie'>
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