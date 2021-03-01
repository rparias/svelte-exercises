import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/svelte';
import App from './App.svelte';

test('shows proper heading when rendered', () => {
    const { getByText } = render(App, { name: 'World' });
    expect(getByText('Hello World!')).toBeInTheDocument();
})

test('Count age increments when button is clicked', async () => {
    const { getByText } = render(App);
    const text = getByText('My age is 1');
    const button = getByText('Increase age');

    await fireEvent.click(button);
    expect(text).toHaveTextContent('My age is 2');
})