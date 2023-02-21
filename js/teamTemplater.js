function teamTemplater(objects, parent) {
    objects.forEach((obj, i) => {
        // Create new element
        const element = document.createElement('div');

        // Check if object has each of the following properties, if so modify the element
        const elementID = `event-${i}`;
        element.setAttribute('id', `elementID`);

        // Add default event-card class
        element.classList.add('team-card');

        // Add image and text
        // This creates an image container div and a text container div
        // The image container div holds another div whose background image is set to the image provided in the object
        // This is to facilitate styling by making it easier to set padding in the image container or margins on the image div as desired
        if (obj.image && obj.text && obj.name && obj.email) {
            // First create div in which to put image element
            const child = document.createElement('div');
            // Id is img-<parent's id>, is unique
            child.setAttribute('id', `img-container-${obj.id}`);
            // Add class for styling
            child.classList.add('image-container');

            // // Create div whose background will be the image
            // const childImage = document.createElement('div');
            // childImage.classList.add('event-image')
            // const childImageID = `${elementID}-image`;
            // childImage.setAttribute('id', childImageID);

            // // Create CSS style for background-image div
            // const backgroundImageStyle = document.createElement('style');
            // backgroundImageStyle.innerText = `#${childImageID} { background-image: url("${obj.image}"); }`;
            // document.head.appendChild(backgroundImageStyle);

            const image = document.createElement('img');
            image.classList.add('team-image');
            image.setAttribute('src', obj.image);
            
            // child.appendChild(childImage);
            child.appendChild(image);
            

            // Create div container for text
            const childText = document.createElement('div');
            // Id is text-<parent's id>, is unique
            childText.setAttribute('id', `text-${obj.id}`);
            // Add class for styling
            childText.classList.add('team-text');
            // Add text into div
            childText.innerHTML = `<h2>${obj.name}</h2> ${obj.text} <p>Contact: <a href="mailto:${obj.email}">${obj.email}</a> </p>`;

            element.appendChild(child);
            element.appendChild(childText);
            
        }

        // Append finished element to parent element
        parent.appendChild(element);

    });
}

export default teamTemplater;