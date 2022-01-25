import Vehicle from "./vehicle.js";
//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
    super(make, model, year, color, mileage);
    this.maxPassengers = 6;
    this.passenger = 0;
    this.numberOfWeheels = 4;
    this.maximumSpeed = 200;
    this.fuel = 100;
    this.scheduleService = false;
    }
}

loadPassenger(num); {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " is at full capacity.");

        }
    } 
}

start();{
    if(this.fuel > 0) {
        console.log('this vehicle started')
    }
    else{
        console.log('out of fuel')
    }
}

scheduleService(mileage);{
    if(this.mileage > 30000){
        this.scheduleService == true
        return this.scheduleService
    }
}