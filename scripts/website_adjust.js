function getMobileWebsite() {
    return window.location.href.replace("index.html", "smallscreens_homepage.html");
}

function getDestopWebsite() {
    return window.location.href.replace("smallscreens_homepage.html", "index.html");
}


function checkScreenWidth() {
    if (window.innerWidth <= 650) {
        console.log("It seems like you are on a Phone!!!!");
        if (window.location.href.includes("index.html")) {
            window.location.href = getMobileWebsite();
        }
    } else {
        console.log("It seems like you are on a Desktop!!!!");
        if (window.location.href.includes("homepage.html")) {
            window.location.href = getDestopWebsite();
        }
    }
}

if (!window.location.pathname.includes(".html")) {
    window.location.pathname += "index.html";
}
window.onload = checkScreenWidth;
