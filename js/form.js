$(document).ready(function() {
    // Открытие попапа
    $('.js-open-popup').click(function() {
        //берем атрибут кнопки с именем для Заголовка попапа и контента
        let popupTitle = $(this).attr('data-name');
        $('.quiz__popup__title').html(popupTitle);

        $('input[name="communication_method"]').val(popupTitle)

        switch(popupTitle) {
            case 'Звонок':
                $('.quiz__popup__content__block_message').hide();
                $('.quiz__popup__content__block_callback').show();
                break;
            case 'Мессенджер':
                $('.quiz__popup__content__block_callback').hide();
                $('.quiz__popup__content__block_message').show();
        };
        


        $('.quiz__popup').fadeIn();
    });

    //закрытие попапа
    $('.quiz__popup__close').click(function() {
        $('.quiz__popup').fadeOut();
    });

    //маска телефона
    $('.quiz__form-input_phone').mask("+7(999)999-9999");;

    //календарь
    $('#date').daterangepicker({
        parentEl: '.quiz__popup',
        singleDatePicker: true,
        timePicker: true,
        timePicker24Hour: true,
        drops: 'up',
        opens: 'center',
        autoApply: true,
        locale: {
            format: "DD-MM-YYYY hh:mm",
            displayFormat: 'MM/DD/YYYY hh:mm',
            separator: " - ",
            applyLabel: "ОК",
            cancelLabel: "Отмена",
            opens: 'center',
            drops: 'up',
        
            daysOfWeek: [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            monthNames: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        }
    }, function(start, end, label) {
    //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
})