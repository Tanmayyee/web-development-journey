class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`;
    }
    age() {
        return `${this.age}`;
    }
}

// 'extends' links this class to a parent class (Pet). 
// It allows Cat to inherit all the methods and properties from Pet.
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('IN CAT CONSTRUCTOR!');
        
        // 'super' calls the parent's (Pet's) constructor. 
        // It passes 'name' and 'age' up to Pet so it can set them up for us.
        super(name, age);
        
        this.livesLeft = livesLeft;
    }
    meow() {
        return "meowww !!!!";
    }
}

class Dog extends Pet {
    bark() {
        return "WOooofff !!!";
    }
    
    // Method Overriding: If a child class has the exact same method as a parent, it overwrites it.
    // JavaScript looks in the Dog class first. It will only look to the parent (Pet) 
    // if the method isn't found here.
    eat() {
		return `${this.name} scarfs his food!`;
	}
}

// const firstDog = new Dog('adam', 5);