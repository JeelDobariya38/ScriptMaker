const managerurl = "https://raw.githubusercontent.com/JeelDobariya38/ScriptMaker/dev/scriptbase/manager.json";

async function getScript(rawfetcherurl, url) {
    console.log(rawfetcherurl + url);
    let res = await fetch(rawfetcherurl + url)
    let text = await res.text();
    console.log(text);
    return text;
}

async function getBaseUrl() {
    let res = await fetch(managerurl);
    let jsondata = await res.json();
    return jsondata["baseurlforgithubrawreader"].replace("master", "dev")
}

function getUrlParameter(name) {
    let fullUrl = window.location.href;
    let url = new URL(fullUrl);
    let paramValue = url.searchParams.get(name);
    return paramValue;
}

async function fillScript(content, languageClass) {
    let scriptContentElem = document.querySelector("#script-content");
    let element = `
<pre class="${languageClass}">
<code>
${content}
</code>
</pre>`;
    scriptContentElem.innerHTML = element;
    prismStart();
}

function getClassName(scriptUrl) {
    if (scriptUrl.endsWith(".ps1")) return "lang-powershell";
    if (scriptUrl.endsWith(".bash")) return "lang-bash";
    if (scriptUrl.endsWith(".py")) return "lang-py";
    if (scriptUrl.endsWith(".bat")) return "lang-batch";
}

let main = async () => {
    let rawfetcherurl = await getBaseUrl();
    let scriptUrl = getUrlParameter('url');
    
    let languageClass;
    let scriptContent;
    
    if(scriptUrl == null) {
        scriptContent = "Error: ScriptUrl Not Provided";
        languageClass = "invalid-class";
    } else {
        languageClass = getClassName(scriptUrl);
        scriptContent = await getScript(rawfetcherurl, scriptUrl);
    }
    fillScript(scriptContent, languageClass);
}

document.addEventListener("DOMContentLoaded", () => main());
