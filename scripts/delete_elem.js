function addDeleteFunction(button) {
    button.addEventListener("click", (e) => {
        let parent = e.target.parentNode.parentNode;

        if (parent.classList.contains("dragable")) {
            parent.remove();
        } else {
            parent = parent.parentNode;
            if (parent.classList.contains("dragable")) {
                parent.remove();
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let initialElem = document.querySelector(".initialElem");
    addDeleteFunction(initialElem);
})