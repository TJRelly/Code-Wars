
class Person {
    constructor(name) {
        this.name = name
    }
    greet(name2) {
        return "Hello " + name2 + ", my name is " + this.name;
    }
}

class Person {
    constructor(name){
      this.name = name
      this.greet = yourName => "Hello " + yourName + ", my name is " + this.name
    }
  }