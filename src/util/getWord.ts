import WORD_LIST from "./wordList";

const getWord = () => {
  return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
};

export default getWord;
