import { debounce } from 'lodash';

const correo = document.querySelector(".email");
const textarea = document.querySelector(".textarea");
const load = document.querySelector(".feedback-form");
const btn = document.querySelector(".btn");
correo.addEventListener("input" , (event) => {
    localStorage.setItem("email",event.currentTarget.value);
});

textarea.addEventListener("input" , (event) => {
    localStorage.setItem("message",event.currentTarget.value);
});


function recuperar(){
    correo.value=localStorage.getItem("email");
    textarea.value=localStorage.getItem("message");
}


document.addEventListener("DOMContentLoaded", recuperar);




load.addEventListener("submit" , (e)=>{
    e.preventDefault();
    let usuario = {
        correo: correo.value,
        textarea: textarea.value,
    
    };
    console.log(usuario);
    correo.value = "";
    textarea.value = "";
    localStorage.removeItem("email");
    localStorage.removeItem("message");
});
//const ink = localStorage.getItem("email");

