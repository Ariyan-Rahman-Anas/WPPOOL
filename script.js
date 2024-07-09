// functionality about when page scroll down
document.addEventListener("DOMContentLoaded", function () {
  const stickyNavbar = document.getElementById("sticky-navbar");
  const offset = 80;
  window.addEventListener("scroll", function () {
    if (window.scrollY > offset) {
      stickyNavbar.classList.remove("md:w-[95vw]");
      stickyNavbar.classList.add("md:w-full");
    } else {
      stickyNavbar.classList.remove("md:w-full");
      stickyNavbar.classList.add("md:w-[95vw]");
    }
  });
});

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

// chart js code
const ctx = document.getElementById("myChart");
new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    datasets: [
      {
        label: "WPPOOL",
        data: [2, 4, 25, 10, 28.9, 16, 13, 18.5, 25.9, 17.8, 34.6, 49.7],
        borderColor: "#FC714D",
        fill: false,
        pointStyle: "circle",
      },
      {
        label: "Google",
        data: [9, 10, 18, 25, 34, 46, 40, 12, 33, 66, 86, 19],
        borderColor: "#615DE3",
        fill: false,
        pointStyle: "circle",
      },
      {
        label: "Microsoft",
        data: [3, 24, 11, 32.3, 39.6, 40.2, 23.5, 57.5, 30.6, 29.8, 39.6, 28],
        borderColor: "#8ba763",
        fill: false,
        pointStyle: "circle",
      },
      {
        label: "Twitter",
        data: [6, 14, 33, 38.3, 29.6, 34.2, 27.5, 77.5, 33.6, 79.8, 37.6, 58],
        borderColor: "#6F34A1",
        fill: false,
        pointStyle: "circle",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // set maximum value to 100
        ticks: {
          callback: function (value) {
            return value + "%"; // add percentage symbol to the ticks
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom", // position legend at the bottom
        labels: {
          usePointStyle: true, // use point style for legend
          pointStyle: "circle", // set point style to circle
          padding: 20, // add padding between legend items
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": " + tooltipItem.raw + "%";
          },
        },
      },
    },
  },
});