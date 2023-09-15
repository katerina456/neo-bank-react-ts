import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Table from "../components/Table";


describe('testing table', () => {
    it('there is table', () => {
        render(<Table />);
        expect(screen.getByRole('table')).toBeInTheDocument();
    })
    it('there are 6 column titles', () => {
        render(<Table />);
        expect(screen.getAllByRole('columnheader')).toHaveLength(6);
    })
    it('there are 6 images', () => {
        render(<Table />);
        expect(screen.getAllByRole('img')).toHaveLength(6);
    }) 
});
