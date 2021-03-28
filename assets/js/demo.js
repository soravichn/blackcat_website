$(document).ready(function () {
  $("#hamburger").on("click", function () {
    if ($("#hamburger").hasClass("open")) {
      $("#hamburger").removeClass('open');
      $(".blackcat-nav-mobile").removeClass('open');
      $("body").css('overflow', 'auto');

    } else {
      $("#hamburger").addClass('open');
      $(".blackcat-nav-mobile").addClass('open');
      $("body").css('overflow', 'hidden');

    }


  });




  $(function () {
    // import svg
    $("#xo_circle").load("../assets/images/xo_circle.svg");
    $("#logo-b").load("../assets/images/logo-b.svg");
    $("#line-XO").load("../assets/images/lineXO.svg");
    $("#circle_x").load("../assets/images/circleX.svg");
    $("#line_X").load("../assets/images/lineX.svg");
    $("#line_X2").load("../assets/images/lineX2.svg");
    $("#dotCircle").load("../assets/images/dotCircle.svg");
    $("#circleLineXO").load("../assets/images/circleLineXO.svg");
    $("#circle_O").load("../assets/images/circleO.svg");
    $("#lineCircle").load("../assets/images/lineCircle.svg");
    $("#line_O").load("../assets/images/lineO.svg");
    $("#circle_LineDots").load("../assets/images/circleLineDots.svg");
    $("#two_Circle").load("../assets/images/twoCircle.svg");
    $("#circle_LineDotsX").load("../assets/images/circleLineDotsX.svg");
    $("#two_CircleX").load("../assets/images/twoCircleX.svg");
    $("#line_CircleX").load("../assets/images/lineCircleX.svg");
    $("#line_CircleXO2").load("../assets/images/lineCircleXO2.svg");
    $("#circle_OO").load("../assets/images/circleOO.svg");
    $("#line_XO2").load("../assets/images/lineXO2.svg");
    $("#line_CircleX2").load("../assets/images/lineCircleX2.svg");
    $("#circle_O_dev").load("../assets/images/circleO.svg");



    $('a[href*=\\#]:not([href=\\#])').on('click', function () {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 100);
        return false;
      }
    });



  });


  var header = $(".blackcat-nav");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
      header.addClass("bg-white");
    } else {
      header.removeClass("bg-white");
    }
  });








  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
  })

  sr.reveal('.header', {})
  sr.reveal('.header-text', {
    interval: 200
  })

  sr.reveal('.about_us', {})
  sr.reveal('.cat_about_us', {
    delay: 200
  })
  sr.reveal('.choose-us', {
    delay: 200
  })
  sr.reveal('.about-footer', {
    delay: 200
  })

  sr.reveal('.services', {})
  sr.reveal('.content-services', {
    interval: 200
  })

  sr.reveal('.clients', {})
  sr.reveal('.work', {
    delay: 200
  })

  sr.reveal('.contact', {})

  sr.reveal('.social-main', {
    delay: 200
  })
  sr.reveal('.social', {
    interval: 200
  })

  var sections = $('section'),
    nav = $('.blackcat-nav'),
    nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });



  $('.work-moblie').owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    responsive: {
      300: {
        stagePadding: 20,

      },
      500: {
        stagePadding: 40,
      }
    }
  })


  $('.seo-slide').owlCarousel({

    loop: true,
    margin: 20,
    items: 1,
    responsive: {
      300: {
        stagePadding: 50,
      },
      1000: {
        stagePadding: 200,
      }
    }
  })

  $('.dev-slide').owlCarousel({
    loop: true,
    margin: 10,
    items: 2,
    nav: true,
    dots: false,
  })

  $('.design-slide').owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    nav: true,
    dots: false
  })

  $('.mana-slide').owlCarousel({
    nav: true,
    dots: false,
    responsive: {
      300: {
        margin: 20,
        items: 1,
        stagePadding: 50,
        loop: true,
      },
      400: {
        margin: 20,
        items: 1,
        stagePadding: 100,
        loop: true,
      },
      500: {
        margin: 5,
        items: 4,
        mouseDrag: false,
        touchDrag: false
      },
      1000: {
        margin: 10,
        items: 4,
        mouseDrag: false,
        touchDrag: false
      }
    }
  })


  $('.team-slide').owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    nav: true,
    dots: false,
    responsive: {
      300: {
        margin: 10,
      },
      500: {
        margin: 30,
      }
    }
  })


});

function generateChar(len) {
  var keys = 'abcdefghijklmnopqrstuvwxyz0123456789',
    tmp = '';
  for (var i = 0; i <
    len; i++) tmp += keys[Math.floor(Math.random() * keys.length)];
  return tmp;
}

function htmlentity(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/ </g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  return str;
}

function generateText(txt, genSpeed, incSpeed, className) {

  var genView = document.querySelector(className);
  // Declare Some Variable
  var comTxt = '',
    genSpeed = (typeof genSpeed == 'undefined') ? 100 : genSpeed,
    incSpeed = (typeof incSpeed == 'undefined') ? 300 : incSpeed,
    i = 0,

    // Interval which (Generate and Check)
    timer1 = setInterval(function () {

      genView.innerHTML = comTxt + generateChar(1);
      if (txt[i] == ' ') comTxt += txt[i];

      if (txt.length == i) {
        clearInterval(timer1);
        clearInterval(timer2);
        genView.innerHTML = comTxt;
      }

    }, genSpeed),

    // Interval Which (Increment Every part of second)
    timer2 = setInterval(function () {
      comTxt += (txt[i] == '\b') ? '<div class="logo-b"></div><span class="d-none">B</span>' : (txt[i] == '\z') ? '<span>' : (txt[i] == '\q') ? '</span>' :
        (txt[i] == '\n') ? '<br>' : htmlentity(txt[i]);
      i++;
    }, incSpeed);


}

function showDetail(e) {
  $(e).parent('.job-detail').find('.job-detail-text').addClass('show-detail');
}

function hideDetail(e) {
  $(e).parent('.job-detail-text').removeClass('show-detail');
}
