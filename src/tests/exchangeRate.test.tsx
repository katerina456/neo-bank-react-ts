import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ExchangeRate from "../components/ExchangeRate";


describe('testing exchangeRate', () => {
    it('there is an image', () => {
        render(<ExchangeRate />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
    it('there is a button', () => {
        render(<ExchangeRate />);
        expect(screen.getByText(/Currency/i)).toHaveClass('exchangeRate__text');
    })
    it('there is a title', () => {
        render(<ExchangeRate />);
        expect(screen.getByText(/Update/i)).toBeInTheDocument();
    })
});
