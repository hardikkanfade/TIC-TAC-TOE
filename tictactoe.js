let boxes = document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newBtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO= true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
        box.innerText="X";
        turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled = true ; 
    }
};
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled = false ; 
        box.innerText = "";
    }
};
const showWinner = (Winner) =>{
    msg.innerText =`Congratulations Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
};
const checkWinner = () =>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" &&pos2val !="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                disableBoxes();
                showWinner(pos1val);
            }
        }
    }
};

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);