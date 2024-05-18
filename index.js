let images=[
    "dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-6.png"
];
const audio1=new Audio("sound-1.wav");
const audio2=new Audio("sound-2.wav");
const audio3=new Audio("sound-2.wav");
let dice=document.querySelectorAll("img");

const hButton=document.getElementById("help");

hButton.addEventListener("click",()=>{
    const textArr=document.getElementById("textArea1");
  textArr.classList.toggle("newText");
})
function noChange(){
    audio2.play();
    alert("You Have to Click Yes If You Want to Paly..");
}
function roll(){
    dice.forEach((die)=>{
        die.classList.add("shake");
        // audio1.play();
    });
    setTimeout(() => {
        dice.forEach((die)=>{
            die.classList.remove("shake");
        });


        
        let dice1val=Math.floor(Math.random()*6);
        let dice2val=Math.floor(Math.random()*6);
        let dice3val=Math.floor(Math.random()*6);
        console.log(dice1val,dice2val,dice3val);
        document.querySelector("#die-1").setAttribute("src",images[dice1val]);
        document.querySelector("#die-2").setAttribute("src",images[dice2val]);
        document.querySelector("#die-3").setAttribute("src",images[dice3val]);
        if(dice1val>dice2val && dice1val>dice3val){
            document.querySelector("#total").innerHTML="Player 1 win";
            audio2.play();
        }
        else if(dice2val>dice3val && dice2val>dice1val){
            document.querySelector("#total").innerHTML="Player 2 Win";
        }
        else if(dice1val==dice2val && dice1val>dice3val && dice2val>dice3val){
            document.querySelector("#total").innerHTML="Player 1 and 2 Win";
        }
        else if(dice2val==dice3val && dice2val>dice1val && dice3val>dice1val){
            document.querySelector("#total").innerHTML="Player 2 and 3 Win";
        }
        else if(dice1val==dice3val && dice1val>dice2val && dice3val>dice2val){
            document.querySelector("#total").innerHTML="Player 2 and 3 Win";
        }
        else if(dice3val>dice1val && dice3val>dice2val){
            audio1.play();
            document.querySelector("#total").innerHTML="Player 3 Win";
        }
        else if(dice1val==dice2val && dice2val==dice3val && dice3val==dice1val){
            document.querySelector("#total").innerHTML="Match Tie play a Rematch ";
        }
    }, 1000);
}
