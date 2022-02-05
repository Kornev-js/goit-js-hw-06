"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const ulList = document.getElementById("ingredients");
const allIngredients = ingredients.map(ingredient => {
  const list = document.createElement("li");
  list.classList.toggle("item")
  list.innerHTML = ingredient;
  return list;
});

ulList.append(...allIngredients)


//если не так, то я не знаю, что от меня требуется:)