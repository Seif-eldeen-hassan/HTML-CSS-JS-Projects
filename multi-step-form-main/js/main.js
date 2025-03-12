let inputs = document.querySelectorAll(".form-control")
let button = document.querySelector(".button")
let error_message = document.querySelectorAll(".error_message")
let plan_prices = document.querySelectorAll(".cost")
let add_ons_prices = document.querySelectorAll(".step_3_cost")

let plans_type = ["Arcade", "Advanced", "Pro"];
let monthly_add_ons = ["+$1/mo", "+$2/mo", "+$2/mo"];
let yearly_add_ons = ["+$10/yr", "+$20/yr", "+$20/yr"];
let all_add_ons = ["Online service", "Larger storage", "Customizable Profile"];

let step1 = document.querySelector(".step1")
let step2 = document.querySelector(".step2")
let step3 = document.querySelector(".step3")
let step4 = document.querySelector(".step4")
let GoodBye = document.querySelector(".Good_Bye")
let steps = document.querySelectorAll(".number") 

let your_add_ons = document.querySelectorAll(".your_add_on")
let your_add_ons_names = document.querySelectorAll(".your_add_on_name")
let your_add_ons_cost = document.querySelectorAll(".your_add_on_cost")




function check_input(){
    let alldone = true;
    for(let i = 0 ; i < 3 ; i++){
        if(inputs[i].value ==""){
            inputs[i].classList.add("empty_input")
            error_message[i].innerText = "This field is required"
            alldone = false;
        }
    }
    if (alldone){
        step1.classList.add("remove_past")
        step2.classList.remove("remove_past")
        steps[0].classList.remove("current_step")
        steps[1].classList.add("current_step")
    }
}

function remove_border(input , i){
    input.classList.remove("empty_input")
    error_message[i].innerText = ""
}

button.addEventListener("click", check_input)

for (let i = 0; i < 3; i++) {
    inputs[i].addEventListener("keyup", function() {
        remove_border(inputs[i] , i);
    });
}


/////////////////////////////////////////////////// Second Page ////////////////////////////////////////////////////////

let cards = document.querySelectorAll(".plan_card")

let plan_type = document.querySelector(".plan_type")
let your_plan_cost = document.querySelector(".your_plan_cost")


let add_ons_container =  document.querySelector(".your_add_ons")



function color_card(i){

    if(cards[i].classList.contains("plan_choosed")){
        cards[i].classList.remove("plan_choosed")
        nxt_button.classList.add("none")
    }
    else{
        for(let j = 0 ; j < 3 ; j++){
            cards[j].classList.remove("plan_choosed")
        }
        cards[i].classList.add("plan_choosed")
        nxt_button.classList.remove("none")

    }
    chnage_your_plan_type();
    calc_total();
   
}

function chnage_your_plan_type(){
    for(let i = 0 ; i < 3 ; i++){
        if(cards[i].classList.contains("plan_choosed")){
            your_plan_cost.innerText = plan_prices[i].innerText 
            if(plan_prices[i].innerText[plan_prices[i].innerText.length - 1] == "o"){
                plan_type.innerText = `${plans_type[i]} (Monthly)`
            }                                                                                       //summary plan_type & monthly || yearly 
            else if (plan_prices[i].innerText[plan_prices[i].innerText.length - 1] == "r"){
                plan_type.innerText = `${plans_type[i]} (Yearly)`
            }   
        }   
    }
    
       
}


for(let i = 0 ; i < 3 ; i++){
    cards[i].addEventListener("click" , function() {color_card(i)})
}




let switchPlan = document.getElementById("flexSwitchCheckChecked");
let plans = document.querySelectorAll(".plansss")
let go_back_button = document.querySelector(".go_back_button")
let nxt_button = document.querySelector(".nxt_button")
let offers = document.querySelectorAll(".offer")


function choose_monthly_yearly(){
    if (switchPlan.checked) {
        plans[1].classList.add("month_year_plan")               // add_the_color monthly || yearly  switch
        plans[0].classList.remove("month_year_plan")    
        plan_prices[0].innerText = "$90/yr";               
        plan_prices[1].innerText = "$120/yr";                 // change plan_prices
        plan_prices[2].innerText = "$150/yr";        
        for(let k = 0 ; k < 3 ; k++){
            offers[k].innerText = "2 months free"
        }

        ////////////////////////////////////////////////////////////////

        add_ons_prices[0].innerText = "+$10/yr"
        add_ons_prices[1].innerText = "+$20/yr"                              // change add_on prices 
        add_ons_prices[2].innerText = "+$20/yr"         

        ////////////////////////////////////////////////////////////////               

        
    } 
    
//////////////////////////////////   

    else{
        plans[0].classList.add("month_year_plan")
        if(plans[1].classList.contains("month_year_plan")){   // add_the_color monthly || yearly  switch
            plans[1].classList.remove("month_year_plan")
        }
        plan_prices[0].innerText = "$9/mo";
        plan_prices[1].innerText = "$12/mo";        // change plan_prices
        plan_prices[2].innerText = "$15/mo";
        for(let k = 0 ; k < 3 ; k++){
            offers[k].innerText = ""                // clear the offer section
        }
        /////////////////////////////////////////////////////////////////

        add_ons_prices[0].innerText = "+$1/mo"
        add_ons_prices[1].innerText = "+$2/mo"                  // change add_on prices 
        add_ons_prices[2].innerText = "+$2/mo"

        /////////////////////////////////////////////////////////////////
        
    }
    chnage_your_plan_type();
    calc_total();
}

function go_back(){
    step1.classList.remove("remove_past")
    step2.classList.add("remove_past")
    steps[0].classList.add("current_step")
    steps[1].classList.remove("current_step")
}

function nxt_page(){
    step1.classList.add("remove_past")
    step2.classList.add("remove_past")
    step3.classList.remove("remove_past")
    steps[0].classList.remove("current_step")
    steps[1].classList.remove("current_step")
    steps[2].classList.add("current_step")

}

switchPlan.addEventListener("change", choose_monthly_yearly)
go_back_button.addEventListener("click",go_back)
nxt_button.addEventListener("click",nxt_page)
nxt_button.addEventListener("click",chnage_your_plan_type)


/////////////////////////////////////////////////// third Page ////////////////////////////////////////////////////////

let step3_go_back = document.querySelector(".step3_go_back")
let step3_nxt = document.querySelector(".step3_nxt")



function step_3_go_back(){
    step1.classList.add("remove_past")
    step2.classList.remove("remove_past")
    step3.classList.add("remove_past")
    steps[0].classList.remove("current_step")
    steps[1].classList.add("current_step")
    steps[2].classList.remove("current_step")
}

function step3_nxt_page(){
    step1.classList.add("remove_past")
    step2.classList.add("remove_past")
    step3.classList.add("remove_past")
    step4.classList.remove("remove_past")
    steps[0].classList.remove("current_step")
    steps[1].classList.remove("current_step")
    steps[2].classList.remove("current_step")
    steps[3].classList.add("current_step")

}

/////////////////////////////////////////////////////////////


let add_ons = document.querySelectorAll(".add")
let check_box = document.querySelectorAll(".checkbox1")
let change = document.querySelector(".change_plan_type")
function color_adds(i){
    if(add_ons[i].classList.contains("plan_choosed")){
        add_ons[i].classList.remove("plan_choosed")
        your_add_ons[i].classList.add("none")
        check_box[i].checked = false;
       
    }
    else{
        add_ons[i].classList.add("plan_choosed") 
        your_add_ons_names[i].innerText = all_add_ons[i];
        your_add_ons[i].classList.remove("none")
        check_box[i].checked = true;
        step3_nxt.classList.remove("none")
        
    }
    let all_of = true
    for(let i = 0 ; i < 3 ; i++){
        if(add_ons[i].classList.contains("plan_choosed")){
            all_of = false;
            break;
        }
    }
    if(all_of){
        step3_nxt.classList.add("none")
    }
    
    chnage_your_plan_type();
    calc_total();
}

function your_add_ons_display(){
    for(let i = 0 ; i < 3 ; i++){
        if(!your_add_ons[i].classList.contains("none")){
            your_add_ons_names[i].innerText = all_add_ons[i];
            your_add_ons_cost[i].innerText = add_ons_prices[i].innerText;
        }
    }
}



function extractNumber(str) {
    let match = str.match(/\d+/); 
    return match ? Number(match[0]) : null; 
}

function calc_total(){
    Total_cost = 0;
    console.log(Total_cost)
    Total_cost += extractNumber(your_plan_cost.innerText);
    for(let i = 0 ; i < 3 ; i++){
        if(!your_add_ons[i].classList.contains("none")){
            Total_cost += extractNumber(your_add_ons_cost[i].innerText)
        }   
    }
    if(your_plan_cost.innerText[your_plan_cost.innerText.length - 1] == "o"){
        Total_cost_display.innerText = `$${Total_cost}/mo`;
    }
    else{
        Total_cost_display.innerText = `$${Total_cost}/yr`;
    }
    

}

function go_to_plans(){
    step1.classList.add("remove_past")
    step2.classList.remove("remove_past")
    step3.classList.add("remove_past")
    step4.classList.add("remove_past")
    steps[0].classList.remove("current_step")
    steps[1].classList.add("current_step")
    steps[2].classList.remove("current_step")
    steps[3].classList.remove("current_step")
}





for(let i = 0 ; i < 3 ; i++){
    add_ons[i].addEventListener("click" , function() {color_adds(i)})
}

step3_go_back.addEventListener("click",step_3_go_back)
step3_nxt.addEventListener("click",step3_nxt_page)
step3_nxt.addEventListener("click",your_add_ons_display)
step3_nxt.addEventListener("click",calc_total)
change.addEventListener("click", go_to_plans )



/////////////////////////////////////////////////// summary Page ////////////////////////////////////////////////////////

let step4_go_back = document.querySelector(".step4_go_back")
let step4_go_nxt = document.querySelector(".step4_nxt")
let Total_cost_display = document.querySelector(".Total_cost")
let Total_cost = 0;

function step_4_go_back(){
    step1.classList.add("remove_past")
    step2.classList.add("remove_past")
    step3.classList.remove("remove_past")
    step4.classList.add("remove_past")
    steps[0].classList.remove("current_step")
    steps[1].classList.remove("current_step")
    steps[2].classList.add("current_step")
    steps[3].classList.remove("current_step")
}

function step_4_nxt(){
    step1.classList.add("remove_past")
    step2.classList.add("remove_past")
    step3.classList.add("remove_past")
    step4.classList.add("remove_past")
    GoodBye.classList.remove("remove_past")

}
step4_go_nxt.addEventListener("click",step_4_nxt)
step4_go_back.addEventListener("click",step_4_go_back)



/////////////////////////////////////////////////// GoodBye Page ////////////////////////////////////////////////////////




