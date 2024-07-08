// navbar navigation function
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


//slider controlling function
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  const sliderSelect = document.getElementById("slider-select");
  const totalSlide = document.getElementById("total-slides");

  totalSlide.innerText = slides.length; 

  let currentIndex = 0;
  const slidesPerPage = 2;
  const totalPages = Math.ceil(slides.length / slidesPerPage);
  console.log(totalPages);

  const totalPages2 = Math.ceil(slides.length / slidesPerPage) + 1;
  console.log(totalPages2);


  // Generate dropdown options dynamically
  for (let i = 0; i < totalPages; i++) {
    const start = i * slidesPerPage + 1;
    const end = Math.min(start + slidesPerPage - 1, slides.length);
    const option = document.createElement("option");
    option.value = `${start}-${end}`;
    option.textContent = `${start} and ${end}`;
    sliderSelect.appendChild(option);
  }

  function updateSliderPosition() {
    const sliderWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${
      (currentIndex * sliderWidth) / slidesPerPage
    }px)`;
    updateSliderSelect();
  }

  function updateSliderSelect() {
    const startPage = currentIndex * slidesPerPage + 1;
    const endPage = Math.min(startPage + slidesPerPage - 1, slides.length);
    const optionValue = `${startPage}-${endPage}`;
    for (let option of sliderSelect.options) {
      if (option.value === optionValue) {
        option.selected = true;
        break;
      }
    }
  }

  nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalPages) {
      currentIndex = 0;
    }
    updateSliderPosition();
  });

  prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalPages - 1;
    }
    updateSliderPosition();
  });

  sliderSelect.addEventListener("change", (event) => {
    const selectedValue = event.target.value.split("-");
    const selectedPage = parseInt(selectedValue[0]) - 1;
    currentIndex = Math.floor(selectedPage / slidesPerPage);
    updateSliderPosition();
  });

  window.addEventListener("resize", updateSliderPosition);
  updateSliderSelect(); // Initialize the slider select value on page load
});