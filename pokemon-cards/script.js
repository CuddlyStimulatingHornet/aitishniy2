const hpStat = document.querySelector(".js-hp");
const pokeImg = document.querySelector(".js-img");
const pokeName = document.querySelector(".js-name");
const pokeAbils = document.querySelector(".js-abilities");
const pokeAttack = document.querySelector(".js-attack");
const pokeDefense = document.querySelector(".js-defense");
const pokeSpeed = document.querySelector(".js-speed");
const generateBtn = document.querySelector(".js-generate-btn");

function getRandomPokeID() {
  return Math.floor(Math.random() * 1328) + 1;
}

async function getPokeURL(id) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${id}`
  );
  if (!response.ok) {
    throw new Error("pokemon not ok");
  }

  const data = await response.json();
  const url = data.results[0].url;
  return url;
}

async function getData() {
  const id = getRandomPokeID();
  const url = await getPokeURL(id);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("pokemon not ok");
  }
  const data = await response.json();

  return {
    name: data.name,
    imgUrl: data.sprites.other["official-artwork"].front_default,
    types: data.types.map((el) => el.type.name),
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
  };
}

async function fillPokeCard() {
  const pokemonData = await getData();
  console.log(pokemonData);

  hpStat.textContent = pokemonData.hp;
  pokeName.textContent = pokemonData.name;
  pokeAttack.textContent = pokemonData.attack;
  pokeDefense.textContent = pokemonData.defense;
  pokeSpeed.textContent = pokemonData.speed;
  pokeAbils.innerHTML = "";
  pokeImg.setAttribute("src", pokemonData.imgUrl);

  pokemonData.types.forEach((el) => {
    const span = document.createElement("span");
    span.classList.add("ability");
    span.textContent = el;
    pokeAbils.appendChild(span);
  });
}

async function main() {
  fillPokeCard();
  generateBtn.addEventListener("click", fillPokeCard);
}

main();
