// ——— Элементы DOM ———
const savedBtn = document.querySelector(".saved-btn"); // кнопка "Saved Pokemons"
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const savedList = document.querySelector(".saved-list");

// ——— Хранилище сохранённых покемонов ———
export let savedPokemons = [];

// ——— Открытие модалки ———
export function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// ——— Закрытие модалки ———
export function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// ——— События ———
savedBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// ——— Отрисовка сохранённых покемонов ———
export function renderSavedList() {
  savedList.innerHTML = "";

  savedPokemons.forEach((p) => {
    const item = document.createElement("div");
    item.className = "saved-item";

    item.innerHTML = `
      <div class="saved-icon">
        <img src="${p.image}" alt="${p.name}">
      </div>

      <div class="saved-info">
        <b>${p.name}</b><br>
        HP: ${p.hp} | ATK: ${p.atk} | DEF: ${p.def} | SPD: ${p.spd}
      </div>
    `;

    savedList.appendChild(item);
  });
}
