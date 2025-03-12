let tech_names = ["LAUNCH VEHICLE" , "SPACEPORT" , "SPACE CAPSULE"]
let tech_bio = ["A launch vehicle or carrier rocket is a rocket-propelled vehicle<br> used to carry a payload from Earth's surface to space, usually to<br> Earth orbit or beyond. Our WEB-X carrier rocket is the most<br> powerful in operation. Standing 150 metres tall,it's quite an<br> awe-inspiring sight on the launch pad!","A spaceport or cosmodrome is a site for launching (or<br> receiving) spacecraft, by analogy to the seaport for ships or<br> airport for aircraft. Based in the famous Cape Canaveral, our<br> spaceport is ideally situated to take advantage of the Earth’s<br> rotation for launch.","A space capsule is an often-crewed spacecraft that uses a<br> blunt-body reentry capsule to reenter the Earth's atmosphere<br> without wings. Our capsule is where you'll spend your time<br> during the flight. It includes a space gym, cinema, and plenty of<br> other activities to keep you entertained."]
let tech_images = ["/assets/technology/image-launch-vehicle-portrait.jpg","/assets/technology/image-spaceport-portrait.jpg" ,"/assets/technology/image-space-capsule-portrait.jpg"]
let buttons = document.querySelectorAll(".tech_bt")
let logo  = document.querySelector(".logo")

function redirect_main(){
    window.location.href="/index.html";
}

logo.addEventListener("click" , redirect_main)

function change_tech(i){
    let tech_title = document.querySelector(".tech_title")
    let tech_pargraph = document.querySelector(".tech_pargraph")
    let tech_image = document.querySelector(".tech_image")

    tech_title.innerText = tech_names[i]
    tech_pargraph.innerHTML = tech_bio[i]
    tech_image.setAttribute("src",tech_images[i])
    for(let j = 0 ; j < 3 ; j++){
        if(buttons[j].classList.contains("choosed_tech_bt")){
            buttons[j].classList.remove("choosed_tech_bt")
        }   
    
    }
    buttons[i].classList.add("choosed_tech_bt")
       

}

for(let i = 0 ; i < 3 ; i++){
    buttons[i].addEventListener("click",function(){change_tech(i);})
}

