// import {App} from '../App.jsx'
import {App} from "../App";

const Operators = ({ opsprops }) => {
  return (
    <div className="operators">
      <button onClick={() => opsprops("/")}>/</button>
      <button onClick={() => opsprops("*")}>*</button>
      <button onClick={() => opsprops("-")}>-</button>
      <button onClick={() => opsprops("+")}>+</button>


    </div>
  );
};

export default Operators;


