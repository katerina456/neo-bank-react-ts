import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';

import Input from "./Input";
import InputDate from "./InputDate";
import Button from "./Button";
import Select from "./Select";
import Loader from "./Loader";
import FormTitle from "./FormTitle";
import StepWraper from "./StepWraper";
import { changePrescoringStep } from "../store/slices/stepSlice";

import "../styles/prescoringForm.scss";


function calculateAge(birthday: any) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


const validationSchema = Yup.object().shape({
    lastName: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters")
        .trim().min(2, "Name can't be so short").required("Enter your last name"),
    firstName: Yup.string().matches(/^[A-ZА-ЯЁ]+$/i, "Only letters")
        .trim().min(2, "Name can't be so short").required("Enter your first name"),
    middleName: Yup.string().min(2, "Name can't be so short").matches(/^[A-ZА-ЯЁ]+$/i, "Only letters").trim(),
    email: Yup.string().email("Incorrect email address").trim()
        .matches(/[\w\.]{2,50}@[\w\.]{2,20}/, 'Incorrect email address')
        .required("Incorrect email address"),
    birthdate: Yup.date().required(`Incorrect date of birth`)
        .test("birthday", "Incorrect date of birth", function(value) {
            return calculateAge(new Date(value)) >= 18;
        }),
    passportSeries: Yup.string().matches(/^\d+$/, "Only numbers")
        .length(4, "The series must be 4 digits").trim().required("The series must be 4 digits"),
    passportNumber: Yup.string().matches(/^\d+$/, "Only numbers")
        .length(6, "The number must be 6 digits").trim().required("The number must be 6 digits"),
});


interface Props {
    handleClick: Function,
}

const PrescoringForm: React.FC<Props> = (props) => {
    const [isLoader, setIsLoader] = React.useState(false);
    const color1:string = "#5B35D5";
    const color2:string = "#E2E8F0";

    const dispatch = useDispatch();

    function setNextStep(data: any[]) {
        props.handleClick(data);
        dispatch(changePrescoringStep(2));
    }

    interface Values {
        amount: number,
        lastName: string,
        firstName: string,
        middleName?: string,
        term: number,
        email: string, 
        birthdate: string,
        passportSeries: string,
        passportNumber: string 
    }

    return (
        <StepWraper>
        <Formik
            initialValues={{ 
                amount: 15000,
                lastName: "",
                firstName: "",
                middleName: '',
                term: 6,
                email: "", 
                birthdate: "",
                passportSeries: "",
                passportNumber: "" 
            }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values: Values) => {                    
                if (values['middleName'] === '') {
                    delete values.middleName;
                }

                setIsLoader(true);
                fetch('http://localhost:8080/application', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                }) 
                .then(res => {
                    console.log(res.status);
                    return res.json();
                })
                .then(data => {
                    setIsLoader(false);
                    setNextStep(data);
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
                    {!isLoader && <div className="form__elements">
                    <div className="form__header">
                        <div className="form__header-marginRight">
                            <FormTitle title='Customize your card' number={1} />
                            
                            <div className="form__range">
                                <label htmlFor="amount" className="form__text">Select amount</label>
                                <p className="form__text">{values.amount.toLocaleString()}</p>
                                
                                <input type="range" name="amount" onChange={handleChange}
                                    min='15000' max='600000' step={10}
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
                    <h3 className="form__subtitle">Contact Information</h3>
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

                        <Select name='term' label='Select term' required={true} addEmptyOption={false}
                            arr={[6, 12, 18, 24]} optionText=" month" isSubmitting={isSubmitting}
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
        </StepWraper>
    )
}

export default PrescoringForm;