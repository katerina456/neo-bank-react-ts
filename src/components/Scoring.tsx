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
import { changeScoringStep } from "../store/slices/stepSlice";

import "../styles/prescoringForm.scss";


const validationSchema = Yup.object().shape({
    gender: Yup.string().required("Select one of the options"),
    maritalStatus: Yup.string().required("Select one of the options"),
    dependentAmount: Yup.string().required("Select one of the options"),
    passportIssueDate: Yup.date().required(`Incorrect date of passport issue date`)
    .max(new Date(), "Incorrect date of passport issue date"),
    passportIssueBranch: Yup.string().matches(/^\d+$/, "Only numbers")
        .length(6, "The series must be 6 digits").trim().required("The series must be 6 digits"),
    employmentStatus: Yup.string().required("Select one of the options"), 
    employerINN: Yup.string().matches(/^\d+$/, "Only numbers")
        .length(12, "Department code must be 12 digits").trim().required("Department code must be 12 digits"),
    salary: Yup.string().matches(/^\d+$/, "Only numbers").trim().required("Enter your salary"),
    position: Yup.string().required("Select one of the options"),
    workExperienceTotal: Yup.string().matches(/^\d+$/, "Only numbers")
        .max(2, "Experience must be 1 or 2 digits").trim().required("Enter your work experience total"),
    workExperienceCurrent: Yup.string().matches(/^\d+$/, "Only numbers")
        .max(2, "Experience must be 1 or 2 digits").trim().required("Enter your work experience current"),
});


const Scoring: React.FC = () => {
    const [isLoader, setIsLoader] = React.useState(false);

    const dispatch = useDispatch();

    return (
        <StepWraper>
        <Formik
            initialValues={{ 
                gender: "",
                maritalStatus: "",
                dependentAmount: "",
                passportIssueDate: "",
                passportIssueBranch: "",
                
                employmentStatus: "", 
                employerINN: "",
                salary: "",
                position: "",
                workExperienceTotal: "",
                workExperienceCurrent: "",
            }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(val) => {
                console.log(val);
                let obj: {
                    gender: string,
                    maritalStatus: string,
                    dependentAmount: number,
                    passportIssueDate: string,
                    passportIssueBranch: string,
                    employment: {
                        employmentStatus: string, 
                        employerINN: string,
                        salary: number,
                        position: string,
                        workExperienceTotal: number,
                        workExperienceCurrent: number,
                    },
                    account: string
                    
                } = {
                    gender: val.gender,
                    maritalStatus: val.maritalStatus,
                    dependentAmount: +val.dependentAmount,
                    passportIssueDate: val.passportIssueDate,
                    passportIssueBranch: val.passportIssueBranch.slice(0,3) + '-' + val.passportIssueBranch.slice(3),
                    employment: {
                        employmentStatus: val.employmentStatus, 
                        employerINN: val.employerINN,
                        salary: +val.salary,
                        position: val.position,
                        workExperienceTotal: +val.workExperienceTotal,
                        workExperienceCurrent: +val.workExperienceCurrent,
                    },
                    account: "11223344556677889900",
                }

                console.log(obj);
                
                setIsLoader(true);
                fetch(`http://localhost:8080/application/registration/${localStorage.getItem('userId')}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                }) 
                .then(res => {
                    setIsLoader(false);
                    console.log(res.status);
                    localStorage.setItem('secondForm', 'done');
                    dispatch(changeScoringStep(2));
                })
                .catch(err => {
                    setIsLoader(false);
                    console.log(err);
                });
            }}
            validationSchema={validationSchema}
        >
            {({values, errors, isSubmitting}) => (
                <Form className="form" >
                    {!isLoader && <div className="form__elements">
                    <div className="form__header">
                        <FormTitle title='Continuation of the application' number={2} />
                    </div>

                    <div className="form__inputs">
                        <Select name='gender' label="What's your gender" required={true}
                                arr={["MALE", "FEMALE", "NON_BINARY"]} 
                                addEmptyOption={true} size="medium"
                                errors={errors} isSubmitting={isSubmitting}
                            />

                        <Select name='maritalStatus' label="Your marital status" required={true}
                                arr={["MARRIED", "DIVORCED", "SINGLE", "WIDOW_WIDOWER"]} 
                                addEmptyOption={true} size="medium"
                                errors={errors} isSubmitting={isSubmitting}
                            />

                        <Select name='dependentAmount' label="Your number of dependents" required={true}
                                arr={[1, 2, 3, 4]} 
                                addEmptyOption={true} size="medium"
                                errors={errors} isSubmitting={isSubmitting}
                            />

                        <InputDate type='date' name='passportIssueDate' label='Date of issue of the passport' 
                                values={values} errors={errors} isSubmitting={isSubmitting}
                                placeholder='Select Date and Time' required={true} size="large"
                            />

                        <Input type='text' name='passportIssueBranch' label='Division code' 
                                values={values} errors={errors} isSubmitting={isSubmitting}
                                placeholder='000000' required={true} size="large"
                            />
                    </div>

                    <h3 className="form__subtitle">Employment</h3>

                    <div className="form__inputs"> 
                        <Select name='employmentStatus' label="Your employment status" required={true}
                                arr={["UNEMPLOYED", "SELF_EMPLOYED", "EMPLOYED", "BUSINESS_OWNER"]} 
                                addEmptyOption={true} size="medium"
                                errors={errors} isSubmitting={isSubmitting}
                            />

                        <Input type='text' name='employerINN' label='Your employer INN' 
                                values={values} errors={errors} isSubmitting={isSubmitting}
                                placeholder='000000000000' required={true} size="medium"
                            />

                        <Input type='text' name='salary' label='Your salary' 
                                values={values} errors={errors} isSubmitting={isSubmitting}
                                placeholder='For example 100 000' required={true} size="medium"
                            />

                        <Select name='position' label="Your position" required={true}
                                arr={["WORKER", "MID_MANAGER", "TOP_MANAGER", "OWNER"]} 
                                addEmptyOption={true} size="medium"
                                errors={errors} isSubmitting={isSubmitting}
                            />

                        <Input type='text' name='workExperienceTotal' label='Your work experience total' 
                                values={values} errors={errors} isSubmitting={isSubmitting}
                                placeholder='For example 10' required={true} size="medium"
                            />

                        <Input type='text' name='workExperienceCurrent' label='Your work experience current' 
                                values={values} errors={errors} isSubmitting={isSubmitting}
                                placeholder='For example 2' required={true} size="medium"
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

export default Scoring;