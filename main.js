const home = document.querySelector("#home");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const portfolio = document.querySelector("#portfolio");
const education = document.querySelector("#education");
const contacts = document.querySelector("#contacts");
const footer = document.querySelector("#footer");

const nav = document.querySelector(".nav_items");

const aboutSection = document.querySelector(".aboutme");
const skillsSection = document.querySelector(".skills");
const portfolioSection = document.querySelector(".portfolio");
const educationSection = document.querySelector(".education");


const container = document.querySelector('.container')
const p = document.querySelector('aboutme__subtitle-1')

const toggleDayNight = document.querySelector("#toggle");

//scroll-------

home.addEventListener('click', () => {
  window.scrollTo({left: 0, top: 0, behavior: 'smooth'})
})

about.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

skills.addEventListener("click", () => {
  skillsSection.scrollIntoView({ behavior: "smooth" });
});

portfolio.addEventListener("click", () => {
  portfolioSection.scrollIntoView({ behavior: "smooth" });
});

education.addEventListener('click', ()=> {
  educationSection.scrollIntoView({behavior: "smooth"})
})

contacts.addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth" });
});

//toggle

toggleDayNight.addEventListener('click', () => {
  if (toggleDayNight.checked) {
    container.classList.toggle("night");
    container.classList.add("night");
    container.classList.toggle("nightText");
    container.classList.add("nightText");
    aboutSection.classList.add("night");
    aboutSection.classList.add("nightText");
    portfolioSection.classList.add("night");
    portfolioSection.classList.add("nightText");
    footer.classList.add("night");
    footer.classList.add("nightText");
  } else {
    container.classList.remove('night')
    container.classList.remove("nightText");
    aboutSection.classList.remove("night");
    aboutSection.classList.remove("nightText");
    portfolioSection.classList.remove("night");
    portfolioSection.classList.remove("nightText");
    footer.classList.remove("night");
    footer.classList.remove("nightText");
    
  }
})



//sticky nav------
const initialCoords = aboutSection.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add("stiky");
  else nav.classList.remove("stiky");
});


// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);