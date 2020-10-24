const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let stepArray = []
    let arr = expr.split('')
    let helpArray = []
    let symbol = ''

    for (let num of arr) {
        helpArray.push(num) 
        if (helpArray.length === 10) {
            stepArray.push(helpArray.join(''))
            helpArray.length = 0
        }
    }

    for (let item of stepArray) {
        let arr = item.split('')

        for (let i=0; i < arr.length; i += 2) {
            if (arr[i] === '1') {
                if (arr[i+1] === '0') { symbol += '.'}
                if (arr[i+1] === '1') { symbol += '-'}
            }
        }

        if (item === '**********') {
          helpArray.push(' ')
        }
        helpArray.push(symbol)
        symbol = ''
    }

    stepArray.length = 0

    for (let item of helpArray) {
      if (item === ' ') {
          stepArray.push(item)
      } else {
        stepArray.push(MORSE_TABLE[item])
      }
    }

    return stepArray.join('')
}

module.exports = {
    decode
}
