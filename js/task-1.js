// const categoriesItemEl = document.querySelectorAll('.categories-item');
// console.log('Number of categories:', categoriesItemEl.length);
// const categoriesItemTitleEl = document.querySelectorAll('.categories-item-title');
// categoriesItemTitleEl.forEach(item => {
//     console.log('Category:', item.textContent)
//     console.log('Elements:', item.nextElementSibling.children.length)
// })

const categoriesEl = document.querySelectorAll('#categories .item')
    console.log('Number of categories:', categoriesEl.length)
categoriesEl.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const item = category.querySelectorAll('ul li');

    console.log('Category:', title)
    console.log('Elements:', item.length)
})