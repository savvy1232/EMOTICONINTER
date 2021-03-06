import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiLib = {
    "ð": "Car",
    "ð": "Taxi ",
    "ðº": "Auto Rikshaw ",
    "ð": "Ambulance ",
    "ð": "Fire Engine ",
    "ð": "Bus ",
    "ð": "Train ",
    "ð": "Bike ",
    "ðµ": "Scooter ",
    "ð": "Rocket "
  };

  const [meaning, setMeaning] = useState("");

  function emojiCheckHandler(e) {
    let userInput = e.target.value;
    let meaning = emojiLib[userInput];
    if (meaning === undefined) {
      meaning = "I am not getting Your ";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiLib[emoji];
    setMeaning(meaning);
  }
  const emojis = Object.keys(emojiLib);

  return (
    <div className="App">
      <h1>Interpreting The Emoticon</h1>
      <input onChange={emojiCheckHandler} />
      <div className="outputDiv">
        <h1>{meaning}EMO</h1>
      </div>
      <h2>Emotð¶</h2>
      {emojis.map((emoji) => {
        return (
          <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </li>
        );
      })}
    </div>
  );
}
