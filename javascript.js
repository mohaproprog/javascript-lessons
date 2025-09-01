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
// let button = document.querySelector("button");
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

// let typing = document.querySelector("#typing");
// let clone = document.querySelector ("#clone");
// typing.addEventListener("keyup",(event)=>{
//     if (event.key == "b"){
//         document.body.style.background = "black";
//     }
//     else if (event.keyCode == "57"){
//         document.body.style.background = "red"
//     };
    
// });

// console.log("hello world");

// let button = document.querySelector("button");
// button.addEventistener ("mouseover",()=>{
//     alert("waan jeclahay js");
// });

// let button = document.querySelector("button");
// button.addEventListener("click",()=>{
//     console.log("clicked");
// });

// console.log ("hello world");


// let typing = document.querySelector("#typing");
// let clone = document.querySelector("#clone");
// typing.addEventListener("click",(event)=>{
//     if (event.click ==){
//         document.body.style.background =("green");
//         console.log("your background is green");
//     }
//     else if (event.click == "click"){
//         document.body.style.background = "yellow";
//         console.log("your background is yellow");
//     }

// })

// let request = new XMLHttpRequest();

// request.addEventListener("readystatechange",()=>{
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);
        
//     }else if(request.readyState ==4){
//         console.error("there is something");
        
//     }
    
// });

// // get  post  put
// request.open('get','https://jsonplaceholder.typicode.com/posts/1');

// request.send();


// // closure

// // function in function
// function counter(){
//     let count = 0;
//     return function(){
//        if (count <10){
//         count = count +1;
//         return count;
//        }
//     }
// }

// const newcounter = counter();
// console.log(newcounter());
// console.log(newcounter());
// console.log(newcounter());



// CALL BACK FUNCTION
// const food =['bariis','baassto','canjero','malawax'];

// firstOne = (array,callback)=>{     //higher order function
//     callback(array[0]);

// }
// firstOne (food,(firstItem)=>{
//     console.log(firstItem);

// });

// another example of cb

// function first(cb){
//     setTimeout(function(){
//         console.log(1);
//         cb();
        
//     },2000) 
    
// };
// function second(){
//     console.log(2);
    
// };


// first(second);

// function sum (n1,n2,n3){
//     return n1+n2-n3;

// }

// function result (n1){
//     console.log(`the result is ${n1}`);
// };
// // console.log(sum(2,3));
// result(sum(29,30,20));

// advanced array
// map
// let countries =[
//     { "country":"somalia","city":"mogadishu","population":900},
//     { "country":"uk","city":"london","population":800},
//     { "country":"usa","city":"washintong","population":700},
//     { "country":"japan","city":"tokyo","population":600},
// ]

// const largeCountries =[];
// for (i = 0; i<countries.length; i ++){
//     if (countries[i].population=<800){
//         largeCountries.push(countries[i]);
//     }
// }

// filtering = countries.filter((pop)=>{
//     return pop.population >=800;
// })
// console.log(filtering);


// const countryCity = countries.map((newArry)=>{
//     return{"country":newArry.country, "population":newArry.population}

// });

// console.log(countryCity);




// class in js
// class user{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     details(){
//         return `name: ${this.name}, email: ${this.email}`
//     }
// }

// let farah = new user ("farah","yayahah@yahoo.com");

// console.log(farah.details());

// class Admin extends user {
//     constructor(name,email,role){
//         super(name,email);
//         this.role = role;
    
//     }
//     AdminDetails() {
//         return `name: ${this.name}, email: ${this.email}, role: ${this.role}`
//     }
// };
// let hamdi = new Admin ("hamdi","hamdi@gmail.com","admin");
// console.log(hamdi.AdminDetails());
// let farah2 = new user ("farah","yayahah@yahoo.com");
// console.log(farah2.details());



// Promise = balan
// asynchoronous = wax aan isku mar dhacayn (not simultanious)
// .then and .catch 

// let promise = new Promise (function (resolve, reject){
//     setTimeout(() => {
//        resolve("waan waayayy") 
        
//     },4000);
// })

// promise.then( rsult =>{
//     alert(rsult);
// }).catch(error=>{console.error(error);
// })

// let countries =[
//     { "country":"somalia","city":"mogadishu","population":900},
//     { "country":"uk","city":"london","population":800},
//     { "country":"usa","city":"washintong","population":700},
//     { "country":"japan","city":"tokyo","population":600},
// ]


// countries.forEach(country=>{
//     const coutryname = country.population==700;
//     console.log(coutryname);
    
// })
// const filterresult =countries.filter(country=>{
//     return country.population >= 700;
    
    
    
// })

// console.log(wow);

// const mappingresult = countries.map(cmap=>{
//      return cmap.population -700;
// })

let countries =[
    { "country":"somalia","city":"mogadishu","population":300},
    { "country":"uk","city":"london","population":200},
    { "country":"usa","city":"washintong","population":100},
    { "country":"japan","city":"tokyo","population":100},
]

// console.log(mappingresult);
// const mappingresult = countries.map((cmap)=>{
//     return cmap.population ;
// })

// console.log(mappingresult);



// let reduceresult = mappingresult.reduce((post,post2)=>{
//     return post +post2;

// })

// console.log(reduceresult);


// function upp(n){
//     return n.toUpperCase();
// }

// function getname (name,callback){
//     return callback(name)

// }

// console.log(getname("ali",upp));


// function add(a,b){
//     return a+b;
// }

// function subs(a,b){
//     return a-b;
// }

// function mult(a,b){
//     return a*b;
// }

// function callback(num1,num2,operator){
//     return operator(num1,num2)
// }

// console.log(callback(2,3,add));
// console.log(callback(2,3,mult));
// console.log(callback(2,3,subs));

// peomise()

// const promise = new Promise((resolve,reject)=>{
//     const error = false;
//     if(error == false

//     ){
//         resolve("your promise resolved")
//     }
//     else{
//         reject("your promise rejected")
//     }
// })

// // promise.then(value=>{
// //     return value + " now"
// // })
// // .then(value2=>{
// //     console.log(value2);
    
// // }).catch(err=>{
// //     console.error(err);
    
// // })


// const myprom = new Promise((resolve,reject)=>{

// setTimeout(()=>{
//     const error = false;
//     if(error == false){
//         resolve("your promise resolved")
//     }
//     else{
//         reject("your promise rejected")
//     }

//     },3000)
// })

// myprom.then(value=>{
//     return value + " first"
// })
// .then(value2=>{
    
//     console.log(value2);
// })
    
// promise.then(value=>{
//     return value + " later"
// })
// .then(value2=>{
    
//     console.log(value2);
// })
    

// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>{
//     return res.json();
// })
// .then(data=>{
//     data.map(user => {
//         console.log(user);
        
        
//     });
    
// })
// console.log(users);


// async / await

// async function mycoolFunction() {
    
// }
// const myUsers = {
//     userList:[]

// }
// const mycoolFunction = async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonusersdata = await response.json();
//     const userEmail = jsonusersdata.map(user=>{
    
//         return user.email
//     })
//     postToWebPage(userEmail);

// }

// const postToWebPage = (data)=>{
//     console.log(data);
    
// }

// mycoolFunction();

// const anotherFun = async ()=>{
//     const data = await mycoolFunction();
//     myUsers.userList = data;
    
// }
// anotherFun();

// console.log(myUsers.userList);


// --second pramerter of async
const jokeobject = {
    id:100,
    joke: "im funny because i made you happy"
}
const postdata= async(jokeobj)=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        method : "POST",
        headers :{
            // accept:"text/plain"
            "content-type": "application/json"
        },
        body: JSON.stringify(jokeobj)

    });
    const dadjoke = await response.json();
    console.log(dadjoke);
    
    
    
}

postdata(jokeobject);






