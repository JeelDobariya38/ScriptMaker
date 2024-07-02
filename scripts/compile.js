class GeneralCompile {
    constructor(scriptTokens, comiplerOption) {
        this.scriptTokens = scriptTokens;
        this.compiler = comiplerOption;
        this.qoute = "\"";
        this.newline = "\n";
    }

    compile() {
        let code = "";

        this.scriptTokens.forEach((obj) => {
            if (obj.id == "printmsg") {
                code = code + this.compiler.printKey + " " + this.qoute + obj.message + this.qoute + this.newline;
            }
            else if (obj.id == "mkdir") {
                code = code + this.compiler.mkdirKey + " " + this.qoute + obj.dirname + this.qoute + this.newline;
            }
            else if (obj.id == "mkfile") {
                code = code + this.compiler.mkfileKey + " " + this.qoute + obj.filename + this.qoute + this.newline;
            }
            else if (obj.id == "writefile") {
                code = code + this.compiler.writefileKey + " " + this.qoute + obj.content + this.qoute + " >> " + this.qoute + obj.filename + this.qoute + this.newline;
            }
        });

        return code;
    }
}

const comiplerOption = {
    bash: {
        printKey: "echo",
        mkdirKey: "mkdir",
        mkfileKey: "touch",
        writefileKey: "echo",
    },
    powershell: {
        printKey: "Write-Host",
        mkdirKey: "New-Item",
        mkfileKey: "New-Item",
        writefileKey: "Write-Host",
    }
}

function compile(scriptTokens) {
    // return: [code, fileExtension]
    let option = getSelectedLanguage();

    if (option == "powershell") {
        let compiler = new GeneralCompile(scriptTokens, comiplerOption.powershell);
        let code = compiler.compile();
        return [code, ".ps1"];
    } else if (option == "bash") {
        let compiler = new GeneralCompile(scriptTokens, comiplerOption.bash);
        let code = compiler.compile();
        return [code, ".bash"];
    }
}
