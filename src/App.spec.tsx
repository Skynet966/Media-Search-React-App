import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	it('should contains only main layout component', () => {
		render(<App />);
		const wrapper = screen.getByTestId('main__layout__container');
		expect(wrapper).not.toBeNull();
	});
});
