document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuItemsParent = document.getElementById("menu-items-parent");
  const menuClose = document.getElementById("menu-close");

  menuToggle.addEventListener("click", function () {
    menuItemsParent.classList.toggle("hidden");
    menuToggle.classList.toggle("active");
  });

  menuClose.addEventListener("click", function () {
    menuItemsParent.classList.add("hidden");
    menuToggle.classList.remove("active");
  });
})