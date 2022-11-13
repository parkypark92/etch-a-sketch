const container = document.querySelector('.grid-container');
const containerHeight = 800;
setPixels(16);
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let num = prompt("Enter number of pixels");
    setPixels(num);
});


function setPixels(num) {
    removePixels();
    let pixelSize = containerHeight / num;
    let numberOfPixels = num * num;

for(let i = 1; i <= numberOfPixels; i++)
{
    let i = document.createElement('div');
    i.classList.add('initialColor');
    i.classList.add('square');
    container.appendChild(i);
    i.setAttribute('style', `height: ${pixelSize}px; width: ${pixelSize}px;`);
    i.addEventListener('mouseover', () => {
        i.classList.remove('afterHover');
        i.classList.add('hovering');
    });
    i.addEventListener('mouseout', () => {
        i.classList.remove('hovering');
        i.classList.add('afterHover');

    });
}
}


function removePixels() 
{
    const pixels = document.querySelectorAll('.square');
    pixels.forEach(pixel => pixel.remove());
}










