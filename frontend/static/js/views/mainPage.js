import writeRender from "./writePage.js";
import logInRender from "./logInPage.js";

const alpa = document;

export default function main(root) {  
    const enrollButton = alpa.createElement("div");
    enrollButton.innerHTML = "등록하기";
    enrollButton.className = "write";
    enrollButton.addEventListener("click", () => moveFromMain(root,"writePage"));
    root.appendChild(enrollButton);

    const board = alpa.createElement("div");
    board.innerHTML = "";
    board.className = "board";
    root.appendChild(board);

    const logIn = alpa.createElement("div");
    logIn.innerHTML = "log in";
    logIn.className = "logIn";
    logIn.addEventListener("click", () => moveFromMain(root,"logInPage"));
    root.appendChild(logIn);
}

function moveFromMain(root, contents){
    history.pushState(null,null,'/${contents}');
    switch (contents){
       case "writePage": 
        writeRender(root);
        break;
        
        case "logInPage":
        logInRender(root);
        break;
        return;
    }
}
