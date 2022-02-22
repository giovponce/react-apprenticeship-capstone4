

import { render, screen } from '@testing-library/react';
import Header from '../Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('header', () => {
    test('header displays logo', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        const logo = screen.getByTestId('logo');
        expect(logo).toBeInTheDocument();
    })
})
