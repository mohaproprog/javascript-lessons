// style

// let h1 = document.querySelector("h1");
// h1.style.color= "blue";
// h1.style.fontSize = "38px";
// h1.style.textAlign = "center";

// let pra = document.querySelector ("p");
// pra.style.margin = "50px";
// pra.style.marginTop = "0";
// pra.style.fontWeight = "600";
// pra.style.fontSize = "20px";
// pra.style.border = "1px solid green";
// pra.style.padding = "20px";
// pra.style.borderRadius ="10px 30px";
// pra.style.background = "green";
// pra.style.lineHeight = "2rem";
// pra.style.position ="relative";
// pra.style.top = "50px";


// events
let button = document.querySelector("button");
// button.addEventListener("click",()=>{
//     console.log("clicked");
// })

// button.addEventListener("mouseover",()=>{
//     console.log("clicked");
// })

// button.addEventListener("click",()=>{
//     alert("massage");
// })
// button.addEventListener("mouseover",()=>{
//     document.body.style.background = ("black");


// });

// button.addEventListener("mouseover",()=>{
//     document.body.style.background =("red")
// });
// button.addEventListener("mouseleave",()=>{
//     document.body.style.background =("yellow");
// })


// keyup
// let typing = document.querySelector("#typing");
// let clone = document.querySelector ("#clone");
// typing.addEventListener("keydown",()=>{
//     clone.innerHTML = typing.value;
//     console.log(typing)
// })

// keycode

// let typing = document.querySelector("#typing");
// let clone = document.querySelector ("#clone");
// typing.addEventListener("keyup",(event)=>{
//     console.log(event.keyCode);
    
// });

// let typing = document.querySelector("#typing");
// let clone = document.querySelector ("#clone");
// typing.addEventListener("keyup",(event)=>{
//     console.log(event.key);
    
// });

let typing = document.querySelector("#typing");
let clone = document.querySelector ("#clone");
typing.addEventListener("keyup",(event)=>{
    if (event.key == "b"){
        document.body.style.background = "black";
    }
    else if (event.keyCode == "57"){
        document.body.style.background = "red"
    };
    
});





