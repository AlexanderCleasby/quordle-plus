import React from 'react'
import { matchCheck, letterCheck, Match } from '../util/matchCheck'
import './keyboard.scss'

const ROW1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const ROW2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const ROW3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

enum Colors {
  GREEN = 'greenyellow',
  YELLOW = 'yellow',
  GRAY = 'gray',
}

const quadrentToGradient = (quads: Colors[]) => {
  return `conic-gradient(${[quads[1], quads[3], quads[2], quads[0]] // annoying hack needed to make the order here good
    .map((c, i) => `${c} ${i * 90}deg, ${c} ${(i + 1) * 90}deg`)
    .join(',')})`
}

const KeyDisplay = ({
  character,
  add,
  checkWords,
  secretWords,
}: {
  character: string
  add: () => void
  checkWords: string[]
  secretWords: string[]
}) => {
  let colors: Colors[] | undefined
  if (checkWords.some((word) => word.includes(character))) {
    colors = secretWords.map((secretWord, i) => {
      const matchType = letterCheck(checkWords, secretWord, character)
      if (matchType === Match.Match) {
        return Colors.YELLOW
      }
      if (matchType === Match.ExactMatch) {
        return Colors.GREEN
      }
      return Colors.GRAY
    })
  }

  return (
    <div
      onClick={add}
      style={
        colors
          ? {
              background: quadrentToGradient(colors),
            }
          : {}
      }
      className="key"
    >
      {character}
    </div>
  )
}

const KeyBoard = ({
  addLetter,
  removeLetter,
  addWord,
  words,
  secretWords,
}: {
  addLetter: (letter: string) => void
  removeLetter: () => void
  addWord: () => void
  words: string[]
  secretWords: string[]
}) => {
  return (
    <div data-testid="keyboard" className="keyboard">
      <div className="row">
        {ROW1.map((k) => (
          <KeyDisplay
            key={k}
            character={k}
            checkWords={words}
            secretWords={secretWords}
            add={() => addLetter(k)}
          />
        ))}
      </div>
      <div className="row">
        {ROW2.map((k) => (
          <KeyDisplay
            key={k}
            character={k}
            checkWords={words}
            secretWords={secretWords}
            add={() => addLetter(k)}
          />
        ))}
      </div>
      <div className="row">
        <div className="key" onClick={addWord}>
          ENTER
        </div>
        {ROW3.map((k) => (
          <KeyDisplay
            key={k}
            character={k}
            checkWords={words}
            secretWords={secretWords}
            add={() => addLetter(k)}
          />
        ))}
        <div className="key" onClick={removeLetter}>
          BACKSPACE
        </div>
      </div>
    </div>
  )
}

export default KeyBoard
