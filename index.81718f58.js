function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t=globalThis,a={},n={},i=t.parcelRequireb11a;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequireb11a=i);var r=i.register;r("27Lyk",function(t,a){e(t.exports,"register",()=>n,e=>n=e);var n,i=new Map;n=function(e,t){for(var a=0;a<t.length-1;a+=2)i.set(t[a],{baseUrl:e,path:t[a+1]})}}),r("eSiuo",function(t,a){e(t.exports,"images",()=>c),e(t.exports,"resultado",()=>l);var n=i("7kCDf"),r=i("kYCkh"),o=i("g4MWs"),d=i("bczGJ"),p=i("hvdb3");let c=[{piedra:n,id:"piedra"},{papel:r,id:"papel"},{tijera:o,id:"tijera"}],l={victoria:d,derrota:p};class s extends HTMLElement{constructor(){super();let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),a=document.createElement("style");for(let e of(a.textContent=`
   .img__content {
  display: flex;
  gap: 70px;
  justify-content: center;
 
  bottom: 0; /* Asegura que est\xe9 en la parte inferior */
  left: 0; /* Alineado al inicio */
  width: 100%; /* Ocupa todo el ancho del contenedor */

  padding: 10px 0;
}


    .img__content img{
    width:80px;
    gap:330px;
    margin-top:30px
      bottom: 0; /* Asegura que est\xe9 en la parte inferior */
      left: 0; /* Alineado al inicio */
       width: 100%; /* Ocupa todo el ancho del contenedor */
      padding: 10px 0;
    }

    .img__content img:hover{
    transform: scale(1.1);
    }

 
 
.disabled {
  pointer-events: none; /* Bloquea la interacci\xf3n con la imagen */
  opacity: 0.5; /* Opcional: Cambia la opacidad para dar la sensaci\xf3n de inhabilitada

`,c)){let a=Object.values(e).toString(),n=document.createElement("img");n.src=a,n.id=e.id,t.appendChild(n)}t.classList.add("img__content"),t.classList.add("disabled"),e.appendChild(t),e.appendChild(a)}}customElements.define("game-buttons",s)}),r("7kCDf",function(e,t){e.exports=new URL("piedra.083177db.png",import.meta.url).toString()}),r("kYCkh",function(e,t){e.exports=new URL("papel.a18e2c61.png",import.meta.url).toString()}),r("g4MWs",function(e,t){e.exports=new URL("tijera.a063bb16.png",import.meta.url).toString()}),r("bczGJ",function(e,t){e.exports=new URL("victoria.ab8c5652.png",import.meta.url).toString()}),r("hvdb3",function(e,t){e.exports=new URL("derrota.dcc11aeb.png",import.meta.url).toString()}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["6PBqH","index.81718f58.js","dUsoY","piedra.083177db.png","3VkPz","papel.a18e2c61.png","1G19l","tijera.a063bb16.png","6i9Py","victoria.ab8c5652.png","hhYb2","derrota.dcc11aeb.png"]')),i("eSiuo");
//# sourceMappingURL=index.81718f58.js.map
