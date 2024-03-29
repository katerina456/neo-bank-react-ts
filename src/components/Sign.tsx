import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';

import FormTitle from "./FormTitle";
import Button from "./Button";
import Loader from "./Loader";
import Checkbox from "./Checkbox";
import { changeSignStep } from "../store/slices/stepSlice";

import "../styles/sign.scss";
import documentImg from'../icons/document.svg';

const validationSchema = Yup.object().shape({
    agree: Yup.boolean().oneOf([true], "You must agree")
});

const Sign: React.FC = () => {
    const [isLoader, setIsLoader] = React.useState(false);

    const dispatch = useDispatch();

    return (
        <div className="sign">
            {!isLoader && <><div className="sign__header">
                <FormTitle title='Signing of documents' number={4} />
            </div>

            <p className="sign__text">Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
                a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
                Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
                history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
                processing of personal data.
            </p>

            <a href={require("../files/credit_card_offer.pdf")} target="_blank" className="sign__document">

                <img src={documentImg} alt="" />
                <p>Information on your card</p>
            </a>

            <Formik
                initialValues={{ agree: false }}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(val) => {           
                    setIsLoader(true);          
                    fetch(`http://localhost:8080/document/${localStorage.getItem('userId')}/sign`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(val)
                    }) 
                    .then(res => {
                        setIsLoader(false);
                        console.log(res.status);
                        localStorage.setItem('sign', 'done');
                        dispatch(changeSignStep(2));
                    })
                    .catch(err => {
                        setIsLoader(false);
                        console.log(err);
                    });
                }}
                validationSchema={validationSchema}
            >
                {() => (
                    <Form className="sign__send" >
                        <Checkbox name='agree' text='I agree' />

                        <Button text="Send" type="submit" />
                    </Form>
                )}
            </Formik>    </>}

            {isLoader && <Loader />}    
        </div>
    )
}

export default Sign;