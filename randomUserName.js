function getName() {
  let allowedCharacters = [];
  let minNumberCode = 48;
  let maxNumberCode = 57;
  for (let i = minNumberCode; i <= maxNumberCode; i++) {
    allowedCharacters.push(Number(String.fromCharCode(i)));
  }
  let minLetterCode = 97;
  let maxLetterCode = 122;
  for (let i = minLetterCode; i <= maxLetterCode; i++) {
    allowedCharacters.push(String.fromCharCode(i));
    allowedCharacters.push(String.fromCharCode(i).toUpperCase());
  }

  let userName = '';

  while (userName.length < 16) {
    let randomChar = Math.floor(Math.random() * allowedCharacters.length);
    userName += allowedCharacters[randomChar];
  }
  // console.log(userName);
  // console.log(allowedCharacters);

  let userNameLength = Math.floor(Math.random() * (16 - 4) + 4);
  let finalUserName = userName.substring(0, userNameLength);
  return finalUserName;
}

clickFunction = () => (document.getElementById('output').innerHTML = getName());
