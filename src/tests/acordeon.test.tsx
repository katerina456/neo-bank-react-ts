import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Acordeon from "../components/Acordeon";


describe('testing acordeon', () => {
    it('acordeon have title', () => {
        render(<Acordeon title="title" array={[{summary:'summary', text:"text"}]} />);
        expect(screen.getByText(/title/i)).toBeInTheDocument();
    })
    it('acordeon have summary with class', () => {
        render(<Acordeon title="title" array={[{summary:'summary', text:"text"}]} />);
        expect(screen.getByText(/summary/i)).toHaveClass('acordeon__summary');
    })
    it('acordeon have text with class', () => {
        render(<Acordeon title="title" array={[{summary:'summary', text:"text"}]} />);
        expect(screen.getByText(/text/i)).toHaveClass('acordeon__text');
    })
});
