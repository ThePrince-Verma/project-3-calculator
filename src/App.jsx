import styles from './App.module.css'
// (styles use kiye hai module.css me so ham log className me {styles.___} use krenge )

import Display from './components/Display';  
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';
function App() {
  const [calVal, setCalVal] = useState("0");
  const onButtonClick =(buttonText) =>{
    if (buttonText==="C"){
      setCalVal("");
    } else if(buttonText==="=") {
      const result =eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue =calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return <div className={styles.calculator}>
  <Display displayValue={calVal} />
  <ButtonsContainer onButtonClick={onButtonClick} />
 
  </div>
}

export default App
