
//Переключение шагов
const steps = $('.quiz__form-step');
const nextStep = $('.js-next');
const prevStep = $('.js-prev');


let stepCounter = 0;
let stepPercent = 0;


const clickNextStep = function (evt) {
    evt.preventDefault;
    stepCounter++;
    
    //плавная смена фона
    $('.quiz__wrap').addClass('change');
    setTimeout(function(){
        $('.quiz__wrap').removeClass('change');
        
      }, 1500);
    //переключение
    steps.removeClass('quiz__form-step--active');
    $(steps[stepCounter]).addClass('quiz__form-step--active');
    prevStep.addClass('visible');
    
    if (stepCounter >= 6) {
        $('.quiz__wrap').addClass('last-steps');
        $('.quiz__bottom').addClass('active');
    }

    $('body,html').animate({
        scrollTop: 0
    }, 500);

    let stepName = $(steps[stepCounter]).attr('data-name');
    let srcBgImg = $('.quiz__wrap').css("background-image", "url(img/bg-" + stepName + ".jpg)");
    
    if (stepName === 'offer') {
        $('.quiz__advantages_desktop').addClass('active');
    } else {
        $('.quiz__advantages_desktop').removeClass('active');
    }
}

const clickPrevStep = function(evt) {
    evt.preventDefault;
    stepCounter--;

    //плавная смена фона
    $('.quiz__wrap').addClass('change');
    setTimeout(function(){
        $('.quiz__wrap').removeClass('change');
        
      }, 700);
    //переключение
    steps.removeClass('quiz__form-step--active');
    $(steps[stepCounter]).addClass('quiz__form-step--active');

    if (stepCounter === 0) {
        prevStep.removeClass('visible');
    }

    if (stepCounter < 6) {
        $('.quiz__wrap').removeClass('last-steps');
        $('.quiz__bottom').removeClass('active');
    }
    
    $('body,html').animate({
        scrollTop: 0
    }, 500);

    let stepName = $(steps[stepCounter]).attr('data-name');
    let srcBgImg = $('.quiz__wrap').css("background-image", "url(img/bg-" + stepName + ".jpg)");

    if (stepName === 'offer') {
        $('.quiz__advantages_desktop').addClass('active');
    } else {
        $('.quiz__advantages_desktop').removeClass('active');
    }
}

nextStep.click(clickNextStep);
prevStep.click(clickPrevStep);

//сладер преимуществ
$('.quiz__advantages__row_mobile').slick({
    slidesToScroll: 1,
    touchMove: false,
    initialSlide: 0,
    infinite: false,
    variableWidth: true,
    arrows: false,
    dots: false
});

$('.quiz__advantages__row_mobile').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var diff = nextSlide - currentSlide;
    
    // позиционирование слайдов
    $('.quiz__advantages__row_mobile .slick-slide').removeClass('hidden').removeClass('first').removeClass('second').removeClass('third').removeClass('fourth').removeClass('fifth');
    // $('.quiz-intro__row_mobile .slick-slide[data-slick-index="'+(currentSlide)+'"]').addClass('hidden');//предыдущий слайд
    $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(nextSlide)+'"]').addClass('first');//1я позиция
    $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 1)+'"]').addClass('second');//2я позиция
    $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 2)+'"]').addClass('third');//3я позиция
    $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 3)+'"]').addClass('fourth');//4я позиция
    $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(nextSlide + 4)+'"]').addClass('fifth');//5я позиция
    
    //свайп вперед
    if (currentSlide < nextSlide) {      
        $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(currentSlide)+'"]').addClass('hidden');//предыдущий слайд
        
    } else {
        //свайп назад
        $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(nextSlide)+'"]').removeClass('hidden');
        $('.quiz__advantages__row_mobile .slick-slide[data-slick-index="'+(nextSlide-1)+'"]').addClass('hidden');
                    
    }
});

const submit_with_communication_method = function(communication_method) {
    $('input[name="communication_method"]').val(communication_method);
}
