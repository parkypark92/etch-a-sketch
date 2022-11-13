const container = document.querySelector('.grid-container');

for(let i = 1; i <= 256; i++)
{
    let i = document.createElement('div');
    i.classList.add('initialColor');
    container.appendChild(i);
    i.setAttribute('style', 'height: 50px; width: 50px;');
    i.addEventListener('mouseover', () => {
        i.classList.remove('afterHover');
        i.classList.add('hovering');
    });
    i.addEventListener('mouseout', () => {
        i.classList.remove('hovering');
        i.classList.add('afterHover');

    });
}











//generate a certain number of squares to fill grid-container