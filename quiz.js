function send() {
    number1= document.getElementById("no1").value;
    number2= document.getElementById("no2").value;
    actual_answer= parseInt(number1)*parseInt(number2);
}

var question_number= "<h4>"+number1+" x "+number2+"</h4>"
var input_box= "<br>Answer: <input type= 'text' id= 'input_check_box'"
var check_button= "<br><br><button class= 'btn btn-info' onclick= 'check()'>Check</button>"
var row= question_number+input_box+check_button

document.getElementById("output").innerHTML= row;
document.getElementById("no1").value;
document.getElementById("no2").value;