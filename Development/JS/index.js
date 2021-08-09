import * as mobileMenu from './mobileMenu';
import * as searchBoxMobile from './mobileSearchBox';
import * as scrollTrending from './hzScroll';
import {getTrendingMovies} from './trendingmovies';
import {getPopularMovies} from './getpopularmovies';
import {nothing} from './getMoviesGenre';
import {getDetails} from './getDetails';
//mobile menu
mobileMenu.openMenu();
mobileMenu.closeMenu();

//pop searchbox for mobile
searchBoxMobile.popUpSearch();
searchBoxMobile.closeMobileSearch();


//scroll
scrollTrending.scrollRight()
scrollTrending.scrollLeft()

//trending movies
getTrendingMovies()

//get movies by genre + poplarity
let counter = 1

//get popular Movies
getPopularMovies(counter)
$('.showmore').click(function(){
    getPopularMovies(counter+=1)    
})


//get genre movies
function getGenre(genreName,id){
    $(`.${genreName}`).click(function(){
        getMoviesGenre(id,counter+=1)
    })
}

//more action
getGenre('showmore-action',28)

//more adventure
getGenre('showmore-adventure',12)

//more animation
getGenre('showmore-animation',16)

//more crime
getGenre('showmore-crime',80)

//more horror
getGenre('showmore-horror',27)

//more mystery
getGenre('showmore-mystery',9648)



$.ajax({
    method: "GET",
    url: ``,
    dataType: `JSON`
}).done(function(data){
    console.log(data)
})

