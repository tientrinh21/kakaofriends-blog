//Back to top button

let topBtn = document.querySelector('#top-btn');
topBtn.addEventListener('click', backToTop);


//Check if the page has scroll up over 350
window.onscroll = function() {btnAppear()};

function btnAppear() {
  if (window.pageYOffset > 350) {
    if (!topBtn.classList.contains('btn-entrance')) {
      topBtn.classList.remove('btn-exit');
      topBtn.classList.add('btn-entrance');
      topBtn.style.display = 'block';
    }
  } else {
    if(!topBtn.classList.contains('btn-exit')) {
      topBtn.classList.remove('btn-entrance');
      topBtn.classList.add('btn-exit');
      setTimeout(() => {
        topBtn.style.display = 'none';
      }, 250);
    }
  }
}

function backToTop() {
  window.scrollTo(0, 0);
}


//Menu toggle button

let menuBtn = document.querySelector('#menu-btn');
let navSmall = document.querySelector('#nav-small');
let main = document.querySelector('main');
let menuIcon = document.querySelector('#menu-icon');
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (navSmall.style.display == 'block') {
    navSmall.classList.remove('menu-open');
    navSmall.classList.add('menu-close');
    main.classList.remove('main-expand');
    main.classList.add('main-collapse');
    menuIcon.classList.remove('fa-rotate-90');
    setTimeout(() => {
      navSmall.style.display = 'none';
    }, 250);
  } else {
    navSmall.classList.remove('menu-close');
    navSmall.classList.add('menu-open');
    main.classList.remove('main-collapse');
    main.classList.add('main-expand');
    menuIcon.classList.add('fa-rotate-90');
    navSmall.style.display = 'block';
  }
}

window.onresize = function() {navSmallAppearance()};

function navSmallAppearance() {
  if (screen.width > 825) {
    navSmall.style.display = 'none';
    main.classList.remove('main-expand');
    menuIcon.classList.remove('fa-rotate-90');
  }
}
