const container = document.querySelector('.grid-container');
const containerHeight = 600;
let currentPixelNum;

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let num = prompt("Enter number of pixels");
    setPixels(num);
});

const fade = document.querySelector('#fade');
fade.addEventListener('change', toggleFade);

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => setPixels(currentPixelNum));

setPixels(16);

function setPixels(num) {
    removePixels();
    currentPixelNum = num;
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
}
toggleFade();
}


function removePixels() 
{
    let pixels = document.querySelectorAll('.square');
    pixels.forEach(pixel => pixel.remove());
}

function toggleFade()
{
    let pixels = document.querySelectorAll('.square');
    if(fade.value === 'fade')
    {
        pixels.forEach(pixel => {
         pixel.addEventListener('mouseout', () => {
            pixel.classList.remove('hovering');
            pixel.classList.add('afterHover');   
        })
        });
    } else{
        pixels.forEach(pixel => {
            pixel.addEventListener('mouseout', () => {
               pixel.classList.remove('afterHover');
               pixel.classList.add('hovering');   
           })
           });
    }
}






