function mCars(string){
    return string.startsWith("m");
}
const cars = ["mazda", "toyota", "mercedes", "ram"];

let newCars = cars.filter(mCars);
console.log(newCars);
