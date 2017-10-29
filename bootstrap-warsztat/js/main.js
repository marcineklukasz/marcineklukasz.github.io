$(document).ready(function(){
    addScrolled();
});

$(document).scroll(function(){
    addScrolled();
});
function addScrolled() {
    var height = $('#main-nav').height();
    var scroll = $(window).scrollTop();
    if(scroll > height){
        $('#main-nav').addClass('trans_blue');
        
    }else{
        $('#main-nav').removeClass('trans_blue');
    }
}