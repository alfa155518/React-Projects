
import { useState } from 'react';
import './App.css'
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {

  const [step,setStep] = useState(1)
  const [isOpen,setIspOpen] = useState(true)

  console.log(isOpen);

function handelNext() {
  step < 3 && setStep(step + 1)

}
function handelPrev() {
  step > 1 && setStep(step - 1) 
}

  return (
    <div>
      <button className='close' onClick={() => setIspOpen(!isOpen)}>&times;</button>
    {isOpen && (

      <>
        
        <div className="steps">
      <div className="numbers">
        <div className={step == 1 ? 'active':''}>1</div>
        <div className={step == 2 ? 'active':''}>2</div>
        <div className={step == 3 ? 'active':''}>3</div>
      </div>
    </div>
    <p className='message'>
      Step {step}: {messages[step - 1]}
    </p>
    <div className="buttons">
      <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={() => handelPrev()} >
        Previous
      </button>
      <button style={{backgroundColor:"#7950f2",color:"#fff"}} onClick={() => handelNext()}>
        Next
      </button>
    </div>
      </>
      )}
     
    </div>
  )
}

export default App
