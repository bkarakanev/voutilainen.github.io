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

function getNameWithRandomWords() {
  let wordsArray = text1.split('\n');
  let wordsUserName = '';
  let counter = 0;

  while (wordsUserName.length < 17) {
    let randomWordIndex = Math.floor(Math.random() * wordsArray.length);
    let currentWord = wordsArray[randomWordIndex];
    if (currentWord.length + wordsUserName.length <= 16) {
      wordsUserName += currentWord;
      counter++;
    } else if (wordsUserName.length < 4) {
      continue;
    } else {
      if (counter < 2) {
        continue;
      } else {
        break;
      }
    }
  }
  let letters = wordsUserName.split('');
  let lettersFiltered = letters.filter(function (el) {
    return el;
  });
  console.log(lettersFiltered);
  console.log(letters);
  wordsUserName = lettersFiltered.join('');

  return wordsUserName;
}

let text1;
fetch('words.txt')
  .then(response => response.text())
  .then(text => (text1 = text));

//

wordsClickFunction = () =>
  (document.getElementById('output').innerHTML = getNameWithRandomWords());
