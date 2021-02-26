// Track the temperature inside the class in one scale, either Fahrenheit or Celcius
class Thermostat{
    constructor(Fahrenheit) {
        this.Fahrenheit = Fahrenheit;
    }
    //getters to obtain the temperature in Celsius
    get temperature() {
        return 5/9*(this.Fahrenheit-32);
    }
    //setters to set the temperature in Celsius
    set temperature(celsius) {
        this.Fahrenheit = celsius*9/5 + 32;
    }
}
//testing
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);

