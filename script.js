/*Hamburger Menu*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/*Image Carousel*/
var view;
view = [
  "https://www.123kwiaty.pl/static/img/admin/zdjecia/888,255.jpg?1626791883",
  "https://www.123kwiaty.pl/static/img/admin/zdjecia/1089,255.jpg?1641982553",
  "https://www.123kwiaty.pl/static/img/admin/zdjecia/149,255.jpg?1626791865",
];
document.getElementById("next").addEventListener("click", (event) => {
  view.push(view.shift());
  let element_photo = document.getElementById("photo");
  element_photo.setAttribute("src", view[0]);
});
document.getElementById("previous").addEventListener("click", (event) => {
  view.unshift(view.pop());
  let element_photo = document.getElementById("photo");
  element_photo.setAttribute("src", view[0]);
});

/*Comments */

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

document.getElementById("button").addEventListener("click", (event) => {
  let element_list = document.getElementById("list");
  element_list.innerText = getNumberOrString(
    document.getElementById("text").value
  );
});
