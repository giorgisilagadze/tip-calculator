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


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = ""
        }
        event.target.style.background = "#26C2AE";
        tip = ((event.target.innerText).slice(0, (event.target.innerText).length - 1));
        if (numb.value <= 0 || numb.value == "" || bill.value <= 0 || bill.value == "") {
            result = "$0.00";
            res_tip = "$0.00";
            reset.style.background = "";
        } else {
            p_cant.style.display = "none";
            numb.style.border = "none";
            result = ((parseInt(bill.value) + (parseInt(bill.value) * (parseInt(tip) / 100.0))) / parseInt(numb.value)).toFixed(2);
            res_tip = (((parseInt(bill.value) / parseInt(numb.value)) * (parseInt(tip) / 100.0))).toFixed(2);
            reset.style.background = "#26C2AE"
        }

        total.innerHTML = result;
        tip_per.innerHTML = res_tip;
    })
}

bill.addEventListener("input", () => {
    if (numb.value <= 0 || numb.value == "" || bill.value <= 0 || bill.value == "") {
        result = "$0.00";
        res_tip = "$0.00";
        reset.style.background = "";
    } else {
        p_cant.style.display = "none";
        numb.style.border = "none";
        result = ((parseInt(bill.value) + (parseInt(bill.value) * (parseInt(tip) / 100.0))) / parseInt(numb.value)).toFixed(2);
        res_tip = (((parseInt(bill.value) / parseInt(numb.value)) * (parseInt(tip) / 100.0))).toFixed(2);
        reset.style.background = "#26C2AE";
    }

    total.innerHTML = result;
    tip_per.innerHTML = res_tip;
})

numb.addEventListener("input", () => {
    if (numb.value <= 0 || numb.value == "") {
        result = "$0.00";
        res_tip = "$0.00";
        numb.style.border = "solid 1px red";
        p_cant.style.display = "block";
        reset.style.background = "";
    } else {
        p_cant.style.display = "none";
        numb.style.border = "none";
        result = ((parseInt(bill.value) + (parseInt(bill.value) * (parseInt(tip) / 100.0))) / parseInt(numb.value)).toFixed(2);
        res_tip = (((parseInt(bill.value) / parseInt(numb.value)) * (parseInt(tip) / 100.0))).toFixed(2);
        reset.style.background = "#26C2AE"
    }


    total.innerHTML = result;
    tip_per.innerHTML = res_tip;

})

custom.addEventListener("input", () => {
    if ((custom.value <= 0 || custom.value == "") && (numb.value > 0 || numb.value != "" || bill.value > 0 || bill.value != "")) {
        result = ((parseInt(bill.value) + (parseInt(bill.value) * (parseInt(tip) / 100.0))) / parseInt(numb.value)).toFixed(2);
        res_tip = (((parseInt(bill.value) / parseInt(numb.value)) * (parseInt(tip) / 100.0))).toFixed(2);
        reset.style.background = "#26C2AE";
    } else {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = ""
        }
        result = ((parseInt(bill.value) + (parseInt(bill.value) * (parseInt(custom.value) / 100.0))) / parseInt(numb.value)).toFixed(2);
        res_tip = (((parseInt(bill.value) / parseInt(numb.value)) * (parseInt(custom.value) / 100.0))).toFixed(2)
        reset.style.background = "#26C2AE";
    }

    total.innerHTML = result;
    tip_per.innerHTML = res_tip;
})

reset.addEventListener("click", () => {
    bill.value = "";
    custom.value = "";
    numb.value = "";
    result = "$0.00";
    res_tip = "$0.00";
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = ""
    }
    reset.style.background = "";

    total.innerHTML = result;
    tip_per.innerHTML = res_tip;
})

