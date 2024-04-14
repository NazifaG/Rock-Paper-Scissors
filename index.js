let firstPage = document.querySelector('.section1');
let secondPage = document.querySelector('.section2');
let play = document.querySelector('.play');
let cancel = document.querySelector('.cancel');

let youDisplay = document.querySelector('.you span');
let artintDisplay = document.querySelector('.art-intel span');
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');

let buttons = document.querySelectorAll('.buttons button');

let youPoint = 0;
let artintPoint = 0;
let winPoint = 0;
let losePoint = 0;

play.addEventListener('click', function(){
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
});

cancel.addEventListener('click', function(){
    firstPage.style.display = 'block';
    secondPage.style.display = 'none';
});

let tool = ['r','p','s'];

function getRandom(){
    let randomHand = Math.floor(Math.random() * tool.length);
    return tool[randomHand];
}

function getPoint(your, artificalInteligent){
    if((your ==='r' && artificalInteligent ==='s') || (your ==='p' && artificalInteligent ==='r') ||
        (your === 's' && artificalInteligent ==='p')){
           youPoint++;
        if(youPoint === 3){
            winPoint++;
            win.textContent = winPoint;
            resetGame()
            return;
        }
       
    } else if((your === 'r' && artificalInteligent === 'p')  ||
        (your === 'p' && artificalInteligent === 's') ||
        (your === 's' && artificalInteligent === 'r')){
            artintPoint++;
        if(artintPoint === 3){
            losePoint++;
            lose.textContent = losePoint;
            resetGame()
            return;
        }
       
    }
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let yourClick = buttons[i].textContent.toLowerCase();
        let artintClick = getRandom();
        getPoint(yourClick, artintClick);
        updateDisplay(yourClick, artintClick);
    });
}

function updateDisplay(yourClick, artintClick,){
    youDisplay.textContent = youPoint;
    artintDisplay.textContent = artintPoint;
    
    document.querySelector('.left-hand').src = `./images/${yourClick}.png`;
    document.querySelector('.right-hand').src = `./images/${artintClick}.png`;
}


function resetGame() {
    youPoint = 0;
    artintPoint = 0;
    youDisplay.textContent = youPoint;
    artintDisplay.textContent = artintPoint;
}