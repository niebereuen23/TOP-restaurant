import homePage from "./initial-home";
import contactPage from "./contact";

homePage();

const content = document.querySelector('#content');

const contactButton = document.querySelector('#contact_button');
contactButton.addEventListener('click', () => {
    content.textContent = '';
    contactPage();
})

const homeButton = document.querySelector('#home_button');
homeButton.addEventListener('click', () => {
    content.textContent = '';
    homePage();
})