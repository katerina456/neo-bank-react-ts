import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Prescoring from "../components/Prescoring";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing prescoring', () => {
    it('there is a title', () => {
        render(<Provider store={store}><Prescoring /></Provider>);
        expect(screen.getByText(/How to get a card/i)).toBeInTheDocument();
    })
    it('title has class prescoring__title', () => {
        render(<Provider store={store}><Prescoring /></Provider>);
        expect(screen.getByText(/How to get a card/i)).toHaveClass('prescoring__title');
    })
});
