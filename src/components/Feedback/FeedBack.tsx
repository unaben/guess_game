import { FC } from "react";
import './Feedback.css'

type IFeedbackProps = {
    info: string
}
const Feedback: FC<IFeedbackProps> = ({ info }) => {
  return <p>{info}</p>;
};
export default Feedback;
