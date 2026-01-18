const categoriesItemEl = document.querySelectorAll('.categories-item');
console.log('Number of categories:', categoriesItemEl.length);
const categoriesItemTitleEl = document.querySelectorAll('.categories-item-title');
categoriesItemTitleEl.forEach(item => {
    console.log('Category:', item.textContent)
    console.log('Elements:', item.nextElementSibling.children.length)
})