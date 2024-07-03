class GeneralCompile {
    constructor(scriptTokens, comiplerOption) {
        this.scriptTokens = scriptTokens;
        this.compiler = comiplerOption;
        this.newline = "\n";
    }

    compile() {
        let code = this.compiler.preset;

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
        preset: `#!/bin/bash \n\n`,
        getPrintMsgSyntax: (obj) => `echo "${obj.message}"`,
        getMkDirSyntax: (obj) => `mkdir -p "${obj.dirname}"`,
        getMkFileSyntax: (obj) => `touch "${obj.filename}"`,
        getWriteFileSyntax: (obj) => `echo "${obj.content}" >> "${obj.filename}"`,
    },
    powershell: {
        preset: ``,
        getPrintMsgSyntax: (obj) => `Write-Host "${obj.message}"`,
        getMkDirSyntax: (obj) => `New-Item -Path "${obj.dirname}" -ItemType Directory`,
        getMkFileSyntax: (obj) => `New-Item -Path "${obj.filename}"`,
        getWriteFileSyntax: (obj) => `Add-Content -Path "${obj.filename}" -Value "${obj.content}"`,
    },
    bat: {
        preset: `@echo off \n\n`,
        getPrintMsgSyntax: (obj) => `echo ${obj.message}`,
        getMkDirSyntax: (obj) => `mkdir ${obj.dirname}`,
        getMkFileSyntax: (obj) => `type nul > ${obj.filename}`,
        getWriteFileSyntax: (obj) => `echo ${obj.content} >> ${obj.filename}`,
    },
    python: {
        preset: `import os \n\nif __name__ == "__main__":\n`,
        getPrintMsgSyntax: (obj) => `\tprint("${obj.message}")`,
        getMkDirSyntax: (obj) => `\tos.mkdir("${obj.dirname}")`,
        getMkFileSyntax: (obj) => `\topen("${obj.filename}", "a").close()`,
        getWriteFileSyntax: (obj) => `\twith open("${obj.filename}", "a") as f:\n\t\tf.write("${obj.content}")`,
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
    } else if (option == "bat") {
        let compiler = new GeneralCompile(scriptTokens, comiplerOption.bat);
        let code = compiler.compile();
        return [code, ".bat"];
    } else if (option == "python") {
        let compiler = new GeneralCompile(scriptTokens, comiplerOption.python);
        let code = compiler.compile();
        return [code, ".py"];
    }
}
