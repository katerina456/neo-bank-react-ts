import React from "react";
import {Field, ErrorMessage } from 'formik';

import '../styles/input.scss';

interface Props {
    arr: number[],
    required: boolean,
    label: string,
    name: string,
}

const Select: React.FC<Props> = (props) => {
    let array = props.arr
    return (
        <div className="input">
            <label htmlFor={props.name} className="input__label">
                {props.label} {props.required && <span>*</span>}
            </label>
            <Field as="select"
            
            name={props.name}
            className="input__field"
            
            id={props.name}
            required={props.required}
            >
                {array.map(item => {
                    return (
                        <option value={item} className="input__option" key={item}>
                            {item} month
                        </option>)
                })}
            </Field>
            
        </div>
    )
}

export default Select;