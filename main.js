console.log("it's running");
let textpop = document.querySelector(".text_popup");
let container = document.querySelector(".container")

function genarateing_grids(value){
    container.style.gridTemplateColumns = `repeat(${value} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;

    for(let i = 0;i<value*value; i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover",selector)
    container.insertAdjacentElement ("beforeend",div);
    }

}
genarateing_grids(16);


function popup() {
    let value = prompt("type the num that you wanna make rows and columns of");
    if(value == ""){
        textpop.innerHTML = "type a number"
    }
    else if(value <1||value>100){
         textpop.innerHTML = "type a number higher than 0 and lower than 100 to make it work"
    }
    else{
        textpop.innerHTML= `here is your ${value}X${value} grid is ready`
        genarateing_grids(value);
    }
}

function selector(){

}