// buttons
const homePage = document.getElementById('home-btn');
const projectsPage = document.getElementById('projects-btn');
const contactPage = document.getElementById('contact-btn');

// navigation
homePage.addEventListener('click', () => showPage('home-page'));
projectsPage.addEventListener('click', () => showPage('projects-page'));
contactPage.addEventListener('click', () => showPage('contacts-page'));
function showPage(pageId){
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}
