export class GetLatestMovies{
    constructor(){
        this.key = `cc65c8449d31408a45621d9ff608f031`
        this.url = this.url
        this.date = this.date
        this.dateSplit = this.dateSplit
        this.splice = this.splice
        this.getYearOnly = this.getYearOnly
    }
    getLatest(pageNum){
        $.ajax({
            method:'GET',
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.key}&language=en-US&page=${pageNum}`,
            dataType: `JSON`
        }).done(function(data){
            $.each(data.results,function(index,data){
                this.url = `https://image.tmdb.org/t/p/w500`
                this.date = data.release_date
            this.dateSplit = this.date.split('')
            this.splice = this.dateSplit.splice(0,4)
            this.arr = this.splice.join()
           this.getYearOnly = parseFloat(this.arr.replace(/,/g,''))
            const markUp = `
            <li>
            <a href="#" onclick = "getId(${data.id})">
         <img src="${this.url}${data.poster_path}" alt="" class="popluar-poster">
         <h6>${data.title}</h6>
         <p>${this.getYearOnly}</p>
            </a>
        </li>
            `
            $(markUp).appendTo('.latest-movies')
            })
            
        })
        }
}