let images_url = ["/images/desktop-image-hero-1.jpg" , "/images/desktop-image-hero-2.jpg" , "/images/desktop-image-hero-3.jpg" ]
let all_tilte = ["Discover innovative<br> ways to decorate"," We are available all<br> across the globe" , "Manufactured with<br> the best materials"]
let all_pargraphs = [" We provide unmatched quality, comfort, and style for property<br> owners across the country. Our experts combine form and<br> function in bringing your vision to life. Create a room in your<br> own style with our collection and make your property a<br> reflection of you and what you love.", " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.","Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office." ]
let current = 0;
let slide_image = document.querySelector(".slide_image")
let left_bt = document.querySelector(".left_bt")
let right_bt = document.querySelector(".right_bt")
let title = document.querySelector(".title")
let discription = document.querySelector(".discription")

function change_image(i){
    if(i == 1){
        if(current == 2){
            current = -1
        }
        current++;
        slide_image.style.backgroundImage = `url(${images_url[current]})`;
        title.innerHTML = all_tilte[current]
        discription.innerHTML = all_pargraphs[current]
    }
    else{
        if(current == 0){
            current = 3
        }
        current--;
        slide_image.style.backgroundImage = `url(${images_url[current]})`;
        title.innerHTML = all_tilte[current]
        discription.innerHTML = all_pargraphs[current]
    }
}

right_bt.addEventListener("click",function(){change_image(1);})
left_bt.addEventListener("click",function(){change_image(0);})