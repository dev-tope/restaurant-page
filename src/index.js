import './assets/styles.css'
import { renderHeader } from "./header"; 
import { renderNav } from "./nav";
import { renderMain } from "./main";
import { renderFooter } from './footer';
import { renderMenu } from './menu';
import { renderContact } from './contact';


const $content = document.getElementById('content');
$content.classList.add('content')


function createHtmlElement(type, id, classArray, text){
    const element = document.createElement(type);

    if(id){element.id = id};

    if(classArray){
        classArray.forEach(className => {
            element.classList.add(className);
        });
    }

    if(text){element.textContent = text};

    return element;
}

function home() {
    $content.innerHTML = "";
    renderHeader();
    renderNav();
    renderMain()
    renderFooter();

}

function menu() {
    $content.innerHTML = "";
    renderHeader();
    renderNav();
    renderMenu();
    renderFooter();
}


function contact() {
    $content.innerHTML = "";
    renderHeader();
    renderNav();
    renderContact();
    renderFooter();
}

document.addEventListener('click', function(e) {
    const tab = (e.target.innerText);

    if(tab === 'HOME') {
        home();
    } else if (tab === 'MENU') {
        menu()
    } else if (tab === 'CONTACT') {
        contact()
    }
}
)

home();

export { $content, createHtmlElement };