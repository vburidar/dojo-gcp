import "./gravity.css";
import useGravity from "./useGravity";

const Gravity = () => {
  useGravity();
  return (
    <div>
      <canvas id="c"></canvas>
      <div className="info">Click to add gravity point.</div>
    </div>
  );
};

export default Gravity;
