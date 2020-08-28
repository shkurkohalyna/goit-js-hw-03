// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  let words = string.split(" ");
  let mostLongWord = words[0];

  for (const word of words) {
    if (word.length > mostLongWord.length) {
      mostLongWord = word;
    }
  }
  return mostLongWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//
// 'jumped'
console.log(findLongestWord("Google do a roll"));
//
// 'Google'
console.log(findLongestWord("May the force be with you"));
//
// 'force'
