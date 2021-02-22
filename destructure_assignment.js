//use destructuring assignment to assign variables from nested objects
const LOCAL_FORECAST = {
    yesterday: {low: 61, high: 75},
    today: {low: 64, high: 77},
    tomorrow: {low: 68, high: 80}
};

const{today: {low, high}} = LOCAL_FORECAST;//destructuring assignment in ES6