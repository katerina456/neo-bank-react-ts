import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ChooseDesign from "../components/ChooseDesign";


describe('testing chooseDesign', () => {
    it('there are 4 images', () => {
        render(<ChooseDesign />);
        expect(screen.getAllByRole('img')).toHaveLength(4);
    })
    it('there is a button', () => {
        render(<ChooseDesign />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there is a title', () => {
        render(<ChooseDesign />);
        expect(screen.getByText(/Choose the design/i)).toBeInTheDocument();
    })
});
