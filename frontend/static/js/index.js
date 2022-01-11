import head from "./views/common.js";
import main from "./views/mainPage.js";

const alpa = document;

const root = alpa.querySelector("#root");
const top = alpa.querySelector("#top");

head(top);
main(root,"writePage");