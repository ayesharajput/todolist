// function addtodo(){
//     var input = document.getElementById("input")

// }
// var liElement = document.createElement("li");
// var litext = document.createTextNode(input.value);
// liElement.appendChild(litext)


// // ***************************delete
// var delbtn = document.createElement("button");
// var delbtntext = document.createTextNode("Delete");
// delbtn.appendChild(delbtn);

var data = {
    name : "ayesha ",
    age : "21",
    email : "aisha@gmail.com",
    getEmail : function (){
        return this.email
        
    },
    
}
data.course= "html";
data.languages= ["js","python "];
data.languages.push("css","reactjs");
data.value = prompt("enter value")

console.log(data.getEmail ())
console.log(data)
console.log(data.value)










































