// ============================================
// MOBILE NAVIGATION
// ============================================

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {

    if (mobileNav.style.display === "flex") {

        mobileNav.style.display = "none";

    } else {

        mobileNav.style.display = "flex";

    }

});

// ============================================
// CLOSE MOBILE MENU AFTER CLICK
// ============================================

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.style.display = "none";

    });

});

// ============================================
// STICKY NAV SHADOW EFFECT
// ============================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".main-header");

    if(window.scrollY > 30){

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";

    }

    else{

        header.style.boxShadow = "0 4px 18px rgba(0,0,0,0.08)";

    }

});

// ============================================
// SIMPLE CONTACT FORM FEEDBACK
// ============================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for reaching out! Your message has been submitted.");

    contactForm.reset();

});

// ============================================
// ACTIVE NAVIGATION HIGHLIGHT
// ============================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".desktop-nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active-link");

        }

    });

});

// ============================================
// AUTO SCROLL TO TOP BUTTON
// ============================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#ffb703";
scrollBtn.style.color = "#082b63";
scrollBtn.style.fontSize = "1.3rem";
scrollBtn.style.fontWeight = "700";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollBtn.style.display = "block";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});