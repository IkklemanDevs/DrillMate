import 'emoji-picker-element';

export function emojiListener (){

    document.querySelector('emoji-picker')
    .addEventListener('emoji-click', event => console.log(event.detail));

}