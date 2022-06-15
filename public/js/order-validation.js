var quantityAmericano = document.getElementById("quantity_americano");
var quantityLatte = document.getElementById("quantity_latte");
var quantityLatteDecafe = document.getElementById("quantity_decafe_latte");
var quantityEspresso = document.getElementById("quantity_espresso");

var validationBox = document.getElementById("validation-message");
validationBox.style.display = "none";

let form = document.getElementById('coffee-order-form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (form.checkValidity() === false){
        form.reportValidity();   
        return; 
    }
    if(quantityAmericano.value == 0 &&
        quantityLatte.value == 0 &&
        quantityLatteDecafe.value == 0 &&
        quantityEspresso.value == 0)
        {
            validationBox.style.display = "block";
            validationBox.innerText = "Error: Must add at least 1 item to your order."
            return;
        }

    window.location.href='order-confirmation.html';
    return;
})