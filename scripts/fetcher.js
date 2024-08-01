const managerurl = "https://raw.githubusercontent.com/JeelDobariya38/ScriptMaker/dev/scriptbase/manager.json";

let rawfetcherurl = "";

async function getManager() {
    let res = await fetch(managerurl);
    let jsondata = await res.json();
    return jsondata;
}

function docFiller(scriptarr) {
    let container = document.querySelector("#script-card-container");
    console.log(container);
    scriptarr.forEach(script => {
        let cardHTML = `
            <div class="script-card">
                <h1 class="script-heading">${script["name"]}</h1>
                <p class="script-desc">${script["desc"]}</p>
                <div class="script-links">
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["pshell"]}" class="btn btnfeedback">powershell</a>
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["bash"]}" class="btn btnfeedback">bash</a>
                </div>
                <div class="script-links">
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["py"]}" class="btn btnfeedback">python</a>
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["batch"]}" class="btn btnfeedback">batch</a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

let main = async () => {
    let masterdata = await getManager();
    rawfetcherurl = masterdata["baseurlforgithubrawreader"]
    
    docFiller(masterdata["scripts"]); 
}

document.addEventListener("DOMContentLoaded", () => main());
