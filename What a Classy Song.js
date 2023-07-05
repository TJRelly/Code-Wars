class Song {
  
    constructor(title, artist) {
      this.title = title
      this.artist = artist
      this._listeners = {}
    }
    
    howMany(names){
      let unique = 0
      for (let name of names) { 
        let listener = name.toLowerCase()
        if (!(listener in this._listeners)) {
          this._listeners[listener] = true
          unique ++
        }
      }
      return unique
    }
  }

  class Song {
  
    constructor(title, artist) {
      this.title = title
      this.artist = artist
      this._listeners = {}
    }
    
    howMany(names){
      return names.reduce((uniqueListeners, name) => {
          let listener = name.toLowerCase()
          if (!this._listeners[listener]) {
            this._listeners[listener] = true
            uniqueListeners ++
          }
          return uniqueListeners
      }, 0)
    }
  }

  class Song {
  
    constructor(title, artist) {
      this.title = title
      this.artist = artist
      this._listeners = new Set()
    }
    
    howMany(names){
      return names.reduce((uniqueListeners, name) => {
          let listener = name.toLowerCase()
          if (!this._listeners.has(listener)) {
            this._listeners.add(listener)
            uniqueListeners ++
          }
          return uniqueListeners
      }, 0)
    }
  }

