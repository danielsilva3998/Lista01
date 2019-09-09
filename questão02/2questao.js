const cor = document.querySelector("#color");
const alterarCor = document.querySelector("#alterar");

alterarCor.onclick= function(){
	document.body.style.backgroundColor="#"+cor.value;
	
}