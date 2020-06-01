const elctrodeExHiddenLegends = {
  picLink: "ex5/ex5_5.png",
  cardType: "Pokemon",
  name: "Electrode",
  type: ["lightning"],
  stage: "Stage 1",
  HP: 70,
  illustrator: "Kyoko Umemoto",
  set: "Hidden Legends",
  attack: [
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
  attack: [
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
  picLink: "ex5/ex5_90.png",
  cardType: "Pokemon",
  name: "Voltrob",
  type: ["lightning"],
  stage: "Basic",
  HP: 40,
  illustrator: "Kyoko Umemoto",
  set: "Hidden Legends",
  attack: [
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
  attack: [
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
  attack: [
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

const collection = [
  pinsirExHiddenLegends,
  vulpixExHiddenLegends,
  ninetalesExtraExHiddenLegends,
  voltrobExHiddenLegends,
  elctrodeExHiddenLegends,
  jirachiExHiddenLegends,
];
const sortByPokmeonName = (a, b) => {
  return a.name.localeCompare(b.name);
};
const sortArray = (array, fn) => {
  const newArray = [...array];
  newArray.sort(fn);
  return newArray;
};
sortArray(collection, sortByPokmeonName);

const renderListOfPokemon = (pokemons) => {
  const orderedList = document.createElement("ol");
  for (let i = 0; i < pokemons.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = pokemons[i].name;
    orderedList.appendChild(listItem);
  }
  return orderedList;
};
document.body.appendChild(renderListOfPokemon(collection));
