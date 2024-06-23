let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operators = ["Add", "Sub", "Mul", "Div", "Equals", "Del", "DelAll", "Dec"];

numbers.forEach(number =>{
    let btn = document.getElementById("btn" + number);
    btn.addEventListener("mouseover", function(){
        document.getElementById("btnBg" + number).style="filter: drop-shadow(0px 10px 10px #1b8158b7);";       
    });
    btn.addEventListener("mouseout", function(){
        document.getElementById("btnBg" + number).style="filter: none;";       
    });
});

operators.forEach(operator =>{
    let op = document.getElementById("btn" + operator);
    op.addEventListener("mouseover", function(){
        document.getElementById("btnBg" + operator).style="filter: drop-shadow(0px 10px 10px #1b8158b7);";
        op.style="color: #0d3122;";
    })
    op.addEventListener("mouseout", function(){
        document.getElementById("btnBg" + operator).style="filter: none;";
    })
    if(operator == "Dec"){
        return;
    }
    document.getElementById("btnBg" + operator).addEventListener("mouseover", function(){
        op.style="color: #0d3122;";
    });
    document.getElementById("btnBg" + operator).addEventListener("mouseout", function(){
        op.style="color: #e7fff5;";
    });
    
})





//--------------------------------Operations------------------------------
numbers.forEach(btn => {
    document.getElementById("btn" + btn).addEventListener("click", function() {
        let txtField = document.getElementById("mainText");
        txtField.innerHTML += btn;
    });
})

document.getElementById("btnDel").addEventListener("click", function() {
    let txtField = document.getElementById("mainText").innerHTML;
    if(txtField.length > 0){
        let newText = "";
        for(let i = 0; i < txtField.length-1; i++){
            newText += txtField[i];
        }
        document.getElementById("mainText").innerHTML = newText;
    }
    console.log(document.getElementById("btnDel"));
});

document.body.addEventListener("keypress", function(event){
    numbers.forEach(num =>{
        if(event.key == num.toString()){
            document.getElementById("mainText").innerHTML += num;
        }
    })
    
})


document.getElementById("btnDelAll").addEventListener("click", function(){
    document.getElementById("mainText").innerHTML = "";
    document.getElementById("subText").innerHTML = "";
});

document.getElementById("btnDec").addEventListener("click", function(){
    let text = document.getElementById("mainText").innerHTML;
    for(let i = 0; i < text.length; i++){
        if(text[i] == "."){
            return;
        }
    }
    document.getElementById("mainText").innerHTML += text.length == 0 ? "0." : ".";
});



let operator = "";
let num1 = 0;
let num2 = 0;
let mainText="";


function isEmpty(str){
    return str.length == 0;
}

function isOperatorIn(operator){
    return operator != "";
}

function operation(op){
    if(isOperatorIn(operator)){
        document.getElementById("btnEquals").click();
    }
    let subText;
    if(isOperatorIn(operator) && isEmpty(document.getElementById("mainText").innerHTML)){
        subText = num1 + " "+ op +" ";
        document.getElementById("subText").innerHTML = subText;
        operator = op;
    }else if(!isEmpty(document.getElementById("mainText").innerHTML)){
        mainText = document.getElementById("mainText");
        num1 = parseFloat(mainText.innerHTML);
        subText = mainText.innerHTML + " "+ op +" ";
        mainText.innerHTML = "";
        document.getElementById("subText").innerHTML = subText;
        operator = op;
    }
}

document.getElementById("btnDiv").addEventListener("click", function(){operation("/")});
document.getElementById("btnMul").addEventListener("click", function(){operation("x")});
document.getElementById("btnAdd").addEventListener("click", function(){operation("+")});
document.getElementById("btnSub").addEventListener("click", function(){operation("-")});

document.getElementById("btnEquals").addEventListener("click", function(){
    if(isOperatorIn(operator) && !isEmpty(document.getElementById("mainText").innerHTML)){
        document.getElementById("subText").innerHTML += mainText.innerHTML  + " =";
        num2 = parseFloat(mainText.innerHTML);
        switch(operator){
            case "/":
                mainText.innerHTML = num1/num2;
                break;
            case "x":
                mainText.innerHTML = num1*num2;
                break;
            case "+":
                mainText.innerHTML = num1+num2;
                break;
            case "-":
                mainText.innerHTML = num1-num2;
                break;
            }
        operator = "";
    }
})


document.body.addEventListener("keydown", function(event){
    switch(event.code){
        case "Backspace": document.getElementById("btnDel").click(); break;
        case "NumpadAdd" : document.getElementById("btnAdd").click(); break;
        case "NumpadSubtract" : document.getElementById("btnSub").click(); break;
        case "NumpadMultiply" : document.getElementById("btnMul").click(); break;
        case "NumpadDivide" : 
            event.preventDefault();
            document.getElementById("btnDev").click();
            break;
        case "NumpadDecimal" : document.getElementById("btnDec").click(); break;
        case "Delete" : document.getElementById("btnDelAll").click(); break;
        case "NumpadEnter" : document.getElementById("btnEquals").click(); break;
        case "Enter" : document.getElementById("btnEquals").click(); break;
    }
});


numbers.forEach(number =>{
    document.getElementById("btnBg" + number).addEventListener("click", function(){
        document.getElementById("btn" + number).click();      
    });
})

operators.forEach(operator =>{
    document.getElementById("btnBg" + operator).addEventListener("click", function(){
        document.getElementById("btn" + operator).click();
    });
})

