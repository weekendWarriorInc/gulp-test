$(document).ready(function () {



    //toggle



    $('.header__toggle').on('click', function () {

        $('.header').toggleClass('active');
        $('.header__toggle').toggleClass('active');
        $('.header__nav').toggleClass('active');

    });

    $('.header__nav-item').on('click', function () {
        $('.header').removeClass('active');
        $('.header__toggle').removeClass('active');
    });


    //toggle end
    //sub-nav





    $('.header__nav-item').children('.header__sub-nav').parent().addClass('header__sub-nav-true');
    $('.header__sub-nav-true>a').append("<div class='header__sub-nav-decor'></div> ");
    $('.header__sub-nav-decor').append("<span></span> <span></span>");

    //sub-nav end

    $('.client__slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: true,
        mouseDrag: false,
        nav: true,
        navText: ['<div class ="client__slider-nav-img"><svg style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Left</desc> <polyline fill="none" stroke="#222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline> </svg></div>', '<div class ="client__slider-nav-img"><svg style="display: block" viewBox="0 0 7.3 13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <desc>Right</desc> <polyline fill="none" stroke="#222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1" points="0.5,0.5 6.5,6.5 0.5,12.5"></polyline> </svg></div>'],
        autoHeight: true,
        smartSpeed: 1000,
        animateOut: 'fadeOut',


        /*  autoplay: true,   */
        items: 1,

    });

    /* videoFonts();
    
    $(window).resize(function () {
        videoFonts();
    });

    function videoFonts(){
        $(".ytp-title-expanded-overlay").css('font-size', '30px');
        
    } */

    function videoWH() {
        var videoWidth = $(".video-block__video-large").width();
        var videoHeight = videoWidth * 0.56;
        $(".video-block__video-large").height(videoHeight);

        var videoWidth = $(".video-block__video-small").width();
        var videoHeight = videoWidth * 0.56;
        $(".video-block__video-small").height(videoHeight);
    }

    videoWH();
    $(window).resize(function () {
        videoWH();
    });


    $('.question__accordion-title').on('click', function () {

        $(this).toggleClass('active');

        $(this).siblings('.question__accordion-description').toggleClass('active');

    });

    trustWH();
    $(window).resize(function () {
        trustWH();
    });

    function trustWH() {
        var Width = $(".trust__item:nth-child(1)").width();
        var Height = Width ;
        $(".trust__item:nth-child(1)").height(Height);
        
        $(".trust__item:nth-child(5)").height(Height);
        Height *=0.5; 
        $(".trust__item:nth-child(9)").height(Height);
       


    }

    autoWH();
    $(window).resize(function () {
        autoWH();
    });

    function autoWH() {
        var Width = $(".footer__logo").width();
        var Height = Width;
        $(".footer__logo").height(Height);
        
        Width = $(".about__img:nth-child(1)").width();
        Height = Width;
        $(".about__img:nth-child(1)").height(Height);
     
    }




    setInterval(function () {
        $('.modal').addClass('active');
    }, 120000);




    $('#auditButton').on('click', function () {

        $('.modal').addClass('active');


    });

    $('.modal__cross').on('click', function () {

        $('.modal').removeClass('active');


    });



    $('.modal__off').on('click', function () {

        $('.modal').removeClass('active');


    });
 /*    auditFormHeight();
    $('.modal').on('click', function () {

        auditFormHeight();
    });

    $(window).resize(function () {
        
        auditFormHeight();
    }); */


    function auditFormHeight(){
        if ($('.form-audit__success:visible').length == 0) {
            $('.audit-form').css('min-height', 'auto');
        } else {
            if ($(window).width() < 767) {
                $('.audit-form').css('min-height', '95vh');
            }
            if ($(window).width() > 768) {
                $('.audit-form').css('min-height', 'auto');
            }
    
        }
    }

   
    /*     modalFix();
        $(window).resize(function () {
        
            modalFix();
        });

        $('.modal').on('click', function () {
            modalFix();
        });
       
    function modalFix(){
        if($('.modal').hasClass('active')){
            $('.client__slider').css('display', 'none');
        }else{
           $('.client__slider').css('display', 'block');
        }
    }

     */




    setInterval(function () {
        if ($('.modal').hasClass('active')) {
            $('.header__toggle').attr('style', 'opacity: 0');
        } else {
            $('.header__toggle').attr('style', 'opacity: 1');
        }
    }, 1000);




    $.fn.isInViewport = function () {
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();

        let viewportTop = $(window).scrollTop();
        let viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).scroll(function () {
        $('.youtube-load-iframe').each(function () {
            if ($(this).isInViewport()) {
                $(this).attr({
                    src: $(this).attr('data-src')
                }).removeAttr('data-src');
            }
        });
    });

    $(window).scroll(function () {
        $('img').each(function () {
            if ($(this).isInViewport()) {
                $(this).attr({
                    src: $(this).attr('data-img-src')
                }).removeAttr('data-img-src');
            }
        });
    });


    $(window).scroll(function () {
        $('.background-image').each(function () {
            if ($(this).isInViewport()) {
                $(this).attr({
                    style: $(this).attr('data-style')
                }).removeAttr('data-style');
            }
        });
    });


});

//discuss-form

jQuery(document).ready(function ($) {

    (function ($) {

        'use strict';
        var form = $('.discuss-form'),
            message = $('.contact__m'),
            form_data;
        // Success function
        function done_func(response) {
            message.fadeIn().removeClass('alert-danger').addClass('alert-success');
            message.text(response);
            setTimeout(function () {
                message.fadeOut();
            }, 2000);
            form.find('input:not([type="submit"]), textarea').val('');

        }
        // fail function
        function fail_func(data) {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text(data.responseText);
            setTimeout(function () {
                message.fadeOut();
            }, 2000);
        }

        form.submit(function (e) {
            e.preventDefault();

            $(".discuss-form__contact").removeClass("discuss-form__fail");
            $(".discuss-form__fail-text").remove();


            var name = $('#name').val();
            var phone = $('#phone').val();
            var massage = $('#massage').val();

            var inputLength = $(".discuss-form__feedback input[name=feedback]:checked").length;

            var i = 0;

            if (name.length < 1) {
                $('#name').addClass('discuss-form__fail');
                $('#name').after('<span class="discuss-form__fail-text">Заполните обязательное поле.</span>');
                $('.discuss__fail').css('display', 'block');

                i++;
            }
            if (phone.length < 1) {
                $('#phone').addClass('discuss-form__fail');
                $('#phone').after('<span class="discuss-form__fail-text">Заполните обязательное поле.</span>');
                $('.discuss__fail').css('display', 'block');
                i++;
            }
          /*   if (massage.length < 1) {
                $('#massage').addClass(' discuss-form__fail');
                $('#massage').after('<span class="discuss-form__fail-text">Заполните обязательное поле.</span>');
                $('.discuss__fail').css('display', 'block');
                i++;
            } */
            if (inputLength !== 1) {
                $('.discuss-form__feedback').addClass(' discuss-form__fail');
                $('.discuss-form__feedback').after('<span class="discuss-form__fail-text">Заполните обязательное поле.</span>');
                $('.discuss__fail').css('display', 'block');
                i++;
            }
            /*  var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/; */
            /*  var validEmail = regEx.test(email);
             if (!validEmail) {
                 $('#email').after('<span class="error">Enter a valid email</span>');
             } */

            if (i == 0) {
               /*  console.log("вийшло"); */
                form_data = $(this).serialize();
                console.log(form_data);
                $.ajax({
                        type: 'POST',
                        url: form.attr('action'),
                        data: form_data
                    })
                    .done(done_func)
                    .fail(fail_func);

                $(".discuss-form__contact").removeClass("discuss-form__fail");
                $(".discuss-form__fail-text").remove();
                $('.discuss__fail').css('display', 'none');
                $(".discuss-form__inputs-wrap").css('display', 'none');
                $(".discuss__success").css('display', 'block');
                $(".discuss__button").css('display', 'none');

            }

        });



    })(jQuery);

});

//audit-form

jQuery(document).ready(function ($) {

    (function ($) {

        'use strict';
        var form = $('.audit-form'),
            message = $('.contact__m'),
            form_data;
        // Success function
        function done_func(response) {
            message.fadeIn().removeClass('alert-danger').addClass('alert-success');
            message.text(response);
            setTimeout(function () {
                message.fadeOut();
            }, 2000);
            form.find('input:not([type="submit"]), textarea').val('');

        }
        // fail function
        function fail_func(data) {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text(data.responseText);
            setTimeout(function () {
                message.fadeOut();
            }, 2000);
        }

        form.submit(function (e) {
            e.preventDefault();

            $(".audit-form__contact").removeClass("audit-form__fail");
            $(".audit-form__fail-text").remove();


            var name = $('#name-audit').val();
            var phone = $('#phone-audit').val();
            var massage = $('#massage-audit').val();
            var email = $('#email-audit').val();
            var inputLength = $(".audit-form__feedback input[name=feedback]:checked").length;

            var i = 0;

            if (name.length < 1) {
                $('#name-audit').addClass('audit-form__fail');
                $('#name-audit').after('<span class="audit-form__fail-text">Заполните обязательное поле.</span>');
                $('.form-audit__fail').css('display', 'block');
                i++;
            }
            if (phone.length < 1) {
                $('#phone-audit').addClass('audit-form__fail');
                $('#phone-audit').after('<span class="audit-form__fail-text">Заполните обязательное поле.</span>');
                $('.form-audit__fail').css('display', 'block');
                i++;
            }
        /*     if (email.length < 1) {
                $('#email-audit').addClass('audit-form__fail');
                $('#email-audit').after('<span class="audit-form__fail-text">Заполните обязательное поле.</span>');
                $('.form-audit__fail').css('display', 'block');
                i++;
            } */
          /*   if (massage.length < 1) {
                $('#massage-audit').addClass(' audit-form__fail');
                $('#massage-audit').after('<span class="audit-form__fail-text">Заполните обязательное поле.</span>');
                $('.form-audit__fail').css('display', 'block');
                i++;
            } */
            if (inputLength !== 1) {
                $('.audit-form__feedback').addClass(' audit-form__fail');
                $('.audit-form__feedback').after('<span class="audit-form__fail-text">Заполните обязательное поле.</span>');
                $('.form-audit__fail').css('display', 'block');
                i++;
            }
            /* if (email.length < 1) {
                $('#email-audit').after('<span class="audit-form__fail-text">Заполните обязательное поле.</span>');
                i++;
            } */


            if (i == 0) {
               /*  console.log("вийшло"); */
                form_data = $(this).serialize();
                console.log(form_data);
                $.ajax({
                        type: 'POST',
                        url: form.attr('action'),
                        data: form_data
                    })
                    .done(done_func)
                    .fail(fail_func);

                $(".audit-form__contact").removeClass("audit-form__fail");
                $(".audit-form__fail-text").remove();
                $('.form-audit__fail').css('display', 'none');
                $(".audit-form__inputs-wrap").css('display', 'none');
                $(".form-audit__success").css('display', 'block');
                $(".form-audit__button").css('display', 'none');

            }

        });



    })(jQuery);

});