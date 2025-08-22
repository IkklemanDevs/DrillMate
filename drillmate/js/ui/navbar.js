import { DOM } from "./domManager";

const menuToggle = DOM.UI.menu;
const pageContainer = DOM.UI.content;
const contentTarget = DOM.UI.content.dynamicPages;
let navIsOpen = false;


export function initNavigation() {
  console.log('Navigation initialized');
  navListener();
  devLoadPage();
}

menuToggle.navtoggle.addEventListener('click', () => {
  console.log('Menu Pressed');
  navIsOpen ? navbarController('closed') : navbarController('open');
});

function navbarController(action) {
  if (action === 'open') {
    menuToggle.menuContainer.classList.remove('hidden');
    pageContainer.pageContent.classList.add('opacity-20');
    navIsOpen = true;
    console.log('Navbar opened');
  } else if (action === 'closed') {
    menuToggle.menuContainer.classList.add('hidden');
    pageContainer.pageContent.classList.remove('opacity-20');
    navIsOpen = false;
    console.log('Navbar closed');
  }
}

function navListener() {
  const menuButtons = DOM.UI.menu.menuButtons;

  Object.keys(menuButtons).forEach(key => {
    const button = menuButtons[key];
    if (button instanceof HTMLElement) {
      button.addEventListener('click', () => {
        const target = button.dataset.menu;
        console.log(`clicked: ${target}`);

        navbarController('closed');
        showPage(target);

        if (import.meta.env.DEV) {
          localStorage.setItem('devPage', target);
        }
      });
    }
  });
}


function showPage(target) {

  Object.values(contentTarget).forEach(page => page.classList.add('hidden'));

  const selectedPage = contentTarget[target];
  if (selectedPage) {
    selectedPage.classList.remove('hidden');
    console.log(`Page displayed: ${target}`);
  } else {
    console.warn(`No page found for: ${target}`);
  }
}


function devLoadPage() {
  if (import.meta.env.DEV) {
    const lastPage = localStorage.getItem('devPage');
    const restorePage = contentTarget[lastPage];

    if (lastPage && restorePage) {
      console.log(`Restoring page from localStorage: ${lastPage}`);
      Object.values(contentTarget).forEach(page => page.classList.add('hidden'));
      restorePage.classList.remove('hidden');
    }
  }
}