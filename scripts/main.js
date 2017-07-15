
function multiply(num1,num2){
	var result = num1 * num2;
	return result
}

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/gamersky-wallpic.jpg'){
		myImage.setAttribute('src','images/pic2.jpg');
	}else{
		myImage.setAttribute('src','images/gamersky-wallpic.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myname = prompt('Please enter your name: ');
	localStorage.setItem('name', myname);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
	
}

if(!localStorage.getItem('name')){
	setUserName();
	}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
	}
	
myButton.onclick = function(){
		setUserName();
	}



