const getCode = () => {
    let scriptcontent = document.querySelector(".script-content");
    let childrens = scriptcontent.childNodes;
    let scriptTokens = [];

    childrens.forEach((elem, indx) => {
        let token = {
            id: indx,
        };

        if (elem.id == "comment") {
            token.id = "comment";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "commentinput") {
                            token.comment = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else if (elem.id == "printmsg") {
            token.id = "printmsg";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "messageinput") {
                            token.message = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else if (elem.id == "mkdir") {
            token.id = "mkdir";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "directorynameinput") {
                            token.dirname = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else if (elem.id == "mkfile") {
            token.id = "mkfile";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "filenameinput") {
                            token.filename = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else if (elem.id == "writefile") {
            token.id = "writefile";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "filenameinput") {
                            token.filename = makeSafeStr(detailChildElem.value);
                        }
                        if (detailChildElem.id == "contentinput") {
                            token.content = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else if (elem.id == "readfile") {
            token.id = "readfile";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "filenameinput") {
                            token.filename = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else if (elem.id == "cdpwd") {
            token.id = "cdpwd";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "pathinput") {
                            token.path = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else if (elem.id == "cdback") {
            token.id = "cdback";
        }

        else if (elem.id == "executecommand") {
            token.id = "executecommand";
            elem.childNodes.forEach((childElem) => {
                if (childElem.id == "details") {
                    childElem.childNodes.forEach((detailChildElem) => {
                        if (detailChildElem.id == "commandinput") {
                            token.command = makeSafeStr(detailChildElem.value);
                        }
                    });
                }
            });
        }

        else {
            return;
        }

        scriptTokens.push(token);
    });

    let code = compile(scriptTokens);
    return code;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#copybtn").addEventListener("click", () => {
        let code = getCode();
        copyToClipboard(code[0]);
    });

    document.querySelector("#downloadbtn").addEventListener("click", () => {
        let code = getCode();
        downloadFile("code" + code[1], code[0]);
    })
});