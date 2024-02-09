// Declare a function 'OrderedList', which takes in no arguments and returns an instance of an 'OrderedList' object when invoked with the 'new' keyword. OrderedList objects should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. However, all elements are in sorted order.

// All OrderedList objects should contain their own 'length' property, which keeps track of the number of items they contain. An OrderedList should also keep track of whether it is sorted in reverse order with a isReversed property. When an OrderedList is first created, it should have a length of 0 and an isReversed value of false.

function OrderedList(){
    this.length = 0
    this.isReversed = false
}

let list = new OrderedList()

// console.log(list)
// console.log(list.length)
// console.log(list.isReversed)

// - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'OrderedList'. 'add' should take in a number as a single argument, and when invoked on an OrderedList instance, should add the number to that OrderedList in descending order if the list is not reversed, or ascending order if the list is reversed. Update the OrderedList's length property appropriately, and return the length of the OrderedList.

//func add on prototye
//input arg

// - Task 2: Declare a function, 'reverse', which is accessible to ALL instances of 'OrderedList'. 'reverse' should take in no arguments, and when invoked on an OrderedList instance, should reverse the order of all elements in that OrderedList (except the 'length' property), and change the value of isReversed.


// - Task 3: Declare a function, 'getMax', which is accessible to ALL instances of 'OrderedList'. 'getMax' should take in no arguments, and when invoked on an OrderedList instance, should return the maximum number in the instance.