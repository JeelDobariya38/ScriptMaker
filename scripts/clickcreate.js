const setup_click_and_create_functionality = (selectElem, addElemBtn, finalzoneElem) => {
    addElemBtn.addEventListener("click", () => {
        let elemToAdd = document.querySelector("#" + selectElem.value);
        elemToAdd = elemToAdd.cloneNode(true);
        elemToAdd.classList.add("show-full");
        finalzoneElem.appendChild(elemToAdd);
        let deleteBtn = undefined;
        elemToAdd.childNodes.forEach((child) => {
            if (child.id == "deleteElemBtn") {
                deleteBtn = child;
                return;
            }
        });
        addDeleteFunction(deleteBtn);
    });
};


const get_require_elements = (selectSelector, addelembtnSelector, finalzoneSelector) => {
    let selectElem = document.querySelector(selectSelector);
    let addElemBtn = document.querySelector(addelembtnSelector);
    let finalzoneElem = document.querySelector(finalzoneSelector);

    if (!selectElem) {
        throw new Error(`ElementNotFoundError: Can't found elements with selector: "${selectSelector}"`);
    }

    if (!addElemBtn) {
        throw new Error(`ElementNotFoundError: Can't found elements with selector: "${addelembtnSelector}"`);
    }

    if (!finalzoneElem) {
        throw new Error(`ElementNotFoundError: Can't found elements with selector: "${finalzoneSelector}"`);
    }

    return [selectElem, addElemBtn, finalzoneElem];
};


document.addEventListener("DOMContentLoaded", () => {
    let [selectElem, addElemBtn, finalzoneElem] = get_require_elements("#elem-option", "#addelem", ".script-content");
    setup_click_and_create_functionality(selectElem, addElemBtn, finalzoneElem);
});
