import { toBase64 } from "../../JavaScript/functions.js";
import { createNewGame } from "../../JavaScript/functions.js";
import { cursorMove } from "../../JavaScript/functions.js";
import { verificationAccount } from "../../JavaScript/functions.js";

verificationAccount();

// ===============================
// BOTÃO
// ===============================

const addGame = document.getElementById("addGame");
addGame.addEventListener("click", (event) => createNewGame(event));

toBase64();
cursorMove();