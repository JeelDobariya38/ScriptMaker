function updateTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
    } else {
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
    }
}

function changeTheme() {
    if (localStorage.theme == 'dark') {
        localStorage.theme = 'light';
    } else {
        localStorage.theme = 'dark';
    }

    updateTheme();
}

function resetTheme() {
    localStorage.removeItem('theme');
}


document.addEventListener("DOMContentLoaded", () => {
    updateTheme();

    let themeChangeBtn = document.querySelector(".themeChangeBtn");
    themeChangeBtn.addEventListener("click", () => changeTheme());
});
