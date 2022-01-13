// solution to: https://www.codewars.com/kata/57b06f90e298a7b53d000a86
// 'The Supermarket Queue'

function queueTime(customers, n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(0)
    }
    for (let customer of customers) {
        //always add up to the first tile
        result[0] += customer
        //sort array so that lowest number is first
        result.sort((a, b) => a - b)
    }
    // return last index of array
    return result[result.length - 1]
}