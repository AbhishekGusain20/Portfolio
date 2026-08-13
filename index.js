// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");

    if (darkMode) {

        themeBtn.textContent = "☀";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "☾";

        localStorage.setItem("theme", "light");

    }

});


// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================= FOOTER YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();