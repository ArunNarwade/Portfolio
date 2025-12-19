var typed = new Typed(".text", {
    strings: ["Front-end Developer", "YouTuber", "Web Developer","Vloger"],
    typeSpeed: 90,
    backSpeed: 20,
    backDelay: 1000,  
    loop: true
});


document.addEventListener("DOMContentLoaded", function() {
    let progressBars = document.querySelectorAll(".progress");
    
    progressBars.forEach(bar => {
       
        let width = 
            bar.classList.contains("html") ? "95%" :
            bar.classList.contains("css") ? "90%" :
            bar.classList.contains("js") ? "85%" :
            bar.classList.contains("react") ? "80%" :
            bar.classList.contains("python") ? "75%" : "0";
        
        
        requestAnimationFrame(() => {
            
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let circles = document.querySelectorAll('.circle');
    
    circles.forEach(circle => {
        const progress = circle.getAttribute('data-skill'); 
        const circumference = 339.292;
        const offset = circumference - (progress / 100) * circumference;

        const progressCircle = circle.querySelector('.circle-progress');
        progressCircle.style.strokeDashoffset = offset;

       
        const skillText = circle.querySelector('.skill-text');
        skillText.innerHTML = `${progress}%`;
    });
});

  const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');


  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

(function () {
  const track = document.getElementById("track");
  const gap = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--gap")
  ) || 16;
  const cards = Array.from(track.children);

  // Duplicate cards for seamless looping
  cards.forEach((c) => track.appendChild(c.cloneNode(true)));

  let autoSlide = true;

  function getCardWidth() {
    const firstCard = track.querySelector(".card");
    return firstCard ? firstCard.offsetWidth + gap : 0;
  }

  function slideNext() {
    if (!autoSlide) return;
    const firstCard = track.querySelector(".card");
    const cardWidth = getCardWidth();

    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${cardWidth}px)`;

    track.addEventListener(
      "transitionend",
      function handler() {
        track.style.transition = "none";
        track.appendChild(firstCard);
        track.style.transform = "translateX(0)";
        track.removeEventListener("transitionend", handler);
      },
      { once: true }
    );
  }


  
  function slidePrev() {
    const cardsAll = track.querySelectorAll(".card");
    const lastCard = cardsAll[cardsAll.length - 1];
    const cardWidth = getCardWidth();

    track.style.transition = "none";
    track.insertBefore(lastCard, track.firstChild);
    track.style.transform = `translateX(-${cardWidth}px)`;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.5s ease";
      track.style.transform = "translateX(0)";
    });
  }

  let interval = setInterval(slideNext, 3000);

  track.addEventListener("mouseenter", () => (autoSlide = false));
  track.addEventListener("mouseleave", () => (autoSlide = true));

  document.getElementById("nextBtan").addEventListener("click", slideNext);
  document.getElementById("prevBtan").addEventListener("click", slidePrev);
  window.addEventListener("resize", () => {
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
  });
})();



window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
