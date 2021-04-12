let fromLocation = 4;
let toLocation = 1;
let weight = 0.12;

console.log(fromLocation + toLocation);

const finalPrice = () => {
    output = [];
    if (weight <= 0 && fromLocation === toLocation) {
        output = 2.5 * weight;
    } else if (weight === 1 && fromLocation === toLocation) {
        output = 5 * weight;
    } else if (weight === 2 && fromLocation === toLocation) {
        output = 10 * weight;
    } else if ((weight >= 3 || weight < 10) && fromLocation === toLocation) {
        output = 20 * weight;
    } else if ((weight = 0 || weight < 1) && fromLocation + toLocation === 5) {
        output = 2.5 * weight;
    }
    return output.toFixed(2);
};

console.log(finalPrice());
