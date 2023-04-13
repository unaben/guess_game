import { message } from "../../translate/ENT";
import "./Header.css";

const Header = () => {
  return (
    <>
      <h1>{message.titleText}</h1>
      <p className="guess" data-testid="guess">{message.guessText}</p>
    </>
  );
};
export default Header;
