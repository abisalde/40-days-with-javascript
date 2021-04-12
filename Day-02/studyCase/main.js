// Declaring Global Variable

const weight = document.getElementById('weight').value;
const fromLocation = document.getElementById('fromLocation').value;
const toLocation = document.getElementById('toLocation').value;
const priceOutput = document.getElementById('priceOutput');

function validate_keydown(evt, obj) {
    let charCode = evt.which ? evt.which : event.keyCode;
    let value = obj.value;
    let dotcontains = value.indexOf('.') != -1;
    if (dotcontains) if (charCode == 46) return false;
    if (charCode == 46) return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}

const finalPrice = () => {
    if (weight <= 0 || fromLocation === toLocation) {
        outputPrice = 6 * weight;
    }

    return (priceOutput.innerHTML = outputPrice.toFixed(2));
};

finalPrice();
