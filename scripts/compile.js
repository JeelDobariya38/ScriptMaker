class GeneralCompile {
    constructor(scriptTokens, comiplerOption) {
        this.scriptTokens = scriptTokens;
        this.compiler = comiplerOption;
        this.newline = "\n";
    }

    compile() {
        let code = this.compiler.preset;

        this.scriptTokens.forEach((obj) => {
            if (obj.id == "comment") {
                code = code + this.compiler.getCommentSyntax(obj) + this.newline;
            }
            else if (obj.id == "printmsg") {
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
            else if (obj.id == "readfile") {
                code = code + this.compiler.getReadFileSyntax(obj) + this.newline;
            }
            else if (obj.id == "cdpwd") {
                code = code + this.compiler.getChangeDirSyntax(obj) + this.newline;
            }
            else if (obj.id == "cdback") {
                code = code + this.compiler.getGoBackSyntax(obj) + this.newline;
            }
            else if (obj.id == "executecommand") {
                code = code + this.compiler.getExecuteSyntax(obj) + this.newline;
            }
        });

        return code;
    }
}

const comiplerOption = {
    bash: {
        preset: `#!/bin/bash \n\n`,
        getCommentSyntax: (obj) => ``,
        getPrintMsgSyntax: (obj) => `echo "${obj.message}"`,
        getMkDirSyntax: (obj) => `mkdir -p "${obj.dirname}"`,
        getMkFileSyntax: (obj) => `touch "${obj.filename}"`,
        getWriteFileSyntax: (obj) => `echo "${obj.content}" >> "${obj.filename}"`,
        getReadFileSyntax: (obj) => ``,
        getChangeDirSyntax: (obj) => ``,
        getGoBackSyntax: (obj) => ``,
        getExecuteSyntax: (obj) => ``,
    },
    powershell: {
        preset: ``,
        getCommentSyntax: (obj) => ``,
        getPrintMsgSyntax: (obj) => `Write-Host "${obj.message}"`,
        getMkDirSyntax: (obj) => `New-Item -Path "${obj.dirname}" -ItemType Directory`,
        getMkFileSyntax: (obj) => `New-Item -Path "${obj.filename}"`,
        getWriteFileSyntax: (obj) => `Add-Content -Path "${obj.filename}" -Value "${obj.content}"`,
        getReadFileSyntax: (obj) => ``,
        getChangeDirSyntax: (obj) => ``,
        getGoBackSyntax: (obj) => ``,
        getExecuteSyntax: (obj) => ``,
    },
    bat: {
        preset: `@echo off \n\n`,
        getCommentSyntax: (obj) => ``,
        getPrintMsgSyntax: (obj) => `echo ${obj.message}`,
        getMkDirSyntax: (obj) => `mkdir ${obj.dirname}`,
        getMkFileSyntax: (obj) => `type nul > ${obj.filename}`,
        getWriteFileSyntax: (obj) => `echo ${obj.content} >> ${obj.filename}`,
        getReadFileSyntax: (obj) => ``,
        getChangeDirSyntax: (obj) => ``,
        getGoBackSyntax: (obj) => ``,
        getExecuteSyntax: (obj) => ``,
    },
    python: {
        preset: `import os \n\nif __name__ == "__main__":\n`,
        getCommentSyntax: (obj) => ``,
        getPrintMsgSyntax: (obj) => `\tprint("${obj.message}")`,
        getMkDirSyntax: (obj) => `\tos.mkdir("${obj.dirname}")`,
        getMkFileSyntax: (obj) => `\topen("${obj.filename}", "a").close()`,
        getWriteFileSyntax: (obj) => `\twith open("${obj.filename}", "a") as f:\n\t\tf.write("${obj.content}")`,
        getReadFileSyntax: (obj) => ``,
        getChangeDirSyntax: (obj) => ``,
        getGoBackSyntax: (obj) => ``,
        getExecuteSyntax: (obj) => ``,
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
