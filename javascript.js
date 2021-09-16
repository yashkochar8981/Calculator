var input=document.getElementById('input');
var output=document.getElementById('output');


function display(key){
	input.innerText=input.innerText + key;
	input.style.display="block";
	input.style.fontSize="2rem";
	output.style.fontSize="1rem";
};

function eavluate(){
	out=eval(input.innerText);
	output.innerText=out;
	input.innerText=out;
	input.style.display="none";
	output.style.fontSize="2rem";
};

function clear_display_all(){
	input.innerText="";
	output.innerText="";
};


function clear_display(){
	input.innerText="";
};

function reciprocal(){
	input.innerText="1/"+input.innerText;
}

// function del(){
// 	input.innerText=input.innerText[] 
// }