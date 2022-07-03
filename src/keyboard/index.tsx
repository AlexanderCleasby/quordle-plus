import React, { Dispatch, SetStateAction } from "react";
import "./keyboard.scss";

const ROW1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const ROW2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const ROW3 = ["z", "x", "c", "v", "b", "n", "m"];

enum Colors {
  GREEN = "greenyellow",
  YELLOW = "yellow",
  GRAY = "gray",
}

const quadrentToGradient = (quads: Colors[]) => {
  return `conic-gradient(${quads
    .map((c, i) => `${c} ${i * 90}deg, ${c} ${(i + 1) * 90}deg`)
    .join(",")})`;
};

const KeyDisplay = ({
  character,
  found,
  add,
}: {
  character: string;
  found: (boolean | undefined)[];
  add: () => void;
}) => {
  return (
    <div
      onClick={add}
      style={{
        background: quadrentToGradient([
          Colors.GREEN,
          Colors.YELLOW,
          Colors.GRAY,
          Colors.GREEN,
        ]),
      }}
      className="key"
    >
      {character}
    </div>
  );
};

const KeyBoard = ({
  addLetter,
  removeLetter,
  addWord,
}: {
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  addWord: () => void;
}) => {
  return (
    <div className="keyboard">
      <div className="row">
        {ROW1.map((k) => (
          <KeyDisplay
            key={k}
            character={k}
            found={[false]}
            add={() => addLetter(k)}
          />
        ))}
      </div>
      <div className="row">
        {ROW2.map((k) => (
          <KeyDisplay
            key={k}
            character={k}
            found={[false]}
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
            found={[false]}
            add={() => addLetter(k)}
          />
        ))}
        <div className="key" onClick={removeLetter}>
          BACKSPACE
        </div>
      </div>
    </div>
  );
};

export default KeyBoard;
