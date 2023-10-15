exports.instaceOf = function () {
  let Bird = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  let crow = new Bird("Alexis", "black");
  let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };

  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;

  }

  let myHouse = new House(2)
  console.log(myHouse, myHouse instanceof House)

};