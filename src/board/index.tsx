import React from "react";
import WORD_LIST from "../util/wordList";
import {matchCheck} from "../util/matchCheck";
import "./board.scss";



const Board = ({
  words,
  currentWord,
  secretWord,
}: {
  words: string[];
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
            <div key={i} className={`letter-block ${matchCheck(secretWord, word, i)}`}>
              {letter.toUpperCase()}
            </div>
          ))}
        </div>
      ))}
      <div className="row">
        {[0, 1, 2, 3, 4].map((i) =>
          currentLetters[i] ? (
            <div
              key={i}
              className={`${
                !isWord && currentWord.length === 5 ? "not-word" : ""
              } letter-block`}
            >
              {currentLetters[i].toUpperCase()}
            </div>
          ) : (
            <div key={i} className="letter-block"></div>
          )
        )}
      </div>
      {Array.apply(null, Array(8 - words.length)).map((_,i) => (
        <div key={`${i}-blank`} className="row blank-row"></div>
      ))}
    </div>
  );
};

export default Board;
