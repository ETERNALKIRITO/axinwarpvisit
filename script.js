// script.js

// ----- EDIT ONLY THIS SECTION -----

const myLinks = [
    {
        text: "Slab Battles Masteries List",
        url: "https://roblox-slap-battles.fandom.com/wiki/Masteries"
    },
    {
        text: "Simone Webdesktops",
        url: "https://simone.computer/#/webdesktops"
    },
    {
        text: "YT Vid Downloader 1",
        url: "https://en1.savefrom.net/1-youtube-video-downloader-13sg/"
    },
    {
        text: "YT Vid Downloader 2",
        url: "https://ssyoutube.online/en2/"
    },
    {
        text: "Github/ETERNALKIRITO Gists",
        url: "https://gist.github.com/ETERNALKIRITO"
    },
    {
        text: "Netlify Dashboard",
        url: "https://app.netlify.com/"
    },
    {
        text: "v86 Os Emulator",
        url: "https://copy.sh/v86/"
    },
    {
        text: "Class 9 Maths OLD BOOK",
        url: "https://static.qumath.in/static/website/old-cdn-static/ncert-solutions/ncert-books-for-class-9-maths.pdf"
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