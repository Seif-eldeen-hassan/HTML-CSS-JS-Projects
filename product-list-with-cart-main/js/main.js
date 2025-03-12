 let add_cart_button = document.querySelectorAll("#add")
 let choosed = document.querySelectorAll(".picking")
 let plus_button = document.querySelectorAll(".plus")
 let minus_button = document.querySelectorAll(".minus")
 let quantinty = document.querySelectorAll(".quan")
 let cart_quan = document.querySelector(".cart_title")
 let prices = document.querySelectorAll(".price")
 let display_total = document.querySelector(".Total")
 let images = document.querySelectorAll(".product_img")
 let product_names = document.querySelectorAll(".product_name")
 let cart = document.querySelector(".cart")
 let empty_cart_icon = document.querySelector(".empty_cart_icon")
 let empty_text = document.querySelector(".empty_text")
 let remove_buttons = [];
 let Total_cart = 0;
 let Total_cost = 0;

 function check_empty_cart(){
    if(Number(cart_quan.innerText) == 0){   
        empty_cart_icon.classList.remove("none")
        empty_text.classList.remove("none")
    }
    else{
        empty_cart_icon.classList.add("none")
        empty_text.classList.add("none")
    }
}

function add_cart_clicked(i){
    add_cart_button[i].classList.add("none")
    choosed[i].classList.remove("none")
    Total_cost += Number(prices[i].innerText.substring(1,4))
    display_total.innerText = `$${Total_cost.toFixed(2)}`
    Total_cart++;
    cart_quan.innerText = `Your Cart (${Total_cart})`
    images[i].classList.add("choosed_image")
    check_empty_cart()
    update_cart(i)
}

function increment(i){
    let number = Number(quantinty[i].innerText) + 1;
    quantinty[i].innerText = number;
    Total_cart++;
    cart_quan.innerText = `Your Cart (${Total_cart})`
    Total_cost += Number(prices[i].innerText.substring(1,4))
    display_total.innerText = `$${Total_cost.toFixed(2)}`
    check_empty_cart()
    update_cart(i)

}

function decrement(i){
    if(Number(quantinty[i].innerText) == 1){
        add_cart_button[i].classList.remove("none")
        choosed[i].classList.add("none")
        Total_cost -= Number(prices[i].innerText.substring(1,4))
        display_total.innerText = `$${Total_cost.toFixed(2)}`
        Total_cart--;
        cart_quan.innerText = `Your Cart (${Total_cart})`
        images[i].classList.remove("choosed_image")
        check_empty_cart()
        let product_name = product_names[i].innerText;
        let existing_item = document.querySelector(`.cart_item[data-name="${product_name}"]`)
        existing_item.remove();
        return
    }
    let number = Number(quantinty[i].innerText) - 1;
    quantinty[i].innerText = number;
    Total_cart--;
    cart_quan.innerText = `Your Cart (${Total_cart})`
    Total_cost -= Number(prices[i].innerText.substring(1,4))
    display_total.innerText = `$${Total_cost.toFixed(2)}`
    check_empty_cart()
    update_cart(i)
}

for(let i = 0 ; i < 9 ; i++){
    add_cart_button[i].addEventListener("click", function(){add_cart_clicked(i);});
}

for(let i = 0 ; i < 9 ; i++){
    plus_button[i].addEventListener("click" , function(){increment(i);} )
}   

for(let i = 0 ; i < 9 ; i++){
    minus_button[i].addEventListener("click" , function(){decrement(i);} )
}   

function update_cart(i){
    let product_name = product_names[i].innerText;
    let product_quan = Number(quantinty[i].innerText);
    let product_price = Number(prices[i].innerText.substring(1,4));
    let total_product_cost = product_quan * product_price;
    let existing_item = document.querySelector(`.cart_item[data-name="${product_name}"]`)
    if(existing_item){
        let quantityElement = existing_item.querySelector(".cart_quan");
        let total_product_cart_price = existing_item.querySelector(".product_total_cost");
        quantityElement.innerText = `${product_quan}x`;
        total_product_cart_price.innerText = `$${total_product_cost.toFixed(2)}`

    }
    else{
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart_item")
        cartItem.setAttribute("data-name", product_name);
        cartItem.innerHTML=`
        <div class="item">      
            <div class="info">
                <h1 class="cart_name">${product_name}</h1>
                <div class="price_and_quan">
                <h2 class="cart_quan">${product_quan}x </h2>
                <h2 class="cart_price">@$${product_price.toFixed(2)}</h2>
                <h2 class="product_total_cost"> $${total_product_cost.toFixed(2)}</h2>
                </div>
            </div>
            <img src="./assets/images/icon-remove-item.svg" class="remove">
      </div>
      <hr class="line">`
      cart.appendChild(cartItem);
      let this_item = document.querySelector(`.cart_item[data-name="${product_name}"]`)
      console.log(this_item)
      remove_buttons.push(this_item.querySelector(".remove"))
      console.log(remove_buttons)
 

    
    }

    function remove_item(i) {
        remove_buttons[i].closest(".cart_item").remove();
    }
    


    for(let i = 0 ; i < remove_buttons.length ; i++){
        remove_buttons[i].addEventListener("click", function(){remove_item(i);})
    }

  



}
 
