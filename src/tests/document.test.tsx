import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Document from "../components/Document";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing document', () => {
    it('there is a checkbox', () => {
        render(<Provider store={store}><Document /></Provider>);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    })
    it('there are 2 buttons', () => {
        render(<Provider store={store}><Document /></Provider>);
        expect(screen.getAllByRole('button')).toHaveLength(2);
    })
    it('there is a table', () => {
        render(<Provider store={store}><Document /></Provider>);
        expect(screen.getByRole('table')).toBeInTheDocument();
    })
});
