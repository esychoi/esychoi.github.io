function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add scroll event listener to handle hamburger menu visibility
window.addEventListener('scroll', function() {
  const hamburgerNav = document.getElementById('hamburger-nav');
  const scrollThreshold = 50; // Show hamburger menu after scrolling 100px

  if (window.scrollY > scrollThreshold) {
    hamburgerNav.classList.add('visible');
  } else {
    hamburgerNav.classList.remove('visible');
  }
});
