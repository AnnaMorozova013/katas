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

// solution to: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// 'Duplicate Encoder'

function duplicateEncode(word) {
  let string = word.toLowerCase();
  let encodedString = '';
  for (var i = 0; i < string.length; i++) {
    if (string.lastIndexOf(string[i]) === string.indexOf(string[i])) {
      encodedString += '('
    }
    else encodedString += ')'
  }
  return encodedString
}

// solution to: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript
// 'Who likes it?'

function likes(names) {
  if (names.length == 0) {
    return `no one likes this`
  }
  else if (names.length == 1) {
    return names[0] + ` likes this`;
  }
  else if (names.length == 2) {
    return names[0] + ` and ` + names[1] + ` like this`;
  }
  else if (names.length == 3) {
    return names[0] + `, ` + names[1] + ` and ` + names[2] + ` like this`;
  }
  else {
    return names[0] + `, ` + names[1] + ` and ` + (names.length - 2) + ` others like this`;
  }
}

// solution to: https://www.codewars.com/kata/5d23d89906f92a00267bb83d
// 'New Cashier Does Not Know About Space or Shift'

function getOrder(input) {
  let orderedInput = ''
  const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']
  for (let food of menu) {
    const num = input.split(food.toLowerCase()).length - 1
    //console.log(num)
    for (let i = 0; i < num; i++) {
      orderedInput += ' ' + food
    }

  }
  return orderedInput.slice(1);
}


// solution to: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript
// 'Detect Pangram'

function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const str = string.toLowerCase();

  for (let i = 0; i < alphabet.length - 1; i += 1) {
    if (str.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
}

// solution to: https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript
// 'Delete occurrences of an element if it occurs more than n times'

function deleteNth(arr, n) {
  const occNum = {};
  return arr.filter(num => {
    if (occNum[num]) {
      occNum[num]++;
    } else {
      occNum[num] = 1;
    }
    // Return boolean whether to include current number or not
    return occNum[num] <= n;
  });
}

// solution to: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript
// 'Find the parity outlier'

function findOutlier(integers) {
  let oddNums = [];
  let evenNums = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNums.push(integers[i]);
    } else {
      oddNums.push(integers[i]);
    }
  }
  if (evenNums.length == 1) {
    return evenNums[0];
  } else {
    return oddNums[0];
  }
}

// solution to: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript
// 'Find the unique number'

function findUniq(arr) {
  let repeatingNum = arr.filter((item, index) => arr.indexOf(item) !== index)
  return arr.filter((item) => item !== repeatingNum[0])[0]
}

// solution to: https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
// 'Moving Zeros To The End'

function moveZeros(arr) {
  const newArr = [...arr];
  newArr.forEach((element) => {
    if (element === 0) {
      newArr.splice(newArr.indexOf(element), 1) && newArr.push(element);
    }
  });
  return newArr;
};
