let getSelectedLanguage = () => {
    let checklist = document.querySelector("#language-option");
    return checklist.value;
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
