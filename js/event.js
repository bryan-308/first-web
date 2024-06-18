var navLinks = document.querySelectorAll("nav a");

// Loop through each link and add a click event listener
navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the section that corresponds to the clicked link
    var sectionId = this.getAttribute("href");
    var section = document.querySelector(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  });
});