console.log("Wlcome to Tic Tac Toe")
let turn = 'x'
let gameover  = false;

//function to change the turn
const ChangeTurn = ()=>{
    return turn ==='x'?'0': 'x'
}

//function to check for a win
const checkWin =()=>{
    let boxtexts = document.getElementsByClassName('boxtext')
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]]. innerText===boxtexts[e[1]].innerText) &&
         (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && 
         (boxtexts[e[0]].innerText !=="")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "won"
            gameover = true
            // document.querySelectortr(".line").style.transform= `translate(${e[3]}vw, ${e[4]}vw) rotate (${e[5]}deg)`
            // document.querySelectortr(".line").style.width= "20vw"
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e=>{
    let boxtext = e.querySelector('.boxtext')
    e.addEventListener('click',()=>{
        if (boxtext.innerHTML==='') {
            boxtext.innerHTML =turn;
            turn = ChangeTurn();
            checkWin();
            if ( !gameover) {
                document.getElementsByClassName('info')[0].innerHTML = 'Turn for' + turn
            }
        }
    })
})

//Add onclick listener to reset button
document.getElementById('reset').addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element=>{
        Element.innerText=""
    });
    turn ="x"
    gameover = false
    document.querySelectortr(".line").style.width= "0vw"
    document.getElementsByClassName('info')[0].innerHTML = 'Turn for' + turn
})