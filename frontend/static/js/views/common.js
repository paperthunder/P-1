const alpa = document;

export default function head(top) {  
    const title = alpa.createElement("div");
    const icon = alpa.createElement("div");
    const topRec = alpa.createElement("div");
    const menuRec = alpa.createElement("div");

    const free = alpa.createElement("div");
    const secret = alpa.createElement("div");
    const imformation = alpa.createElement("div");
    const pr = alpa.createElement("div");
    const sw = alpa.createElement("div");

    free.className = "free";
    secret.className = "secret";
    imformation.className = "imformation";
    pr.className = "pr";
    sw.className = "sw";

    free.innerHTML = "자유 게시판";
    secret.innerHTML = "비밀 게시판";
    imformation.innerHTML = "정보 게시판";
    pr.innerHTML = "홍보 게시판";
    sw.innerHTML = "SW 게시판";

    top.appendChild(free);
    top.appendChild(secret);
    top.appendChild(imformation);
    top.appendChild(pr);
    top.appendChild(sw);

    title.innerHTML = "Ajou Memo";
    title.className = "title";
    top.appendChild(title);


    menuRec.innerHTML = "";
    menuRec.className = "menuRec";
    top.appendChild(menuRec);

    icon.className = "icon";
    icon.innerHTML = "메뉴";
    
    icon.addEventListener("click", () => Display(free));
    icon.addEventListener("click", () => Display(secret));
    icon.addEventListener("click", () => Display(imformation));
    icon.addEventListener("click", () => Display(pr));
    icon.addEventListener("click", () => Display(sw));
    top.appendChild(icon);


    topRec.className = "topRec";
    topRec.innerHTML = "";
    top.appendChild(topRec);

    
}

function Display(any){
      
        if(any.style.visibility == 'hidden'){
            any.style.visibility='visible';
        } else {
            any.style.visibility='hidden';
        }
}