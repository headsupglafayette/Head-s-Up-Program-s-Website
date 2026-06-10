// ============================================
// MOBILE NAVIGATION
// ============================================

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileMenuBtn.addEventListener("click", () => {

    mobileNav.classList.toggle("mobile-nav-active");

    if (mobileNav.classList.contains("mobile-nav-active")) {

        mobileNav.style.display = "flex";

    } else {

        mobileNav.style.display = "none";

    }

});

// ============================================
// CLOSE MOBILE NAVIGATION
// ============================================

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.style.display = "none";
        mobileNav.classList.remove("mobile-nav-active");

    });

});

// ============================================
// STICKY HEADER SHADOW
// ============================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".main-header");

    if(window.scrollY > 40){

        header.style.boxShadow = "0 12px 35px rgba(0,0,0,0.08)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for reaching out to Heads Up! Your message has been successfully submitted.");

    contactForm.reset();

});

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".desktop-nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

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
// SCROLL TO TOP BUTTON
// ============================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "55px";
scrollBtn.style.height = "55px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#ffb703";
scrollBtn.style.color = "#082b63";
scrollBtn.style.fontSize = "1.4rem";
scrollBtn.style.fontWeight = "700";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

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

// ============================================
// EMERGENCY BUTTON
// ============================================

const emergencyBtn = document.querySelector(".emergency-btn");

emergencyBtn.addEventListener("click", () => {

    alert("Emergency contact feature placeholder. Replace with actual emergency contact system.");

});

// ============================================
// HERO CARD ANIMATION
// ============================================

const heroCard = document.querySelector(".hero-card");

window.addEventListener("mousemove", (e) => {

    const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

    heroCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// ============================================
// FADE IN ON SCROLL
// ============================================

const fadeElements = document.querySelectorAll(

    ".about-card, .program-card, .story-card, .resource-card, .team-card, .event-card"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

fadeElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

// ============================================
// DYNAMIC WEEKLY UPDATE DATE
// ============================================

const updateDate = new Date();

console.log(
    "Weekly Updates Last Refreshed:",
    updateDate.toDateString()
);
