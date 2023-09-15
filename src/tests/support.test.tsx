import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Support from "../components/Support";


describe('testing support', () => {
    it('there is title with class support__subTitle', () => {
        render(<Support />);
        expect(screen.getByText('Support')).toHaveClass('support__subTitle');
    })
    it('there is button', () => {
        render(<Support />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there is text', () => {
        render(<Support />);
        expect(screen.getAllByText(/Subscribe/i)).toHaveLength(2);
    })
});
