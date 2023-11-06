const logo = document.querySelector('.logo');
const menu = document.querySelector('nav');
let menuIsOpen = false; // Maintain a variable to track the menu state

// Close the menu when clicking outside of it
document.addEventListener('click', () => {
  if (menuIsOpen) {
    menu.style.display = 'none';
    menuIsOpen = false;
  }
});

// Toggle the menu when clicking on the logo
logo.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the document click event from immediately closing the menu
  if (menuIsOpen) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
  menuIsOpen = !menuIsOpen;
});

function handleMenuVisibility() {
  if (window.innerWidth < 575) {
    menu.style.display = 'none';
    menuIsOpen = false; // Ensure menu is closed if the window is too narrow
  } else {
    menu.style.display = 'flex';
  }
}

// Initial check and listen for window resize
handleMenuVisibility();
window.addEventListener('resize', handleMenuVisibility);