import "./styles.css";
import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {
  const [likes, setLikes] = useState(0);

  const onLike = () => {
    setLikes((preValue) => {
      return preValue + 1;
    });
  };

  const [disLikes, setDislikes] = useState(0);
  const onDislikes = () => {
    setDislikes((preValue) => {
      return preValue + 1;
    });
  };

  const resetFeedbacks = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-button-control">
        <Button name="Like" onClick={onLike} />
        <p className="likes">{likes}</p>
        <Button name="Dislike" onClick={onDislikes} />
        <p className="likes">{disLikes}</p>
      </div>
      <div className="reset-button-control">
        <Button name="Reset" onClick={resetFeedbacks} />
      </div>
    </div>
  );
}

export default Feedback;
