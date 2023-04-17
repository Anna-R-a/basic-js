const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true){
      this.reverse = !direct;
  }
  encrypt(message, key) {
  if (message == null || key == null){
    throw new Error('Incorrect arguments!')
  }
  let messageUp = message.toUpperCase();
  // let messageClean = messageUp.replace(/[^A-Z\s]/gi, '');
  let keyUp = key.toUpperCase();
  // let keyClean = keyUp.trim();
  let keyToText = keyUp.repeat(Math.ceil(message.length/key.length));
  
  let alphabetLength = 26;
  let start = 'A'.charCodeAt(0);
  let result = [];
  for(let i = 0; i < messageUp.length; i++ ){
    if(messageUp[i] === ' ' || (messageUp[i] !== '[A-Z]')){
      result.push(messageUp[i])
    } else {
      let index = messageUp[i].charCodeAt(0) ;
      let toRight = keyToText[i].charCodeAt(0) ;
      result.push(String.fromCharCode(start + (index + toRight) % alphabetLength));
    }
  }
if (this.reverse === true){
  result.reverse()
}
return result.join('')
  }

//   let keyUp = key.toUpperCase();
//   let keyClean = keyUp.trim();
//   let keyToText = keyClean.repeat(Math.ceil(message.length/key.length));
//   let messageUp = message.toUpperCase();
//   let messageClean = messageUp.replace(/[^A-Z\s]/gi, '');
//   let alphabetLength = 26;
//   let start = 'A'.charCodeAt(0);
//   let result = [];
//   for(let i = 0; i < messageUp.length; i++ ){
//     if(messageUp[i] === ' ' || (messageUp[i] !== '[A-Z]')){
//       result.push(messageUp[i])
//     } else {
//       let index = messageClean.charCodeAt(i) - start;
//       let toRight = keyToText.charCodeAt(i) - start;
//       result.push(String.fromCharCode(start + (index + toRight) % alphabetLength));
//     }
//   }
// if (this.reverse === true){
//   result.reverse()
// }
// return result.join('')
//   }


  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null){
      throw new Error('Incorrect arguments!')
    }
    let encryptedMessageUp = encryptedMessage.toUpperCase();
    let encryptedMessageClean = encryptedMessageUp.replace(/[^A-Z\s]/gi, '');
    let keyUp = key.toUpperCase();
    let keyClean = keyUp.trim();
    let keyToText = keyClean.repeat(Math.ceil(encryptedMessageClean.length/keyClean.length));
    
    let alphabetLength = 26;
    let start = 'A'.charCodeAt(0);
    let result = [];
    for(let i = 0; i < encryptedMessageUp.length; i++ ){
      if(encryptedMessageUp[i] === ' ' || (encryptedMessageUp[i] !== '[A-Z]')){
        result.push(encryptedMessageUp[i])
      } else {
        for (let j = 0; j < encryptedMessageClean.length; j++ ){
        let index = encryptedMessageClean.charCodeAt(j) - start;
        let toLeft = keyToText.charCodeAt(j) - start;
        result.push(String.fromCharCode(start + (index - toLeft + alphabetLength) % alphabetLength));
      }
    }
    }
  if (this.reverse === true){
    result.reverse()
  }
  return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
