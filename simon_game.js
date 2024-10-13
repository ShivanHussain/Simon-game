let gameseq = [];
let userseq = [];

let btns =["red","yellow","purple","green"];

let h3 = document.querySelector("h3");
let started = false;
let level = 0;
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelup();
    }
});


function levelup(){
    userseq =[];
    level++;
    h3.innerText = `Level ${level}`;
    let btnidx = Math.floor( Math.random() * 4);
    let randcolor = btns[btnidx];
    let randbtn =document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    /*console.log("btnidx",btnidx);
    console.log("randcolor",randcolor);
    console.log("randbtn",randbtn);*/
    console.log("randcolor",gameseq);

    btnflash(randbtn);
}

function checkseq(idx){
  
  if(gameseq[idx] === userseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
  }
  else{
    h3.innerHTML = `Game over!!!!!!!! your score was <b>${level}</b><br>press any key to start game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white";
    },150);
    reset();
  }
  
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
 

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}
 
    


function btnpress(){
   let btn = this;
   userflash(btn);
   usercolor = btn.getAttribute("id");
   userseq.push(usercolor);
   checkseq(userseq.length - 1 );
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}