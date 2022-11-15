const container = document.querySelector('.grid-container');
const containerHeight = 600;
const defaultPixelSize = 48;
let currentPixelNum;

const gridSize = document.querySelector('#grid-size');
gridSize.addEventListener('change', selectGridSize);

const toggleGrid = document.querySelector('.toggleGrid');
toggleGrid.addEventListener('click', gridToggle);
let toggled = false;

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => setPixels(currentPixelNum));

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


function draw(e) {
    if(e.type == 'mouseover' && !mouseDown) return;
    e.target.classList.add('hovering');
}


function selectGridSize()
{
    if(gridSize.value === 'largest')
    {
        setPixels(16);
    } else if(gridSize.value === 'large') {
        setPixels(32);
    } else if(gridSize.value === 'medium') {
        setPixels(48);
    } else if(gridSize.value === 'small') {
        setPixels(64);
    } else if(gridSize.value === 'smallest') {
        setPixels(100);
    }
}


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
        i.addEventListener('mouseover', draw);
        checkToggle(i);
    }
}


function gridToggle()
{
    let pixels = document.querySelectorAll('.square');
    pixels.forEach(pixel => pixel.classList.toggle('grid-lines'));
    toggled = !toggled;
}


function checkToggle(pixel) 
{
    if(toggled === false) return;
    pixel.classList.add('grid-lines');
}


function removePixels() 
{
    let pixels = document.querySelectorAll('.square');
    pixels.forEach(pixel => pixel.remove());
}


setPixels(defaultPixelSize);