let planets = document.querySelectorAll(".planet")
let planet_names = ["MOON","MARS","EUROPA","TITAN"]
let planet_images = ["/assets/destination/image-moon.png","/assets/destination/image-mars.png","/assets/destination/image-europa.png","/assets/destination/image-titan.png"]
let planet_discriptions = ["See our planet as you’ve never seen it before. A perfect<br> relaxing trip away to help regain perspective and come<br> back refreshed. While you’re there, take in some history<br> by visiting the Luna 2 and Apollo 11 landing sites."," Don’t forget to pack your hiking boots. You’ll need them to<br> tackle Olympus Mons, the tallest planetary mountain in<br> our solar system. It’s two and a half times the size of<br> Everest!"
    ,"The smallest of the four Galilean moons orbiting Jupiter,<br> Europa is a winter lover’s dream. With an icy surface, it’s<br> perfect for a bit of ice skating, curling, hockey, or simple<br> relaxation in your snug wintery cabin.","The only moon known to have a dense atmosphere other<br> than Earth, Titan is a home away from home (just a few<br> hundred degrees colder!). As a bonus, you get striking<br> views of the Rings of Saturn."
]
let all_distance = ["384,400 KM" , "225 MIL. KM" , "628 MIL. KM" , "1.6 BIL. KM"]
let all_travel_time = ["3 DAYS" , "9 MONTHS" , "3 YEARS" , "7 YEARS"]

let logo  = document.querySelector(".logo")



function change_planet(i){
    let planet_image = document.querySelector(".planet_image")
    let planet_name = document.querySelector(".planet_name")
    let planet_discription = document.querySelector(".planet_discription")
    let planet_distance = document.querySelector(".distance_data")
    let planet_travel_time = document.querySelector(".travel_time")

    planet_image.setAttribute("src",planet_images[i]);
    planet_name.innerText = planet_names[i];
    planet_discription.innerHTML = planet_discriptions[i];
    planet_travel_time.innerHTML = all_travel_time[i];
    planet_distance.innerText = all_distance[i];
    
    
  
    for(let j = 0 ; j < 4 ; j++ ){
        if(planets[j].classList.contains("planet_choosed")){
            planets[j].classList.remove("planet_choosed")
        }
    }
    planets[i].classList.add("planet_choosed")


}

function redirect_main(){
    window.location.href="/index.html";
}

for(let i = 0 ; i < 4 ; i++){
    planets[i].addEventListener("click",function(){change_planet(i);})
}

logo.addEventListener("click" , redirect_main)