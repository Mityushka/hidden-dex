// это файл, в котором будет все данные, которые мы используем

'use strict';//включаем строгий мод
//iife модуль
(() => {
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
    picLink: "swsh2/swsh2_112.png",
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
    picLink: "swsh2/swsh2_113.png",
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
    retreatCost: ["colorless", "colorless", "colorless"],
    setNumber: 113,
    rare: "rare",
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
  // функция с возвратом массива вместо массива

  const generateCollection = () => [...collection];

  window.data = {
    get: generateCollection,
  };

})();











