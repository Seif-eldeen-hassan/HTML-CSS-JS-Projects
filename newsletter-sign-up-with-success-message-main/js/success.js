
let button = document.querySelector(".dismis_button")
let gmail = document.querySelector(".gmail")

function get_email(){
    let storedEmail = localStorage.getItem("userEmail");
    gmail.innerText = storedEmail;
}

get_email();

function return_to_main(){
    window.location.href="index.html"
}

button.addEventListener("click",return_to_main )
