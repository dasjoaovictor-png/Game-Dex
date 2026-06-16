import { navBar } from "../../JavaScript/functions.js";
import { instaLink } from "../../JavaScript/functions.js";
import { callBack } from "../../JavaScript/functions.js";
import { searchGame } from "../../JavaScript/functions.js";
import { addFavorite } from "../../JavaScript/functions.js";
import { favorite } from "../../JavaScript/functions.js";
import { addCard } from "../../JavaScript/functions.js";
import { delButton } from "../../JavaScript/functions.js";
import { addNewGame } from "../../JavaScript/functions.js";
import { toStock } from "../../JavaScript/functions.js";
import { cursorMove } from "../../JavaScript/functions.js";
import { soundTrack } from "../../JavaScript/functions.js";
import { verificationAccount } from "../../JavaScript/functions.js";
import { helloADM } from "../../JavaScript/functions.js";
import { helloUser } from "../../JavaScript/functions.js";
import { createModal } from "../../JavaScript/modal.js";

verificationAccount();
helloADM();
helloUser();
addNewGame();
cursorMove();
soundTrack();

// ===============================
// EVENTOS
// ===============================

const sendGame = document.getElementById("sendGame");
sendGame.addEventListener("click", () => toStock());

const gear = document.getElementById("gear");
gear.addEventListener("click", () => navBar());

const insta = document.getElementById("instagram");
insta.addEventListener("click", () => instaLink());

const house = document.getElementById("house");
house.addEventListener("click", () => callBack());

const seeFavorite = document.getElementById("seeFavorite");
seeFavorite.addEventListener("click", () => favorite());

const del = document.getElementById("del");
del.addEventListener("click", () => delButton());

const cart = document.getElementById("cart");
cart.addEventListener("click", () => createModal());

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (event) => searchGame(event));

document.querySelectorAll(".gameCard").forEach((card) => addCard(card));
document.querySelectorAll(".check").forEach((check) => addFavorite(check));