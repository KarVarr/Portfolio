const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const portfolio = document.querySelector('#portfolio');
const education = document.querySelector('#education');
const contacts = document.querySelector('#contacts');
const footer = document.querySelector('#footer');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav_items');

//burgerMenu
const homeMenu = document.querySelector('#homeMenu');
const aboutMenu = document.querySelector('#aboutMenu');
const skillMenu = document.querySelector('#skillMenu');
const portfolioMenu = document.querySelector('#portfolioMenu');
const educationMenu = document.querySelector('#educationMenu');
const contactsMenu = document.querySelector('#contactsMenu');

//section All
const headerSection = document.querySelector('.header');
const aboutSection = document.querySelector('.aboutme');
const skillsSection = document.querySelector('.skills');
const portfolioSection = document.querySelector('.portfolio');
const educationSection = document.querySelector('.education');

const container = document.querySelector('.container');

const toggleDayNight = document.querySelector('#toggle');

const allSection = document.querySelectorAll('section');

const btnBurger = document.querySelector('#burger');
const navBurger = document.querySelector('.activeBurgerMenu ');
const bodyLock = document.body;

//scroll-------

// const scrollTo = scr => scr.scrollIntoView({ behavior: 'smooth' });

// home.addEventListener('click', scrollTo(headerSection));

// about.addEventListener('click', scrollTo(aboutSection));

// skills.addEventListener('click', scrollTo(skillsSection));

// portfolio.addEventListener('click', scrollTo(portfolioSection));

// education.addEventListener('click', scrollTo(educationSection));

// contacts.addEventListener('click', scrollTo(footer));

//toggle
//==================
toggleDayNight.addEventListener('click', () => {
  if (toggleDayNight.checked) {
    container.classList.toggle('night');
    container.classList.add('night');
    container.classList.toggle('nightText');
    container.classList.add('nightText');
    aboutSection.classList.add('night');
    aboutSection.classList.add('nightText');
    portfolioSection.classList.add('night');
    portfolioSection.classList.add('nightText');
    footer.classList.add('night');
    footer.classList.add('nightText');
  } else {
    container.classList.remove('night');
    container.classList.remove('nightText');
    aboutSection.classList.remove('night');
    aboutSection.classList.remove('nightText');
    portfolioSection.classList.remove('night');
    portfolioSection.classList.remove('nightText');
    footer.classList.remove('night');
    footer.classList.remove('nightText');
  }
})
//=================
//sticky nav------

// const initialCoords = aboutSection.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('stiky');
//   else nav.classList.remove('stiky');
// });

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) {
//     nav.classList.add('stiky');
//   } else nav.classList.remove('stiky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: '-90px'
// });

// headerObserver.observe(header);

//Reveal section--------------

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.10,
});

allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//BURGER NAV

// btnBurger.addEventListener('click', () => {
//   if (btnBurger.checked) {
//     navBurger.classList.add('activeBurgerMenu');
//     bodyLock.classList.add('lock');
//   } else {
//     navBurger.classList.remove('activeBurgerMenu');
//     bodyLock.classList.remove('lock');
//   }
// });
//=====================
btnBurger.addEventListener('click', () => {
  nav.classList.toggle('activeBurgerMenu')
  bodyLock.classList.toggle('lock');
});
//=================
//navigationChecked

// function change (content) {
//   btnBurger.checked = false;
//   nav.classList.remove('activeBurgerMenu');
//   bodyLock.classList.remove('lock');
//   content.scrollIntoView({ behavior: 'smooth' });
  
// }
//===========================
home.addEventListener('click', () => {
  btnBurger.checked = false;
  nav.classList.remove('activeBurgerMenu');
  bodyLock.classList.remove('lock');
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
});

about.addEventListener('click', () => {
  btnBurger.checked = false;
  nav.classList.remove('activeBurgerMenu');
  bodyLock.classList.remove('lock');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

skills.addEventListener('click', () => {
  btnBurger.checked = false;
  nav.classList.remove('activeBurgerMenu');
  bodyLock.classList.remove('lock');
  skillsSection.scrollIntoView({ behavior: 'smooth' });
});

portfolio.addEventListener('click', () => {
  btnBurger.checked = false;
  nav.classList.remove('activeBurgerMenu');
  bodyLock.classList.remove('lock');
  portfolioSection.scrollIntoView({ behavior: 'smooth' });
});

education.addEventListener('click', () => {
  btnBurger.checked = false;
  nav.classList.remove('activeBurgerMenu');
  bodyLock.classList.remove('lock');
  educationSection.scrollIntoView({ behavior: 'smooth' });
});

contacts.addEventListener('click', () => {
  btnBurger.checked = false;
  nav.classList.remove('activeBurgerMenu');
  bodyLock.classList.remove('lock');
  footer.scrollIntoView({ behavior: 'smooth' });
});
