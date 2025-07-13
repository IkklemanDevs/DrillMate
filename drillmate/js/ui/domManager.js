// This module locates and exports a dom object


export const DOM = {
    UI: {
        menu: {
            menuContainer: document.getElementById('navbar'),
            navtoggle: document.getElementById('navMenu'),
                menuButtons: {
                    dashboardTog: document.querySelector('[data-menu="dashboard"]'),
                    consumablesTog: document.querySelector('[data-menu="consumables"]'),
                    historyTog: document.querySelector('[data-menu="history"]'),
                    profileTog: document.querySelector('[data-menu="profile"]'),
                    loginTog: document.querySelector('[data-menu="login"]'),
                }
            },
        content: {
            pageContent: document.getElementById('pageContainer'),
            dynamicPages: {
                dashboard: document.querySelector('[data-page="dashboard"]'),
                consumables: document.querySelector('[data-page="consumables"]'),
                history: document.querySelector('[data-page="history"]'),
                profile: document.querySelector('[data-page="profile"]'),
                login: document.querySelector('[data-page="login"]'),
            }
        },
    },
};