$(document).ready(function () {
  // call function
  scrollReveal();
  // dropdownNav();

  setTimeout(function () {
    generateText('\bLACK\zCAT\q', 100, 200, '.text-gerate');
  }, 600)

  // scroll active
  var nav = $(".navbar-custom");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      nav.addClass("bg-white");
    } else {
      nav.removeClass("bg-white");
    }
  });

  // scroll smooth
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // scroll active
  var sections = $('section');
  var nav = $('.navbar-custom');
  var nav_height = nav.outerHeight();
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
      var top = $(this).offset().top - nav_height;
      var bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.nav-link').removeClass('active');
        sections.removeClass('active');
        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  // $("#menu-toggle").click(function (e) {
  //   e.preventDefault();
  //   $("#wrapper").toggleClass("toggled");
  // });

  // $(".sidebar-dropdown > a").click(function () {
  //   $(".sidebar-submenu").slideUp(200);
  //   if ($(this).parent().hasClass("active")) {
  //     $(".sidebar-dropdown").removeClass("active");
  //     $(this).parent().removeClass("active");
  //   } else {
  //     $(".sidebar-dropdown").removeClass("active");
  //     $(this).next(".sidebar-submenu").slideDown(200);
  //     $(this).parent().addClass("active");
  //   }
  // });
});

// scroll reveal
function scrollReveal() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
  })
  sr.reveal('.section1', {})
  sr.reveal('.reveal-box-head', { delay: 400 })
  sr.reveal('.about-us', { delay: 200 });
  sr.reveal('.why-choose', { delay: 400 });
  sr.reveal('.about-us-footer', { delay: 200 });
  sr.reveal('#our_head', { delay: 200 });
  sr.reveal('#service_1', { delay: 500 });
  sr.reveal('#service_2', { delay: 800 });
  sr.reveal('#service_3', { delay: 1100 });
  sr.reveal('#service_4', { delay: 1300 });
  sr.reveal('#service_5', { delay: 1600 });
  sr.reveal('#service_6', { delay: 1900 });
}

function dropdownNav() {
  $(".dropdown").on("hide.bs.collapse", function () {
    $(this).find(".dropdown-menu").first().addClass("sliding")
  });
  $(".dropdown").on("hidden.bs.collapse", function () {
    $(this).find(".dropdown-menu").first().removeClass("sliding")
  });
  $(document).click(function () {
    $(".dropdown-menu.collapse.show").collapse("hide");
  });
}

// text generator --------------------------------------------------------------------------
function generateChar(len) {
  var keys = 'abcdefghijklmnopqrstuvwxyz0123456789',
    tmp = '';
  for (var i = 0; i <
    len; i++) tmp += keys[Math.floor(Math.random() * keys.length)];
  return tmp;
}

function htmlentity(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  return str;
}

function generateText(txt, genSpeed, incSpeed, className) {
  var genView = document.querySelector(className);
  var comTxt = '',
    genSpeed = (typeof genSpeed == 'undefined') ? 100 : genSpeed,
    incSpeed = (typeof incSpeed == 'undefined') ? 300 : incSpeed,
    i = 0,
    timer1 = setInterval(function () {
      genView.innerHTML = comTxt + generateChar(1);
      if (txt[i] == ' ') comTxt += txt[i];

      if (txt.length == i) {
        clearInterval(timer1);
        clearInterval(timer2);
        genView.innerHTML = comTxt;
      }
    }, genSpeed),
    timer2 = setInterval(function () {
      comTxt += (txt[i] == '\b') ? '<h1><img src="assets/images/logo-b.png">' : (txt[i] == '\z') ? '<span>' : (txt[i] == '\q') ? '</span></h1>' :
        (txt[i] == '\n') ? '<br>' : htmlentity(txt[i]);
      i++;
    }, incSpeed);
}