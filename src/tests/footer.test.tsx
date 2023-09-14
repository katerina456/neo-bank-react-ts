import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "../components/Footer";


describe('testing footer', () => {
    it('footer should contain email', () => {
        render(<Footer />);
        expect(screen.getByText('info@neoflex.ru')).toBeInTheDocument();
    })
    it('footer menu should contain 10 elements', () => {
        render(<Footer />);
        expect(screen.getAllByTestId('nav')).toHaveLength(10);
    })
    it('footer should contain figure', () => {
        render(<Footer />);
        expect(screen.getByRole('figure')).toBeInTheDocument();
    })
});
