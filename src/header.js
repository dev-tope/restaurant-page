import { $content, createHtmlElement } from "./index.js";

function render(){
    
    const $headerDiv = createHtmlElement('div', null, ['header-div','flex-centering'], null)
   

    const $headerTitle = createHtmlElement('div', null, ['bold-text', 'header-title', 'flex-centering'], 'Eat Chow')
    
    
    $headerDiv.appendChild($headerTitle);

    $content.appendChild($headerDiv)
}

export { render as renderHeader };