$(document).ready(function() {
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
//    szerokosc slideshow
    slideShow.css('width', slideCount * 100 + '%');
    
//    nadanie marginesow i szerokosci
    slideShow.find('.single-slide').each(function(index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%',
        });
    });
    
    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
        var napis = $('.slider-caption').eq(newSlideIndex);
        
        napis.hide();
        
        var marginLeft = newSlideIndex * (-100) + '%';
        
        slideShow.animate({'margin-left': marginLeft}, 800, function() {
            slideIndex = newSlideIndex;
            napis.fadeIn('slow');
        });
    }
    
    $('.prev-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex - 1);
    });
    
    $('.next-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex + 1);
    });
});