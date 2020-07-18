// здесь будет вызываться выполнение всего кода
'use strict'; // переводим браузер в строгий режим
//iife модуль
(() => {
  window.support.sortArray(collection, window.support.sortByPokmeonName);

  const pokemonOrderedList = window.rendering.generateList(collection);

  document.getElementById("collection-list").appendChild(pokemonOrderedList);
})()
