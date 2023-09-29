
let x = Math.floor(Math.random() * 20) + 1;
console.log(`x = ${x}`);
  
    if (x > 10) {
      console.log('Результат с if:x is bigger than 10');
    } else {
      let message = 'x is less than or equal to 10';
      if (x === 5) {
        message += ' an example of a special case';
      }
      if (x === 15) {
        message += ' but x is not 15';
      }
      if (x > 5) {
        message += ' and x is greater than 5';
      } else {
        message += ' and x is less than or equal to 5';
      }
      if (x % 2) {
        message += ' and x is odd';
      } else {
        message += ' and x is even';
      }
      console.log('Результат с if:', message);
    }

let message2 = '';
  
    switch (true) {
      case x > 10:
        message2 = 'Результат со switch: x is bigger than 10';
        break;
      case x === 5:
        message2 = 'x is less than or equal to 10 an example of a special case';
        break;
      case x === 15:
        message2 = 'x is less than or equal to 10 but a is not 15';
        break;
      case x > 5:
        message2 = 'x is less than or equal to 10 and a is greater than 5';
        break;
      default:
        message2 = 'x is less than or equal to 10 and a is less than or equal to 5';
        break;
    }
  
    message2 += x % 2 ? ' and x is odd' : ' and x is even';
    console.log('Результат со switch:', message2);
