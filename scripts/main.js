var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/pic1.jpg'){
		myImage.setAttribute('src','images/pic-cou.jpg');
	}else{
		myImage.setAttribute('src','images/pic1.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myname = prompt('输入你的名字，然后重新刷新一下页面试试');
	localStorage.setItem('name', myname);
	myHeading.innerHTML = 'Hello , ' + myName;
	
}

if(!localStorage.getItem('name')){
	setUserName();
	}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Hello , ' + storedName;
	}

myButton.onclick = function(){
		setUserName();
	}



