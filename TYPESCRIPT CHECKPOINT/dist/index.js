"use strict";
// Implement the Car class which implements Vehicle interface
class Car {
    // Constructor to initialize the car's properties
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method to log a custom message
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2020);
// Call the start method to verify the output
myCar.start(); // Logs "Car engine started" to the console
