
const logo = document.querySelector('.logo');
const menu = document.querySelector('nav');
// Prevent the menu from closing when clicking inside it
menu.addEventListener('click', (e) => {
  e.stopPropagation();
});
// Close the menu when clicking outside of it
document.addEventListener('click', () => {
  menu.style.display = 'none';
});
// Toggle the menu when clicking on the logo
logo.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the document click event from immediately closing the menu
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
function handleMenuVisibility() {
  if (window.innerWidth < 575) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}
// Initial check and listen for window resize
handleMenuVisibility();
window.addEventListener('resize', handleMenuVisibility);