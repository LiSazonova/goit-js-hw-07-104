const list = document.getElementById('categories');
const elements = document.querySelectorAll('.item');

console.log(`Number of categories: ${elements.length}`);

elements.forEach((element) => {
    const title = element.querySelector('h2').textContent;
    const elementsCount = element.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});
