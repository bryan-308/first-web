const navSlide = () => {
    const app = document.querySelector('#app');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    let timeoutId;
  
    // Store the animation in a separate variable
    const navLinkAnimation = `navLinkFade 0.5s ease forwards`;
  
    app.addEventListener('click', () => {
    // Toggle nav
      if (nav.classList.contains('nav-active')) {
          nav.classList.remove('nav-active');
          app.classList.remove('toggle');
          // Remove the animation from the nav links
          navLinks.forEach((link) => {
              link.style.animation = '';
          });
      } else {
          nav.classList.add('nav-active');
          // Add the animation to the nav links with a delay
          navLinks.forEach((link, index) => {
              if (link.style.animation !== navLinkAnimation) {
                  link.style.animation = `${navLinkAnimation} ${index / 7 + .5}s`;
              }
          });
          app.classList.add('toggle');
      }
    
    // Cancel the previous timeout if it exists
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    
    // Add a delay of 5 seconds before hiding the nav element
    timeoutId = setTimeout(() => {
        nav.classList.remove('nav-active');
        app.classList.remove('toggle');
    }, 5000);
    });
}  
navSlide();
