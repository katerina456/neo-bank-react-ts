import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import StepMessage from "../components/StepMessage";


describe('testing stepMessage', () => {
    it('there is text', () => {
        render(<StepMessage />);
        expect(screen.getAllByText(/preliminary decision/i)).toHaveLength(2);
    })
});
