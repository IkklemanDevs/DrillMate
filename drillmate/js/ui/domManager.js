// This module locates and exports a DOM object

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
                },
            },
        content: {
            pageContent: document.getElementById('pageContainer'),
            dynamicPages: {
                dashboard: document.querySelector('[data-page="dashboard"]'),
                consumables: document.querySelector('[data-page="consumables"]'),
                history: document.querySelector('[data-page="history"]'),
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
        },
        drillLog: {
            UI: {
                buttons: {
                    newHoleEntry: document.getElementById('newHoleEntry'),
                    editHoleEntry: document.getElementById('editHoleEntry'),
                },
            },
            drillForm: {
                container: document.getElementById('drillForm'),
                inputs: {
                    holeType: document.getElementById('holeType'),
                    holeAngle: document.getElementById('holeAngle'),
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
                accumMeters: document.getElementById('statAccumMeters')
            },
        },
    },
    consumables: {
        currentConsumables: {
            bit: document.getElementById('currentBit'),
            hammer: document.getElementById('currentHammer'),
        },
        consumableForm: {
            container: document.getElementById('consFormCont'),
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
    history: {

    },
    profile: {

    },
    signIn: {

    },
};