const setup_drag_and_drop_functionality = (dragables, dropzone) => {
    dragables.forEach((dragable) => {
        dragable.addEventListener("dragstart", (e) => {
            let selected = e.target;

            dropzone.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            dropzone.addEventListener("drop", (e) => {
                e.preventDefault();
                dropzone.appendChild(selected.cloneNode(true));
                selected = null;
            });
        });
    });
};

const get_require_elements = (dragablesSelector, dropzoneSelector) => {
    let dragables = document.querySelectorAll(dragablesSelector);
    let dropzone = document.querySelector(dropzoneSelector);

    if (dragables.length == 0) {
        throw new Error(`ElementNotFoundError: Can't found elements with selector: "${dragablesSelector}"`);
    }

    if (dropzone == null) {
        throw new Error(`ElementNotFoundError: Can't found elements with selector: "${dropzoneSelector}"`);
    }

    return [dragables, dropzone];
};

document.addEventListener("DOMContentLoaded", () => {
    let [dragables, dropzone] = get_require_elements(".dragable", ".script-content");
    setup_drag_and_drop_functionality(dragables, dropzone);
});
