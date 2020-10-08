$(document).ready(function() {
    //клик по кнопке "О сервисе"
    $('.quiz-intro__about-btn').click(function() {
        
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        
        $('.quiz-intro__content').addClass('hiding');
        $('.quiz-intro__wrap').addClass('padb0');
        
        setTimeout(function(){
            $('.quiz-intro__content').removeClass('hiding').addClass('hidden');
            $('.quiz-intro__advantages').addClass('visible');
          }, 700);

        $(this).fadeOut();
        
        $('.quiz-intro__bottom__link').fadeIn().addClass('visible');
        $('.quiz-intro__bottom__phone').fadeIn().addClass('visible');
        
    });

    $('.quiz-intro__row_mobile').slick({
        slidesToScroll: 1,
        touchMove: false,
        initialSlide: 0,
        infinite: false,
        variableWidth: true,
        arrows: false,
        dots: false
    });

    $('.quiz-intro__row_mobile').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var diff = nextSlide - currentSlide;
        
        // позиционирование слайдов
        $('.quiz-intro__row_mobile .slick-slide').removeClass('hidden').removeClass('first').removeClass('second').removeClass('third').removeClass('fourth').removeClass('fifth');
        // $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(currentSlide)+'"]').addClass('hidden');//предыдущий слайд
        $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(nextSlide)+'"]').addClass('first');//1я позиция
        $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 1)+'"]').addClass('second');//2я позиция
        $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 2)+'"]').addClass('third');//3я позиция
        $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 3)+'"]').addClass('fourth');//4я позиция
        $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 4)+'"]').addClass('fifth');//5я позиция
        
        //свайп вперед
        if (currentSlide < nextSlide) {      
            $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(currentSlide)+'"]').addClass('hidden');//предыдущий слайд
            
        } else {
            //свайп назад
            $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(nextSlide)+'"]').removeClass('hidden');
            $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(nextSlide-1)+'"]').addClass('hidden');
                        
        }
    });
})