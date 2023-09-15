import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import OfferItem from "../components/OfferItem";

import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();


describe('testing offerItem', () => {
    it('there is a button', () => {
        render(<Provider store={store}>
            <OfferItem payment={1} term={1} amountRequest={1} 
            amountTotal={1} rate={1} isInsurance={true} isSalary={true}
            handleClick={() => {}} />
        </Provider>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
    it('there are 3 images', () => {
        render(<Provider store={store}>
            <OfferItem payment={1} term={1} amountRequest={1} 
            amountTotal={1} rate={1} isInsurance={true} isSalary={true}
            handleClick={() => {}} />
        </Provider>);
        expect(screen.getAllByRole('img')).toHaveLength(3);
    })
    it('there is a text', () => {
        render(<Provider store={store}>
            <OfferItem payment={1} term={1} amountRequest={1} 
            amountTotal={1} rate={1} isInsurance={true} isSalary={true}
            handleClick={() => {}} />
        </Provider>);
        expect(screen.getByText('Salary client')).toBeInTheDocument();
    })
});
