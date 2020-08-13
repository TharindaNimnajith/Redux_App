import {compose, pipe} from 'lodash/fp'
import {Map} from 'immutable'
import {produce} from 'immer'
import store from './store'
// import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './actionTypes'
import * as actions from './actionTypes'
import * as action from './actions'
import {bugAdded, bugAdded1, bugRemoved, bugRemoved1, bugResolved, bugResolved1} from './actions'

console.log('Hello World!')

function sayHello() {
  return 'Hello World!'
}

let fn1 = sayHello()
console.log(fn1)

let fn2 = sayHello
fn2()
sayHello()

function greet(fnMessage) {
  console.log(fnMessage())
}

greet(sayHello)

function sayHello2() {
  return function () {
    return 'Hello World!'
  }
}

let fn3 = sayHello2()
let message = fn3()
console.log(message)

let numbers = [1, 2, 3]
numbers.map(numbers => numbers * 2)

setTimeout(() => console.log('Hello World!'), 1000)

let input = '  JavaScript    '
let output = '<div>' + input.trim() + '</div>'
console.log(output)

const trim = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`
const wrapInSpan = str => `<span>${str}</span>`
const toLowerCase = str => str.toLowerCase()
const result1 = wrapInDiv(toLowerCase(trim(input)))
const result2 = wrapInSpan(toLowerCase(trim(input)))
console.log(result1)
console.log(result2)

const transform1 = compose(wrapInDiv, toLowerCase, trim)
transform1(input)

const transform2 = pipe(trim, toLowerCase, wrapInSpan)
transform2(input)

const wrap1 = (type, str) => `<${type}>${str}</${type}>`
const transform3 = pipe(trim, toLowerCase, wrap1)
transform3(input)
// const transform4 = pipe(trim, toLowerCase, wrap1('div'))
// transform4(input)

function add(a, b) {
  return a + b
}

add(3, 5)

function add1(a) {
  return function (b) {
    return a + b
  }
}

const add2 = add1(3)
add2(5)
add1(3)(5)

const add3 = a => b => a + b
add3(3)(5)

const wrap2 = type => str => `<${type}>${str}</${type}>`
const transform5 = pipe(trim, toLowerCase, wrap2('div'))
console.log(transform5(input))

function notPureFunction(number) {
  return number * Math.random()
}

console.log(notPureFunction(4))
console.log(notPureFunction(4))
console.log(notPureFunction(4))

function pureFunction(number) {
  return number * 2
}

console.log(pureFunction(4))
console.log(pureFunction(4))
console.log(pureFunction(4))

let name = 'Mosh'
let newName = name.toUpperCase()
console.log(newName)

let book = {}
book.title = '...'

const book1 = {}
book1.title = '...'
// book1 = {}

const person = {
  name: 'John'
}
console.log(person)
person.name = 'Jack'
console.log(person)
const updated1 = Object.assign({}, person, {name: 'Harry', age: 22})
console.log(updated1)
const updated2 = {...person, name: 'Ron'}
console.log(updated2)

const user = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Francisco'
  }
}
console.log(user)
console.log('1')
const updated3 = {...user, name: 'Bob'}
console.log(updated3)
console.log('2')
console.log(user)
console.log('3')
updated3.address.city = 'New York'
console.log(updated3)
console.log('4')
console.log(user)

const updated4 = {
  ...user,
  address: {
    ...user.address,
    city: 'Washington'
  },
  name: 'James'
}
console.log('5')
console.log(updated4)
console.log('6')
console.log(user)

const numberArray = [1, 2, 3]
const added1 = [...numberArray, 4]
const added2 = [4, ...numberArray]
const added3 = [
  ...numberArray.slice(0, numberArray.indexOf(2)),
  4,
  ...numberArray.slice(numberArray.indexOf(2))
]
console.log(added1)
console.log(added2)
console.log(added3)

let numbersArray = [1, 2, 3]
numbersArray = [...numbersArray, 4]
numbersArray = [4, ...numbersArray]
numbersArray = [
  ...numbersArray.slice(0, numbersArray.indexOf(2)),
  4,
  ...numbersArray.slice(numbersArray.indexOf(2))
]
console.log(numbersArray)

const removed = numberArray.filter(n => n !== 2)
console.log(removed)

const updated5 = numberArray.map(n => n === 2 ? 20 : n)
console.log(updated5)

let book2 = {
  title: 'Harry Potter'
}

function publish(book) {
  book.isPublished = true
}

publish(book2)
console.log(book2)

let book3 = Map({
  title: 'Harry Potter'
})
console.log(book3)
console.log(book3.get('title'))
console.log(book3.toJS())

let book4 = Map({
  title: 'Harry Potter'
})

function publishBook(book) {
  return book.set('isPublished', true)
}

book4 = publishBook(book4)
console.log(book4.toJS())

let book5 = {
  title: 'Harry Potter'
}

function publishBookImmer(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true
  })
}

let updatedBook = publishBookImmer(book5)
console.log(updatedBook)
console.log('---------')

/*
{
  categories: [],
  products: [],
  cart: {},
  user: {}
}
*/

/*
store.currentUser = {
  name: 'Mosh'
}
*/

function reducer(store, action) {
  // return updated store
  const updated = {...store}
}

/*
[
  {
    id: 1,
    description: '',
    resolved: false
  },
  { ... },
  { ... },
]
*/

/*
{
  bugs: [
    {
      id: 1,
      description: '',
      resolved: false
    }
  ],
  currentUser: {}
}
*/

/*
{
  type: 'ADD_BUG',
  description: '...'
}

{
  type: 'bugAdded',
  description: '...'
}

{
  type: 'bugAdded',
  payload: {
    description: '...'
  }
}

{
  type: 'bugRemoved',
  payload: {
    id: 1
  }
}
*/

console.log(store)
console.log(store.getState())

// state = reducer(state, action)
// notify the subscribers

store.dispatch({
  // type: 'bugAdded',
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug 1'
  }
})
console.log(store.getState())

store.dispatch({
  // type: 'bugRemoved',
  type: actions.BUG_REMOVED,
  payload: {
    id: 1
  }
})
console.log(store.getState())

console.log('subscribe')

store.subscribe(() => {
  console.log('Store changed!', store.getState())
})

store.dispatch({
  // type: 'bugAdded',
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug 2'
  }
})
console.log(store.getState())

store.dispatch({
  // type: 'bugRemoved',
  type: actions.BUG_REMOVED,
  payload: {
    id: 2
  }
})
console.log(store.getState())

console.log('unsubscribe')

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState())
})

store.dispatch({
  // type: 'bugAdded',
  type: actions.BUG_ADDED,
  payload: {
    description: 'Bug 3'
  }
})
console.log(store.getState())

unsubscribe()

store.dispatch({
  // type: 'bugRemoved',
  type: actions.BUG_REMOVED,
  payload: {
    id: 3
  }
})
console.log(store.getState())

store.dispatch(action.bugAdded('Bug 4'))
console.log(store.getState())

store.dispatch(action.bugRemoved(4))
console.log(store.getState())

store.dispatch(action.bugAdded1('Bug 5'))
console.log(store.getState())

store.dispatch(action.bugRemoved1(5))
console.log(store.getState())

store.dispatch(bugAdded('Bug 6'))
console.log(store.getState())

store.dispatch(bugRemoved(6))
console.log(store.getState())

store.dispatch(bugAdded1('Bug 7'))
console.log(store.getState())

store.dispatch(bugRemoved1(7))
console.log(store.getState())

store.dispatch(bugAdded1('Bug 8'))
console.log(store.getState())
store.dispatch(bugResolved(8))
console.log(store.getState())

store.dispatch(bugAdded1('Bug 9'))
console.log(store.getState())
store.dispatch(bugResolved1(9))
console.log(store.getState())
