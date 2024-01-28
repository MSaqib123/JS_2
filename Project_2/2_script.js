'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");

//=== querySelector ===
//this give 1st elemnt in  list
// const showModalBtn = document.querySelector(".show-modal");

//=== querySelectorAll ===
//this give All list that element
const showModalBtns = document.querySelectorAll(".show-modal");

//===========================
// --- global method -----
//===========================
let showModal = function(){
    //let showBtn = showModalBtns[i];
    // alert(showBtn.textContent);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

let closeModal = function(){
    //let showBtn = showModalBtns[i];
    // alert(showBtn.textContent);
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//=================================
//------- show Model ------
//=================================
for (let i = 0; i < showModalBtns.length; i++)
    showModalBtns[i].addEventListener("click",showModal)

//=======================================
// ---- close Model ----
//=================================
closeModalBtn.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);


//=================================
// -- closeModel by click ---
//=================================
//___ GlobalEvent ____
document.addEventListener('keydown',function(e){//event){
    // alert("You press key");
    //___ event Argument object (e) ___
    // console.log(e);
    // alert(e.key);
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
        closeModal();
        // console.log("sd");   //without  hidden    escape  press krnaa par  event work rha tha. which is not good for optimization
    }
})




