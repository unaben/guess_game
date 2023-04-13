import { FC } from "react";
import { message } from "../../translate/ENT";
import "./FormComp.css";

type IFormCompProps = {
  guessInput: string | undefined;
  setGuessInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  processGuessGame: () => void;
  displayPlayAgain: boolean;
  randomNumber: number | undefined;
};

const FormComp: FC<IFormCompProps> = ({
  guessInput,
  setGuessInput,
  processGuessGame,
  displayPlayAgain,
  randomNumber,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGuessInput("");
    processGuessGame();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>{message.labelText}</label>
        <input
          value={guessInput}
          onChange={(e) => setGuessInput(e.target.value)}
          type="number"
          id="guess-input"
        />
      </div>
      <div className="button-container">
        {displayPlayAgain && (
          <p>
            {message.winningText} {randomNumber}
          </p>
        )}
        <button
          type="submit"
          id="guess-button"
          className={`btn ${!displayPlayAgain ? "active" : "inactive"}`}
        >
          {message.guessBtn}
        </button>
      </div>
    </form>
  );
};
export default FormComp;
