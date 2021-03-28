$(document).ready(function () {
  // call function
  scrollReveal();
  slideNav();
  scrollSmooth();
  scrollShowNav();
  scrollActive();

  $(".owl-work").owlCarousel({
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
  });
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
    if (scroll >= 150) {
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
  // section1
  sr.reveal('.section1', {});
  sr.reveal('.reveal-box-head', { delay: 400 });
  // section2
  sr.reveal('.about-us', { delay: 200 });
  sr.reveal('.why-choose', { delay: 400 });
  sr.reveal('.about-us-footer', { delay: 200 });
  sr.reveal('.end-sec2', { delay: 200 });
  // section3
  sr.reveal('#our_head', { delay: 200 });
  sr.reveal('#service_1', { delay: 400 });
  sr.reveal('#service_2', { delay: 600 });
  sr.reveal('#service_3', { delay: 800 });
  sr.reveal('#service_4', { delay: 400 });
  sr.reveal('#service_5', { delay: 600 });
  sr.reveal('#service_6', { delay: 800 });
  // section4
  sr.reveal('#head_clients', { delay: 200 });
  sr.reveal('.thank-your', { delay: 400 });
  sr.reveal('.box-partner', { delay: 600 });
  // section6
  sr.reveal('#head_works', { delay: 200 });
  sr.reveal('#show_work', { delay: 600 });
  // section7
  sr.reveal('#head_contact', { delay: 200 });
  sr.reveal('.box-form', { delay: 600 });
  sr.reveal('#line_contact', { delay: 200 });
  sr.reveal('#fb_contact', { delay: 400 });
  sr.reveal('#ig_contact', { delay: 600 });
  sr.reveal('.box-map', { delay: 200 });
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