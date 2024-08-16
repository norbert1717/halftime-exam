/*


**************************************
**************************************
**                                  **
**     DO NOT CHANGE THIS FILE!     **
**                                  **
**************************************
**************************************


*/

const fizzBuzz = require('./fizzBuzz')
const leetSpeak = require('./leetSpeak')
const gettingDrunkCheap = require('./gettingDrunkCheap')

const it = (desc, fn) => {
    try {
        fn()
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc)
    } catch (err) {
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc)
        //console.log(err)
    }
}

function assert(condition) {
    if (!condition) {
        throw new Error()
    }
}

console.log('\nfizzBuzz:')
it('should work with "fizz" number', () => {
  assert(fizzBuzz(3,3)[0] === "fizz")
})
it('should work with "buzz" number', () => {
  assert(fizzBuzz(5,5)[0] === "buzz")
})
it('should work with "fizzbuzz" number', () => {
  assert(fizzBuzz(15,15)[0] === "fizzbuzz")
})
it('should work with range', () => {
  assert(fizzBuzz(10,15).length === 6)
})
it('should work with higher num1 and lower num2', () => {
  assert(fizzBuzz(15,10).length === 6)
})
it('shoud give the right values', () => {
  assert(fizzBuzz(10,15)[0] === "buzz" && fizzBuzz(10,15)[1] === 11 && fizzBuzz(10,15)[2] === "fizz" && fizzBuzz(10,15)[3] === 13 && fizzBuzz(10,15)[4] === 14 && fizzBuzz(10,15)[5] === "fizzbuzz")
})

console.log('\nleetSpeak:')
it('should work with simple sentence', () => {
  assert(leetSpeak("hello world") === "H3110 W0R1D")
})
it('should work with one word', () => {
  assert(leetSpeak("sziasztok") === "52145270K")
})
it('should work with complex sentence', () => {
  assert(leetSpeak("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quibusdam odit perferendis magnam.") === "10R3M 1P5UM D010R 517 4M37 C0N53C737UR 4D1P151C1N6 3117. 1480R3 QU18U5D4M 0D17 P3RF3R3ND15 M46N4M.")
})

const shortDrinks = [
  {
    name: "Vodka",
    price: 5500,
    abv: 37.5,
    volume: 0.7
  }, 
  {
    name: "Whiskey",
    price: 7000,
    abv: 40,
    volume: 0.7
  }, 
  {
    name: "Pálinka",
    price: 10000,
    abv: 50,
    volume: 1
  }
]

const commercialBeers = [
  {
    name: "Soproni Világos",
    price: 359,
    abv: 4.2,
    volume: 0.5
  },
  {
    name: "Dreher Gold",
    price: 399,
    abv: 5,
    volume: 0.5
  },
  {
    name: "Dreher Bak",
    price: 419,
    abv: 7.3,
    volume: 0.5
  }
]

const craftBeers = [
  {
    name: "Szentandrási Bandibá",
    price: 999,
    abv: 6,
    volume: 0.33
  },
  {
    name: "Mad Scientist Tokyo Lemonade",
    price: 1399,
    abv: 4.2,
    volume: 0.44
  },
  {
    name: "Monyo Flying Rabbit",
    price: 999,
    abv: 6.5,
    volume: 0.33
  }
]

const allOfTheDrinks = [...shortDrinks, ...commercialBeers, ...craftBeers]

console.log('\ngettingDrunkCheap:')
it('should work with whole pricePerAbv', () => {
  assert(gettingDrunkCheap(shortDrinks).name === "Pálinka" && gettingDrunkCheap(shortDrinks).pricePerAbv === 200)
})
it('should work with not whole pricePerAbv', () => {
  assert(gettingDrunkCheap(craftBeers).name === "Monyo Flying Rabbit" && gettingDrunkCheap(craftBeers).pricePerAbv === 465)
})
it('should work with a lot of drinks', () => {
  assert(gettingDrunkCheap(allOfTheDrinks).name === "Dreher Bak" && gettingDrunkCheap(allOfTheDrinks).pricePerAbv === 114)
})