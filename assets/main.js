// ==========================================
// 1. HERO TYPED EFFECT
// ==========================================
var typed = new Typed(".text", {
    strings: ["Front-end Developer", "YouTuber", "Web Developer", "Vlogger"],
    typeSpeed: 90,
    backSpeed: 20,
    backDelay: 1000,  
    loop: true
});

// ==========================================
// 2. INITIALIZE SKILLS (BARS & CIRCLES)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // A. Animate Linear Progress Bars
    const progressBars = document.querySelectorAll(".progress");
    const skillWidths = {
        html: "95%",
        css: "90%",
        js: "85%",
        react: "80%",
        python: "75%"
    };

    progressBars.forEach(bar => {
        // Find which skill class the bar matches, default to 0% if none
        const skillClass = Object.keys(skillWidths).find(key => bar.classList.contains(key));
        const targetWidth = skillClass ? skillWidths[skillClass] : "0%";
        
        // Clean, modern micro-timeout for CSS transition triggers
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });

    // B. Animate Circular Progress Skills
    const circles = document.querySelectorAll('.circle');
    const circumference = 339.292;
    
    circles.forEach(circle => {
        const progress = parseFloat(circle.getAttribute('data-skill')) || 0; 
        const offset = circumference - (progress / 100) * circumference;

        const progressCircle = circle.querySelector('.circle-progress');
        if (progressCircle) {
            progressCircle.style.strokeDashoffset = offset;
        }

        const skillText = circle.querySelector('.skill-text');
        if (skillText) {
            skillText.innerHTML = `${progress}%`;
        }
    });
});

// ==========================================
// 3. MOBILE NAVIGATION MENU LOGIC
// ==========================================






// const toggle = document.getElementById('menu-toggle');
// const navbar = document.getElementById('navbar');
// const navLinks = document.querySelectorAll('.nav-link');

// if (toggle && navbar) {
//     toggle.addEventListener('click', () => {
//         navbar.classList.toggle('active');
//     });

//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             navbar.classList.remove('active');
//         });
//     });
// }


  (() => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (!menuToggle || !navbar) return; // Safeguard if elements aren't ready

    // Toggle menu state on button click
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navbar.classList.toggle("active");
    });

    // Automatically collapse navigation menu once an individual link item is clicked
    const navLinks = navbar.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navbar.classList.remove("active");
        });
    });
})();


// ==========================================
// 4. INFINITE CAROUSEL SLIDER ENGINE
// ==========================================
(function () {
    const track = document.getElementById("track");
    if (!track) return;

    const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--gap")) || 16;
    const cards = Array.from(track.children);

    // Clone initial cards to set up seamless loop sequence


    // Interval driver logic
    let interval = setInterval(() => {
        if (autoSlide) slideNext();
    }, 3000);

    // Pause on hovering over the track
    track.addEventListener("mouseenter", () => autoSlide = false);
    track.addEventListener("mouseleave", () => autoSlide = true);

    // Navigation Buttons Hookups (Fixed matching IDs)
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (nextBtn) nextBtn.addEventListener("click", slideNext);
    if (prevBtn) prevBtn.addEventListener("click", slidePrev);

    window.addEventListener("resize", () => {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
    });
})();



const observerOptions = {
  root: null, // Uses the viewport
  rootMargin: '0px',
  threshold: 0.1 // Triggers when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Fades in when scrolling down into view
      entry.target.classList.add('is-visible');
    } else {
      // Optional: Remove this line if you want the element to stay visible forever once revealed
      entry.target.classList.remove('is-visible'); 
    }
  });
}, observerOptions);

// Target all elements you want to animate
document.querySelectorAll('.fade-in-element').forEach(element => {
  observer.observe(element);
});



