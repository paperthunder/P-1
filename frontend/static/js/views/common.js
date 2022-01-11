const alpa = document;

export default function head(top) {  
    const title = alpa.createElement("div");
    const icon = alpa.createElement("img");
    const topRec = alpa.createElement("div");
    const menuRec = alpa.createElement("div");
    top.innerHTML = '<div class="title">Ajou Memo</div>';
    menuRec.innerHTML = "";
    menuRec.className = "menuRec";
    top.appendChild(menuRec);
    icon.className = "icon";
    icon.innerHTML = "메뉴";
    icon.addEventListener("click", () => menuDisplay(menuRec));
    top.appendChild(icon);
    topRec.className = "topRec";
    topRec.innerHTML = "";
    top.appendChild(topRec);
    
}

function menuDisplay(any){
        
    if(any.style.visibility == 'hidden'){
        any.style.visibility='visible';
    } else {
        any.style.visibility='hidden';
    }
}