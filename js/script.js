// Burger

window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#burger').classList.toggle('header__burger-is-active')

    if (document.querySelector('#burger').classList.contains('header__burger-is-active')) {
      document.querySelector('#burger').setAttribute('aria-label', 'Закрыть меню')
    }
    else {
      document.querySelector('#burger').setAttribute('aria-label', 'Открыть меню')
    }
  })
})

// SWIPER

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ACCORDION

$( function() {
  $("#accordion").accordion({
    icons: {"activeHeader": "questions__plus-icon-active"},
    heightStyle: "content",
    collapsible: true
  });
});

// Tabs

$( function() {
  $("#tabs").tabs();
} );
