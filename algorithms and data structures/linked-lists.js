class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(array)
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null,
    }
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
}

// Can use a class instead of repeating code:
// const newNode = {
//   value: value,
//   next: null,
// }

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// const newNode = new Node(value)

const myLinkedList = new LinkedList(10)

myLinkedList.prepend(5)
myLinkedList.append(16)
myLinkedList.prepend(22)
myLinkedList.append(4)
myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.remove(2)
