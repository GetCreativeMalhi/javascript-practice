const cars = ["mazda3", "wrx", "camry"];

let message = "Here is your collection: ";
let i = 0 ;

while(i < cars.length){
    if (i === cars.length - 1){
        message += ` ${cars[i]}.`;
    } else {
        message += ` ${cars[i]}, `;
    }
    i++;
}
console.log(message);
