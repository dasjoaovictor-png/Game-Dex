import { createAccount } from "../../JavaScript/functions.js";
import { cursorMove } from "../../JavaScript/functions.js";

cursorMove();

const createAccountBtn = document.getElementById("createAccount");
createAccountBtn.addEventListener("click", (event) => createAccount(event));