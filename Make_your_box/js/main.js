let inputs = document.querySelectorAll(".form-control")
let selector = document.querySelector(".form-select")
let box = document.querySelector(".box")
function test(){
    let width = inputs[0].value;
    let height = inputs[1].value;
    let border_type = selector.value;
    let border_sz = inputs[2].value;
    let margin = inputs[3].value;
    let shadow_sz =inputs[4].value;
    let box_cl = inputs[5].value;
    let border_cl = inputs[6].value;
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.border = `3px ${border_type} white`;
    box.style.backgroundColor = box_cl ;
    box.style.border = `${border_sz}px ${border_type} white`;
    box.style.border = `${border_sz}px ${border_type} ${border_cl}`;
    box.style.margin = margin +'px';
    if (shadow_sz != 0) {
        box.style.boxShadow = `${shadow_sz}px 5px 10px gray`;
    } else {
        box.style.boxShadow = "none"; 
    }



}

for(let i = 0; i < inputs.length;i++){
    inputs[i].addEventListener("change",test)
}
selector.addEventListener("change",test)