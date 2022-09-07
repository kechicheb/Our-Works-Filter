let switcher = document.querySelectorAll(".switcher li");
let gallery = document.querySelectorAll(".gallery img");
console.log(gallery);
let classe = "all";
switcher.forEach((e) => {
  e.addEventListener("click", (e) => {
    switcher.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    mangeImages(e.target.dataset.cat);
  });
});
function mangeImages(className) {
  gallery.forEach((e) => {
    if (e.classList.contains(className)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
}
