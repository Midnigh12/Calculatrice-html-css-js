const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const specialchart = ["%","*","/","+","-","="]
let output = ""

const calculate = (btnvalue)=>{
               display.focus();

               if(btnvalue === "=" && display.value !== "")
               {
                display.value= eval(display.value.replace("%","/100"));
               }
               else if( btnvalue === "AC"){
                display.value = "";
               }
               else if (btnvalue === "DEL"){
                display.value = display.value.toString().slice(0,-1);
               }
               else if(display.value ==="" && specialchart.includes(btnvalue)){return}
               else{display.value +=btnvalue;}
               };


buttons.forEach(button => {button.addEventListener("click",(e)=>{
              calculate(e.target.dataset.value)})});