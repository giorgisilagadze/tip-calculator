let bill = document.getElementById("bill");
let custom = document.getElementById("custom");
let numb = document.getElementById("numb");
let total = document.getElementById("total");
let tip_per = document.getElementById("tip_per");
const buttons = document.getElementsByClassName("div-butt");
let tip = 0;
let result;
let res_tip;
let p_cant = document.getElementById("p-cant");
let reset = document.getElementById("reset");

function upper_formula() {
    return ((parseInt(bill.value) / parseInt(numb.value)) * (parseInt(tip) / 100.0)).toFixed(2);

}

function lower_formula() {
    return ((parseInt(bill.value) + ((parseInt(bill.value) * (parseInt(tip) / 100.0)))) / parseInt(numb.value)).toFixed(2);
}

function valid() {
    if (bill.value <= 0 || bill.value == "" || numb.value <= 0 || numb.value == "") {
        res_tip = "$0.00";
        result = "$0.00";
        reset.style.background = "";
    } else {
        res_tip = "$" + upper_formula();
        result = "$" + lower_formula();
        p_cant.style.display = "none";
        numb.style.border = "none";
        reset.style.background = "#26C2AE";
    }

    tip_per.innerHTML = res_tip;
    total.innerHTML = result;

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = "";
        }

        event.target.style.background = "#26C2AE";
        tip = (event.target.innerText).slice(0, (event.target.innerText).length - 1);
        valid();
    })
}

bill.addEventListener("input", () => {
    valid();  
})

custom.addEventListener("input", () => {
    if (custom.value == "") {
        tip = 0;
    } else {
        tip = custom.value;
    }
    if (bill.value <= 0 || bill.value == "" || numb.value <= 0 || numb.value == "" || custom.value < 0) {
        res_tip = "$0.00";
        result = "$0.00";
        reset.style.background = "";
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = ""
        }
        p_cant.style.display = "none";
        numb.style.border = "none";
        reset.style.background = "#26C2AE";
    } else {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = ""
        }
        res_tip = "$" + upper_formula();
        result = "$" + lower_formula();
        p_cant.style.display = "none";
        numb.style.border = "none";
        reset.style.background = "#26C2AE";
    }

    tip_per.innerHTML = res_tip;
    total.innerHTML = result;
})

numb.addEventListener("input", () => {
    if (numb.value == 0 && numb.value != "") {
        res_tip = "$0.00";
        result = "$0.00";
        numb.style.border = "solid 1px red";
        p_cant.style.display = "block";
        reset.style.background = "";
    } else if (numb.value < 0 || numb.value == "" || bill.value < 0 || bill.value == "") {
        res_tip = "$0.00";
        result = "$0.00";
        reset.style.background = "";
        p_cant.style.display = "none";
        numb.style.border = "none";
    } else {
        res_tip = "$" + upper_formula();
        result = "$" + lower_formula();
        p_cant.style.display = "none";
        numb.style.border = "none";
        reset.style.background = "#26C2AE";
    }

    tip_per.innerHTML = res_tip;
    total.innerHTML = result;
})


reset.addEventListener("click", () => {
    tip_per.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
    p_cant.style.display = "none";
    numb.style.border = "none";
    bill.value = "";
    numb.value = "";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = ""
    }
    reset.style.background = ""
})