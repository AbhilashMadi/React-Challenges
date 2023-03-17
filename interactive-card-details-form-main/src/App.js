import React,{useState,Fragment} from "react";

import {CardCredit,CardForm,CardThanks} from "./components/exports";
import "./css/App.css";

function App() {
  const [formData,setFormData] = useState({name:null,number:null,mm:null,yy:null,cvc:null});
  const [validate,setValidate] = useState(false);

  const animateSlider = (validate) => {
    let axis = window.matchMedia('(max-width: 750px)').matches ? 'Y' : 'X'
		document.querySelector('.cardOverflow > div').style.transform = `translate${axis}(50${axis === 'Y' ? 'vh' : 'vw'})`
    
    document.body.classList.add("body-slider");

    setTimeout(() => {
     setValidate(validate);
     document.body.classList.remove("body-slider");
     document.querySelector(".cardOverflow>div").style.transform = "translate(0)";
    },500);
  };

  return (
    <Fragment>
      <CardCredit formData={formData}/>
      <main className="cardOverflow">
        <div>
          {
            validate 
            ? <CardThanks setFormData={setFormData} animateSlider={animateSlider}/>
            : <CardForm setFormData={setFormData} animateSlider={animateSlider} formData={formData}/>
          }
        </div>
      </main>
      <footer>
        2023
      </footer>
    </Fragment>
  )
}

export default App;