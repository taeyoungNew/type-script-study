(()=>{"use strict";class e{constructor(){}static getInstance(){return e.instance||(e.instance=new e),e.instance}get totalScore(){const e=c.getInstance();return console.log(e),e.activeElsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}}class t{constructor(e){this.element=e,this.foods=c.getInstance,console.log("Food"),e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){console.log("clickEventHandler"),this.element.classList.toggle("food--active"),e.getInstance().render()}}class c{constructor(){this.elements=document.querySelectorAll(".food"),this._activeEls=[],this._activeElsScore=[],console.log("Foods"),this.elements.forEach((e=>{new t(e)}))}get activeElsScore(){return this._activeElsScore=[],this.activeEls.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElsScore.push(Number(t.textContent))})),this._activeElsScore}get activeEls(){return console.log("get activeEls"),this._activeEls=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeEls.push(e)})),console.log(this._activeEls),this._activeEls}static getInstance(){return c.inctance||(c.inctance=new c),c.inctance}}c.getInstance()})();