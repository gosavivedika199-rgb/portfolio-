// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


// ===============================
// CLOSE MOBILE MENU
// ===============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const animatedElements =
    document.querySelectorAll(".section, .contact-section");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.10
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}