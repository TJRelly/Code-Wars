class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }

  interact(quark) {
    let initial = this.color;
    this.color = quark.color;
    quark.color = initial;
  }
}

let q3 = new Quark("red", "up");
let q4 = new Quark("blue", "down");

console.log(q3.color, q4.color);
q3.interact(q4);
console.log(q3.color, q4.color);
