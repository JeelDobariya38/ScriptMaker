let getSelectedLanguage = () => {
    let checklist = document.querySelector("#language-option");
    return checklist.value;
}

let highlightDepertedLanguage = () => {
    let infoElem = document.querySelector("#toast-info");
    let checklist = document.querySelector("#language-option");

    if (!infoElem || !checklist) {
        return false;
    }

    checklist.addEventListener("change", () => {
        if (checklist.value == "bat") {
            checklist.style.color = "red";
            infoElem.style.color = "red";
            infoElem.textContent = "Batch Script is kind of old, Use Powershell Instead!!";
            infoElem.style.display = "inline-block";
        } else if (checklist.value == "python") {
            checklist.style.color = "yellow";
            infoElem.style.color = "yellow";
            infoElem.textContent = "Compiling to native shell scripting might be benifiser!!";
            infoElem.style.display = "inline-block";
        } else {
            checklist.style.color = "white";
            infoElem.style.display = "none";
        };
    });
}

let downloadFile = (filename, content) => {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

let copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
}

let makeSafeStr = (text) => {
    return text.replace(/"/g, "\'");
}

document.addEventListener("DOMContentLoaded", () => {
    highlightDepertedLanguage();
});