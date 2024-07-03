class GeneralCompile {
    constructor(scriptTokens, comiplerOption) {
        this.scriptTokens = scriptTokens;
        this.compiler = comiplerOption;
        this.newline = "\n";
    }

    compile() {
        let code = "";

        this.scriptTokens.forEach((obj) => {
            if (obj.id == "printmsg") {
                code = code + this.compiler.getPrintMsgSyntax(obj) + this.newline;
            }
            else if (obj.id == "mkdir") {
                code = code + this.compiler.getMkDirSyntax(obj) + this.newline;
            }
            else if (obj.id == "mkfile") {
                code = code + this.compiler.getMkFileSyntax(obj) + this.newline;
            }
            else if (obj.id == "writefile") {
                code = code + this.compiler.getWriteFileSyntax(obj) + this.newline;
            }
        });

        return code;
    }
}

const comiplerOption = {
    bash: {
        getPrintMsgSyntax: (obj) => `echo "${obj.message}"`,
        getMkDirSyntax: (obj) => `mkdir "${obj.dirname}"`,
        getMkFileSyntax: (obj) => `touch "${obj.filename}"`,
        getWriteFileSyntax: (obj) => `echo "${obj.content}" >> "${obj.filename}"`,
    },
    powershell: {
        getPrintMsgSyntax: (obj) => `Write-Host "${obj.message}"`,
        getMkDirSyntax: (obj) => `New-Item "${obj.dirname}" -ItemType Directory`,
        getMkFileSyntax: (obj) => `New-Item "${obj.filename}"`,
        getWriteFileSyntax: (obj) => `Add-Content -Path "${obj.filename}" -Value "${obj.content}"`,
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