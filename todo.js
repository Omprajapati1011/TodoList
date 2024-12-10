let inp = document.querySelector("input");
let btn = document.querySelector("button");
let li = document.querySelectorAll("li");
let ul = document.querySelector("ul");




btn.addEventListener("click", function(){
    let lis = document.createElement("li");
    lis.innerText = inp.value;


    let del = document.createElement("button");
    del.innerText = "Delete"; 
    del.classList.add("delete");

    document.querySelector("ul").append(lis);
    lis.appendChild(del);
    inp.value = "";
 }) ;

 ul.addEventListener("click", function(event){
    console.dir(event.target.nodeName);
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log(listItem);
       listItem.remove();
    }

 });






//  let delbtns = document.querySelectorAll(".delete");

//  for(delbtn of delbtns){
//        delbtn.addEventListener("click", function(){
//         let para = this.parentElement;
//         console.log(para);
//         para.remove();
//    });
//  }





 









 
