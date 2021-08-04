// const categoryList = document.querySelector('ul')
// console.log(categoryList.length);

const categoryItem = document.querySelectorAll('li.item')
// console.log(categoryItem.length);
console.log(`В списке ${categoryItem.length} категории.`);

const itemsEl = document.querySelectorAll('.item')
// console.log(itemsEl);
itemsEl.forEach(function (item) {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
})