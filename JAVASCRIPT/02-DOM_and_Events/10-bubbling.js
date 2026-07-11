const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();                               //Stops the event from reaching parent elements
                                                    //or  Stops the event from bubbling to parent elements
})
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//e.stopPropagation();
// Stops the click event from bubbling up to the container.
// Without this, clicking the button would also trigger the
// container's click event,, because parents also have onclick event (check html), causing the container (and the button
// inside it) to be hidden. Once hidden, the button can't be clicked,
// so the color can't be changed until the container is shown again.


