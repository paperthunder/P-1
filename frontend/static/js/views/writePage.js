const alpa = document;

export default function writeRender(root){
    const body = writePage();
    root.innerHTML = "";
    root.appendChild(body); 
}

function writePage(){
    const bodyTitle = alpa.createElement("div");
    bodyTitle.innerHTML = "제목을 입력해주세요";
    bodyTitle.className = "bodyTitle";
    return bodyTitle;
}