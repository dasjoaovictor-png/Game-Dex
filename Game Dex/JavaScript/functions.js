import { showToast } from "./toast.js";

// ===============================
// CURSOR
// ===============================

export function cursorMove() {
  new kursor({
    type: 4,
    color: "#ff1a85",
  });
}

// ===============================
// MÚSICA
// ===============================

export function soundTrack() {
  document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    const playlist = ["/Sound/In The Pool.mp3", "/Sound/Moonlight Sonata.mp3"];
    let current = 0;

    music.src = playlist[current];

    music.addEventListener("ended", () => {
      current++;

      if (current < playlist.length) {
        music.src = playlist[current];
        music.play();
      }
    });
  }, {once: true});
}

// ===============================
// VERIFICAÇÃO DE CONTA
// ===============================

export function verificationAccount() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData || !userData.userName || !userData.userEmail || !userData.userPassword) {
    location.href = "/Main/login/login.html";
    return;
  }
}

// ===============================
// SAUDAÇÃO
// ===============================

export function hello() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData.userName === "joao" && userData.userPassword === "madeira") {
    showToast({ message: "Olá, Administrador", type: "success" });
    return;
  } else {
    showToast({ message: `Olá, ${userData.userName}!`, type: "success" });
  }
}

// ===============================
// BOTÃO - CRIAR CONTA
// ===============================

export function createAccount(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!name.value || !email.value || !password.value) {
    showToast({ message: "Preencha os Campos", type: "error" });
    return;
  }

  const userData = {
    userName: name.value,
    userEmail: email.value,
    userPassword: password.value,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  location.href = "/Main/store/store.html";
}

// ===============================
// IMAGEM - Base64
// ===============================

export function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => {
      showToast({ message: "Imagem Inválida", type: "error" });
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

// ===============================
// BOTÃO - CADASTRAR JOGO
// ===============================

export async function createNewGame(event) {
  event.preventDefault();

  const gameName = document.getElementById("sendName").value;
  const gameDescription = document.getElementById("sendDescription").value;
  const gamePrice = document.getElementById("sendPrice").value;
  const gameImg = document.getElementById("sendImg").files[0];

  if (!gameName || !gameDescription || !gamePrice || !gameImg) {
    showToast({ message: "Preencha os Campos", type: "error" });
    return;
  }

  let img64;
  
  try {
    img64 = await toBase64(gameImg);
  } catch (error){
    console.error(error);
    
    showToast ({ message: "Erro na Imagem", type: "error" });
    return;
  }
  
  localStorage.setItem("newGameName", gameName);
  localStorage.setItem("newGameDescription", gameDescription);
  localStorage.setItem("newGamePrice", gamePrice);
  localStorage.setItem("newGameImg", img64);

  location.href = "/Main/store/store.html";
}

// ===============================
// LINKS HEADER
// ===============================

export function navBar() {
  gear.classList.toggle("gearRotate");

  const li = document.querySelectorAll("header nav ul li");
  li.forEach((item) => {
    item.classList.add("visible");

    setTimeout(() => {
      item.classList.remove("visible");
    }, 3000);
  });
}

// ===============================
// BOTÃO - INSTAGRAM
// ===============================

export function instaLink() {
  location.href = "https://www.instagram.com/joao_vic_tor339/";
}

// ===============================
// BOTÃO - VOLTAR LOGIN
// ===============================

export function callBack() {
  location.href = "/Main/login/login.html";
}

// ===============================
// BOTÃO - VERIFICAR CONTA
// ===============================

export function toStock() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData.userName === "joao" && userData.userPassword === "madeira") {
    location.href = "/Main/stock/stock.html";
    return;
  } else {
    showToast({ message: "Trouxa haha", type: "warning" });
  }
}

// ===============================
// PROCURAR JOGO
// ===============================

export function formatString(str) {
  return str.toLowerCase().trim();
}

export function searchGame(event) {
  const value = formatString(event.target.value);
  const games = document.querySelectorAll(".gameCard");

  games.forEach((game) => {
    const text = formatString(game.textContent);

    if (value === "" || text.includes(value)) {
      game.classList.remove("hidden");
    } else {
      game.classList.add("hidden");
    }
  });
}

// ===============================
// BOTÃO - FAVORITAR JOGO
// ===============================

const favoriteList = [];
export function addFavorite(check) {
  check.addEventListener("click", () => {
    const card = check.closest(".gameCard");
    card.classList.toggle("cardSelected");

    if (card.classList.contains("cardSelected")) {
      if (!favoriteList.includes(card)) {
        favoriteList.push(card);
        check.classList.toggle("checked");

        showToast({ message: "Favoritado", type: "success" });
      }
    } else {
      const index = favoriteList.indexOf(card);

      if (index !== -1) {
        favoriteList.splice(index, 1);
        check.classList.remove("checked");

        const gamesContainer = document.getElementById("games");
        gamesContainer.append(card);

        showToast({ message: "Removido dos Favoritos", type: "warning" });
      }
    }
  });
}

// ===============================
// BOTÃO - VER FAVORITOS
// ===============================

export function favorite() {
  const gamesContainer = document.getElementById("games");
  const favoriteGames = document.getElementById("favoriteGames");

  favoriteGames.innerHTML = "";

  gamesContainer.classList.toggle("hidden");
  favoriteGames.classList.toggle("visible");

  favoriteList.forEach((favorite) => {
    favoriteGames.append(favorite);
  });
}

// ===============================
// PEGAR PREÇO DO JOGO
// ===============================

export function addCard(card) {
  const price = card.querySelector(".price");
  card.addEventListener("dblclick", () => showPrice(price));
}

// ===============================
// PREÇO NO CARRINHO
// ===============================

let total = 0;
export function showPrice(price) {
  const priceValue = parseFloat(
    price.textContent.replace("R$", "").replace(",", ".").trim()
  );
  total += priceValue;

  const car = document.getElementById("car");
  car.textContent = `R$ ${ total.toFixed(2) }`;

  showToast({ message: "Adicionado Ao Carrinho", type: "success" });
}

// ===============================
// BOTÃO - DEL (LIMPA OS PREÇOS)
// ===============================

export function delButton() {
  const car = document.getElementById("car");
  car.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
    </svg>
  `;

  total = 0;
  showToast({ message: "Carrinho Limpo", type: "success" });
}

// ===============================
// ADD NOVO JOGO
// ===============================

export function addNewGame() {
  const newGameName = localStorage.getItem("newGameName");
  const newGameDescription = localStorage.getItem("newGameDescription");
  const newGamePrice = localStorage.getItem("newGamePrice");
  const newGameImg = localStorage.getItem("newGameImg");

  if (newGameName && newGameDescription && newGamePrice && newGameImg) {
    const newGameCard = document.createElement("div");
    newGameCard.classList.add("gameCard");

    newGameCard.innerHTML = `
      <figure class="img">
        <img src=${ newGameImg } alt=${ newGameName }>
      </figure>

      <div class="gameText">
        <p class="tag">Pelo Usuário</p>
        <p class="name">${ newGameName }</p>
        <p class="description">${ newGameDescription }</p>
        <p class="price">R$ ${ parseFloat(newGamePrice).toFixed(2) }
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="check" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
              d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
          </svg>
        </p>
      </div>
    `;

    const gamesContainer = document.getElementById("games");
    gamesContainer.append(newGameCard);

    const newCheck = newGameCard.querySelector(".check");
    addFavorite(newCheck);
    addCard(newGameCard);
  }
}