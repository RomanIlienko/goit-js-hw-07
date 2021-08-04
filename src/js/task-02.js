const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];




const makeIngredientsList = ingredients.map(item => {
  const ingredientsListItem = document.createElement('li')
  ingredientsListItem.classList.add('list-item')
  ingredientsListItem.textContent = item
  // console.log(ingredientsListItem);

  return ingredientsListItem
})

const ingredientsListRef = document.querySelector('ul')
// console.log(ingredientsListRef);

ingredientsListRef.append(...makeIngredientsList)
