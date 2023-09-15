import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Input from "../components/Input";
import { Formik, Form } from 'formik';

describe('testing input', () => {
    it('input with placeholder', () => {
        render(<Formik onSubmit={() => {}}
        initialValues={{my: ''}}
        >
            {(() => 
                <Form>
                    <Input label="label" required={true} type="text" 
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
                    <Input label="label" required={true} type="text" 
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
                    <Input label="label" required={true} type="text" 
                    placeholder="placeholder" name="name" errors={[]} 
                    values={[]} isSubmitting={false} />
                </Form>
            )}
        </Formik>);
        expect(screen.getByPlaceholderText("placeholder")).not.toHaveFocus()
    })
});
