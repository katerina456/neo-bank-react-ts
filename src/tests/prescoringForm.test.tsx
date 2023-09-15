import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PrescoringForm from "../components/PrescoringForm";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing prescoringForm', () => {
    it('there is a title', () => {
        render(<Provider store={store}>
            <PrescoringForm handleClick={() => {}} />
        </Provider>);
        expect(screen.getByText(/600 000/i)).toBeInTheDocument();
    })
    it('there is a button', () => {
        render(<Provider store={store}>
            <PrescoringForm handleClick={() => {}} />
        </Provider>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there is email label', () => {
        render(<Provider store={store}>
            <PrescoringForm handleClick={() => {}} />
        </Provider>);
        expect(screen.getByLabelText(/Your email/i)).toBeInTheDocument();
    })
    it('there is passport series label', () => {
        render(<Provider store={store}>
            <PrescoringForm handleClick={() => {}} />
        </Provider>);
        expect(screen.getByLabelText(/Your passport series/i)).toBeInTheDocument();
    })
});
