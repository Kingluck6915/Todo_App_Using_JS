let inp=document.querySelector("input");

// let lis=document.querySelectorAll("li");
let btn=document.querySelector("button");

// inp.addEventListener("keydown",function(){
//     let inpvalue=inp.value;
    
// })
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    // console.log(inp.value);
    inp.value="";
    // let deletebtn=document.querySelector(".delete");
    // delbtn.addEventListener("click",function(){
    //     console.log("deleted");
    // })
});
inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    // console.log(inp.value);
    inp.value="";
    }
});
let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         // console.log(par);
//         par.remove();
//     // console.log("deleted");
// });
// }
let ul=document.querySelector("ul");
ul.addEventListener("click",function(e){
    // let par=this.parentElement;
        // console.log(par);
        // this.remove();
        if(e.target.nodeName==="BUTTON"){
            let parList=e.target.parentElement;
            parList.remove();
            // console.log("deleted");
        }
        else{
            console.log("donot delete");
        }
})
let remAll=document.querySelector(".removeall");

remAll.addEventListener("click", function () {
    let ul = document.querySelector("ul");
    ul.remove();
});

