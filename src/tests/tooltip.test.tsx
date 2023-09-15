import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Tooltip from "../components/Tooltip";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing tooltip', () => {
    it('there is a button', () => {
        render(<BrowserRouter><Provider store={store}>
                <Tooltip />
        </Provider></BrowserRouter>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there is an image', () => {
        render(<BrowserRouter><Provider store={store}>
                <Tooltip />
        </Provider></BrowserRouter>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
    it('there is title with class tooltip__title', () => {
        render(<BrowserRouter><Provider store={store}>
                <Tooltip />
        </Provider></BrowserRouter>);
        expect(screen.getByText(/Platinum digital/i)).toHaveClass('tooltip__title');
    })
});

