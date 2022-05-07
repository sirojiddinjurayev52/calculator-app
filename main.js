let input = document.getElementById("screen");
let selectedAmal = "";
let numberOne = 0;
let selectedAmalOriginal = "";


function addNumber(number) {
    console.log(number);


    if (input.value.indexOf('.') !== -1 && number === '.'){

    }else {
        if (input.value === "0" && number != '.' || selectedAmal.length > 0){
            input.value = number;
            selectedAmal = "";
        }else {
            input.value += number
        }
    }
}

function action(amal) {
    selectedAmal = amal;
    selectedAmalOriginal = amal;
    numberOne = input.value;
}

function equal() {
    let numberTwo = input.value;
    let result = 0;

    if (selectedAmalOriginal === 'add'){
        result = parseFloat(numberOne) + parseFloat(numberTwo);
    }else if (selectedAmalOriginal ==='minus'){
        result = numberOne - numberTwo;
    }else if (selectedAmalOriginal === 'multiply'){
        result = numberOne * numberTwo;

    }else if (selectedAmalOriginal === 'divide'){
        result = numberOne / numberTwo;
    }
    input.value = result;
}

function plusMinus(action){
    let result=0;
    selectedAmal = action;
    selectedAmalOriginal=action;
    numberOne=input.value;
    if (selectedAmalOriginal==='plus-minus'){
        result=numberOne*(-1);
    }
    input.value=result;
}

function sqrt(action){
    let result=0;
    selectedAmal = action;
    selectedAmalOriginal=action;
    numberOne=input.value;
    if (selectedAmalOriginal ==='sqrt'){
        result=Math.sqrt(numberOne)
    }
    input.value=result;
}

function pow(action){
    let result=0;
    selectedAmal = action;
    selectedAmalOriginal=action;
    numberOne=input.value;
    if (selectedAmalOriginal==='pow'){
        result=Math.pow(numberOne,2);
    }
    input.value=result;
}

function del(action){
    let result=0;
    selectedAmal = action;
    selectedAmalOriginal=action;
    numberOne=input.value;
    if(selectedAmalOriginal==='delete'){
        result=numberOne.slice(0,-1);
        if (result.length===0){
            result=0
        }
    }
    input.value=result;
}


function clearScreen() {
    input.value = 0;
    numberOne = 0;
    selectedAmal = "";
    selectedAmalOriginal = "";
}



document.addEventListener("keydown", function (event) {

    if (event.keyCode === 49){
        addNumber(1);
    }else if (event.keyCode === 50){
        addNumber(2);
    }else if (event.keyCode === 51){
        addNumber(3);
    }else if (event.keyCode === 52){
        addNumber(4);
    }else if (event.keyCode === 53){
        addNumber(5);
    }else if (event.keyCode === 54){
        addNumber(6);
    }else if (event.keyCode === 55){
        addNumber(7);
    }else if (event.keyCode === 56){
        addNumber(8);
    }else if (event.keyCode === 57){
        addNumber(9);
    }else if (event.keyCode === 48){
        addNumber(0);
    }else if (event.keyCode === 190){
        addNumber('.');
    }else if (event.keyCode === 189){
        action('minus');
    }else if (event.keyCode === 27){
        clearScreen();
    }

});