const elctrodeExHiddenLegends = {
  picLink: "ex5/ex5_5.png",
  cardType: "Pokemon",
  name: "Electrode",
  type: ["lightning"],
  stage: "Stage 1",
  HP: 70,
  illustrator: "Kyoko Umemoto",
  set: "Hidden Legends",
  attacks: [
    {
      cost: ["lightning"],
      name: "Swift",
      power: "30",
      text:
        "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
    },
    {
      cost: ["colorless", "colorless", "colorless"],
      name: "Mass Destruction",
      power: null,
      text:
        "Both Electrode and the Defending Pokémon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing.",
    },
  ],
  weakness: ["fighting"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 5,
  rare: "Holo Rare",
};
const ninetalesExtraExHiddenLegends = {
  picLink: "ex5/ex5_96.png",
  cardType: "Pokemon",
  name: "Ninetales ex",
  type: ["fire"],
  stage: "Stage 1",
  HP: 90,
  illustrator: "Ryo Ueda",
  set: "Hidden Legends",
  attacks: [
    {
      cost: ["colorless"],
      name: "Intense Glare",
      power: null,
      text:
        "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Burned and Confused.",
    },
    {
      cost: ["fire", "colorless", "colorless", "colorless"],
      name: "Fire Blast",
      power: 100,
      text: "Discard a Fire Energy attached to Ninetales ex.",
    },
  ],
  weakness: ["water"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 96,
  rare: "Rare Holo EX",
};
const pinsirExHiddenLegends = {
  picLink: "ex5/ex5_13.png",
  cardType: "Pokemon",
  name: "Pinsir",
  type: ["grass"],
  stage: "Basic",
  HP: 70,
  illustrator: "Hajime Kusajima",
  set: "Hidden Legends",
  setID: "EX5",
  abilities: [
    {
      name: "Crust",
      text:
        "Any damage done to Pinsir by attacks from your opponent's Basic Pokémon is reduced by 30 (after applying Weakness and Resistance).",
    },
  ],
  attacks: [
    {
      cost: ["grass", "colorless"],
      name: "Sonicboom",
      power: 30,
      text: "This attack's damage isn't affected by Weakness or Resistance.",
    },
  ],
  weakness: ["fire"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 13,
  rare: "HoloRare",
};
const voltrobExHiddenLegends = {
  picLink: "ex5/ex5_80.png",
  cardType: "Pokemon",
  name: "Voltrob",
  type: ["lightning"],
  stage: "Basic",
  HP: 40,
  illustrator: "Kyoko Umemoto",
  set: "Hidden Legends",
  attacks: [
    {
      cost: ["colorless"],
      name: "Recharge",
      power: null,
      text:
        "Search your deck for a Lightning Energy card and attach it to Voltorb. Shuffle your deck afterward.",
    },
    {
      cost: ["lightning", "colorless"],
      name: "Rolling Attack",
      power: 20,
      text: null,
    },
  ],
  weakness: ["fighting"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 80,
  rare: "Common",
};
const vulpixExHiddenLegends = {
  picLink: "ex5/ex5_81.png",
  cardType: "Pokemon",
  name: "Vulpix",
  type: ["fire"],
  stage: "Basic",
  HP: 50,
  illustrator: "Toshinao Aoki",
  set: "Hidden Legends",
  attacks: [
    {
      cost: ["colorless"],
      name: "Scratch",
      power: 10,
      text: null,
    },
    {
      cost: ["fire"],
      name: "Ascension",
      power: null,
      text:
        "Search your deck for a card that evolves from Vulpix and put it on Vulpix. (This counts as evolving Vulpix.) Shuffle your deck afterward.",
    },
  ],
  weakness: ["water"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 81,
  rare: "Common",
};
const jirachiExHiddenLegends = {
  picLink: "ex5/ex5_8.png",
  cardType: "Pokemon",
  name: "Jirachi",
  type: ["psychic", "steel"],
  stage: "Basic",
  HP: 70,
  illustrator: "Ryo Ueda",
  set: "Hidden Legends",
  attacks: [
    {
      cost: ["colorless"],
      name: "Make a Wish",
      power: null,
      text:
        "Search your deck for a card that evolves from 1 of your Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Jirachi. Shuffle your deck afterward.",
    },
    {
      cost: ["psychic", "steel"],
      name: "Mind Bend",
      power: 30,
      text: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
    },
  ],
  weakness: ["fire"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 8,
  rare: "HoloRare",
};

const koffingRebelClash = {
  picLink: "SWSH2/SWSH2_EN_112.png",
  cardType: "Pokemon",
  name: "Koffing",
  type: ["dark"],
  stage: "Basic",
  HP: 70,
  illustrator: "Kyoko Umemoto",
  set: "Rebel Clash",
  attacks: [
    {
      cost: ["dark"],
      name: "Suffocating Gas",
      power: 10,
      text: null,
    },
  ],
  weakness: ["fighting"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 112,
  rare: "Common",
};
const galarianWeezingRebelClash = {
  picLink: "SWSH2/SWSH2_EN_113.png",
  cardType: "Pokemon",
  name: "Galarian Weezing",
  type: ["dark"],
  stage: "Stage 1",
  HP: 130,
  illustrator: "Mitsuhiro Arita",
  set: "Rebel Clash",
  abilities: [
    {
      name: "Neutralizing Gas",
      text:
        "As long as this Pokémon is in the Active Spot, your opponent’s Pokémon in play have no Abilities, except for Neutralizing Gas.",
    },
  ],
  attacks: [
    {
      cost: ["dark"],
      name: "Severe Poison",
      power: "",
      text:
        "Your opponent’s Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon during Pokémon Checkup.",
    },
  ],
  weakness: ["fighting"],
  resistence: [],
  retreatCost: ["colorless"],
  setNumber: 112,
  rare: "Common",
};

const collection = [
  pinsirExHiddenLegends,
  vulpixExHiddenLegends,
  ninetalesExtraExHiddenLegends,
  voltrobExHiddenLegends,
  elctrodeExHiddenLegends,
  jirachiExHiddenLegends,
  koffingRebelClash,
  galarianWeezingRebelClash,
];
const sortByPokmeonName = (a, b) => {
  return a.name.localeCompare(b.name);
};
const sortArray = (array, fn) => {
  const newArray = [...array];
  newArray.sort(fn);
  return newArray;
};
// sortArray(collection, sortByPokmeonName);
const renderListOfPokemon = (pokemons) => {
  const orderedList = document.createElement("ol");
  for (let i = 0; i < pokemons.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = pokemons[i].name;
    orderedList.appendChild(listItem);
  }
  return orderedList;
};
// -> Начало

//функция прерывания дефолтного действия
const stopDefAction = (evt) => evt.preventDefault();
// универсальная функция создания элемента | ВСПОМОГАТЕЛЬНАЯ
const createElementFrom = (template) => {
  const temporaryElement = document.createElement("div");
  temporaryElement.innerHTML = template.trim();
  return temporaryElement.firstChild;
};

// <-
// функция удаления картинки по нажатию "ESC"
const onDocumentKeyUp = (evt) => {
  if (evt.code === "Escape") {
    removePreviewCardElement();
  }
};

// непосредственно функция удаления превью
const removePreviewCardElement = () => {
  const cardElement = document.querySelector(".preview-card"); // находим превью
  const textElement = document.querySelector(".text-element");
  if (cardElement) {
    // если существует -> удаляем и подчищаем обработчик
    cardElement.remove();
    document.removeEventListener("keyup", onDocumentKeyUp);
    document.body.classList.remove("card-here");
  }
  if (textElement) {
    // если существует -> удаляем и подчищаем обработчик
    textElement.remove();
    document.removeEventListener("keyup", onDocumentKeyUp);
  }
};

const renderAbility = (abilities) => {
  if (!abilities) {
    return "";
  }
  let abilitiesP = "";
  abilities.forEach((ability) => {
    abilitiesP += `<p class="card--ability">${ability.name}-${ability.text}</p>`;
  });
  return abilitiesP;
};

const renderAttacks = (attacks) => {
  if (!attacks) {
    return "";
  }
  let attackP = "";
  attacks.forEach((attack) => {
    attackP += `<p class="card--attack">cost:${attack.cost} - name:${attack.name} - power:${attack.power} - text: ${attack.text} </p>`;
  });
  return attackP;
};

const createPokemonTextPreviewCard = (card) => {
  const textPreviewTemplate = `
    <div class = "text-element">
      <p class="card--type">Card Type: ${card.cardType}</p>
      <p class="card--name">Name: ${card.name}</p>
      <p class="pokemon--type">Type: ${card.type}</p>
      <p class="card--stage">Stage: ${card.stage}</p>
      <p class="card--HP">HP: ${card.HP}</p>
      ${renderAbility(card.abilities)}
      ${renderAttacks(card.attacks)}
      <p class="card--illustrator">Illustrator: ${card.illustrator}</p>
      <p class="card--set">Set: ${card.set}</p>
      <p class="card--weakness">Weakness: ${card.weakness}</p>
      <p class="card--resistence">Resistence: ${card.resistence}</p>
      <p class="card--retreat-сost">Retreat cost: ${card.retreatCost}</p>
      <p class="card--set-number">Set Number: ${card.setNumber}</p>
      <p class="card--rarity">Rarity: ${card.rare}</p>
    </div>
  `;
  const textPreviewElement = createElementFrom(textPreviewTemplate);
  return textPreviewElement;
};
// функция создания превью
const createPreviewCard = (card) => {
  const previewCardTemplate = `
    <div class="preview-card">
      <p>${card.name} <button class="preview-card--close">Close</button></p>
      <img src="./img/cards/${card.picLink}">
    </div>
  `; // непосредственно превьюшка(с кнопкой) | ПЕРЕПИСАТЬ
  const previewCardElement = createElementFrom(previewCardTemplate);
  const closeCardElement = previewCardElement.querySelector(
    ".preview-card--close"
  );
  closeCardElement.addEventListener("click", removePreviewCardElement); // обработчик на закрытие по клику
  document.addEventListener("keyup", onDocumentKeyUp); // обработчик на нажатие "ESC"
  return previewCardElement;
};

// ->
// функция наполнения _КНОПКИ_ | ВСПОМОГАТЕЛЬНАЯ
const generateCardTemplate = (card) => {
  return `<a href ="">${card.name} — HP ${card.HP} </a>`;
};

// фабричная функция создания  превью | РАЗОБРАТЬ
const onCardClickFactory = (card) => {
  return () => {
    removePreviewCardElement();
    const previewCardElement = createPreviewCard(card);
    const previewTextElement = createPokemonTextPreviewCard(card);
    document.getElementById("card-img").appendChild(previewCardElement);
    document.getElementById("card-text").appendChild(previewTextElement);
    document.body.classList.add("card-here");
  };
};

// функция создания _КНОПКИ_
const createCardElement = (card) => {
  const cardElement = createElementFrom(generateCardTemplate(card)); //наполнение _КНОПКИ_
  cardElement.addEventListener("click", stopDefAction);
  cardElement.addEventListener("click", onCardClickFactory(card)); // обработчик на _КНОПКУ_
  return cardElement;
};

// функция создания пустого элемента списка
const generateCardDefaultLiTemplate = (inner = "") => {
  return `<li class="cards-default-list--item">${inner}</li>`;
};
// функция создания ордеред листа
const generateList = (cards) => {
  const listTemplate = `<ol class="cards-default-list"></ol>`;
  const pokemonOrderedList = createElementFrom(listTemplate);

  cards.forEach((card) => {
    const liElement = createElementFrom(generateCardDefaultLiTemplate());
    const cardElement = createCardElement(card);
    liElement.appendChild(cardElement);
    pokemonOrderedList.appendChild(liElement);
  });

  return pokemonOrderedList;
};

const pokemonOrderedList = generateList(collection);
document.getElementById("collection-list").appendChild(pokemonOrderedList);
