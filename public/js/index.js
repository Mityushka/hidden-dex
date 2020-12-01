// здесь будет вызываться выполнение всего кода
'use strict'; // переводим браузер в строгий режим
//iife модуль
(() => {

  const sortedCollection = window.utility.sortArray(window.data.get(), window.utility.sortByPokmeonName);

  const pokemonOrderedList = window.collection.generate(sortedCollection);

  document.getElementById("collection-list").appendChild(pokemonOrderedList);
  window.index = {
    sortedCollection
  }
})();
