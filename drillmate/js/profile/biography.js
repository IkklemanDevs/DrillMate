import { DOM } from "../ui/domManager.js";

const profileUI = DOM.profile.UI;
const profileDisplay = DOM.profile.display;

const profileButtons = profileUI.buttons;
const editProfile = DOM.profile.editProfile;
const bioButtons = editProfile.buttons;

export function bioToggle() {
    profileButtons.editProfile.addEventListener('click', () => {

        editProfile.container.classList.toggle('hidden');
    });

    bioButtons.cancel.addEventListener('click', () => {
        editProfile.container.classList.toggle('hidden');
    });

};