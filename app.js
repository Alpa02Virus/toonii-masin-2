var too1 =+prompt("too")
var op = prompt("operator");
var too2 =+prompt("too")
switch(op){
    case "+":
        alert(too1+too2);
        break;
    case "-":
        alert(too1-too2);
        break;
    case "*":
        alert(too1*too2);
        break;
    case "/":
        alert(too1/too2);
        break;
    default:
        alert("Not found")
        break;
}