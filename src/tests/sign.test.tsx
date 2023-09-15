import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Sign from "../components/Sign";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing sign', () => {
    it('there is a button', () => {
        render(<Provider store={store}>
            <Sign />
        </Provider>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there is a checkbox', () => {
        render(<Provider store={store}>
            <Sign />
        </Provider>);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    })
    it('there is an image', () => {
        render(<Provider store={store}>
            <Sign />
        </Provider>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
});
