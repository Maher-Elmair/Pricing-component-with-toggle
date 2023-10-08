// object data of page
const allPackagesPrice = [
    {
        "Name": 'Basic',
        "Monthly": 19.99,
        "Annually": 199.99
    },
    {
        "Name": 'Professional',
        "Monthly": 24.99,
        "Annually": 249.99
    },
    {
        "Name": 'Master',
        "Monthly": 39.99,
        "Annually": 399.99
    }
]

let price = document.querySelectorAll('.Packages-price');
let inputSwitch = document.getElementById("transform");
let button = document.querySelectorAll('.btn');
let firstPrice = document.getElementById("first_price");
let secondPrice = document.getElementById("second_price");
let ThirdPrice = document.getElementById("Third_price");

firstPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[0].Monthly 
secondPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[1].Monthly
ThirdPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[2].Monthly

function billingIntToggle(value) {
    if (value === true) {
        inputSwitch.setAttribute("aria-checked", false);
        firstPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[0].Annually
        secondPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[1].Annually
        ThirdPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[2].Annually
    } else {
        inputSwitch.setAttribute("aria-checked", true);
        firstPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[0].Monthly
        secondPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[1].Monthly
        ThirdPrice.innerHTML = "<small>&dollar;</small> "+ allPackagesPrice[2].Monthly
    }
}

document.addEventListener("DOMContentLoaded", function () {
    inputSwitch.oninput = function () {
        billingIntToggle(this.checked);
    };

    for (let i = 0; i < button.length; i++) {
        button[i].onclick = () => {
            window.location.reload(true)
        };
    }
});
