import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiLib = {
    "🚗": "Car",
    "🚕": "Taxi ",
    "🛺": "Auto Rikshaw ",
    "🚑": "Ambulance ",
    "🚒": "Fire Engine ",
    "🚍": "Bus ",
    "🚉": "Train ",
    "🏍": "Bike ",
    "🛵": "Scooter ",
    "🚀": "Rocket "
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
      <h2>Emot😶</h2>
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
