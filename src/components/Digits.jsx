

const Digits = ({digprops}) => {
  return (
    <div className="digits">
        <button onClick={() => digprops("0")}>0</button>
	    <button onClick={() => digprops("1")}>1</button>
		<button onClick={() => digprops("2")}>2</button>
		<button onClick={() => digprops("3")}>3</button>
		<button onClick={() => digprops("4")}>4</button>
		<button onClick={() => digprops("5")}>5</button>
		<button onClick={() => digprops("6")}>6</button>
		<button onClick={() => digprops("7")}>7</button>
		<button onClick={() => digprops("8")}>8</button>
		<button onClick={() => digprops("9")}>9</button>
		<button onClick={() => digprops("00")}>00</button>
		<button onClick={() => digprops(".")}>.</button>
    </div>
  )
}

export default Digits
