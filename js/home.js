import templates from '../templates/eventTemplates.js';

const eventTemplate1 = templates[0];
const eventTemplate2 = templates[1];
const eventTemplate3 = templates[2];

document.querySelector('#event-card-2').innerHTML = `
    <div class="card-image-container">
        <img src="${eventTemplate2.image}" />
    </div>
    <h2>${eventTemplate2.name}</h2>
    ${eventTemplate2.text}
`;

document.querySelector('#event-card-3').innerHTML = `
    <div class="card-image-container">
        <img src="${eventTemplate3.image}" />
    </div>
    <h2>${eventTemplate3.name}</h2>
    ${eventTemplate3.text}
`;

console.log('kyick');