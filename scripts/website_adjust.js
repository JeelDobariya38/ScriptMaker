function getMobileWebsite() {
    return window.location.href.replace("desktop", "mobile");
}

function getDestopWebsite() {
    return window.location.href.replace("mobile", "desktop");
}


function checkScreenWidth() {
    if (window.innerWidth <= 768) { // from approx tablet onwards...
        console.log("It seems like you are on a Phone!!!!");
        if (window.location.href.includes("desktop")) {
            window.location.href = getMobileWebsite();
        }
    } else {
        console.log("It seems like you are on a Desktop!!!!");
        if (window.location.href.includes("mobile")) {
            window.location.href = getDestopWebsite();
        }
    }
}

function Setup_Adjuster() {
    if (!window.location.pathname.includes(".html")) {
        window.location.pathname += "mobile-homepage.html";
    }

    window.addEventListener("load", checkScreenWidth);
    window.addEventListener("resize", checkScreenWidth);
}

Setup_Adjuster();