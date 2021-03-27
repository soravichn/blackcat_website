$(document).ready(function () {
  // call function
  scrollReveal();
  slideNav();
  scrollSmooth();
  scrollShowNav();
  scrollActive();
});

// scroll active
function scrollActive() {
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
}

// scroll show nav
function scrollShowNav() {
  var nav = $(".navbar-custom");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      nav.addClass("scroll-show");
    } else {
      nav.removeClass("scroll-show");
    }
  });
}

// scroll smooth
function scrollSmooth() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

// scroll reveal
function scrollReveal() {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
  })
  sr.reveal('.section1', {});
  sr.reveal('.reveal-box-head', { delay: 400 });
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

// mobile nav slide
function slideNav() {
  $(".mobile-nav").on("click", function () {
    if ($(".mobile-nav").hasClass("nav-open")) {
      $(".mobile-nav").removeClass('nav-open');
      $(".mobile-nav-slide").removeClass('nav-open');
      $("body").css('overflow', 'auto');
    } else {
      $(".mobile-nav").addClass('nav-open');
      $(".mobile-nav-slide").addClass('nav-open');
      $("body").css('overflow', 'hidden');
    }
  });
}