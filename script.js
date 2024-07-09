// // functionality about when page scroll down
// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.getElementById("navbar");
//   const reportDownloadBtn = document.getElementById("report-download-btn");
//   const menuBtn = document.querySelectorAll(".menu-line");
//   const wppoolLogo = document.getElementById("wppool-logo")
//   const nodeShare = document.getElementById("node-share");
//   const nodeShareParent = document.getElementById("node-share-parent");

//   const offset = 80; 

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > offset) {
//       wppoolLogo.src = "./src/assets/logo2.png"
//       nodeShare.src = "./src/assets/share-node2.svg"
//       nodeShareParent.classList.add("borderblack")
//       navbar.classList.remove("bg-primary");
//       navbar.classList.add("bg-white");
//       navbar.classList.add("shadow-lg");
//       reportDownloadBtn.classList.remove("primary-btn-two");
//       reportDownloadBtn.classList.add("primary-btn");
//       menuBtn.forEach((btn) => {
//         btn.classList.remove("bg-white");
//         btn.classList.add("bg-black");
//       });
//     } else {
//       wppoolLogo.src = "./src/assets/logo.png";
//       nodeShare.src = "./src/assets/share-node.svg";
//       navbar.classList.remove("bg-white");
//       navbar.classList.add("bg-primary");
//       navbar.classList.remove("shadow-lg");
//       reportDownloadBtn.classList.remove("primary-btn");
//       reportDownloadBtn.classList.add("primary-btn-two");
//       menuBtn.forEach((btn) => {
//         btn.classList.remove("bg-black");
//         btn.classList.add("bg-white");
//       });
//     }
//   });
// });

// sticky navbar navigation function 
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
});

// default navbar navigation function-2
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle2 = document.getElementById("menu-toggle-two");
  const menuClose2 = document.getElementById("menu-close-two");
  const menuItemsParent2 = document.getElementById("menu-items-parent-two");

  menuToggle2.addEventListener("click", function () {
    menuItemsParent2.classList.toggle("hidden");
    menuToggle2.classList.toggle("active");
  });

  menuClose2.addEventListener("click", function () {
    menuItemsParent2.classList.add("hidden");
    menuToggle2.classList.remove("active");
  });
});

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