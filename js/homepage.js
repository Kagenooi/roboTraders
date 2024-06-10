import {
    adaptive
} from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
adaptive();
window.addEventListener('resize', function () { adaptive(); });

import { 
    toggleMenu
} from "./module.js";
window.toggleMenu = toggleMenu;

function faq(btn) {
    let content = btn.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btn.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.classList.add('active');
    }
}
window.faq = faq;