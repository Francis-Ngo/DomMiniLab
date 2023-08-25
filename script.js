
const h1Element = document.querySelector('h1');

document.getElementById('hideButton').addEventListener('click', function () {
    h1Element.style.display = 'none';
});

document.getElementById('unhideButton').addEventListener('click', function () {
    h1Element.style.display = 'block';
});
