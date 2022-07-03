import React, { useState } from "react";
import getWord from "./util/getWord";
import Game from "./Game";

function App() {
  return <Game secretWords={[getWord(), getWord(), getWord(), getWord()]} />;
}

export default App;
