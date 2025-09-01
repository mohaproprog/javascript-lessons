// date(year,month,day,hour,minute,second,ms)
// const date = new Date(2023,6,18,7,0,0);
// console.log(date);

// const date = new Date("2023-07-18T06:00:00Z");
// const year  = date.getFullYear();
// const month  = date.getMonth() +1;
// const day  = date.getDate();
// const hour  = date.getHours();
// const minute  = date.getMinutes();
// const second  = date.getSeconds();
// const ms  = date.getMilliseconds();
// const dayoftheweek  = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(ms);
// console.log(dayoftheweek);
// console.log(date);

// const date =  new Date();
// date.setFullYear(2023);
// date.setMonth(6);

// if (date.getFullYear() == 2023){
//     console.log("wow");
    
// }
// else{
//     console.log("no");
    
// }

// const date1 = new Date ("2023-12-31");
// const date2 = new Date ("2024-1-1");

// if(date1 < date2){
//     console.log(`happy new year, it's ${date2.getFullYear()}`);
    
// }
// else{
//     console.log(`you,re still in ${date1.getFullYear()}` );
    
// }



// json practise
// const myobject ={
//     name: "ali",
//     hobbies:["eat","play","music"],
//     hello:function(){
//         console.log("hello world");

//     }


// }

// console.log(myobject);
// console.log(myobject.name);
// console.log(myobject.hobbies);
// myobject.hello();

// const sendjson = JSON.stringify(myobject);
// console.log(sendjson);
// console.log(sendjson.name);

// const receiveJson = JSON.parse(sendjson);
// console.log(receiveJson);


// const view2 = document.querySelector(".veiw");
// const div = view2.querySelector("div");
// const h2 = div.querySelector("h2");



// function dosomething(){
//     alert("do something");
// }
// h2.addEventListener("click",dosomething,false);
// h2.removeEventListener("click",dosomething,false);

// h2.addEventListener("click",(e)=>{
    
//     if(e.target.parentElement.style.background == "blue"){
//         e.target.parentElement.style.background = "yellow"
//     }
//     else{
//         e.target.parentElement.style.background = "blue";

//     }

    
// })
// const view2 = document.querySelector(".veiw");
// const div = view2.querySelector("div");
// const h2 = div.querySelector("h2");

// document.addEventListener("readystatechange",(e)=>{
//     if(e.target.readyState === "complete"){
//         console.log("readyState is complete");
//         initApp();
        
//     }


// });

// function initApp(){
//     view2.addEventListener("click",(e)=>{
        
//         view2.style.background = "blue";

//     });
//     div.addEventListener("click",(e)=>{
//         e.stopPropagation();
//         div.style.background = "yellow";

//     });
//     h2.addEventListener("click",(e)=>{
        
//         e.target.style.background ="green"
//         e.target.textContent = "clicked";

//     });

    

// }



// localStorage and sessionStorage

// sessionStorage
const mylist = ["a","b","c"];
const myobject ={
    name: "ali",
    hobbies:["eat","play","music"],
    hello:function(){
        console.log("hello world");

    }


};




// sessionStorage.setItem("mySessionStroge",JSON.stringify(mylist));
// const getSessionStroge = JSON.parse(sessionStorage.getItem("mySessionStroge"));
// console.log(getSessionStroge);

// localStorage
// localStorage.setItem("myLocalStroge",JSON.stringify(mylist));
// // localStorage.removeItem("myLocalStroge"); removeItem
// const key = localStorage.key(0);
// const length = localStorage.length;
// const getSessionStroge = JSON.parse(localStorage.getItem("myLocalStroge"));
// console.log(getSessionStroge);
// console.log(key);
// console.log(length);


// localStorage practise



import {stroge,showData} from "./module.js";


const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");
div.innerText = showData();
console.log(showData());

button.addEventListener("click",()=>{
    const iv = input.value;
    stroge(iv);
    div.textContent = showData();
    showData();
    

    
    
});









// module practise

// import wow from "./module.js"
// import {two as labo} from "./module.js"

// wow();
// labo();

















