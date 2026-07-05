// To make an object literal:
const dog = {
    name: "Rusty",
    breed: "unknown", //object is made of key-value pairs
    isAlive: false,
    age: 7
}
// All keys will be turned into strings!

// To retrieve a value:
dog.age; //7
dog["age"]; //7

//updating values
dog.breed = "mutt";  // mutt is now the value of the key breed and unknown is no longer the value of the key breed
dog["age"] = 8;