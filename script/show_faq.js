function show(id){
	let i =+id;
	let b=i+24;
if(i<=24){
	document.getElementById(i).style.display="none";
	document.getElementById(b).style.display="flex";
	}
else{
	let c=i-24;
	document.getElementById(i).style.display="none";
	document.getElementById(c).style.display="flex";
	}
}