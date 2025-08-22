import { DOM } from "./domManager";

const html = document.documentElement;
const menuToggle = DOM.UI.menu;
const pageContainer = DOM.UI.content;
const contentTarget = DOM.UI.content.dynamicPages;
const toggleSVG = document.getElementsByClassName('darkToggle');
const lightIndicator = menuToggle.lightIndicator;
const darkIndicator = menuToggle.darkIndicator;
let navIsOpen = false;
const storedTheme = localStorage.getItem('theme');


export function initNavigation() {
  console.log('Navigation initialized');
  navListener();
  devLoadPage();
  themeStorage(storedTheme);
}

menuToggle.themeToggle.addEventListener('click', () => {

  console.log('Day/Night mode toggled');
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    localStorage.theme = 'dark';
    themeStorage('dark');
  } else {
    localStorage.theme = 'light';
    themeStorage('light');
  };
});


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
  };
};

function themeStorage(theme){
  console.log(`The stored theme is: ${storedTheme}`)
  if (theme === 'dark'){
    localStorage.theme = 'dark';
    html.classList.add('dark');
    darkIndicator.classList.remove('hidden');
    lightIndicator.classList.add('hidden');
  } else if (theme === 'light') {
    localStorage.theme = 'light';
    darkIndicator.classList.add('hidden');
    lightIndicator.classList.remove('hidden');
  };
};


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
  };
};


function devLoadPage() {
  if (import.meta.env.DEV) {
    const lastPage = localStorage.getItem('devPage');
    const restorePage = contentTarget[lastPage];

    if (lastPage && restorePage) {
      console.log(`Restoring page from localStorage: ${lastPage}`);
      Object.values(contentTarget).forEach(page => page.classList.add('hidden'));
      restorePage.classList.remove('hidden');
    };
  };
};

