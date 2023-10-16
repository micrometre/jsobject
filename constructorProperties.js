export function constructorProperties() {
  function Dog(name) {
    this.name = name;
  }
let beagle = new Dog();

  function joinDogFraternity(candidate) {
    if(candidate.constructor === Dog){
      return true;
    }else{
      return false
    }
  }
  console.log(beagle.constructor === Dog);

}