import templater from './eventTemplater.js';
import templates from '../templates/eventTemplates.js';

// After page has loaded (to make sure parent element is loaded), run the templater function with the templates array and the parent object designated in the main page
templater(templates, document.querySelector('#events-container'));