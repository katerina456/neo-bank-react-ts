import React, { useState } from "react";
import { createPortal } from 'react-dom';
import { Formik, Form } from 'formik';
import * as Yup from "yup";

import StepWraper from "./StepWraper";
import FormTitle from "./FormTitle";
import Button from "./Button";
import Table from "./Table";
import Checkbox from "./Checkbox";
import Modal from "./Modal";

import "../styles/document.scss";


const validationSchema = Yup.object().shape({
    agree: Yup.boolean().oneOf([true], "You must agree with the payment schedule")
});

const Document: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <StepWraper>
            <div className="document__header">
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
                        console.log(val);
                        
                        /* fetch('http://localhost:8080/document/{applicationId}', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(val)
                        }) 
                        .then(res => {
                            console.log(res.status);

                        })
                        .catch(err => {
                            console.log(err);
                        }); */
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
            </div>

            {open && createPortal(<Modal handleClick={() => setOpen(false)} />, document.body)}
        </StepWraper>
    )
}

export default Document;