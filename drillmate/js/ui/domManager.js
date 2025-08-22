// This module locates and exports a DOM object

import { drawPoint } from "chart.js/helpers";

export const DOM = {
    UI: {
        menu: {
            menuContainer: document.getElementById('navbar'),
            navtoggle: document.getElementById('navMenu'),
            themeToggle: document.getElementById('darkToggle'),
            darkIndicator: document.getElementById('darkIndicator'),
            lightIndicator: document.getElementById('lightIndicator'),
                menuButtons: {
                    dashboardTog: document.querySelector('[data-menu="dashboard"]'),
                    consumablesTog: document.querySelector('[data-menu="consumables"]'),
                    profileTog: document.querySelector('[data-menu="profile"]'),
                    loginTog: document.querySelector('[data-menu="login"]'),
                },
            },
        content: {
            pageContent: document.getElementById('pageContainer'),
            dynamicPages: {
                dashboard: document.querySelector('[data-page="dashboard"]'),
                consumables: document.querySelector('[data-page="consumables"]'),
                profile: document.querySelector('[data-page="profile"]'),
                login: document.querySelector('[data-page="login"]'),
            },
        },
    },
    dashboard: {
        shiftOverview: {
            shiftTotalMeters: document.getElementById('soTotalMeters'),
            avgPenRate: document.getElementById('soAvgPenRate'),
            projectedMeters: document.getElementById('soProjMeters'),
            placeholder: document.getElementById('dashOverviewPlaceholder')
        },
        drillLog: {
            UI: {
                buttons: {
                    newHoleEntry: document.getElementById('newHoleEntry'),
                    editHoleEntry: document.getElementById('editHoleEntry'),
                    saveHoleEntry: document.getElementById('confirmHoleLog'),
                    closeHoleEntry: document.getElementById('closeHoleLog')
                },
                placeholder: document.getElementById('dashLogPlaceholder'),
            },
            drillForm: {
                container: document.getElementById('drillForm'),
                inputs: {
                    holeType: document.getElementById('holeType'),
                    holeAngle: document.getElementById('holeAngle'),
                    holeLocation: document.getElementById('holeLocation'),
                    rememberSelection: document.getElementById('keepConfig'),
                    holeNumber: document.getElementById('holeNumber'),
                    timeStart: document.getElementById('holeTime'),
                    designDepth: document.getElementById('designDepth'),
                    drilledDepth: document.getElementById('drilledDepth'),
                },
            },
        },
        drillStats: {
            statTargets: {
                totalMeters: document.getElementById('statTotalMeters'),
                projectedMeters: document.getElementById('statProjMeters'),
                averageShift: document.getElementById('statAvgMeters'),
                accumMeters: document.getElementById('statAccumMeters'),
                placeholder: document.getElementById('dashWeeklyPlaceholder'),
            },
        },
    },
    consumables: {
        currentConsumables: {
            container: document.getElementById('currentConsumables'),
            bit: document.getElementById('currentBit'),
            hammer: document.getElementById('currentHammer'),
            placeholder: document.getElementById('consPlaceholder'),
        },
        consumableForm: {
            container: document.getElementById('consFormCont'),
            UI: {
                buttons: {
                    changeConsumable: document.getElementById('changeConsumables'),
                    saveConsEntry: document.getElementById('confirmConsForm'),
                    closeConsEntry: document.getElementById('closeConsForm'),
                },  
            },
            inputs: {
                consumableType: document.getElementById('consType'),
                consumableManufacturer: document.getElementById('consManufacturer'),
                consumableWidth: document.getElementById('consDiameter'),
                consumableSerial: document.getElementById('consSerial'),
            },
        },
        consumableStats: {
            chartSelector: {
                consumableChartSelect: document.getElementById('consChartSelect'),
            },
            statTargets: {
                currentMeters: document.getElementById('consCurrentMeters'),
                averageMeters: document.getElementById('consAvgMeters'),
                dispConsumableManufacturer: document.getElementById('dispConsManufacturer'),
                dispConsSerial: document.getElementById('dispConsSerial'),
            },
        },
    },
    profile: {
        UI: {
            buttons: {
                status: document.getElementById('setStatus'),
                editProfile: document.getElementById('editProfile'),
            }
        },
        display : {
            profileName: document.getElementById('profileName'),
            profileOccupation: document.getElementById('profileOccupation'),
            profileBio: document.getElementById('profileBio'),
            profileCompany: document.getElementById('profileCompany'),
            profileSite:  document.getElementById('profileSite'),
            profileRoster: document.getElementById('profileRoster'),
            profileLink: document.getElementById('profileLink'),
            statusContainer: document.getElementById('statusContainer')
        },
        statusForm: {
            container: document.getElementById('statusFormCont'),
            emojiContainer: document.getElementById('emojiContainer'),
            buttons: {
                confirm: document.getElementById('confirmUserStatus'),
                cancel: document.getElementById('closeUserStatus'),
                emoji: document.getElementById('emoji-picker'),
                placeholderEmoji: document.getElementById('placeholderEmoji'),
            },
            inputs: {
                emoji: document.getElementById('userEmoji'),
                text: document.getElementById('userStatus'),
            },
        },
        editProfile: {
            container: document.getElementById('bioContainer'),
            buttons: {
                confirm: document.getElementById('confirmBioInput'),
                cancel: document.getElementById('cancelBioInput'),
            },
            inputs: {
                bioName: document.getElementById('bioName'),
                bioDescription: document.getElementById('bioDescription'),
                bioWorkplace: document.getElementById('bioWorkplace'),
                bioLocation: document.getElementById('bioLocation'),
                bioRoster: document.getElementById('bioRoster'),
                bioWebsite: document.getElementById('bioWebsite'),
            },
        },
    },
    signIn: {

    },
};