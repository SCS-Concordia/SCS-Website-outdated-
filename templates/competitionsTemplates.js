// An array of objects, each one containing the relevant information for the elements we're templating
// You can modify these however you need for your specific page
// Remember that leaving a property as '' is equivalent to null and false in javascript, so if for some element you don't need that property just set it as ''
const templates = [
    {
        id: 'id1',
        name: 'Event 1',
        image: '../assets/img1.png',
        text: 'Text for image 1'
    },

    {
        id: 'id2',
        name: 'Event 2',
        image: '../assets/img2.png',
        text: 'Text for image 2'
    },
    
    {
        id: 'id3',
        name: 'Event 3',
        image: '../assets/img3.png',
        text: 'Text for image 3'
    }
]

export default templates;