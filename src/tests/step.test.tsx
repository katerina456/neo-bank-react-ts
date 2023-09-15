import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Step from "../components/Step";


describe('testing step', () => {
    it('there is text', () => {
        render(<Step number="1" classes="class" text="text" />);
        expect(screen.getByText('text')).toBeInTheDocument();
    })
    it('there is number', () => {
        render(<Step number="1" classes="class" text="text" />);
        expect(screen.getByText('1')).toBeInTheDocument();
    })
    it('text has class steps__text', () => {
        render(<Step number="1" classes="class" text="text" />);
        expect(screen.getByText('text')).toHaveClass('steps__text');
    })
});
