import { useState } from 'react'

import './App.css'

function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null)
  const [bmistatus,setBmistatus]=useState("");
  const [error,setError]=useState("");

  const calculateBmi = () =>{
    const isValidH = /^\d+$/.test(height);
    const isValidW = /^\d$/.test(weight);
    if(height && weight){
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5){
        setBmistatus("Under Weight");
      }else if (bmiValue >= 18.5 && bmiValue < 24.9){
        setBmistatus("Normal Weight");
      }else if (bmiValue > 25 && bmiValue < 29.9){
        setBmistatus("Over Weight");
      }else {
        setBmistatus("Obese");
      }
      setError("");

    }else{
      setBmi(null);
      setBmistatus("");
      setError("Please Enter a Vlaid Numeric Value");
    }
  }
  

  return (
    <>
    <div className="bmi-calculator">
     <div className='box'> </div>
         <div className="data">
           <h1>BMI CALCULATOR</h1>
           {error && <p className='errormsg'>{error}</p>}
           <div className="input-container">
             <label htmlFor="height">Height (cm)</label>
             <input type="text" value={height} id='height' onChange={(e)=>setHeight(e.target.value)}/>
           </div>
           <div className="input-container">
             <label htmlFor="weight">weight (kg)</label>
             <input type="text" value={weight} id='weight' onChange={(e)=>setWeight(e.target.value)} />
           </div>
           <button onClick={calculateBmi}>Calculate BMI</button>
           {bmi !== null && (
             <div className="result">
               <p>Your BMI is : {bmi}</p>
               <p>Status : {bmistatus}</p>
             </div>
            )}
         </div>

      
    </div>
    
    </>
  )
}

export default App
