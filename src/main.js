import { $content, createHtmlElement } from "./index.js";


function render() {
    const $main = document.createElement('main');
    $main.classList.add('main');

    const $welcomeDiv = document.createElement('div');
    $welcomeDiv.classList.add('overlay-div');

   

    const $welcometText = createHtmlElement('div', null, ['welcome-text', 'bold-text', 'header'], 'Welcome to Eat Chow');

    const welcomeAppends = [$welcometText];
    welcomeAppends.forEach(item => $welcomeDiv.appendChild(item));

    const $abotUsDiv  = createHtmlElement('div', null, ['about-us-div'], null);
    const $aboutHeader = createHtmlElement('h1', null, ['about-header', 'bold-text'], 'About Us')
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  fugiat nulla pariatur. elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  fugiat nulla pariaturelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  fugiat nulla pariaturelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  fugiat nulla pariatur"
    const $aboutText = createHtmlElement('div', null, ['about-text'], text);


    const aboutAppends = [$aboutHeader, $aboutText];
    aboutAppends.forEach(item => $abotUsDiv.appendChild(item));

    const appendItems = [$welcomeDiv, $abotUsDiv];
    appendItems.forEach(item => $main.appendChild(item));

    $content.appendChild($main);
}

export { render as renderMain }