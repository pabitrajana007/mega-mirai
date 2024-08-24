document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");
  const currentPage = location.href;
  const page = document.querySelectorAll("ul li a");
  console.log(page[0].href);
  page.forEach(function (item) {
    if (item.href == currentPage) item.classList.add("active");
  });

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Form submitted!");
    });
  }
});
const slides = document.querySelectorAll(".card");
const slidesLen = slides.length;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
let count = 0;

setInterval(() => {
  slideNext();
}, 3000);

function slideNext() {
  if (count >= slidesLen - 1) count = 0;
  else count += 1;
  move();
}

const move = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};

function openMenu() {
  const menu = document.getElementsByClassName("menu")[0];
  menu.style.visibility = "visible";
  menu.style.backgroundColor = "rgba(211,211,211,0.5)";
}
function closeMenu() {
  const menu = document.getElementsByClassName("menu")[0];
  menu.style.visibility = "hidden";
}
