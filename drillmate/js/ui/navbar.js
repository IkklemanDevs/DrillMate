import { DOM } from "./domManager.js";


const menuToggle = DOM.UI.menu
const pageContainer = DOM.UI.content;


export function toggleNav() {
  console.log('Navigation js Loaded');
  navListener();
};

let navIsOpen = false;
menuToggle.navtoggle.addEventListener('click', () => {
  console.log('Menu Pressed');

  if (navIsOpen) {
    navbarController('closed');
  } else {
    navbarController('open'); 
  };
  navIsOpen = !navIsOpen;
});



function navbarController(action){

  if (action === 'open') {
    menuToggle.menuContainer.classList.remove('hidden');
    pageContainer.pageContent.classList.add('opacity-20');
    console.log('navbarController is Open');
    
    //navListener();
  } else if (action === 'closed'){
    menuToggle.menuContainer.classList.add('hidden');
    pageContainer.pageContent.classList.remove('opacity-20');
    console.log('navbarController is Closed');
    
  };
};

function navListener() {
  const menuButtons = DOM.UI.menu.menuButtons;
  const contentTarget = DOM.UI.content.dynamicPages;

  Object.keys(menuButtons).forEach(key => {
    const button = menuButtons[key];

    if (button instanceof HTMLElement) {
      button.addEventListener('click', () => {
        const target = button.dataset.menu;
        
        console.log(`clicked: ${target}`);
        navbarController('closed');

        // Hide all pages
        Object.values(contentTarget).forEach(page => {
          page.classList.add('hidden');
          console.log('navListener hidden all');
        });

        // Show selected page
        const selectedPage = contentTarget[target];
        if (selectedPage) {
          selectedPage.classList.remove('hidden');
          console.log('navListener displayed selected page');
          
        } else {
          console.warn(`No page found for: ${target}`);
        }
      });
    } else {
      console.warn(`Missing DOM Element for: ${key}`);
    }
  });

  if (import.meta.env.DEV) {
    const lastPage = localStorage.getItem('devPage');
    const restorePage = contentTarget[lastPage];

    if (lastPage && restorePage) {
      console.log(`Restoring page from localStorage: ${lastPage}`);

      // Hide all first
      Object.values(contentTarget).forEach(page => {
        page.classList.add('hidden');
      });

      // Show restored page
      restorePage.classList.remove('hidden');
    }
  }
}

