var first, second, operator;
var wrong = 0;
var right = 0;
var resulttotal = 0;
var compute = 0;
document.addEventListener('DOMContentLoaded', init)

function init(){
	document.getElementById('result').value = '';
	document.getElementById('message').textContent = '';
	//selecting random numbers and operator when the page loads
	var oper = ['+','-','*','/']
	first = document.getElementById('first');
	first.innerHTML = Math.floor(Math.random()*100);
	second = document.getElementById('second');
	second.innerHTML = Math.floor(Math.random()*100);
	operator = document.getElementById('operator');
	operator.innerHTML = oper[Math.floor(Math.random()*4)];
	// ini
	document.getElementById('mytable').addEventListener('click', writeOnInput);
	document.getElementById('check').addEventListener('click', evaluateAnswer);
	document.getElementById('clear').addEventListener('click', clearValue)
}
// writes input value of what ever button is clicked  from the number pad
function writeOnInput(event){
	var result = document.getElementById('result');
	if(event.target.matches('button')){
		var x = event.target.textContent
		result.value +=x;
	}
}
//checks if the users input is correct or not
function evaluateAnswer(){
	var y = parseInt(second.innerHTML);
	var x = parseInt(first.innerHTML);
	var i = operator.innerHTML;
	// checks the operator passed
	switch(i){
		case '+':
			compute =  x + y;
			break;
		case '-': 
			compute = x - y;
			break;
		case '*':
			compute = x * y;
			break;
		case '/': 
			compute = x / y;
			break;
	}

	if (compute === parseFloat(document.getElementById('result').value)){
		document.getElementById('right').innerHTML = ++right;
		displayMessage('Congrats, you have won the game');
	}
	else{
		document.getElementById('wrong').innerHTML = ++wrong;
		displayMessage('That is not correct, Please try next problem');		
	}
	setTimeout(init, 5000);
 }
 // message to display if the player have lost or won the game
 function displayMessage(text){
 	var res = document.getElementById('message');
 	res.textContent = text;
 	if(res.textContent == 'Congrats, you have won the game'){
 		res.style.color = 'green';
 	}
 	else{
 		res.style.color = 'red';
 	}
 	return;
 }
// function that cleares the user entered value
function clearValue(){
	document.getElementById('result').value = '';
	document.getElementById('message').textContent = '';
	document.getElementById('right').innerHTML = 0;
	document.getElementById('wrong').innerHTML = 0;
}