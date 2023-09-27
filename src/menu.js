import { $content, createHtmlElement } from "./index.js";
import './assets/coffee.jpg';
import './assets/pizza.jpg';
import './assets/croissant.jpg';

function createMenuCard(img, name, desc, price) {
    const $menuCard = createHtmlElement('div', null, ['menu-card'], null);


    const $menuDetails = document.createElement('div');
    $menuDetails.classList.add('menu-details');


    const $menuImg = createHtmlElement('div', null, ['menu-img'], null);
    const $menuName = createHtmlElement('div', null, ['menu-name', 'bold-text'], name);
    const $menuDesc = createHtmlElement('div', null, ['menu-desc'], desc);
    const $menuPrice = createHtmlElement('div', null, ['menu-price', 'bold-text'], price);

    const appendDetails = [$menuName, $menuDesc, $menuPrice];

    appendDetails.forEach(item => $menuDetails.appendChild(item));

    $menuImg.style.backgroundImage = `url("./${img}")`

    const menuCardItems = [$menuImg, $menuDetails];

    menuCardItems.forEach(item => $menuCard.appendChild(item));

    return $menuCard;
}

function render() {
    const $menu = document.createElement('main');
    $menu.classList.add('menu');


    const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    const $coffeeCard = createMenuCard('coffee.jpg', 'Coffee', desc, '$5');
    const $pizzaCard = createMenuCard('pizza.jpg', 'Pizza', desc, '$15');
    const $croissantCard = createMenuCard('croissant.jpg', 'Croissant', desc, '$10')

    const appendItems = [$coffeeCard, $pizzaCard, $croissantCard];

    appendItems.forEach(item => $menu.appendChild(item));

    $content.appendChild($menu);
}

export { render as renderMenu };