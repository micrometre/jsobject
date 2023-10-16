export function instaceOf() {
  let Bird = function (name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  let crow = new Bird("Alexis", "black");
  
  
  
  let ownProps = [];
    
  for (let property in crow) {
    if(crow.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }

  
  
  
  
  console.log(crow, crow instanceof Bird)

}