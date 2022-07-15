export enum Match {
  Match = 'match',
  ExactMatch = 'exact-match',
  NoMatch = 'no-match',
}

export const matchCheck = (
  secretWord: string,
  word: string,
  i: number
): Match => {
  const checkLetter = word[i]
  if (secretWord[i] === checkLetter) {
    return Match.ExactMatch
  }
  if (secretWord.includes(word[i])) {
    const cnt = secretWord.split('').filter((sl) => sl === checkLetter).length

    // if Number of times the letter appears in the word is less than the times
    // it appears in the remainter of the word don't match
    // ex treat checked against erase only the first e should be yellow
    if (
      cnt <
      word
        .slice(0, i + 1)
        .split('')
        .filter((sl) => sl === checkLetter).length
    ) {
      return Match.NoMatch
    }
    // No match if all the other instances of the letter are exact matches
    // If the count of exact matches of this letter in the word is greater than the number
    // of times the word appears in the test word

    if (
      secretWord
        .split('')
        .filter((_, j) => checkLetter === word[j] && secretWord[j] === word[j])
        .length > word.split('').filter((sl) => sl === checkLetter).length
    ) {
      debugger
      return Match.NoMatch
    }

    return Match.Match
  }
  return Match.NoMatch
}

export const letterCheck = (
  checkWords: string[],
  secretWord: string,
  letter: string
): Match => {
  for (let checkWord of checkWords) {
    if (checkWord.indexOf(letter) < 0) continue
    //console.log("Checking for match", secretWord,checkWord,checkWord.indexOf(letter),letter)
    const match = matchCheck(secretWord, checkWord, checkWord.indexOf(letter))
    if (match === Match.ExactMatch || match === Match.Match) {
      return match
    }
  }
  return Match.NoMatch
}
