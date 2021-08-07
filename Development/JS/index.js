//mobile menu
import * as mobileMenu from './mobileMenu';
import * as searchBoxMobile from './mobileSearchBox';
import * as scrollTrending from './hzScroll';
import {getTrendingMovies} from './trendingmovies';
import {getPopularMovies} from './getpopularmovies';

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

//popular movies
let counter = 1
getPopularMovies(counter)
$('.showmore').click(function(){
    getPopularMovies(counter+=1)
})
