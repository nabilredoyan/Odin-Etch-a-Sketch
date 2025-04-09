console.log("it's running");
let color = "black"
let textpop = document.querySelector(".text_popup");
let container = document.querySelector(".container");


let mode ="mouseover"

function select_mode(newmode){
    mode = newmode;
    genarateing_grids(gridcount);
}

let gridcount = 16;

function genarateing_grids(value){

    container.style.gridTemplateColumns = `repeat(${value} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    gridcount = value;
    container.innerHTML = "";

    for(let i = 0;i<value*value; i++){
    let div = document.createElement("div");
    if(mode =="click"){

        div.addEventListener("click",selector)
    }
    else{
        div.addEventListener("mouseover",selector)

    }

    container.insertAdjacentElement ("beforeend",div);
    }

}
genarateing_grids(gridcount);


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
    if (color=="random"){
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        
            let x=  `rgb(${r},${g},${b})`
            this.style.backgroundColor = x;

    }
    else{
        this.style.backgroundColor = "black"

    }
}

function reset_func(){
    let divCollection = document.querySelectorAll(".container div")
    divCollection.forEach(e=> {
        e.style.backgroundColor="white"
    });
}

