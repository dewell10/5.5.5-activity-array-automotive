import { Vehicle } from "./vehicleBaseClass.js";

// Unfamiliar with this style of import open to using in the future but ES6 Modules would seem to work fine as well

class Mercury extends Vehicle{
    constructor(make, model, year, color, mileage, MaximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage);
        this.MaximumPassengers = MaximumPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }
    loadPassenger(numNewPassengers){
        if(numNewPassengers + this.passenger < this.MaximumPassengers){
            this.availableRoom = true
        }else{
            this.availableRoom = false
        }
    }
    // renamed this method from scheduledservice to checkScheduleService to avoid confusion with the property
    checkScheduleService(){
        if(this.mileage > 30000){
         this.scheduleService = true
        }else{
            this.scheduleService = false
        }
    }
}

// solution code has the variables defined in the constructor I dont think this would be a useful practice
let mercurySedan = new Mercury("Mercury","Sedan",1965,"blue",3000,6,0,4,200,100,false)
console.log(mercurySedan)


// calling methods for test
mercurySedan.checkScheduleService()
mercurySedan.loadPassenger(1)
// checking that methods are accessible through console.log
console.log(mercurySedan.scheduleService)
console.log(mercurySedan.availableRoom)