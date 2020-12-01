// здесь будут функции, которые отвечают за рендеринг карты на странице
'use strict'; // переводим браузер в строгий режим
//iife модуль

(() => {

  const onDocumentKeyUp = (evt) => {
    if (evt.code === "Escape") {
      removePreviewCardElement();
    }
  };

  const removePreviewCardElement = () => {
    const cardElement = document.querySelector(".preview-card"); // находим превью
    const textElement = document.querySelector(".text-element");
    const modalElement = document.querySelector(".card-grid__modal")
    if (modalElement.style.display != "none") {
      modalElement.style.display = "none";
    }
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
    let abilitiesTemplate = "";
    abilities.forEach((ability) => {
      abilitiesTemplate += `<p class="card--ability">${ability.name}-${ability.text}</p>`;
    });
    return abilitiesTemplate;
  };

  const renderAttacks = (attacks) => {
    if (!attacks) {
      return "";
    }
    let attackTemplate = "";
    attacks.forEach((attack) => {
      attackTemplate += `<p class="card--attack">cost:${attack.cost} - name:${attack.name} - power:${attack.power} - text: ${attack.text} </p>`;
    });
    return attackTemplate;
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
    const textPreviewElement = window.utility.createElementFrom(textPreviewTemplate);
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
    const previewCardElement = window.utility.createElementFrom(previewCardTemplate);
    const closeCardElement = previewCardElement.querySelector(
      ".preview-card--close"
    );
    closeCardElement.addEventListener("click", removePreviewCardElement); // обработчик на закрытие по клику
    document.addEventListener("keyup", onDocumentKeyUp); // обработчик на нажатие "ESC"
    return previewCardElement;
  };

  // фабричная функция создания превью
  const onCardClickFactory = (card) => {
    return (evt) => {
      evt.preventDefault();
      removePreviewCardElement();
      const modalElement = document.querySelector(".card-grid__modal");
      const previewCardElement = createPreviewCard(card);
      const previewTextElement = createPokemonTextPreviewCard(card);
      // const modalElement = document.querySelector(".card-grid__modal")
      document.getElementById("card-img").appendChild(previewCardElement);
      document.getElementById("card-text").appendChild(previewTextElement);
      modalElement.style.display = "block";
    };
  };

  window.cardPreview = {
    onCardClickFactory // Переписать на нормальное имя | переписать вызов и как мы вешаем обработчик

  }
})()
