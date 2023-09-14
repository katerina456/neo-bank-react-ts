import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Checkbox from "../components/Checkbox";
import { Formik, Form } from 'formik';


describe('testing checkbox', () => {
    it('there is a label with class', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <Checkbox name="my" text="text" />
                </Form>
            )}
        </Formik>);
    expect(screen.getByText(/text/i)).toHaveClass('checkbox__label');
    })
    it('there is a checkbox', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <Checkbox name="my" text="text" />
                </Form>
            )}
        </Formik>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    })
    it('checkbox has class checkbox', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <Checkbox name="my" text="text" />
                </Form>
            )}
        </Formik>);
    expect(screen.getByRole('checkbox')).toHaveClass('checkbox')
    })
});

