const logoElements = document.querySelectorAll('.logo');
const menuElements = document.querySelectorAll('nav');

function handleMenuVisibility(menu, menuIsOpen) {
  if (window.innerWidth < 575) {
    menu.style.display = 'none';
    menuIsOpen = false; 
  } else {
    menu.style.display = 'flex';
  }
  return menuIsOpen;
}

const menuStates = new Map();

logoElements.forEach((logo, index) => {
  menuStates.set(logo, false);

  logo.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const menuIsOpen = menuStates.get(logo);
    const menu = menuElements[index];
    if (menuIsOpen) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
    menuStates.set(logo, !menuIsOpen);
  });
});

document.addEventListener('click', () => {
  logoElements.forEach((logo, index) => {
    const menuIsOpen = menuStates.get(logo);
    if (menuIsOpen) {
      menuElements[index].style.display = 'none';
      menuStates.set(logo, false);
    }
  });
});

function handleAllMenuVisibility() {
  logoElements.forEach((logo, index) => {
    const menu = menuElements[index];
    let menuIsOpen = menuStates.get(logo);
    menuIsOpen = handleMenuVisibility(menu, menuIsOpen);
    menuStates.set(logo, menuIsOpen);
  });
}

handleAllMenuVisibility();
window.addEventListener('resize', handleAllMenuVisibility);