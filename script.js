// script.js

// ----- EDIT ONLY THIS SECTION -----

const myLinks = [
    {
        text: "Slab Battles Masteries List",
        url: "https://roblox-slap-battles.fandom.com/wiki/Masteries"
    },
    {
        text: "Your Next Link Title",
        url: "https://your-link-url.com"
    },
    {
        text: "Another Link Title",
        url: "https://another-url.com"
    },
   
];

// ----- DO NOT EDIT BELOW THIS LINE -----

const linkListContainer = document.getElementById('link-list');

myLinks.forEach(link => {
    if (link.url && link.text) { // Only creates a link if both url and text exist
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.text;
        linkElement.className = 'link-item';
        linkElement.target = '_blank'; // Optional: opens link in a new tab
        linkListContainer.appendChild(linkElement);
    }
});