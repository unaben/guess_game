import { FC } from "react";
import { message } from "../../translate/ENT";
import "./PlayAgain.css";

type IPlayAgainProps = {
  setDisplayPlayAgain: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedback: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>;
};

const PlayAgain: FC<IPlayAgainProps> = ({
  setDisplayPlayAgain,
  setFeedback,
  setStartGame,
}) => {
  return (
    <button
      onClick={() => {
        setDisplayPlayAgain(false);
        setFeedback([]);
        setStartGame((prevState) => !prevState);
      }}
      id="again-button"
      className="btn"
    >
      {message.playAgainBtn}
    </button>
  );
};
export default PlayAgain;
