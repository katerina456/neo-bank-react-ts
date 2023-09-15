import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Select from "../components/Select";
import { Formik, Form } from 'formik';

describe('testing select', () => {
    it('select contains first option', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <Select arr={[1,2,3]} label="label" required={true} 
                    name="name" errors={[]} addEmptyOption={false}
                    isSubmitting={false} />
                </Form>
            )}
        </Formik>);
        expect(screen.getByText("1")).toBeInTheDocument();
    })
    it('option has class input__option', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <Select arr={[1,2,3]} label="label" required={true} 
                    name="name" errors={[]} addEmptyOption={false}
                    isSubmitting={false} />
                </Form>
            )}
        </Formik>);
        expect(screen.getByText("1")).toHaveClass('input__option');
    })
    it('select has label', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <Select arr={[1,2,3]} label="label" required={true} 
                    name="name" errors={[]} addEmptyOption={false}
                    isSubmitting={false} />
                </Form>
            )}
        </Formik>);
        expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
    })
});
