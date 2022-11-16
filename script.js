const container = document.querySelector('.grid-container');
const containerHeight = 600;
const defaultPixelSize = 48;
let currentPixelNum;

const gridSize = document.querySelector('#grid-size');
gridSize.addEventListener('change', selectGridSize);

const rainbow = document.querySelector('.rainbow');
let rainbowSet = false;
rainbow.addEventListener('click', applyRainbow);


const toggleGrid = document.querySelector('.toggleGrid');
toggleGrid.addEventListener('click', gridToggle);
let toggled = true;

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => setPixels(currentPixelNum));

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;


function draw(e) {
    if(e.type == 'mouseover' && !mouseDown) return;
    if(rainbowSet === false)
    {
    e.target.style.background = "rgb(0, 197, 197)";
    } else {
        e.target.style.background = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    }
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
    if(toggled === false)
    {
        toggleGrid.style.color = 'rgba(0, 0, 0, 0.460)';
    } else {
        toggleGrid.style.color = 'rgba(0, 0, 0)';

    }
}


function checkToggle(pixel) 
{
    if(toggled === false) return;
    pixel.classList.add('grid-lines');
}


function applyRainbow() 
{
    rainbowSet = !rainbowSet
    if(rainbowSet === true)
    {
        rainbow.classList.add('rainbow-color');
    } else {
        rainbow.classList.remove('rainbow-color');
    }
}


function removePixels() 
{
    let pixels = document.querySelectorAll('.square');
    pixels.forEach(pixel => pixel.remove());
}


function randomNumber()
{
    return Math.floor(Math.random() * ((255 - 10) + 1)) + 10;
}


function initialize() {
    setPixels(defaultPixelSize);
    gridToggle();
}
initialize();
