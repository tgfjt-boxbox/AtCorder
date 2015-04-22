function Main(input) {
  const inputList = input.split('\n')
  const intList = inputList[1].split(' ')
  console.log('%d %s', Number(inputList[0]) + Number(intList[0]) + Number(intList[1]), inputList[2])
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));



// こういうのはいまいちなのか time:157 ms, memory:11596 KB

// process.stdin.setEncoding('utf8')
// process.stdin.once('data', function(val) {
//   var inputList = val.split('\n')
//   var intList = inputList[1].split(' ')
//   console.log('%d %s', Number(inputList[0]) + Number(intList[0]) + Number(intList[1]), inputList[2])
// }).resume()
