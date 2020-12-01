
// здесь будут функции, которые отвечают за рендеринг карты на странице
'use strict'; // переводим браузер в строгий режим
//iife модуль

(() => {


  // функция наполнения _КНОПКИ_
  const generateLiTemplate = (card) => {
    return `<a href ="">${card.name} — HP ${card.HP} </a>`;
  };

  const createCardElement = (card) => {
    const cardElement = window.utility.createElementFrom(generateLiTemplate(card)); //наполнение _КНОПКИ_
    cardElement.addEventListener("click", window.cardPreview.onCardClickFactory(card)); // обработчик на _КНОПКУ_
    return cardElement;
  };
  // функция создания пустого элемента списка
  const generateCardDefaultLiTemplate = (inner = "") => {
    return `<li class="cards-default-list--item">${inner}</li>`;
  };
  // функция создания ордеред листа
  const generateList = (cards) => {
    const listTemplate = `<ol class="card-grid__list"></ol>`;
    const pokemonOrderedList = window.utility.createElementFrom(listTemplate);

    cards.forEach((card) => {
      const liElement = window.utility.createElementFrom(generateCardDefaultLiTemplate());
      const cardElement = createCardElement(card);
      liElement.appendChild(cardElement);
      pokemonOrderedList.appendChild(liElement);
    });

    return pokemonOrderedList;
  };



  const generateVisualTemplate = (card) => {
    return `<img src="./img/cards/${card.picLink}">`;
  };

  const generateVisualList = (cards) => {
    const newDiv = `<div class="card-grid__visual-list"></div>`
    const visualList = window.utility.createElementFrom(newDiv);

    cards.forEach(card => {
      const cardItem = generateVisualTemplate(card);
      const cardElement = window.utility.createElementFrom(cardItem);
      cardElement.addEventListener("click", window.cardPreview.onCardClickFactory(card));
      visualList.appendChild(cardElement);
    });
    return visualList;
  }


  const onChangeViewMode = (event) => {
    event.preventDefault();
    const targetInput = event.target;
    const viewMode = targetInput.value;
    if (viewMode == "list") {
      document.querySelector('.card-grid__visual-list').remove();

      const pokemonOrderedList = generateList(window.index.sortedCollection);
      document.getElementById("collection-list").appendChild(pokemonOrderedList);
    } else {
      document.querySelector('.card-grid__list').remove();

      const pokemonVisualList = generateVisualList(window.index.sortedCollection);
      document.getElementById("collection-list").appendChild(pokemonVisualList);
    }
  };


  const viewModeForm = document.querySelector('#form-view-mode');
  viewModeForm.addEventListener('change', onChangeViewMode, true);


  window.collection = {
    generate: generateList,
  }
})();
