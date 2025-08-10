// Language Switcher
const langSwitcherBtn = document.getElementById('lang-switcher__btn');
langSwitcherBtn.addEventListener('click', ()=>{
    langSwitcherBtn.classList.toggle('active')
})

// Accordion Left Border
const accordionItems = document.querySelectorAll('.accordion-item');
const accordionButtons = document.querySelectorAll('.accordion-button');

function updateAccordionExpandedClasses() {
    accordionItems.forEach((elem) => {
        const button = elem.querySelector('.accordion-button');
        if (button && button.getAttribute('aria-expanded') === 'true') {
            elem.classList.add('expanded');
        } else {
            elem.classList.remove('expanded');
        }
    });
}
updateAccordionExpandedClasses();

accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            updateAccordionExpandedClasses();
        }, 10);
    });
});
