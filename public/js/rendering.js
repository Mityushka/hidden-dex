// здесь будут функции, которые отвечают за рендеринг элементов на странице
'use strict'; // переводим браузер в строгий режим
//iife модуль

(() => {
  const createElementFrom = (template) => {
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = template.trim();
    return temporaryElement.firstChild;
  };

  const removePreviewCardElement = () => {
    const cardElement = document.querySelector(".preview-card"); // находим превью
    const textElement = document.querySelector(".text-element");
    if (cardElement) {
      // если существует -> удаляем и подчищаем обработчик
      cardElement.remove();
      document.removeEventListener("keyup", window.support.onDocumentKeyUp);
      document.body.classList.remove("card-here");
    }
    if (textElement) {
      // если существует -> удаляем и подчищаем обработчик
      textElement.remove();
      document.removeEventListener("keyup", window.support.onDocumentKeyUp);
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
          ${window.rendering.renderAbility(card.abilities)}
          ${window.rendering.renderAttacks(card.attacks)}
          <p class="card--illustrator">Illustrator: ${card.illustrator}</p>
          <p class="card--set">Set: ${card.set}</p>
          <p class="card--weakness">Weakness: ${card.weakness}</p>
          <p class="card--resistence">Resistence: ${card.resistence}</p>
          <p class="card--retreat-сost">Retreat cost: ${card.retreatCost}</p>
          <p class="card--set-number">Set Number: ${card.setNumber}</p>
          <p class="card--rarity">Rarity: ${card.rare}</p>
        </div>
      `;
    const textPreviewElement = window.rendering.createElementFrom(textPreviewTemplate);
    return textPreviewElement;
  };

  // функция создания превью
  const createPreviewCard = (card) => {
    const previewCardTemplate = `
        <div class="preview-card">
          <p>${card.name} <button class="preview-card--close">Close</button></p>
          <img src="./img/cards/${card.picLink}">
        </div>
      `; // непосредственно превьюшка(с кнопкой) |
    const previewCardElement = window.rendering.createElementFrom(previewCardTemplate);
    const closeCardElement = previewCardElement.querySelector(
      ".preview-card--close"
    );
    closeCardElement.addEventListener("click", window.rendering.removePreviewCardElement); // обработчик на закрытие по клику
    document.addEventListener("keyup", window.support.onDocumentKeyUp); // обработчик на нажатие "ESC"
    return previewCardElement;
  };

  // функция наполнения _КНОПКИ_
  const generateCardTemplate = (card) => {
    return `<a href ="">${card.name} — HP ${card.HP} </a>`;
  };

  // фабричная функция создания  превью
  const onCardClickFactory = (card) => {
    return () => {
      window.rendering.removePreviewCardElement();
      const previewCardElement = window.rendering.createPreviewCard(card);
      const previewTextElement = window.rendering.createPokemonTextPreviewCard(card);
      document.getElementById("card-img").appendChild(previewCardElement);
      document.getElementById("card-text").appendChild(previewTextElement);
      document.body.classList.add("card-here");
    };
  };

  // функция создания _КНОПКИ_
  const createCardElement = (card) => {
    const cardElement = window.rendering.createElementFrom(window.rendering.generateCardTemplate(card)); //наполнение _КНОПКИ_
    cardElement.addEventListener("click", window.support.stopDefAction);
    cardElement.addEventListener("click", window.rendering.onCardClickFactory(card)); // обработчик на _КНОПКУ_
    return cardElement;
  };

  // функция создания пустого элемента списка
  const generateCardDefaultLiTemplate = (inner = "") => {
    return `<li class="cards-default-list--item">${inner}</li>`;
  };

  // функция создания ордеред листа
  const generateList = (cards) => {
    const listTemplate = `<ol class="cards-default-list"></ol>`;
    const pokemonOrderedList = window.rendering.createElementFrom(listTemplate);

    cards.forEach((card) => {
      const liElement = window.rendering.createElementFrom(window.rendering.generateCardDefaultLiTemplate());
      const cardElement = window.rendering.createCardElement(card);
      liElement.appendChild(cardElement);
      pokemonOrderedList.appendChild(liElement);
    });

    return pokemonOrderedList;
  };
  window.rendering = {
    createElementFrom,
    removePreviewCardElement,
    renderAbility,
    renderAttacks,
    createPokemonTextPreviewCard,
    createPreviewCard,
    generateCardTemplate,
    onCardClickFactory,
    createCardElement,
    generateCardDefaultLiTemplate,
    generateList
  };
})()
