let boxes=document.querySelectorAll(".box");
let newGameBtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=true;
const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8]
     ,[0,3,6],[1,4,7], [2,5,8], [0,4,8],[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled="true";
        checkWinner();
    });
});
const checkWinner=() =>{
     for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
     }
};
const showWinner=(winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const resetbtn=()=>{
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

// newGameBtn.addEventListener("click",resetbtn);
// const restartfun=()=>{
//     for(let box of boxes){
//         box.innerText="";
//     }
// };