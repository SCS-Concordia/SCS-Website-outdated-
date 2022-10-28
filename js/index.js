// Select the contact link in the navbar, make it navigate to the contact section on the home page and apply smooth scrolling
document.querySelector('#contact-link').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({'behavior': 'smooth'});
})