export function ownProperties () {
    function Bird(name, color) {
        this.name = name;
        this.numLegs = 2;
        this.color= color
      }
      let canary = new Bird("Tweety", "Black");
    
      let ownProps = [];
    
      for (let property in canary) {
        if(canary.hasOwnProperty(property)) {
          ownProps.push(property);
        }
      }
      console.log(ownProps);
  }