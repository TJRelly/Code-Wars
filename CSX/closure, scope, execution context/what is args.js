//input: func
//output: func

function dateStamp(cb) {
    let cache = {}
    //passed in function accepts same args as cb
    function logDateAndOutput(...args) { 
        //output: object 
            //key: date, value: today's date no time (use Date object)
            //key: output, value: invoked cb result
      cache.date = new Date().toDateString()
      cache.output = cb(...args)
      return cache
    }
        
    return logDateAndOutput
  }
  
  // Uncomment these to check your work!
  const stampedMultBy2 = dateStamp(n => n * 2);
  console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
  console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }