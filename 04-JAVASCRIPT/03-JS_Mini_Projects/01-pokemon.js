const baseURL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const container=document.querySelector('#container')

for(let i=1;i<=151;i++)
{
    const div=document.createElement('div')            //div contains img and number  and   container contains multiple div 
    div.classList.add('pokemon')
    const img=document.createElement('img')
    img.src=`${baseURL}${i}.png` 
    const span=document.createElement('span')
    span.innerText=`#${i}`
    div.appendChild(img)
    div.appendChild(span)
    container.appendChild(div)
}