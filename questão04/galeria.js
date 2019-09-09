document.addEventListener('DOMContentLoaded', function() {
const galeria = function(){
this.anterior = document.querySelector("#antes");
this.posterior = document.querySelector("#depois");
this.checkbox =document.querySelector("#clique");
this.stream = document.querySelector('.gallery__stream');
this.items = document.querySelectorAll('.gallery__item');
let that = this;

}
this.prev = document.querySelector('.gallery__prev');
this.ant = function(){
that.stream.appendChild(that.items[0]);
that.items = document.querySelectorAll('.gallery__item');
}


this.next = document.querySelector('.gallery__next');
this.post = function(){
that.stream.insertBefore(that.items[that.items.length - 1], that.items[0]);
that.items = document.querySelectorAll('.gallery__item');

}

this.permitirHover = function(){
  if(that.checkbox.cheked){
    that.prev.removeEventListener('mouseover', that.ant);
    that.next.removeEventListener('mouseover', that.post);
  }else{
    that.prev.addEventListener('mouseover', that.ant);
    that.next.addEventListener('mouseover', that.post);
  }
};

let myGaleria = new galeria();
myGaleria.anterior.onclick = myGaleria.anterior;

myGaleria.posterior.onclick = myGaleria.posterior;

myGaleria.checkbox.onchange = myGaleria.permitirHover;

});