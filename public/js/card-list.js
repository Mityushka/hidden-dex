
// здесь будут функции, которые отвечают за рендеринг карты на странице
'use strict'; // переводим браузер в строгий режим
//iife модуль

(() => {

  // функция наполнения _КНОПКИ_
  const generateCardTemplate = (card) => {
    return `<a href ="">${card.name} — HP ${card.HP} </a>`;
  };

  const createCardElement = (card) => {
    const cardElement = window.utility.createElementFrom(generateCardTemplate(card)); //наполнение _КНОПКИ_
    cardElement.addEventListener("click", window.cardPreview.onCardClickFactory(card)); // обработчик на _КНОПКУ_
    return cardElement;
  };
  // функция создания пустого элемента списка
  const generateCardDefaultLiTemplate = (inner = "") => {
    return `<li class="cards-default-list--item">${inner}</li>`;
  };
  // функция создания ордеред листа
  const generateList = (cards) => {
    const listTemplate = `<ol class="cards-default-list"></ol>`;
    const pokemonOrderedList = window.utility.createElementFrom(listTemplate);

    cards.forEach((card) => {
      const liElement = window.utility.createElementFrom(generateCardDefaultLiTemplate());
      const cardElement = createCardElement(card);
      liElement.appendChild(cardElement);
      pokemonOrderedList.appendChild(liElement);
    });

    return pokemonOrderedList;
  };

  window.collection = {
    generate: generateList,
  }
})();
