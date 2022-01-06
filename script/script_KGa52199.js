//Toogle cart button to open
function cart(){
    let cartItem = document.querySelector(".cart-items-container");
    cartItem.classList.toggle('active');

}

// toogle search bar to open
function search(){
    let searchItem = document.querySelector(".search-form");
    searchItem.classList.toggle('active');
}

//  scroll function to toggle off the cart and search option
window.onscroll = () =>{
    let cartItem = document.querySelector(".cart-items-container");
    let searchItem = document.querySelector(".search-form");
    searchItem.classList.remove('active');
    cartItem.classList.remove('active');
}

// Image slider functions

let current = 0;
let current1=0;

// to clear all images as display="none"
function reset() {
    let sliderimage=document.querySelectorAll(".galleryImg");
    for (let i = 0; i < sliderimage.length; i++) {
        sliderimage[i].style.display = "none";
    }
}

function arrowleft(){
    let sliderimage=document.querySelectorAll(".galleryImg");
     if (current === 0) {
        	current = sliderimage.length;
        }
    reset();
    sliderimage[current - 1].style.display = "block";
    current--;
    current1 = current;
}
function arrowright(){
    let sliderimage=document.querySelectorAll(".galleryImg");
    if (current1 === sliderimage.length - 1) {
        current1 = -1;
    }
    reset();
sliderimage[current1 + 1].style.display = "block";
current1++;
current = current1;
}


// form validation function

function checkValidation(form){

    var name = form.elements["customerName"];
    if(name.validity.valueMissing){  
        name.setCustomValidity("Please enter your name here");
        
    }
    else{
        name.setCustomValidity("");
        
    }
    var mail = form.elements["customerEmail"];
    
    if(mail.validity.valueMissing){   
        mail.setCustomValidity("Please enter your email here");
        
    }
    else{
        mail.setCustomValidity("");
        
    }
    let banner=document.querySelector(".formSubmittedDiv");
    var number = form.elements["customerNumber"];
    if(number.validity.valueMissing){  
        number.setCustomValidity("Please enter number here");
        
    }
    else{
        number.setCustomValidity("");
        banner.style.display="block";
        banner.style.border="1px solid green";
        banner.style.color="green";
    }

    

}
