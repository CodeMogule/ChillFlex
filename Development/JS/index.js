//mobile menu
import * as mobileMenu from './mobileMenu';
import * as searchBoxMobile from './mobileSearchBox';
import * as scrollTrending from './hzScroll';
import {getTrendingMovies} from './trendingmovies'

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
