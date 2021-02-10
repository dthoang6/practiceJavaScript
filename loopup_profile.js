
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++) {
        if (name == contacts["firstName"]) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            }
            else {//prop does not correspond to any valid properties of a contact found to match name then
                return "No such property";
            }
        }//the for loop continues on to the next object in the contact list array.
    }
    return "No such contact";//if the firstName parameter doesnt match by the final contacts object, exit for loop and return.
}

console.log(lookUpProfile("Akira", "likes"));