import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import FormMessage from "../components/FormMessage";


describe('testing formMessage', () => {
    it('there is a title', () => {
        render(<FormMessage title="title" text="text" />);
        expect(screen.getByText(/title/i)).toBeInTheDocument();
    })
    it('there is a text', () => {
        render(<FormMessage title="title" text="text" />);
        expect(screen.getByText(/text/i)).toBeInTheDocument();
    })
    it('title class is scoringMessage__title', () => {
        render(<FormMessage title="title" text="text" />);
        expect(screen.getByText(/title/i)).toHaveClass('scoringMessage__title');
    })
});
