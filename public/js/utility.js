// здесь будут все вспомогательные функции
'use strict'; // переводим браузер в строгий режим
//iife модуль

(() => {

  const sortByPokmeonName = (a, b) => {
    return a.name.localeCompare(b.name);
  };

  const sortArray = (array, fn) => {
    const newArray = [...array];
    newArray.sort(fn);
    return newArray;
  };

  const createElementFrom = (template) => {
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = template.trim();
    return temporaryElement.firstChild;
  };


  window.utility = {
    sortByPokmeonName,
    sortArray,
    createElementFrom,
  }
})();
