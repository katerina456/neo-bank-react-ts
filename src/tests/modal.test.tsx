import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Modal from "../components/Modal";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing modal', () => {
    it('there are 2 buttons', () => {
        render(<BrowserRouter>
            <Provider store={store}><Modal handleClick={() => {}} /></Provider>
        </BrowserRouter>);
        expect(screen.getAllByRole('button')).toHaveLength(2);
    })
    it('there is text', () => {
        render(<BrowserRouter>
            <Provider store={store}><Modal handleClick={() => {}} /></Provider>
        </BrowserRouter>);
        expect(screen.getByText(/Deny application/i)).toBeInTheDocument();
    })
    it('there are 2 buttons', () => {
        render(<BrowserRouter>
            <Provider store={store}><Modal handleClick={() => {}} /></Provider>
        </BrowserRouter>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
});
