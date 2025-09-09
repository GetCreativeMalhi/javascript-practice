const cars = ["camry", "mazda3", "lancer", "wrx", "mazda9"];

let newCars = cars.map((car) =>  car.toUpperCase());
console.log(newCars);

let filteredCars = cars.filter((car) => car.startsWith("m"));
console.log(filteredCars);