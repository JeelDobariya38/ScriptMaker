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
                <h1>${script["name"]}</h1>
                <p>${script["desc"]}</p>
                <div class="links">
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["pshell"]}">powershell</a>
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["bash"]}">bash</a>
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["py"]}">python</a>
                    <a href="./desktop-scriptpreview.html?url=${script["links"]["batch"]}">batch</a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

let main = async () => {
    let masterdata = await getManager();
    rawfetcherurl = masterdata["baseurlforgithubrawreader"].replace("master", "dev");
    
    docFiller(masterdata["scripts"]); 
}

document.addEventListener("DOMContentLoaded", () => main());
