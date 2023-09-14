import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Features from "../components/Features";


describe('testing features', () => {
    it('there is an image', () => {
        render(<Features />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
    it('there is a list of features', () => {
        render(<Features />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    })
    it('title class is features__title', () => {
        render(<Features />);
        expect(screen.getByText(/We Provide many/i)).toHaveClass('features__title');
    })
});
