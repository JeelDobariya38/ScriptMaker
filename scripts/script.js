document.addEventListener("DOMContentLoaded", (e) => {
    if (window.location.href.includes("homepage.html")) {
        new Typed(
            "#typer",
            {
                strings: [
                    "automate the world!!!",
                    "automate your daily repetive task!!!",
                    "reshape the routines!!!",
                ],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                smartBackspace: false,
            },
        );
    }
});
