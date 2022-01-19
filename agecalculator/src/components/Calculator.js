import React, { useState } from 'react';
import Results from './Results';
import './Components.css';
function Calculator() {
  const [data, setData] = useState({
    date: '',
    birthday: '',
    showResults: false,
  });
  const CalculateAge = () => {
    setData({ birthday: data.date, showResults: true });
  };
  const changeHandler = (e) => {
    setData({ date: e.target.value });
  };
  return (
    <div className='container'>
      <div align='center' className='Calculator col-lg-4 col-md-4'>
        <div className='card'>
          <div className='card-header bg-info'>Age Calculator</div>
          <div className='card-body'>
            <h6>Select Your Birthday</h6>
            <div className='d-grid col-10'>
              <input
                type='date'
                className='textfield'
                onChange={changeHandler}
              />
            </div>
            <br />
            <div className='d-grid'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={CalculateAge}
              >
                Calculate
              </button>
            </div>
            <div align='left'>
              {data.showResults ? <Results date={data.birthday} /> : <div />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;