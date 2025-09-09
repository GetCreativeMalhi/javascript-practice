function toUpper (string){
   return string.toUpperCase();
}

const cars = ["mercedes", "mitsubishi", "subaru", "toyota"];

let newCars = cars.map(toUpper);
console.log(newCars);
