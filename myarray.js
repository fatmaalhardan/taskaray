let myarray = []
myarray.push("apple","banana","cherry");
console.log(myarray[0])
console.log(myarray[2])
myarray.push("mango")
myarray.pop()

const numbers = [5, 10, 15, 20, 25]

numbers.splice(2)
console.log(numbers)
function getLen(array){
    return array.length
}
console.log(getLen(numbers))