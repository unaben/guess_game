import { useEffect, useState } from "react";
import { generateRandomNumber } from "../../helper/helper";
import Feedback from "../Feedback/FeedBack";
import FormComp from "../FormComp/FormComp";
import Header from "../Header/Header";
import PlayAgain from "../PlayAgain/PlayAgain";
import { message } from "../../translate/ENT";
import { useLocalStorage } from "../../hook/useLocalStorage";
import "./Game.css";

const GuessGame = () => {
  const [guessInput, setGuessInput] = useState<string | undefined>("");
  const [randomNumber, setRandomNumber] = useLocalStorage<number | undefined>(
    "random",
    0
  );
  const [startGame, setStartGame] = useState<boolean>(false);
  const [displayPlayAgain, setDisplayPlayAgain] = useLocalStorage<boolean>(
    "display",
    false
  );
  const [feedback, setFeedback] = useLocalStorage<string[] | undefined>(
    "feed",
    []
  );
  const processGuessGame = () => {
    let feedbackText: string;
    if (guessInput) {
      const guess = Number(guessInput);
      if (guess === Number(randomNumber)) {
        feedbackText = `${guess} ${message.correct}`;
        setDisplayPlayAgain(true);
      } else if (guess > Number(randomNumber)!) {
        feedbackText = `${guess} ${message.high}`;
      } else {
        feedbackText = `${guess} ${message.low}`;
      }
    }
    setFeedback((prevState) => [...prevState!, feedbackText]);
  };

  useEffect(() => {
    if (startGame) {
      const random = generateRandomNumber(30);
      setRandomNumber(random);
    }
  }, [startGame]);

  return (
    <div className="container">
      <Header />
      <FormComp
        guessInput={guessInput}
        setGuessInput={setGuessInput}
        processGuessGame={processGuessGame}
        displayPlayAgain={displayPlayAgain}
        randomNumber={randomNumber}
      />
      <section>
        <div id="feedback">
          {feedback?.map((info, index) => (
            <Feedback key={index} info={info} />
          ))}
        </div>
      </section>
      {displayPlayAgain && (
        <section id="again-container">
          <PlayAgain
            setDisplayPlayAgain={setDisplayPlayAgain}
            setFeedback={setFeedback}
            setStartGame={setStartGame}
          />
        </section>
      )}
    </div>
  );
};
export default GuessGame;
