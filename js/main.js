document.addEventListener("DOMContentLoaded", () => {
  // our-team-swiper
  const teamSwiper = new Swiper(".our-team-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 12,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // successful__cases-swiper
  const successfulCasesSwiper = new Swiper(".successful__cases-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-swiper-btn",
      prevEl: ".prev-swiper-btn",
    },
  });

  // reviews__certificate-swiper
  const reviewsCertificateSwiper = new Swiper(".reviews__certificate-swiper", {
    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
      nextEl: ".reviews__certificate-swiper-next",
      prevEl: ".reviews__certificate-swiper-prev",
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    },
  });

  // system-approach__swiper
  const systemApproachSwiper = new Swiper(".system-approach__swiper", {
    slidesPerView: 2.8,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".system-approach__swiper-next",
      prevEl: ".system-approach__swiper-prev",
    },
    breakpoints: {
      1100: {
        slidesPerView: 2.8,
      },
      800: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // reviews-swiper
  const reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // accordion
  const accordions = document.querySelectorAll(".accordion");

  accordions[0].classList.add("active");
  accordions[0].querySelector(".accordion-content").style.maxHeight =
    accordions[0].querySelector(".accordion-content").scrollHeight + "px";

  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      accordions.forEach((acc) => {
        if (acc !== accordion) {
          acc.classList.remove("active");
          acc.querySelector(".accordion-content").style.maxHeight = null;
          acc.querySelector(".accordion-arrow").style.transform =
            "rotate(0deg)";
        }
      });

      accordion.classList.toggle("active");

      const content = accordion.querySelector(".accordion-content");
      const arrow = accordion.querySelector(".accordion-arrow");

      if (accordion.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.style.transform = "rotate(90deg)";
      } else {
        content.style.maxHeight = null;
        arrow.style.transform = "rotate(0deg)";
      }
    });
  });

  // promotion lists
  const items = document.querySelectorAll(".promotions__list-item");
  const button = document.querySelector(".show__all-list");

  let isExpanded = false;

  function updateVisibleItems() {
    const isMobile = window.innerWidth <= 768;
    const limit = isMobile ? 14 : 18;

    if (!isExpanded) {
      items.forEach((item, index) => {
        if (index < limit) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    } else {
      items.forEach((item) => item.classList.remove("hidden"));
    }

    if (items.length <= limit) {
      button.style.display = "none";
    } else {
      button.style.display = "inline-block";
    }

    button.textContent = isExpanded
      ? "Свернуть список"
      : "Смотреть весь список";
  }

  updateVisibleItems();

  window.addEventListener("resize", updateVisibleItems);

  button.addEventListener("click", () => {
    isExpanded = !isExpanded;
    updateVisibleItems();
  });

  // accordion
  const tariffLists = document.querySelectorAll(".tariff-lists");

  tariffLists.forEach((item) => {
    const heads = item.querySelectorAll(".tariff-list");

    heads.forEach((head) => {
      head.addEventListener("click", () => {
        head.classList.toggle("active");
      });
    });
  });

  // footer acordion
  const footerTopBox = document.querySelectorAll(".footer__top-box");
  footerTopBox.forEach((item) => {
    const head = item.querySelector(".head");
    head.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  // menu
  const openMenuBtn = document.querySelector(".menu-btn");
  const menuIcon = document.querySelector(".menu-btn img");
  const menu = document.querySelector(".header__bottom");
  openMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
    if (menu.classList.contains("show")) {
      menuIcon.src = "images/icons/close.svg";
    } else {
      menuIcon.src = "images/icons/burger.svg";
    }
  });
  const dropdown = document.querySelector(".header .dropdown");
  const options = dropdown.querySelector(".dropdown__options");
  const head = dropdown.querySelector(".dropdown__head");
  head.addEventListener("click", () => {
    options.classList.toggle("show");
    head.classList.toggle("active");
  });

  const header = document.querySelector(".header");

  function handleHeaderFixed() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const windowWidth = window.innerWidth;

    if (windowWidth < 700 && scrollTop > 50) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
    console.log("scroll:", window.scrollY, "width:", window.innerWidth);

  }

  window.addEventListener("scroll", handleHeaderFixed);

  window.addEventListener("resize", handleHeaderFixed);
});
