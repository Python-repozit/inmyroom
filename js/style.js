$(document).ready(function() {

    function hoverSlide() {
        $(this).find("span.eye").css({'display': 'block'});
        $(this).find("span.sharing").css({'display': 'block'});
        //$(this).find(".voice").css({'display': 'block'});
        $(this).find("h4").css("display", "block");
        $(this).find("h3").css("display", "block");
        $(this).find("p").css("display", "block");
        $(this).find(".grad").css("display", "block");
        console.log('check');
    }

    function mouseleaveSlide() {
        $(this).find("span.eye").css({'display' : 'none'});
        $(this).find("span.sharing").css({'display' : 'none'});
        //$(this).find(".voice").css({'display' : 'none'});
        $(this).find("h4").css("display","none");
        $(this).find("h3").css("display","none");
        $(this).find("p").css("display","none");
        $(this).find(".grad").css("display","none");
    }


    $("div.slick-slide").hover(hoverSlide);

    $( "div.slick-slide" ).mouseleave(mouseleaveSlide);

    var firstCallVar = true;

    function firstCall(){
        if(firstCallVar) {
            var first = $('#first').data("number");
            var second = $('#second').data("number");
            var third = $('#third').data("number");

            firstNumber(1, first, '#first');
            firstNumber(1, second, '#second');
            firstNumber(1, third, '#third');
        }
        firstCallVar = false;
    }

    function firstNumber(start, finish, id) {
        setInterval(function () {
            start++;
            if (start <= finish) {
                $(id).text(start);
            }
        }, 2000/finish );
    }

    $(window).scroll(function () {
        var el = $("#number .round");
        if ($(window).scrollTop() > el.offset().top - 400)  {
            $(window).unbind('scroll.once');
            el.find(".circle-big .first").addClass('first_animate');
            el.find(".circle-big .second").addClass('second_animate');
            el.find(".circle-big .third").addClass('third_animate');
            firstCall();
        }
    });



    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            // отменяем стандартное действие
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top - 100;

            $('html, body').animate({scrollTop: dn}, 2000);
        });
    });

    var textarea = $('section#form .place_100 textarea');

    $(function(){
        textarea.focusin(function(event) {
            // отменяем стандартное действие
            event.preventDefault();

            $(this).text('');
        });
        textarea.focusout(function(event) {
            if (textarea.text('') ) {
                $(this).text('- место:\n' +
                    '- метраж помещения:\n' +
                    '- количество комнат:\n' +
                    '- высоту потолков:\n' +
                    '- тип дома и любую другую дополнительную информацию:\n' +
                    '- бюджет (итоговая сумма, может быть примерной):\n' +
                    '- расскажите про заказчика:\n' +
                    '- какие материалы, мебель и предметы декора вы использовали:\n' +
                    '- ссылка на дополнительные фотоматериалы'
                );
            }
        });
    });

    var clickCount = 1;

    function clickMoreInvolvement() {
        var more_envent = $('#enventor');

        if( clickCount < 5 ){
            more_envent.append('<div class=\"place\">' +
                '<label for=\"name\">Имя</label> ' +
                '<input type=\"text" id=\"name_' + clickCount + '\">' +
                '</div>' +
                '<div class=\"place\">' +
                '<label for=\"sername\">Фамилия</label>' +
                '<input type=\"text\" id=\"sername_' + clickCount + '\">' +
                '</div>'
            );
            clickCount++ ;
        }
    }

    $('p#more').click(function() {
        clickMoreInvolvement();
    });


    $('#phone').mask('+7 (000) 000-00-00');
});