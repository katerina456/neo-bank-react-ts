import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import InputDate from "../components/InputDate";
import { Formik, Form } from 'formik';

describe('testing inputDate', () => {
    it('input with placeholder', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <InputDate label="label" required={true} type="date" 
                    placeholder="placeholder" name="name" errors={[]} 
                    values={[]} isSubmitting={false} />
                </Form>
            )}
        </Formik>);
        expect(screen.getByPlaceholderText("placeholder")).toBeInTheDocument();
    })
    it('input has class input__field', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <InputDate label="label" required={true} type="date" 
                    placeholder="placeholder" name="name" errors={[]} 
                    values={[]} isSubmitting={false} />
                </Form>
            )}
        </Formik>);
        expect(screen.getByPlaceholderText("placeholder")).toHaveClass('input__field');
    })
    it('input not focused', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <InputDate label="label" required={true} type="date" 
                    placeholder="placeholder" name="name" errors={[]} 
                    values={[]} isSubmitting={false} />
                </Form>
            )}
        </Formik>);
        expect(screen.getByPlaceholderText("placeholder")).not.toHaveFocus()
    })
});
