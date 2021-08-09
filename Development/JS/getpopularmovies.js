export function getPopularMovies(pageCounter){
    $.ajax({
        method:"GET",
        url: `https://api.themoviedb.org/3/movie/popular?api_key=cc65c8449d31408a45621d9ff608f031&language=en-US&page=${pageCounter}`,
        dataType: 'json'
    }).done(function(data){
        let popularData = data.results;
        $.each(popularData,function(index,movies){
            let date,dateSplit,splice,arr,getYearOnly
         date = movies.release_date
         dateSplit = date.split('')
         splice = dateSplit.splice(0,4)
         arr = splice.join()
          getYearOnly = parseFloat(arr.replace(/,/g,''))
            const url = `https://image.tmdb.org/t/p/w500`
            const markup = `
            <li>
            <a href="#" onclick = "getId(${movies.id})">
         <img src="${url}${movies.poster_path}" alt="" class="popluar-poster">
         <h6>${movies.title}</h6>
         <p>${getYearOnly}</p>
            </a>
        </li>
            `
            $(markup).appendTo('.popular-movies')
        })
    })

}