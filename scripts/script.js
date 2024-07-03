document.addEventListener("DOMContentLoaded", (e) => {
    if (window.location.href.endsWith("index.html") || window.location.href.endsWith("smallscreens_homepage.html")) {
        new Typed(
            "#typer",
            {
                strings: [
                    " ",
                    "automate the world!!!",
                    "automate your daily repetive task!!!",
                    "reshape the routines!!!"
                ],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
            },
        );
    }
});
