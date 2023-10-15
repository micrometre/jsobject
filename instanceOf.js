exports.myDateTime = function () {
  let Bird = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }

  let crow = new Bird("Alexis", "black");

  crow instanceof Bird;


  let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };

  canary instanceof Bird;



  return Date();
};