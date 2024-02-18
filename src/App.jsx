import { useState } from "react"
import Digits from "./components/Digits.jsx"
import Operators from "./components/Operators.jsx"


export function App() {
	const [calc, setCalc] = useState("");  // for showing in display
	const [result, setResult] = useState("");
	const [equalFlag, setEqualFlag] = useState(false);

    
	const ops = ['+', '-', '*', '/', '.']; 
    
	const updateCalc = value => {
		if (
			(ops.includes(value) && calc == '') ||
			(ops.includes(value) && ops.includes(calc.slice(-1)))
		) {
			return 0;
		}

	  	setCalc(calc + value);

		if (!ops.includes(value)){
			setResult(eval(calc + value ).toString())

		}

	}

	const equal = () => {
		setEqualFlag(!equalFlag) // opposite mean kore 
		
	}

	const del = () => {
		setEqualFlag(false)
		setCalc('')
		setResult('') 

	}


	const calculate = () =>{
		if(!equalFlag ){
			return (
				<div className="display">
				{result ? <span style={{fontSize:'16px', color:'peru' }}> ({result}) </span> : ""} 
				{calc || "0"} 
	
			  </div>
	
			)

		}else{
			return (

				<div className="display">
				{result}
	
			  </div>
			)
		}	
	}

	return (
	  <div className="App">
		<div className="calculator">
			<p class="panel">14 digits max</p>

		  {calculate()}

		  <div >
			{/* Pass updateCalc function as a prop to Operators */}
			<Operators opsprops={updateCalc} />
			

		  </div>

		  <div className="dig-container">
			<Digits digprops={updateCalc}/>
			
		  </div>

		  <div className="del-equal">
		  	<button onClick={() => del()} style={{ background: 'rgba(255, 0, 0, 0.5)', cursor:'pointer'  }}>DEL</button>
		  	<button  onClick={() => equal()} style={{background: 'grey', fontSize:'20px'}} > = </button>

		  </div>
		  
		  
		</div>
	  </div>
	)
  }
  
  export default App;
  


