/*
KEYBOARD
*/
var number;
var operator;
var equal;
var del;
var reset;
var dot;

/*
TOGGLE THEME
*/
var toggle;

/* 
DISPLAY
*/
var mostrar = [];


/**
 * desc
 * The function change the stylesheet linked in the 
 * html head when the user click the button
 * @date 2023-03-22
 */
function themes() {
  toggle = document.getElementById("toggle");
  let css = document.getElementById("css");
  console.log(css);
  // toggle.addEventListener("click", () => {
  //   if (css.href == "http://127.0.0.1:5500/CSS/style.css") {
  //     css.href = "/CSS/theme2.css";
  //     console.log(css);
  //   } else if (css.href == "http://127.0.0.1:5500/CSS/theme2.css") {
  //     css.href = "/CSS/theme3.css";
  //     console.log(css.href);
  //   } else if (css.href == "http://127.0.0.1:5500/CSS/theme3.css") {
  //     css.href = "/CSS/style.css";
  //     console.log(css.href);
  //   }
  // });
  toggle.addEventListener("click", () => {
    if (css.href == "/CSS/style.css") {
      css.href = "/CSS/theme2.css";
      console.log(css);
    } else if (css.href == "/CSS/theme2.css") {
      css.href = "/CSS/theme3.css";
      console.log(css.href);
    } else if (css.href == "/CSS/theme3.css") {
      css.href = "/CSS/style.css";
      console.log(css.href);
    }
  });
}

/**
 * desc
 * Is the function that goes through the class "number"
 * and log the number that was press
 * @date 2023-03-22
 */
function numbers(){
  number = document.querySelectorAll(".number");
  for(let i = 0; i < number.length; i++){
    //console.log(number[i]);
    let numberX = number[i];
    numberX.addEventListener("click", () => {
      console.log(numberX.value);
      display(numberX.value);
    })
  }
}

/**
 * desc
 * Makes the same as the function before but with
 * the operator symbols
 * @date 2023-03-22
 */
function operators(){
  operator = document.querySelectorAll(".operator");
  for(let i = 0; i < operator.length; i++){
    console.log(operator[i]);
    let operatorY = operator[i];
    operatorY.addEventListener("click", () => {
      console.log(operatorY.value);
      display(operatorY.value);
    })
  }
}

/**
 * desc
 * Detect when the user press the button
 * @date 2023-03-22
 */
function dotButton(){
  dot = document.querySelector(".dot");
  dot.addEventListener("click", () => {
    console.log(dot.value);
    display(dot.value);
  })
}

// function equalButton(){
//   equal = document.querySelector("#equal");
//   equal.addEventListener("click", () => {
//     console.log(equal.value);
//     display(equal.value);
//   })
// }

/**
 * desc
 * Is the function that make the operation
 * to do this have to detect when the user press the equal
 * button, then search the label where we show all and
 * then calls the function eval to kwnow which operation
 * it should do. Last shows the result
 * @date 2023-03-22
 */
function equalButton(){
  equal = document.querySelector("#equal");
  equal.addEventListener("click", () => {
    let currentDisplay = document.querySelector(".show").innerHTML;
    let result = eval(currentDisplay); // evaluate expression
    if(result != undefined){
      document.querySelector(".show").innerHTML = result; // display result
      mostrar.push(result); // add result to array of previous calculations
      console.log(mostrar);
    }
  })
}

/**
 * desc
 * Detect the buttons "delete" to erase one element
 * and "reset" to erase all
 * @date 2023-03-22
 */
function delReset(){
  del = document.querySelector(".del");
  reset = document.querySelector(".reset");
  
  del.addEventListener("click", () => {
    console.log(del.value);
    display("del");
  })
  
  reset.addEventListener("click", () => {
    console.log(reset.value);
    display("reset");
  })
}

/**
 * desc
 * Depending on the element that it received shows one thing 
 * or other at the display label
 * @date 2023-03-22
 * @param { * } element
 */
function display(element){
  let currentDisplay = document.querySelector(".show").innerHTML;
  if(element === "del"){
    document.querySelector(".show").innerHTML =  currentDisplay.slice(0, -1);
  }
  else if(element === "reset"){
    document.querySelector(".show").innerHTML =  "";
  }
  else if(element != "+" && element != "-" 
  && element != "*" && element != "/" 
  && element != "=" && element != "."){
    document.querySelector(".show").innerHTML = currentDisplay + element;
  }
  else{
    mostrar.push(currentDisplay);
    console.log(mostrar);
    document.querySelector(".show").innerHTML = currentDisplay + element;
  }
  console.log(currentDisplay);
}

//FUNCTION CALLING
themes();
numbers();
operators();
dotButton();
equalButton();
delReset();
