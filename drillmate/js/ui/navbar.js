import { DOM } from "./domManager.js";


const menuToggle = DOM.UI.menu
const pageContainer = DOM.UI.content;

export function toggleNav() {
    console.log('Navigation js Loaded');

    menuToggle.navtoggle.addEventListener('click', () => {
        console.log('Menu Pressed');

        menuToggle.menuContainer.classList.toggle('hidden');
        pageContainer.pageContent.classList.toggle('hidden');
    }); 

    navListener();
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

        // Hide all pages
        Object.values(contentTarget).forEach(page => {
          page.classList.add('hidden');
        });

        // Show selected page
        const selectedPage = contentTarget[target];
        if (selectedPage) {
          selectedPage.classList.remove('hidden');
        } else {
          console.warn(`No page found for: ${target}`);
        }
      });
    } else {
      console.warn(`Missing DOM Element for: ${key}`);
    }
  });
}

