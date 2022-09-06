function BaseConverter(startBase, num, endBase) {
  let numSplitReversed = Array.from(String(num)).reverse();
  let decimalValues = numSplitReversed.map((el) => {
    if (el === 'A') {
      return 10;
    }
    if (el === 'B') {
      return 11;
    }
    if (el === 'C') {
      return 12;
    }
    if (el === 'D') {
      return 13;
    }
    if (el === 'E') {
      return 14;
    }
    if (el === 'F') {
      return 15;
    } else {
      return Number(el);
    }
  });
  let convs = [];
  decimalValues.map((el, i) => {
    return convs.push(startBase ** i * el);
  });

  let decNum = convs.reduce((a, b) => {
    return a + b;
  });

  let maxDecimalNum = 0;
  let maxDecimalExp = [];
  for (let i = 0; maxDecimalNum <= decNum; i++) {
    maxDecimalExp.push(endBase ** i);
    maxDecimalNum = endBase ** i;
  }

  let checkValues = maxDecimalExp
    .filter((el) => {
      return el <= decNum;
    })
    .reverse();

  let subtr = decNum;
  let rawResult = [];
  checkValues.map((el) => {
    let multiplier = Math.floor(subtr / el);
    rawResult.push(multiplier);
    subtr = subtr - multiplier * el;
    return '';
  });

  let result = rawResult.map((el) => {
    if (el === 15) {
      return 'F';
    }
    if (el === 14) {
      return 'E';
    }
    if (el === 13) {
      return 'D';
    }
    if (el === 12) {
      return 'C';
    }
    if (el === 11) {
      return 'B';
    }
    if (el === 10) {
      return 'A';
    } else {
      return String(el);
    }
  });

  return result.join('');
}

export default BaseConverter;
