let inputs = document.querySelectorAll(".input_box")
let button = document.querySelector(".Generate")
let span_name = document.querySelector(".name")
let span_email = document.querySelector(".email")
let first_page = document.querySelector(".main_cont")
let generator_page = document.querySelector(".ticket_generator")
let date = document.querySelector(".date")
let display_image = document.querySelectorAll(".preview_image")
let profile_pic = document.querySelector(".input_img[type='file']");
let ticket_name = document.querySelector(".ticket_nm")
let ticket_git_hub = document.querySelector(".ticket_git")
let change_button =  document.querySelector(".change_img")
let remove_button =  document.querySelector(".remove_img")
let buttons =  document.querySelector(".buttons")
let upload_icon = document.querySelector(".upload_icon")
let image_input_text = document.querySelector(".input_text")
let careful_text = document.querySelectorAll(".careful_text")
let careful_messages = document.querySelectorAll(".careful_message")
let info_icons = document.querySelectorAll(".info_icon")
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let input_boxs = document.querySelectorAll(".input_box")
let empty_inputs = document.querySelectorAll(".empty_input")



/////////////////////////////////////////////////////////////////////////////

let today = new Date();
let options = { month: "short", day: "numeric", year: "numeric" };
let formattedDate = today.toLocaleDateString("en-US", options);             // get today date 

/////////////////////////////////////////////////////////////////////////////

console.log(careful_messages[1])
function Generate_ticket(){
    let name = inputs[0].value ;
    let email = inputs[1].value;
    let git_hub = inputs[2].value;
    check_empty_inputs()
    if (emailPattern.test(email)){
        careful_messages[1].classList.add("none")
        input_boxs[1].classList.remove("border_error")
    }
    else if (email ==""){
        return
    }
    else{
        careful_messages[1].classList.remove("none")
        input_boxs[1].classList.add("border_error")
        return 
    }
    first_page.classList.add("none");
    generator_page.classList.remove("none");
    span_name.innerText = name +"!";
    span_email.innerText = email;
    date.innerText = formattedDate +" / Cairo, EG";
    ticket_git_hub.innerText = git_hub;
    ticket_name.innerText = name;
}

button.addEventListener("click",Generate_ticket)


profile_pic.addEventListener("change", function(event) {
    display_image[0].classList.remove("none");
    buttons.classList.remove("none");
    upload_icon.classList.add("none")
    profile_pic.classList.add("none")
    image_input_text.classList.add("none")

    let file = event.target.files[0]; // Get the selected file
    if (file.size > 500 * 1024) { // Check if file size exceeds 500KB
        profile_pic.value = ""; // Reset file input
        careful_text[0].classList.add("none")
        careful_text[1].classList.remove("none")
        info_icons[0].classList.add("none")
        info_icons[1].classList.remove("none")
        button.disabled = true;
    }
    else{
        careful_text[1].classList.add("none")
        careful_text[0].classList.remove("none")
        info_icons[1].classList.add("none")
        info_icons[0].classList.remove("none")
        button.disabled = false;
    }
   

    if (file) { // Check if a file was selected
        let reader = new FileReader(); // Create a FileReader instance
        
        reader.onload = function(e) { // When the file is loaded
            display_image[0].src = e.target.result;
            display_image[1].src = e.target.result; // Set the <img> source to the uploaded file
        };

        reader.readAsDataURL(file); // Read the file as a Data URL (base64)
    }
});


function remove_img(){
    display_image[0].classList.add("none");
    buttons.classList.add("none");
    upload_icon.classList.remove("none")
    profile_pic.classList.remove("none")
    image_input_text.classList.remove("none")
}

function change_image(){
    profile_pic.classList.remove("none")
    profile_pic.click();
}

function check_empty_inputs(){
    for(let i = 0 ; i < 3 ; i++){
        if(input_boxs[i].value == ""){
            input_boxs[i].classList.add("border_error")
            empty_inputs[i].classList.remove("none")
        }
        else{
            input_boxs[i].classList.remove("border_error")
            empty_inputs[i].classList.add("none")
        }
    }
}


remove_button.addEventListener("click",remove_img)
change_button.addEventListener("click",change_image)
email.addEventListener("change",check_email)
