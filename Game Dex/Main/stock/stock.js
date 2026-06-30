import { toBase64 } from "../../JavaScript/functions.js";
import { createNewGame } from "../../JavaScript/functions.js";
import { cursorMove } from "../../JavaScript/functions.js";
import { verificationAccount } from "../../JavaScript/functions.js";

cursorMove();

verificationAccount();
toBase64();

const addGame = document.getElementById("addGame");
addGame.addEventListener("click", (event) => createNewGame(event));