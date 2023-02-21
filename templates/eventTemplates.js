// An array of objects, each one containing the relevant information for the elements we're templating
// You can modify these however you need for your specific page
// Remember that leaving a property as '' is equivalent to null and false in javascript, so if for some element you don't need that property just set it as ''
const templates = [
    {
        id: 'algotime',
        name: 'Algotime',
        image: '../assets/events/algotime.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },

    {
        id: 'clothing_sale',
        name: 'Clothing Sale',
        image: '../assets/events/clothing_sale.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    
    {
        id: 'coding_interview',
        name: 'Coding Interview',
        image: '../assets/events/coding_interview.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },

    {
        id: 'trivia_night',
        name: 'Trivia Night',
        image: '../assets/events/trivia_night.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

export default templates;