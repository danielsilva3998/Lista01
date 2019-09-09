const l1 = document.querySelector("#lampada");
const l2 = document.querySelector("#lamp");

var acesa = false;


l2.onclick=function(){
	if(acesa){
		l1.src="lampapagada.png";
		acesa=false;
		l2.value="acender";

	}else{

		l1.src="lampacesa.png";
		acesa=true;
		l2.value="apagar";

	}
	
}
