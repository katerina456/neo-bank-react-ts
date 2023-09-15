import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Scoring from "../components/Scoring";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing scoring', () => {
    it('there is a button', () => {
        render(<Provider store={store}>
            <Scoring />
        </Provider>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there is INN label', () => {
        render(<Provider store={store}>
            <Scoring />
        </Provider>);
        expect(screen.getByLabelText(/Your employer INN/i)).toBeInTheDocument();
    })
    it('there are 3 examples placeholders', () => {
        render(<Provider store={store}>
            <Scoring />
        </Provider>);
        expect(screen.getAllByPlaceholderText(/For example/i)).toHaveLength(3);
    })
});
