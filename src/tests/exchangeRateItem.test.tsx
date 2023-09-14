import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ExchangeRateItem from "../components/ExchangeRateItem";


describe('testing exchangeRateItem', () => {
    it('there is a title', () => {
        render(<ExchangeRateItem title="title" value="55" />);
        expect(screen.getByText(/title/i)).toBeInTheDocument();
    })
    it('there is a value', () => {
        render(<ExchangeRateItem title="title" value="55" />);
        expect(screen.getByText(/55/i)).toBeInTheDocument();
    })
    it('value class is exchangeRate__text-bold', () => {
        render(<ExchangeRateItem title="title" value="55" />);
        expect(screen.getByText(/55/i)).toHaveClass('exchangeRate__text-bold');
    })
});
