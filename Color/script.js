const bar = document.querySelector('#mobile');
const links = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

function showLinks() {
  bar.classList.toggle('is-active')
  links.classList.toggle('active')
}

const highlightMenu = () => {
  const ele = document.querySelector('.highlight')
  const home = document.querySelector('#home-page')
  const about = document.querySelector('#about-page')
  const service = document.querySelector('#services-page')

  let scrollPos = window.scrollY
  // console.log(scrollPos);

  if (window.innerWidth > 960 && scrollPos < 600) {
    home.classList.add('highlight')
    about.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    about.classList.add('highlight')
    home.classList.remove('highlight')
    service.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    service.classList.add('highlight')
    about.classList.remove('highlight')
    return
  }

  if ((ele && window.innerWidth < 960 && scrollPos < 600) || ele) {
    ele.classList.remove('highlight')
  }
}

const hide = () => {
  const menuBar = document.querySelector('.is-active')
  if (window.innerWidth <= 960 && menuBar) {
    bar.classList.toggle('is-active')
    links.classList.remove('active')
  }
}


bar.addEventListener("click", showLinks);
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
links.addEventListener('click', hide)
navLogo.addEventListener('click', hide)
