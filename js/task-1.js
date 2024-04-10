const categories = document.querySelectorAll('.item');

const numberCategories = categories.length;
console.log(`Number of categories: ${numberCategories}`);


categories.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`);
    const items = category.querySelectorAll('ul li');
    console.log(`Elements ${items.length}`);
 }
)