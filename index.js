let images=[
    "dice-1.png",
    "dice-2.png",
    "dice-3.png",
    "dice-4.png",
    "dice-5.png",
    "dice-5.png"
];



console.log(img1);


    let button=document.querySelector("button");

    button.addEventListener("click",()=>{
        let r1Num=Math.floor(Math.random)*6;
        let r2Num=Math.floor(Math.random)*6;
    
        let img1=document.querySelector("#die1");
        let img2=document.querySelector("#die2");
    
        img1.setAttribute("src",images[r1Num]);
    img2.setAttribute("src",images[r2Num]);
    })
   
