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


//___ show Model ___
for (let i = 0; i < showModalBtns.length; i++)
    showModalBtns[i].addEventListener("click",showModal)

//___ close Model ___
closeModalBtn.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);




