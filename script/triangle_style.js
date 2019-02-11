function triangleTarif(id){
	let newId = Number(id.slice(-1));
	let newStr = id.slice(0,-1)
	let arrId = []
	if(id.includes("vip")){
		arrId = [1, 2, 3]
	}
	else{
		arrId = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	}
	arrId.forEach(element => {
		let id = `img_${newStr}${element}`
		if(element == newId){
			document.getElementById(id).style.zIndex = "10";
		}
		else
			document.getElementById(id).style.zIndex = "1";
	});
}


function tarif(id){
	if(id !="vip"){
		document.getElementById("triangle_plans").style.display = "block";
		document.getElementById("triangle_plans_vip").style.display = "none";
		document.getElementById("basic").style.backgroundColor = "#00cac3";
		document.getElementById("vip").style.backgroundColor = "#0e7c7b";
	}
	else{
		document.getElementById("triangle_plans").style.display = "none";
		document.getElementById("triangle_plans_vip").style.display = "block";
		document.getElementById("basic").style.backgroundColor = "#0e7c7b";
		document.getElementById("vip").style.backgroundColor = "#00cac3";
	};
}



