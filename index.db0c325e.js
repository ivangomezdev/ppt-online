var e=globalThis,t={},o={},i=e.parcelRequireb11a;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequireb11a=i),(0,i.register)("joAEj",function(e,t){Object.defineProperty(e.exports,"state",{get:()=>o,set:void 0,enumerable:!0,configurable:!0});let o={name:"",transitioned:!1,playerId:"",playerTwoId:"",playerNames:{},roomId:"",roomLargeId:"",createNewRoom:!1,p1Choice:"",p2Choice:"",matchCounter:{pc:0,me:0},listeners:[],results:[],getResults:function(){return this.results},notifyListeners:function(){this.listeners.forEach(e=>e())},resetState:function(){this.p1Choice="",this.results=[],this.notifyListeners()},pcSelectChoice:function(){let e=Math.floor(3*Math.random());0===e?this.p2Choice="piedra":1===e?this.p2Choice="papel":2===e&&(this.p2Choice="tijera")},subscribe:function(e){this.listeners.push(e)},handleVictory:function(e){console.log("Manejando victoria/derrota:",e),this.results.push(e),"Victoria"===e?(this.matchCounter.me++,console.log(this.matchCounter)):"Derrota"===e&&this.matchCounter.pc++,this.notifyListeners()},processResult:function(){if(console.log("Ejecutando processResult",this.p1Choice,this.p2Choice),!this.p1Choice||!this.p2Choice){console.error("No se puede procesar el resultado porque falta una elección.");return}this.p1Choice===this.p2Choice?(console.log("Empate"),this.results.push("Empate")):"piedra"===this.p1Choice&&"tijera"===this.p2Choice||"papel"===this.p1Choice&&"piedra"===this.p2Choice||"tijera"===this.p1Choice&&"papel"===this.p2Choice?(console.log("Victoria"),this.handleVictory("Victoria")):(console.log("Derrota"),this.handleVictory("Derrota")),console.log("Resultados actuales:",this.results)}}}),i("joAEj");
//# sourceMappingURL=index.db0c325e.js.map