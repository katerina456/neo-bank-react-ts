import React from "react";
import {Field, ErrorMessage } from 'formik';

import '../styles/input.scss';

interface Props {
    label: string,
    required: boolean,
    placeholder: string,
    name: string,
    type: "date",
    errors: any,
    values: any,
}

const InputDate: React.FC<Props> = (props) => {
    let colors: string = `input__field ${props.errors[props.name]? 'input__field-red' : ""} ${props.values[props.name] !== ''? 'input__field-green' : ''}`;
    return (
        <div className="input">
            <label htmlFor={props.name} className="input__label">
                {props.label} {props.required && <span>*</span>}
            </label>
            <Field
            name={props.name}
            className={colors}
            placeholder={props.placeholder}
            id={props.name}
           /*  required={props.required} */
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.type = "date")}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.type = "text")}
            />
            <ErrorMessage
            component="div"
            name={props.name}
            className="input_error"
            />
        </div>
    )
}

export default InputDate;