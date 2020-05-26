let elctrodeExHiddenLegends = {
  picLink: "../img/cards/ex5/ex5_5.png",
  cardType: "Pokemon",
  name: "Electrode",
  type: ["lightning"],
  stage: "Stage 1",
  HP: 70,
  illustrator: "Kyoko Umemoto",
  set: "Hidden Legends",
  firstAttack: {
    attackCost: ["lightning"],
    attackText:
      "Swift 30 - This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
  },
  secondAttack: {
    attackCost: ["colorless", "colorless", "colorless"],
    attackText:
      "Mass Destruction - Both Electrode and the Defending Pokémon are now Knocked Out. If Electrode has any Special Energy cards attached to it, this attack does nothing.",
  },
  weakness: ["fighting"],
  resistence: ["noResistence"],
  retreatCost: ["colorless"],
  setNumber: ["5 / 101"],
  rare: "Holo Rare",
};
let ninetalesExtraExHiddenLegends = {
  picLink: "../img/cards/ex5/ex5_96.png",
  cardType: "Pokemon",
  name: "Ninetales ex",
  type: ["fire"],
  stage: "Stage 1",
  HP: 90,
  illustrator: "Ryo Ueda",
  set: "Hidden Legends",
  firstAttack: {
    attackCost: ["colorless"],
    attackText:
      "Intense Glare - Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch. The new Defending Pokémon is now Burned and Confused.",
  },
  secondAttack: {
    attackCost: ["fire", "colorless", "colorless", "colorless"],
    attackText:
      "Fire Blast 100 - Discard a Fire Energy attached to Ninetales ex.",
  },
  weakness: ["water"],
  resistence: ["noResistence"],
  retreatCost: ["colorless"],
  setNumber: ["96/ 101"],
  rare: "Rare Holo EX",
};
let pinsirExHiddenLegends = {
  picLink: "../img/cards/ex5/ex5_13.png",
  cardType: "Pokemon",
  name: "Pinsir",
  type: ["grass"],
  stage: "Basic",
  HP: 70,
  illustrator: "Hajime Kusajima",
  set: "Hidden Legends",
  ability:
    "Crust - Any damage done to Pinsir by attacks from your opponent's Basic Pokémon is reduced by 30 (after applying Weakness and Resistance).",
  firstAttack: {
    attackCost: ["grass", "colorless"],
    attackText:
      "Sonicboom 30 - This attack's damage isn't affected by Weakness or Resistance.",
  },
  weakness: ["fire"],
  resistence: ["noResistence"],
  retreatCost: ["colorless"],
  setNumber: ["13 / 101"],
  rare: "HoloRare",
};
let voltrobExHiddenLegends = {
  picLink: "../img/cards/ex5/ex5_90.png",
  cardType: "Pokemon",
  name: "Voltrob",
  type: ["lightning"],
  stage: "Basic",
  HP: 40,
  illustrator: "Kyoko Umemoto",
  set: "Hidden Legends",
  firstAttack: {
    attackCost: ["colorless"],
    attackText:
      "Recharge - Search your deck for a Lightning Energy card and attach it to Voltorb. Shuffle your deck afterward.",
  },
  secondAttack: {
    attackCost: ["lightning", "colorless"],
    attackText: "Rolling Attack 20",
  },
  weakness: ["fighting"],
  resistence: ["noResistence"],
  retreatCost: ["colorless"],
  setNumber: ["80 / 101"],
  rare: "Common",
};
let vulpixExHiddenLegends = {
  picLink: "../img/cards/ex5/ex5_81.png",
  cardType: "Pokemon",
  name: "Vulpix",
  type: ["fire"],
  stage: "Basic",
  HP: 50,
  illustrator: "Toshinao Aoki",
  set: "Hidden Legends",
  firstAttack: { attackCost: ["colorless"], attackText: "Scratch 10" },
  secondAttack: {
    attackCost: ["fire"],
    attackText:
      "Ascension - Search your deck for a card that evolves from Vulpix and put it on Vulpix. (This counts as evolving Vulpix.) Shuffle your deck afterward.",
  },
  weakness: ["water"],
  resistence: ["noResistence"],
  retreatCost: ["colorless"],
  setNumber: ["81 / 101"],
  rare: "Common",
};
let jirachiExHiddenLegends = {
  picLink: "../img/cards/ex5/ex5_8.png",
  cardType: "Pokemon",
  name: "Jirachi",
  type: ["psychic", "steel"],
  stage: "Basic",
  HP: 70,
  illustrator: "Ryo Ueda",
  set: "Hidden Legends",
  firstAttack: {
    attackCost: ["colorless"],
    attackText:
      "Make a Wish - Search your deck for a card that evolves from 1 of your Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) If you do, put 1 damage counter on Jirachi. Shuffle your deck afterward.",
  },
  secondAttack: {
    attackCost: ["psychic", "steel"],
    attackText:
      "Mind Bend 30 - Flip a coin. If heads, the Defending Pokémon is now Confused.",
  },
  weakness: ["fire"],
  resistence: ["noResistence"],
  retreatCost: ["colorless"],
  setNumber: ["8 / 101"],
  rare: "HoloRare",
};

let collection = [
  pinsirExHiddenLegends,
  vulpixExHiddenLegends,
  ninetalesExtraExHiddenLegends,
  voltrobExHiddenLegends,
  elctrodeExHiddenLegends,
  jirachiExHiddenLegends,
];
const sortByName = (arr) => {
  arr.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

const addOl2Html = (pokemons) => {
  sortByName(pokemons);
  let list = document.querySelector("body");
  let orderedList = document.createElement("ol");
  orderedList.classList.add("pokeList");
  list.appendChild(orderedList);
  let temp = document.querySelector(".pokeList");
  for (let i = 0; i < pokemons.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = pokemons[i].name;
    temp.appendChild(listItem);
  }
};
addOl2Html(collection);
