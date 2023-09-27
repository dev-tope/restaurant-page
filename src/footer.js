import { $content, createHtmlElement } from "./index.js";

function render() {
    const $footer = document.createElement('footer');
    $footer.classList.add('footer');
    $footer.classList.add('flex-centering');


    const $creatorInfoDiv = createHtmlElement('div', null, ['creator-info-div'], 'created by Tope | 2023')

    $footer.appendChild($creatorInfoDiv);

    $content.appendChild($footer);
}

export { render as renderFooter };