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

  const stopDefAction = (evt) => evt.preventDefault();

  const onDocumentKeyUp = (evt) => {
    if (evt.code === "Escape") {
      window.rendering.removePreviewCardElement();
    }
  };
  window.support = {
    sortByPokmeonName,
    sortArray,
    stopDefAction,
    onDocumentKeyUp,
  }
})();
