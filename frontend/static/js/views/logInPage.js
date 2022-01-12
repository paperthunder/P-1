const alpa = document;

export default function logInRender(root){
    const body = logInPage(root);
    root.innerHTML = "";
    root.appendChild(body); 
}

function logInPage(root){
    const idInput = alpa.createElement("input");
    idInput.innerHTML = "ID를 입력하시오.";
    idInput.className = "idInput";
    root.appendChild(idInput);
    return idInput;
}