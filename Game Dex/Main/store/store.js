import {
    navBar,
    instaLink,
    callBack,
    searchGame,
    addFavorite,
    favorite,
    addCard,
    delButton,
    addNewGame,
    toStock,
    cursorMove,
    soundTrack,
    verificationAccount,
    hello,
} from "../../JavaScript/functions.js";
import { createModal } from "../../JavaScript/modal.js";

cursorMove();
soundTrack();

verificationAccount();
hello();

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

addNewGame();
