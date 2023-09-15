import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";


describe('testing header', () => {
    it('there are 5 links', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getAllByRole('link')).toHaveLength(5);
    })
    it('there is navigation', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    })
    it('there is checkbox', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    })
});
