import teamTemplater from './teamTemplater.js';
import teamTemplates from '../templates/teamTemplates.js';

// After page has loaded (to make sure parent element is loaded), run the templater function with the templates array and the parent object designated in the main page
teamTemplater(teamTemplates, document.querySelector('#team'));