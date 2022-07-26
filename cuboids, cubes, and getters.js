class Cuboid {
    constructor(length, width, height){
      this.length = length
      this.width = width
      this.height = height
    }
    get volume() {
      let {length, width, height} = this
      return length * width * height
    }
    get surfaceArea() {
      let {length, width, height} = this
      return 2 * (length * width + length * height + height * width)
    }
  }
  
  class Cube extends Cuboid {
    constructor(length, width, height){
      super(length, width, height)
      this.width = length
      this.height = length
    }
  }

  class Cuboid {
    constructor(length, width, height){
      this.length = length
      this.width = width
      this.height = height
    }
    get volume() {
      let {length, width, height} = this
      return length * width * height
    }
    get surfaceArea() {
      let {length, width, height} = this
      return 2 * (length * width + length * height + height * width)
    }
  }
  
  class Cube extends Cuboid {
    constructor(length){
      super(length, length, length)
    }
  }