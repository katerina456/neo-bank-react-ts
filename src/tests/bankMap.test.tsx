import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import BankMap from "../components/BankMap";


describe('testing bankMap', () => {
    it('there is an image in component', () => {
        render(<BankMap />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
    it('there is title with class', () => {
        render(<BankMap />);
        expect(screen.getByText(/can use/i)).toHaveClass('map__title');
    })
    it('there is text', () => {
        render(<BankMap />);
        expect(screen.getByText(/transfer money/i)).toBeInTheDocument();
    })
});
