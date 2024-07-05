function addDeleteFunction(button) {
    button.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove();
    });
}
