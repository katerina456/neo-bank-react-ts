import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Element } from 'react-scroll';

import Input from "./Input";
import InputDate from "./InputDate";
import Button from "./Button";
import Select from "./Select";
import Loader from "./Loader";

import "../styles/prescoringForm.scss";


function calculateAge(birthday: any) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


const validationSchema = Yup.object().shape({
    lastName: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters")
        .trim().required("Enter your last name"),
    firstName: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters")
        .trim().required("Enter your first name"),
    middleName: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters").trim(),
    email: Yup.string().email("Incorrect email address")
        .trim().required("Incorrect email address"),
    birthdate: Yup.date().required(`Incorrect date of birth`)
        .test("birthday", "Incorrect date of birth", function(value) {
            return calculateAge(new Date(value)) >= 18;
        }),
    passportSeries: Yup.string().matches(/^\d+$/, "Only numbers")
        .length(4, "The series must be 4 digits").trim().required("The series must be 4 digits"),
    passportNumber: Yup.string().matches(/^\d+$/, "Only numbers")
        .length(6, "The number must be 6 digits").trim().required("The number must be 6 digits"),
});


const PrescoringForm: React.FC = () => {
    const [isLoader, setIsLoader] = React.useState(false);
    const color1:string = "#5B35D5";
    const color2:string = "#E2E8F0";

    return (
        <Formik
            initialValues={{ 
                amount: 15000,
                lastName: "",
                firstName: "",
                middleName: "",
                term: 6,
                email: "", 
                birthdate: "",
                passportSeries: "",
                passportNumber: "" 
            }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(val) => {
                console.log(val);
                setIsLoader(true);
                fetch('http://localhost:8080/application', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(val)
                }) 
                .then(res => {
                    setIsLoader(false);
                    console.log(res.status);
                })
                .catch(err => {
                    setIsLoader(false);
                    console.log(err);
                });
            }}
            validationSchema={validationSchema}
        >
            {({values, errors, handleChange, isSubmitting}) => (
                <Form className="form" >
                    <Element name="applyForm" className="element" />
                    {!isLoader && <div className="form__elements">
                    <div className="form__header">
                        <div className="form__header-marginRight">
                            <div className="form__info"> 
                                <h2 className="form__title">Customize your card</h2>
                                <p className="form__text">Step 1 of 5</p>
                            </div>
                            <div className="form__range">
                                <label htmlFor="amount" className="form__text">Select amount</label>
                                <p className="form__text">{values.amount.toLocaleString()}</p>
                                
                                <input type="range" name="amount" onChange={handleChange}
                                    min='15000' max='600000' 
                                    style={{background: `linear-gradient(to right,  ${color1} 0%, ${color1} ${values.amount/600000*100}%, ${color2} ${values.amount/600000*100}%)`}}
                                />
                                <div >
                                    <p className="form__text">15 000</p>
                                    <p className="form__text">600 000</p>
                                </div>
                            </div>
                        </div>

                        <div className="form__result">
                            <p className="form__text"><span>You have chosen the amount</span></p>
                            <p className="form__text">{values.amount.toLocaleString()} ₽</p>
                            <hr />
                        </div>
                    </div>
                    <h3 className="form_subtitle">Contact Information</h3>
                    <div className="form__inputs">  
                        <Input type='text' name='lastName' label='Your last name' values={values}
                            placeholder='For Example Doe' required={true}  errors={errors} isSubmitting={isSubmitting}
                        />
                        <Input type='text' name='firstName' label='Your first name' values={values}
                            placeholder='For Example Jhon' required={true} errors={errors} isSubmitting={isSubmitting}
                        />
                        <Input type='text' name='middleName' label='Your patronymic' values={values}
                            placeholder='For Example Victorovich' required={false} errors={errors} isSubmitting={isSubmitting}
                        />

                        <Select name='term' label='Select term' required={true}
                            arr={[6, 12, 18, 24]} 
                        />

                        <Input type='email' name='email' label='Your email'  values={values}
                            placeholder='test@gmail.com' required={true} errors={errors} isSubmitting={isSubmitting}
                        />
                        <InputDate type='date' name='birthdate' label='Your date of birth' values={values}
                            placeholder='Select Date and Time' required={true} errors={errors} isSubmitting={isSubmitting}
                        /> 

                        <Input type='text' name='passportSeries' label='Your passport series' values={values}
                            placeholder='0000' required={true} errors={errors} isSubmitting={isSubmitting}
                        />
                        <Input type='text' name='passportNumber' label='Your passport number' values={values}
                            placeholder='000000' required={true} errors={errors} isSubmitting={isSubmitting}
                        /> 
                    </div>    

                    <div className="form__buttons">
                        <Button type="submit" text='Continue' />
                    </div> 
                    </div>}
                    {isLoader && <Loader />}
                 </Form>
            )}
        </Formik>        
    )
}

export default PrescoringForm;