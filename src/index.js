module.exports = function toReadable (number) {
    const onesWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teensWords = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (number === 0) {
      return 'zero';
    }
  
    function convertThreeDigitGroup(num) {
      let result = '';
      const hundreds = Math.floor(num / 100);
      const tens = Math.floor((num % 100) / 10);
      const ones = num % 10;
  
      if (hundreds > 0) {
        result += onesWords[hundreds] + ' hundred';
      }
  
      if (tens === 1) {
        result += ' ' + teensWords[ones];
      } else {
        if (tens > 1) {
          result += ' ' + tensWords[tens];
        }
        if (ones > 0) {
          result += ' ' + onesWords[ones];
        }
      }
  
      return result.trim();
    }
  
    let readableString = '';
    let groups = [];
  
   
    while (number > 0) {
      groups.push(number % 1000);
      number = Math.floor(number / 1000);
    }
  
    const groupNames = ['', 'thousand', 'million', 'billion', 'trillion']; 
  
    for (let i = groups.length - 1; i >= 0; i--) {
      const group = groups[i];
      const groupName = groupNames[i];
  
      if (group > 0) {
        const groupString = convertThreeDigitGroup(group);
        if (groupString !== '') {
          readableString += (readableString !== '' ? ' ' : '') + groupString;
          if (groupName !== '') {
            readableString += ' ' + groupName;
          }
        }
      }
    }
  
    return readableString;
}
