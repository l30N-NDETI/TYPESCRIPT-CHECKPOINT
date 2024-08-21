
interface Vehicle {
    make: string;      // Manufacturer of the vehicle
    model: string;     // Model of the vehicle
    year: number;      // Year of manufacture
    
    // Method to start the vehicle
    start(): void;     // Returns void and logs a message
  }
  
  // Implement the Car class which implements Vehicle interface
  class Car implements Vehicle {
    make: string;      // Make of the car
    model: string;     // Model of the car
    year: number;      // Year of manufacture
  
    // Constructor to initialize the car's properties
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implement the start method to log a custom message
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2020);
  
  // Call the start method to verify the output
  myCar.start();   // Logs "Car engine started" to the console
  