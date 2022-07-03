import React from "react";
import WORD_LIST from "../util/wordList";
import { BoardState } from "../Game";
import matchCheck from "../util/matchCheck";
import "./board.scss";

const classMatch = (secretWord: string, word: string, i: number) => {
  const checkLetter = word[i];
  if (secretWord[i] === checkLetter) {
    return "exact-match";
  }
  if (secretWord.includes(word[i])) {
    const cnt = secretWord.split("").filter((sl) => sl === checkLetter).length;
    // if the letter appears more than once only the first appearance should be yellow
    if (
      cnt ===
      word
        .slice(0, i)
        .split("")
        .filter((sl) => sl === checkLetter).length
    ) {
      return "";
    }
    // if the letter is an exact match one

    return "match";
  }
  return "";
};

const Board = ({
  state: { words, letters },
  currentWord,
  secretWord,
}: {
  state: BoardState;
  currentWord: string;
  secretWord: string;
}) => {
  const isWord = WORD_LIST.includes(currentWord);
  const currentLetters = currentWord.split("");
  return (
    <div className="board">
      {words.map((word) => (
        <div className="row">
          {word.split("").map((letter, i) => (
            <div className={`letter-block ${matchCheck(secretWord, word, i)}`}>
              {letter.toUpperCase()}
            </div>
          ))}
        </div>
      ))}
      <div className="row">
        {[0, 1, 2, 3, 4].map((i) =>
          currentLetters[i] ? (
            <div
              className={`${
                !isWord && currentWord.length === 5 ? "not-word" : ""
              } letter-block`}
            >
              {currentLetters[i].toUpperCase()}
            </div>
          ) : (
            <div className="letter-block"></div>
          )
        )}
      </div>
      {Array.apply(null, Array(8 - words.length)).map(() => (
        <div className="row blank-row"></div>
      ))}
    </div>
  );
};

export default Board;
