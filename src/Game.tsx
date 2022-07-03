import React, { useState } from "react";
import Board from "./board";
import KeyBoard from "./keyboard";
import "./App.css";
import WORD_LIST from "./util/wordList";

type Letters = {
  a: boolean | undefined;
};

export type BoardState = {
  words: string[];
  letters: Letters[];
};

function Game({ secretWords }: { secretWords: string[] }) {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [words, setWords] = useState<string[]>([]);
  const isWord = WORD_LIST.includes(currentWord);
  const addLetter = (letter: string) => {
    if (currentWord.length < 5) {
      setCurrentWord(`${currentWord}${letter}`);
    }
  };
  const removeLetter = () =>
    setCurrentWord(currentWord.slice(0, currentWord.length - 1));
  const addWord = () => {
    if (true || isWord) {
      setWords([...words, currentWord]);
      setCurrentWord("");
    }
  };

  console.log(currentWord);

  return (
    <div className="game-area">
      <div style={{ display: "block", width: "100%", flexDirection: "column" }}>
        <div className="board-row">
          <Board
            state={{ words, letters: [{ a: true }] }}
            currentWord={currentWord}
            secretWord={secretWords[0]}
          />
          {
            <Board
              state={{ words, letters: [{ a: true }] }}
              currentWord={currentWord}
              secretWord={secretWords[1]}
            />
          }
        </div>
        <div className="board-row">
          <Board
            state={{ words, letters: [{ a: true }] }}
            currentWord={currentWord}
            secretWord={secretWords[2]}
          />
          <Board
            state={{ words, letters: [{ a: true }] }}
            currentWord={currentWord}
            secretWord={secretWords[3]}
          />
        </div>
      </div>
      <KeyBoard
        addLetter={addLetter}
        removeLetter={removeLetter}
        addWord={addWord}
      />
    </div>
  );
}

export default Game;
