const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const h2 = document.querySelector('h2')
const valorMax = document.querySelector('#valorMax')

let pont1 = 0;
let pont2 = 0;
let pontWin = 5;
let isGameOver = false;


b1.addEventListener('click', function () {
    if (!isGameOver) {
        pont1 += 1;
        if(pont1 === pontWin){
            isGameOver = true
        }
        h2.innerHTML = `O jogo está ${pont1} a ${pont2}`
    }
})

b2.addEventListener('click', function () {
    if (!isGameOver) {
        pont2 += 1;
        if(pont2 === pontWin){
            isGameOver = true
        }
        h2.innerHTML = `O jogo está ${pont1} a ${pont2}`
    }
})

valorMax.addEventListener('change', function(){
    pontWin = parseInt(this.value)
    reset();
})


b3.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    pont1 = 0;
    pont2 = 0;
    h2.innerHTML = `O jogo está ${pont1} a ${pont2}`
}
