window.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the section is visible
    rootMargin: '0px 0px 0px 0px' // Slight offset so it triggers just before it hits the viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once the animation is done
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all your refactored sections
  const sections = document.querySelectorAll('.section-container');
  sections.forEach((section) => observer.observe(section));

  function updateClock() {
  const now = new Date();
  const options = { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false, 
    timeZone: 'America/Argentina/Cordoba' 
  };
  
    const timeString = now.toLocaleTimeString('en-GB', options);
    document.querySelector('.header__text--mono').textContent = `${timeString} GMT-3`;
  }

  // Update immediately and then every minute
  updateClock();
  setInterval(updateClock, 60000);
});
