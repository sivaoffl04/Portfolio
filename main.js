var typedInstance = new Typed(".text", {
    strings:["Frontend Developer","Full Stack Developer", "System Administrator"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Creative scroll-triggered animation for elements with 'animate-on-scroll' class
(function() {
  // Assign a random animation direction to each element for variety
  function assignAnimationDirections() {
    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
      if (!el.dataset.animDirection) {
        const directions = ['up', 'down', 'left', 'right', 'scale'];
        const dir = directions[Math.floor(Math.random() * directions.length)];
        el.dataset.animDirection = dir;
      }
    });
  }

  function animateOnScroll() {
    document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40) {
        el.classList.add('animated');
      } else {
        el.classList.remove('animated');
      }
    });
  }

  assignAnimationDirections();
  window.addEventListener('scroll', animateOnScroll, { passive: true });
  window.addEventListener('resize', animateOnScroll);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
  } else {
    animateOnScroll();
  }
})();

  // Close mobile navbar when a link is clicked
  document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-toggle').checked = false;
    });
  });
