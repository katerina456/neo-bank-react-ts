import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from "../components/Button";


describe('testing button', () => {
    it('button should be', () => {
        render(<Button text="any" />);
        expect(screen.getByRole('button')).toHaveTextContent('any');
    })
    it('button should contain class button', () => {
        render(<Button text="any" />);
        expect(screen.getByRole('button')).toHaveClass('button');
    })
    it('button contains text', () => {
        render(<Button text="any" />);
        expect(screen.getByRole('button')).toHaveTextContent('any');
    })
});
