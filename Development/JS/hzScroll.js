export function scrollRight(){
  try{
  $('#hero-trending').on('swipeleft',function(event){
      $('.trending-movies').animate({scrollLeft:'+=400'},800)
  })
}catch(error){

}
}

export function scrollLeft(){
  try{
    $('#hero-trending').on('swiperight',function(event){
        $('.trending-movies').animate({scrollLeft:'-=250'},800)
    })
  }catch(error){
    
  }
  }