import styles from '../styles/PPFInput.module.scss'
import { useState } from 'react';
export default function Input({ id, type = '', min = 0, max, step = 1, value, setValue }) {


    const [textValue, setTextValue] = useState(((type === 'rupees') ? '\u20B9' : '') + Number(value).toLocaleString("en-In") + ((type === 'percentage') ? '%' : ''));
    const [errorMessage, setErrorMessage] = useState(false);

    const handleSliderValue = (event) => {
        let tempValue = event.target.value;
        setValue(Number(tempValue));
        setTextValue(((type === 'rupees') ? '\u20B9' : '') + Number(tempValue).toLocaleString("en-In") + ((type === 'percentage') ? '%' : ''));
    }


    const addSymbol = (event) => {
        let tempValue = event.target.value;
        if (!(String(textValue).charAt(0) == '\u20B9')) {
            tempValue = ((type === 'rupees') ? '\u20B9' : '') + Number(tempValue).toLocaleString("en-In");
        }
        if (!(String(textValue).charAt(-1) == '%')) {
            tempValue += ((type === 'percentage') ? '%' : '');
        }
        setTextValue(tempValue);
    }

    const removeSymbol = (event) => {
        setTextValue(event.target.value.replace(/,|\u20B9|%/g, ''));
    }




    const handleTextValue = (event) => {

        let tempValue = event.target.value;
        if (tempValue > max) {
            setErrorMessage(true);
        }
        else {
            setErrorMessage(false);
        }
        if ((!(isNaN(tempValue)) && tempValue > 0 && tempValue <= max) || tempValue == '' || tempValue == '0') {

            if (tempValue == "") {
                tempValue = '0';
            }
            else if (tempValue.length == 2 && tempValue.charAt(0) == '0') {
                tempValue = tempValue.charAt(1);
            }
            if (!(type === 'percentage')) {
                setTextValue(Number(tempValue));
            }
            else {
                setTextValue(tempValue);
            }
            setValue(Number(tempValue));
        }

    };


    return (
        <div className={styles.inputBox}>
            <div className={' flex justify-between flex-warp items-center'}>
                <div className=' w-[58%]    '>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        id={id}
                        onChange={handleSliderValue}
                        name="size"
                        style={{ backgroundSize: (value < min) ? 0 : (((value - min) * 100) / (max - min)) + '% 100%' }}
                        className={'my-4 accent-[#00D382] bg-transparent flex '}
                    />
                </div>
                <div className=' w-[39%] lg:ml-[25px]   '>
                    <input
                        type="text"
                        value={textValue}
                        id={`${id}Label`}
                        min={min}
                        max={max}
                        onBlur={(type === '') ? null : addSymbol}
                        onFocus={(type === '') ? null : removeSymbol}
                        className={'h-[45px] w-full color-[#1B1C20] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center text-[14px] font-semibold [@media(min-width:1920px)]:text-[18px] '}
                        onChange={handleTextValue}
                    />
                </div>
            </div>
            {(value < min) ? <div className=' text-[#ff7d7d] text-sm font-normal -mt-[7px] -mb-[13px]'>Minimum value is {min}.</div> : (errorMessage) ? <div className=' text-[#ff7d7d] text-sm font-normal -mt-[7px] -mb-[13px]'>Maximum value is {max}.</div> : ''}
        </div>
    )
}