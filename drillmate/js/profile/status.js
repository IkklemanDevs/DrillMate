import { DOM } from "../ui/domManager.js";
import 'emoji-picker-element';

const profileUI = DOM.profile.UI;
const profileDisplay = DOM.profile.display;

const profileButtons = profileUI.buttons;
const statusForm = DOM.profile.statusForm;
const statusButtons = statusForm.buttons;

export function statusToggle() {
    profileButtons.status.addEventListener('click', () => {

        statusForm.container.classList.toggle('hidden');
    });

    statusButtons.cancel.addEventListener('click', () => {
        statusForm.container.classList.add('hidden');
    });

    emojiPicker();
};

function emojiPicker() {
    
    statusButtons.emoji.addEventListener('click', () => {
        statusForm.emojiContainer.classList.toggle('hidden');
        emojiListener();
    });
};

let selectedEmoji = null;

function emojiListener (){

    document.querySelector('emoji-picker')
    .addEventListener('emoji-click', event => {
        selectedEmoji = event.detail.emoji.unicode;
        console.log(selectedEmoji);
        statusForm.emojiContainer.classList.toggle('hidden');
        
        if (selectedEmoji === statusButtons.placeholderEmoji) {
            console.log('Emojis are the same');
        } else {
            statusButtons.placeholderEmoji.innerText = selectedEmoji;
        };
    });
};


