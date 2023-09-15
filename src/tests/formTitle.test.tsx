import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import FormTitle from "../components/FormTitle";


describe('testing formTitle', () => {
    it('there is a title', () => {
        render(<FormTitle title="title" number={1} />);
        expect(screen.getByText(/title/i)).toBeInTheDocument();
    })
    it('there is a value', () => {
        render(<FormTitle title="title" number={1} />);
        expect(screen.getByText(/1/i)).toBeInTheDocument();
    })
    it('title class is formTitle__text', () => {
        render(<FormTitle title="title" number={1} />);
        expect(screen.getByText(/title/i)).toHaveClass('formTitle__text');
    })
});
