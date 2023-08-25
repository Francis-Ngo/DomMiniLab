// Select the H1 element
const h1Element = document.querySelector('h1');

// Select the hide button and add a click event listener
document.getElementById('hideButton').addEventListener('click', function () {
    h1Element.style.display = 'none';
});

// Select the unhide button and add a click event listener
document.getElementById('unhideButton').addEventListener('click', function () {
    h1Element.style.display = 'block';
});
