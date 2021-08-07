export function scrollRight(){
  $(document).on('swipeleft',function(event){
      $('.trending-movies').animate({scrollLeft:'+=400'},800)
  })
}

export function scrollLeft(){
    $(document).on('swiperight',function(event){
        $('.trending-movies').animate({scrollLeft:'-=250'},800)
    })
  }