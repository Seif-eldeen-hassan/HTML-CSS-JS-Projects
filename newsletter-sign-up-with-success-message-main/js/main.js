let submit = document.querySelector(".submit")
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let invalid_error = document.querySelector(".invalid_error")

function check_pass(){
    let email = document.querySelector(".email_input")
    if (emailPattern.test(email.value)) {
        email.classList.remove("invalid_input");
        invalid_error.innerText =""
        localStorage.setItem("userEmail", email.value);
        window.location.href="Success_page.html"
    } else {
        email.classList.add("invalid_input");
        invalid_error.innerText = "Valid Email Required"
    }
    
}

submit.addEventListener("click",check_pass)
email.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        check_pass();
    }
});

