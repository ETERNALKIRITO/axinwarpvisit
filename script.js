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
        url: "https://gist.github.com/ETERNALKIRITO",
        logo: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" // Example of a custom logo
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
    {
        text: "PastelChat",
        url: "https://pastelchat-6xyjk.web.app/"
    },
    {
        text: "UltApks",
        url: "https://limewire.com/d/mAnIH#dzNzoWPHHP"
    },
    {
        text: "Useful Chatbot 4",
        url: "https://gemini.google.com/"
    },
    {
        text: "Text To Speech",
        url: "https://www.naturalreaders.com/online/"
    },
];

// ----- DO NOT EDIT BELOW THIS LINE -----

const linkListContainer = document.getElementById('link-list');
const searchBar = document.getElementById('search-bar');

// Function to render the links
const renderLinks = (linksToRender) => {
    // Clear the existing list
    linkListContainer.innerHTML = '';

    // If no links match the search, show a message
    if (linksToRender.length === 0) {
        linkListContainer.innerHTML = '<p>No links found.</p>';
        return;
    }

    linksToRender.forEach(link => {
        if (link.url && link.text) {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-item';
            linkElement.target = '_blank';

            // --- Logo Handling ---
            const logo = document.createElement('img');
            logo.className = 'link-logo';
            
            if (link.logo) {
                // Use the custom logo if provided
                logo.src = link.logo;
            } else {
                // Otherwise, try to fetch the favicon
                const domain = new URL(link.url).hostname;
                logo.src = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
            }
            // If the logo fails to load, it won't break the layout
            logo.onerror = () => { logo.style.display = 'none'; };
            
            linkElement.appendChild(logo);

            // --- Text Handling ---
            const textElement = document.createElement('span');
            textElement.textContent = link.text;
            linkElement.appendChild(textElement);

            linkListContainer.appendChild(linkElement);
        }
    });
};

// Event listener for the search bar
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredLinks = myLinks.filter(link => {
        return link.text.toLowerCase().includes(searchTerm);
    });
    renderLinks(filteredLinks);
});

// Initial render of all links
renderLinks(myLinks);