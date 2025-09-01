
// export default function one(){
//     console.log("im one");
    
// }
// export const two=()=>{
//     console.log("im two");
    
// }
// export const three=()=>{
//     console.log("im three");
    
// }


export function stroge(mydata){
    localStorage.setItem("data",mydata);
}

export function showData(){
    return localStorage.getItem("data");
}




