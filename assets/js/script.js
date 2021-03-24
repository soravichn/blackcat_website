$(document).ready(function () {
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

  ScrollReveal().reveal('.reveal-box-head', { delay: 2800 });

  setTimeout(function () {
    generateText('\bLACK\zCAT\q', 100, 200, '.text-gerate');
  }, 600)
});

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