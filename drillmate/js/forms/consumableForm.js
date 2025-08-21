import { DOM } from '../ui/domManager.js';

const consumableForm = DOM.consumables.consumableForm;
const consumableUI = consumableForm.UI;
const consumableButtons = consumableUI.buttons;

export function toggleConsForm () {

    consumableButtons.changeConsumable.addEventListener('click', () => {
        consumableForm.container.classList.toggle('hidden');
    });

    consumableButtons.closeConsEntry.addEventListener('click', () => {
        consumableForm.container.classList.add('hidden');
    });
};