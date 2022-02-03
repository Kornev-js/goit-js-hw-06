"use strict";

//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).



const allCategories = document.querySelectorAll('.item')
console.log(`Number of elements: ${allCategories.length}`)

const categoriesArray = [...allCategories]
  .map(
    categories => `Categorie: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);
