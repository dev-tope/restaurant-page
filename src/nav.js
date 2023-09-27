import { $content, createHtmlElement } from "./index";

function render() {
    const $navBar = document.createElement('nav');
    $navBar.classList.add('nav');

    const $ul = document.createElement('ul');
    $ul.classList.add('ul')
    
    const items = ["Home", "Menu", "Contact"];
    items.forEach((item) => {
        $ul.appendChild(createHtmlElement('li', null, ['li'], item));
    });

    $navBar.appendChild($ul);

    $content.appendChild($navBar);

}

export { render as renderNav };