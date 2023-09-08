import React, { useState } from "react";
import { createPortal } from 'react-dom';
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';

import StepWraper from "./StepWraper";
import FormTitle from "./FormTitle";
import Button from "./Button";
import Table from "./Table";
import Checkbox from "./Checkbox";
import Modal from "./Modal";
import Loader from "./Loader";
import { changeDocumentStep } from "../store/slices/stepSlice";

import "../styles/document.scss";


const validationSchema = Yup.object().shape({
    agree: Yup.boolean().oneOf([true], "You must agree with the payment schedule")
});

const Document: React.FC = () => {
    const [isLoader, setIsLoader] = React.useState(false);

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    return (
        <StepWraper>
            {!isLoader && <><div className="document__header">
                <FormTitle title='Payment Schedule' number={3} />
            </div>
            <Table />
            <div className="document__footer">
                <div onClick={() => setOpen(true)} >
                    <Button text="Deny" color='pink' />
                </div>
                <Formik
                    initialValues={{ agree: false }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={(val) => {     
                        setIsLoader(true);                  
                        fetch(`http://localhost:8080/document/${localStorage.getItem('userId')}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(val)
                        }) 
                        .then(res => {
                            setIsLoader(false);
                            console.log(res.status);
                            localStorage.setItem('thirdForm', 'done');
                            dispatch(changeDocumentStep(2));
                        })
                        .catch(err => {
                            setIsLoader(false);
                            console.log(err);
                        });
                    }}
                    validationSchema={validationSchema}
                >
                    {() => (
                        <Form className="document__send" >
                            <Checkbox name='agree' text='I agree with the payment schedule' />

                            <Button text="Send" type="submit" />
                        </Form>
                    )}
                </Formik>        
            </div></>}

            {isLoader && <Loader />}

            {open && createPortal(<Modal handleClick={() => setOpen(false)} />, document.body)}
        </StepWraper>
    )
}

export default Document;