import { FC } from "react";
import { message } from "../../translate/ENT";
import "./PlayAgain.css";

type IPlayAgainProps = {
  setDisplayPlayAgain: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedback: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

const PlayAgain: FC<IPlayAgainProps> = ({
  setDisplayPlayAgain,
  setFeedback,
}) => {
  return (
    <button
      onClick={() => {
        setDisplayPlayAgain(false);
        setFeedback([]);
      }}
      id="again-button"
      className="btn"
    >
      {message.playAgainBtn}
    </button>
  );
};
export default PlayAgain;
