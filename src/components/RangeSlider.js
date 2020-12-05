import React, { memo, useCallback, useState, useEffect, useMemo } from "react";

const RangeSlider = memo( ({ classes, label, onChange, value, ...sliderProps }) => {
        const [sliderVal, setSliderVal] = useState(0);
        const [mouseState, setMouseState] = useState(null);
  
        useEffect(() => {
            setSliderVal(value);
        }, [value]);
  
        const changeCallback = e => {
            setSliderVal(e.target.value);
        };
  
        useEffect(() => {
            if (mouseState === "up") {
                onChange(sliderVal);
            }   
        }, [mouseState]);

        return (
            <div className="range-slider">
                <input
                    type="range"
                    value={sliderVal}
                    {...sliderProps}
                    className={`slider ${classes}`}
                    id="myRange"
                    onChange={changeCallback}
                    onMouseDown={() => setMouseState("down")}
                    onMouseUp={() => setMouseState("up")}
                />
            </div>
        );
    }
);

const SliderContainer = () => {
    const [parentVal, setParentVal] = useState(10);

    const sliderValueChanged = useCallback(val => {
        setParentVal(val);
    });

    const sliderProps = useMemo( () => ({
        min: 0,
        max: 100,
        value: parentVal,
        step: 2,
        label: "This is a reusable slider",
        onChange: e => sliderValueChanged(e)
    }), [parentVal] );

    return (
      <div>
        <RangeSlider {...sliderProps} classes="additional-css-classes" />
      </div>
    );
};

export default SliderContainer;