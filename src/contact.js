import { $content, createHtmlElement } from "./index.js";

function appendElements(parentNode, childerenNode = []) {
    childerenNode.forEach(node => parentNode.appendChild(node))

    return parentNode;
}

function render() {
    const $contact = document.createElement('main');
    $contact.classList.add('main');

    const $contactUsDiv = createHtmlElement('div', null, ['overlay-div', 'contact-us-div'])
    const $contactUsText = createHtmlElement('div', null, ['welcome-text', 'bold-text', 'header'], 'Contact Eat Chow');

    const contactUsAppends = [$contactUsText];
    contactUsAppends.forEach(item => $contactUsDiv.appendChild(item));

    const $contactInfoDiv = createHtmlElement('div', null, ['contact-info-div'], null );

    const address = '1035, Yves St. Lauren Ave, Richmond Hill, Ozark, Missuori';
    const phoneNumber = '934-3454-5678'
    
    const $contactDetails = createHtmlElement('div', null, ['contact-details-div'], null);
    const $addressTitle = createHtmlElement('div', null, ['address-title', 'bold-text'], 'Address')
    const $addressText = createHtmlElement('div', null, ['address-text'], address)
    const $phoneTitle = createHtmlElement('div', null, ['address-title', 'bold-text'], 'Telephone')
    const $phoneText = createHtmlElement('div', null, ['address-text'], phoneNumber)

    appendElements($contactDetails, [$addressTitle, $addressText, $phoneTitle, $phoneText])

   
    

    const $openingDetails = createHtmlElement('div', null, ['opening-details'], null);
    const weekdays = ' WEEKDAYS: 8AM - 8PM';
    const weekends = 'WEEKENDS: 6AM -11PM';

    const $openTitle = createHtmlElement('div', null, ['open-title', 'bold-text'], 'We are Open');
    const $openWeekDay = createHtmlElement('div', null, ['open-time'], weekdays);
    const $openWeekend = createHtmlElement('div', null, ['open-text'], weekends);

    appendElements($openingDetails, [$openTitle, $openWeekDay, $openWeekend])

    $contactInfoDiv.appendChild($contactDetails);
    $contactInfoDiv.appendChild($openingDetails);




    const contactAppends = [$contactUsDiv, $contactInfoDiv];

    contactAppends.forEach(item => $contact.appendChild(item));

    $content.appendChild($contact);

}

export { render as renderContact }