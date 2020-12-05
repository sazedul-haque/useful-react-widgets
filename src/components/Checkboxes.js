import React, { useState } from 'react';
import SliderRange from './RangeSlider';

const Checkboxes = () => {
    const [statusOne, setStatusOne] = useState(false);
    const [statusTwo, setStatusTwo] = useState(true);
    const [counter, setCounter] = useState(1);
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(true);
    const [radio, setRadio] = useState('two');

    return (
        <div className="checkbuttons">
            <div className="list-item">
                <div className="checkboxes">
                    <label className="check-container">
                        <input type="checkbox" checked={checkOne} onChange={() => {setCheckOne(!checkOne)}} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="check-container">
                        <input type="checkbox" checked={checkTwo} onChange={() => {setCheckTwo(!checkTwo)}} />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="radiobuttons">
                    <label className="check-container">
                        <input type="radio" value="one" name="example" onChange={(e) => setRadio(e.target.value)} checked={radio === 'one'} />
                        <span className="checkmark"></span>
                    </label>
                    <label className="check-container">
                        <input type="radio" value="two" name="example" onChange={(e) => setRadio(e.target.value)} checked={radio === 'two'} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

            <div className="list-item">
                <div className="status-buttons">
                    <div className={`button ${statusOne ? 'active' : ''}`} onClick={() => {setStatusOne(!statusOne)}}>
                        <span className="inner"></span>
                    </div>
                    <div className={`button ${statusTwo ? 'active' : ''}`} onClick={() => {setStatusTwo(!statusTwo)}}>
                        <span className="inner"></span>
                    </div>
                </div>

                <div className="counter">
                    <button onClick={() => {setCounter(counter - 1)}}>-</button>
                    <span>{counter}</span>
                    <button onClick={() => {setCounter(counter + 1)}}>+</button>
                </div>
            </div>

            <SliderRange />
        </div>
    )
}
export default Checkboxes;