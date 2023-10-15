export function prototypeProperties() {
    function Dog(name) {
        this.name = name;
        Dog.prototype.numLegs = 4

    }



    // Only change code above this line
    let beagle = new Dog("Snoopy");
    console.log(beagle.name)
    console.log(beagle.numLegs)



}