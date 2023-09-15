import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Support from "../components/Support";


describe('testing stepMessage', () => {
    it('there is text', () => {
        render(<Support />);
        expect(screen.getAllByText(/Subscribe/i)).toHaveLength(2);
    })
});
