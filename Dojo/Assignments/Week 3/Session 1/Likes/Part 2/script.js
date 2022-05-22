var likes =[9,12,9];
var p = [
    document.querySelector("#count1"),
    document.querySelector("#count2"),
    document.querySelector("#count3")
];

function like(id){
    likes[id]++;
    p.innerHTML = likes[id] +"like(s)";
}