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
  "https://www.shelliesflowers.co.uk/upload/mt/she160/products/category/congratulations.jpg",
  "https://www.shelliesflowers.co.uk/upload/mt/she160/products/category/new-born.jpg",
  "https://www.shelliesflowers.co.uk/upload/mt/she160/products/category/retirement.jpg",
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

document.getElementById("submit").addEventListener("click", (event) => {
  let element_comments = document.getElementById("comments");
  let new_div = document.createElement("div");
  new_div.innerText = getNumberOrString(
    document.getElementById("addcomment").value
  );

  element_comments.appendChild(new_div);
});
