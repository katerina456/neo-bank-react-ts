import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Success from "../components/Success";
import { BrowserRouter } from "react-router-dom";


describe('testing success', () => {
    it('there is link', () => {
        render(<BrowserRouter><Success /></BrowserRouter>);
        expect(screen.getByRole('link')).toBeInTheDocument();
    })
    it('there is button', () => {
        render(<BrowserRouter><Success /></BrowserRouter>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there is img', () => {
        render(<BrowserRouter><Success /></BrowserRouter>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
    it('there is title', () => {
        render(<BrowserRouter><Success /></BrowserRouter>);
        expect(screen.getByText(/Congratulations/i)).toBeInTheDocument();
    })
    it('there is text', () => {
        render(<BrowserRouter><Success /></BrowserRouter>);
        expect(screen.getByText(/will arrive soon/i)).toBeInTheDocument();
    })
});
