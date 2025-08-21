import { DOM } from "../ui/domManager";

const drillForm = DOM.dashboard.drillLog.drillForm;
const drillInputs = drillForm.inputs;
const logUI = DOM.dashboard.drillLog.UI;
const logButtons = logUI.buttons;

export function toggleDrillForm () {

logButtons.newHoleEntry.addEventListener ('click', () => {
    drillForm.container.classList.toggle('hidden');
    logUI.placeholder.classList.toggle('hidden');
});

logButtons.closeHoleEntry.addEventListener ('click', () => {
    drillForm.container.classList.add('hidden');
    logUI.placeholder.classList.toggle('hidden');
});

};