import {boston} from"./boston.js";

var newboston=boston.data;
var element="";
for(let i=0;i<newboston.length;i++){
    for(let j=i+1;j<newboston.length;j++){
            if(newboston[i][11]<newboston[j][11]){
            let temp=newboston[i]
            newboston[i]=newboston[j]
            newboston[j]=temp
            }
        }
        
    }
   var store= newboston.slice(0,5)
   for(let i=0;i<5;i++)

{
    element=element+"<h1>" + store[i][8]+"</h1>"+"<h1>"+ store[i][11]+"</h1>"

}
document.getElementById("app").innerHTML=element
