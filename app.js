var  array = document.body.querySelector(".array");


var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

for(var i=0; i<list.length; i++) {
    var ele = document.createElement("div");
    var nameele = document.createElement("h2");
    var ageele = document.createElement("h4");
    nameele.innerHTML = "Name: " + list[i].name;
    ageele.innerHTML = "Age: " + list[i].age;
    ele.appendChild(nameele);
    ele.appendChild(ageele);
    array.appendChild(ele);
    if(list[i].age>25){
        ele.style.color = "green"}
    }

var start = document.body.querySelector(".start");
var added = document.body.querySelector(".added");
var startnum = 5

start.innerHTML="Counter: " + startnum

function add1 (add){
    if(addone === "Add 1"){
        startnum = startnum + 1
        start.innerHTML="Counter: " + startnum
    }
}

document.body.querySelector(".button").addEventListener("click", function (){
    addone = "Add 1";
    add1 (1);
})

