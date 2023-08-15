const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

let x = 0
let y = 0
let z = 0

btn.addEventListener('click', function(){
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = (`rgb(${x}, ${y}, ${z})`);
})

const makeRandomColor = () => {
    x = Math.floor(Math.random() * 255);
    y = Math.floor(Math.random() * 255);
    z = Math.floor(Math.random() * 255);
    return `rgb(${x}, ${y}, ${z})`;
}
