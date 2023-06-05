function reverseLetter(str) {
    return [...str].filter(char => char.match(/[a-zA-Z]/)).reverse().join('');
  }

  function reverseLetter(str) {
    return str.match(/[a-z]/gi).reverse().join('')
  }