
let saftali = document.getElementById("saftali");
let uzum = document.getElementById("uzum");
let kelem = document.getElementById("kelem");
let kok = document.getElementById("kok");
let alma = document.getElementById("alma");
let ciyelek = document.getElementById("ciyelek");
let pomidor = document.getElementById("pomidor");
let kartof = document.getElementById("kartof");

// var dragItem = null;

saftali.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitId",this.id);
})
uzum.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitId",this.id);
})
alma.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitId",this.id);
})
ciyelek.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitId",this.id);
})
document.querySelectorAll(".fruits").forEach(area=>{
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})
document.querySelectorAll(".fruits").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("fruitId");
        this.appendChild(document.getElementById(data));
    })
})


kelem.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegId",this.id);
})
kok.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegId",this.id);
})
pomidor.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegId",this.id);
})
kartof.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegId",this.id);
})
document.querySelectorAll(".vegetables").forEach(area=>{
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})
document.querySelectorAll(".vegetables").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("vegId");
        this.appendChild(document.getElementById(data));
    })
})
//  function Drop(){
//      this.append(dragItem);
//  }