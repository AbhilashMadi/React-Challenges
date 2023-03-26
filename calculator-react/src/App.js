import React, { useReducer } from 'react';
import { reducer, ACTIONS } from './reducer';
import { DigitButton, OperationButton } from './buttons';

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <section>
      <div className='grid-container'>
        <div className='output'>
          <div className='previours-operand'>4354545</div>
          <div className='current-operand'>4354535</div>
        </div>
        <button className='btn span-two'>AC</button>
        <button className='btn'>Del</button>
        <button className='btn'>÷</button>
        <button className='btn'>1</button>
        <button className='btn'>2</button>
        <button className='btn'>3</button>
        <button className='btn'>*</button>
        <button className='btn'>4</button>
        <button className='btn'>5</button>
        <button className='btn'>6</button>
        <button className='btn'>+</button>
        <button className='btn'>7</button>
        <button className='btn'>8</button>
        <button className='btn'>9</button>
        <button className='btn'>-</button>
        <button className='btn'>.</button>
        <button className='btn'>0</button>
        <button className='btn span-two'>=</button>
      </div>
    </section>
  );
}

export default App;
