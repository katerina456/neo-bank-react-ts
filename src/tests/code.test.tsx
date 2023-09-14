import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Code from "../components/Code";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing code', () => {
    it('first input focus', () => {
        render(<Provider store={store}><Code /></Provider>);
        expect(screen.getByTestId('input')).toHaveFocus();
    })
    it('there is a title', () => {
        render(<Provider store={store}><Code /></Provider>);
        expect(screen.getByText(/enter/i)).toBeInTheDocument();
    })
    it('there is a mistake text', () => {
        render(<Provider store={store}><Code /></Provider>);
        expect(screen.getByText(/Invalid/i)).toBeInTheDocument();
    })
});
