import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import TooltipItem from "../components/TooltipItem";


describe('testing tooltipItem', () => {
    it('there is title with class info_subtitle', () => {
        render(<TooltipItem title="title" text="text" hint="hint" />);
        expect(screen.getByText('title')).toHaveClass('info_subtitle');
    })
    it('there is text with class tooltip__text-dark', () => {
        render(<TooltipItem title="title" text="text" hint="hint" />);
        expect(screen.getByText('text')).toHaveClass('tooltip__text-dark');
    })
    it('there is title', () => {
        render(<TooltipItem title="title" text="text" hint="hint" />);
        expect(screen.getByText('title')).toBeInTheDocument();
    })
});
