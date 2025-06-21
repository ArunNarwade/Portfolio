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

  // Toggle menu open/close
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Close menu when any link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });


