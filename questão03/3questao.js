var cont = 0;
var tempo;
var tempo_cont = 0;
			
function contando(){
	document.getElementById("txt").value=cont;
	cont = cont + 1;
	tempo=setTimeout("contando()",1000);
}
function iniciar(){
	if (!tempo_cont){
		tempo_cont=1;
		contando();
		}
	}
function parar(){
	clearTimeout(tempo);
	tempo_cont=0;
}
			
function zerar(){
	document.getElementById("txt").value = 0;	
}