import writeRender from "./writePage.js";

const alpa = document;

export default function main(root, contents) {  
    const enrollButton = alpa.createElement("div");
    enrollButton.innerHTML = "등록하기";
    enrollButton.className = "write";
    enrollButton.addEventListener("click", () => moveFromMain(root, contents));
    root.appendChild(enrollButton);

    const board = alpa.createElement("div");
    board.innerHTML = "";
    board.className = "board";
    root.appendChild(board);
}

function moveFromMain(root, contents){
    history.pushState(null,"enrollPage",'/${contents}');
    switch (contents){
       case "writePage": 
        writeRender(root);
        break;
        
        case "detailPage":
        break;
        return;
    }
}
